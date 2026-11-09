#!/usr/bin/env python3
"""Regenerate public/fonts/material-symbols-subset.woff2.

The site self-hosts a subset of the Material Symbols Outlined variable font
containing icons referenced in `src/` (TSX literals and recursive JSON values).
Candidates are filtered against the source font's ligatures. This keeps the icon
font at a few dozen kilobytes instead of the ~1.1 MB full variable font.

When new icons are added to the codebase (e.g. via Portfolio Admin), re-run:

    python -I scripts/generate_material_symbols_subset.py

Requires: fontTools + brotli  (`pip install fonttools brotli`)
"""

from __future__ import annotations

import json
import re
import sys
import urllib.request
from pathlib import Path

from fontTools import subset
from fontTools.ttLib import TTFont

REPO = Path(__file__).resolve().parent.parent
SRC = REPO / "src"
FULL_FONT = REPO / ".tmp-font" / "full.woff2"
OUT_FONT = REPO / "public" / "fonts" / "material-symbols-subset.woff2"

# Full variable font (wght + FILL axes) as served for the css2 API request the
# site previously used in src/app/layout.tsx.
FULL_FONT_CSS = (
    "https://fonts.googleapis.com/css2"
    "?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=block"
)
UA = (
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
    "(KHTML, like Gecko) Chrome/120.0 Safari/537.36"
)


ICON_NAME = re.compile(r"[a-z0-9_]+")


def ensure_full_font() -> None:
    """Download the full variable font once into .tmp-font/ if not cached."""
    if FULL_FONT.exists():
        return
    print("full font not cached, downloading...")
    FULL_FONT.parent.mkdir(parents=True, exist_ok=True)
    req = urllib.request.Request(FULL_FONT_CSS, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=60) as response:
        css = response.read().decode("utf-8")
    match = re.search(r"url\((https://fonts\.gstatic\.com[^)]+)\)", css)
    if not match:
        print("error: could not find font URL in css2 response", file=sys.stderr)
        sys.exit(1)
    req = urllib.request.Request(match.group(1), headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=120) as response:
        FULL_FONT.write_bytes(response.read())
    print(f"cached {FULL_FONT} ({FULL_FONT.stat().st_size / 1024:.0f} KB)")


def collect_icon_names() -> set[str]:
    """Collect candidates, including icons[].name and materialIcon data shapes."""
    names: set[str] = set()

    tsx_re = re.compile(r"material-symbols-outlined[^>]*>\s*([a-z0-9_]+)\s*<")
    quoted_re = re.compile(r"[\"']([a-z0-9_]+)[\"']")
    for path in SRC.rglob("*.tsx"):
        text = path.read_text(encoding="utf-8")
        names.update(match.group(1) for match in tsx_re.finditer(text))
        names.update(match.group(1) for match in quoted_re.finditer(text))

    def collect_strings(value: object) -> None:
        if isinstance(value, str):
            if ICON_NAME.fullmatch(value):
                names.add(value)
        elif isinstance(value, dict):
            for child in value.values():
                collect_strings(child)
        elif isinstance(value, list):
            for child in value:
                collect_strings(child)

    for path in SRC.rglob("*.json"):
        collect_strings(json.loads(path.read_text(encoding="utf-8")))

    return names


def collect_ligatures(font: TTFont) -> dict[str, str]:
    """Map ligature text -> target glyph for every GSUB ligature lookup."""
    cmap: dict[int, str] = font.getBestCmap()
    glyph_to_char = {
        glyph: chr(code) for code, glyph in cmap.items() if len(chr(code)) == 1
    }

    ligatures: dict[str, str] = {}
    gsub = font.get("GSUB")
    if gsub is None:
        return ligatures

    for lookup in gsub.table.LookupList.Lookup:
        for subtable in lookup.SubTable:
            lookup_type = lookup.LookupType
            if lookup_type == 7:  # Extension wraps the real lookup
                lookup_type = subtable.ExtensionLookupType
                subtable = subtable.ExtSubTable
            if lookup_type != 4:  # 4 = ligature substitution
                continue
            for first_glyph, lig_list in subtable.ligatures.items():
                first_char = glyph_to_char.get(first_glyph, "")
                if not first_char:
                    continue
                for lig in lig_list:
                    parts = [first_char]
                    ok = True
                    for comp in lig.Component:
                        ch = glyph_to_char.get(comp, "")
                        if not ch:
                            ok = False
                            break
                        parts.append(ch)
                    if ok:
                        ligatures["".join(parts)] = lig.LigGlyph
    return ligatures


def main() -> int:
    ensure_full_font()
    names = sorted(collect_icon_names())
    if not names:
        print("error: no icon names found in src/", file=sys.stderr)
        return 1
    print(f"found {len(names)} candidate strings")

    options = subset.Options()
    options.flavor = "woff2"
    options.layout_features = ["*"]  # keep liga/rlig/ccmp so ligature icons work
    options.hinting = False
    options.name_IDs = [0, 1, 2, 3, 4, 6]
    options.notdef_outline = True

    font = subset.load_font(str(FULL_FONT), options)

    # Filter candidate strings against the full font so non-icon content and
    # Lucide names do not become glyph requests.
    full_ligatures = collect_ligatures(font)
    subsettable = [name for name in names if name in full_ligatures]
    keep_glyphs = {full_ligatures[name] for name in subsettable}

    # The subsetter's GSUB closure keeps *every* ligature whose letters are
    # all present, so with plain text subsetting nearly all 3,800 icons
    # survive. Prune the ligature lookups down to the icons we need first,
    # then subset by the plain letters — closure then pulls in exactly the
    # wanted icon glyphs.
    gsub = font["GSUB"].table
    for lookup in gsub.LookupList.Lookup:
        for st in lookup.SubTable:
            real = getattr(st, "ExtSubTable", st)
            if not hasattr(real, "ligatures"):
                continue
            for first in list(real.ligatures.keys()):
                kept = [lig for lig in real.ligatures[first] if lig.LigGlyph in keep_glyphs]
                if kept:
                    real.ligatures[first] = kept
                else:
                    del real.ligatures[first]

    # Letters (and underscore/digits) used to type the icon names.
    letters = "".join(sorted({ch for name in subsettable for ch in name}))
    subsetter = subset.Subsetter(options)
    subsetter.populate(text=letters)
    subsetter.subset(font)

    OUT_FONT.parent.mkdir(parents=True, exist_ok=True)
    subset.save_font(font, str(OUT_FONT), options)

    # Verify every valid icon name still resolves to a ligature glyph.
    verify_font = TTFont(str(OUT_FONT))
    ligatures = collect_ligatures(verify_font)
    missing = [name for name in subsettable if name not in ligatures]
    if missing:
        print(
            "error: icons missing from subset: " + ", ".join(missing),
            file=sys.stderr,
        )
        return 1

    size_kb = OUT_FONT.stat().st_size / 1024
    print(
        f"ok: wrote {OUT_FONT.relative_to(REPO)} "
        f"({size_kb:.1f} KB, {len(subsettable)} ligatures verified)"
    )
    return 0


if __name__ == "__main__":
    sys.exit(main())
