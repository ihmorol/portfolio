'use client';

interface BlogFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function BlogFilter({ categories, activeCategory, onCategoryChange }: BlogFilterProps) {
  return (
    <div className="w-full flex flex-wrap justify-center gap-2.5 pb-2">
      <button
        onClick={() => onCategoryChange('All Posts')}
        className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm font-medium transition-all border ${
          activeCategory === 'All Posts'
          ? 'bg-foreground text-background border-foreground'
          : 'bg-background border-border text-text-secondary hover:text-text-primary hover:border-border-strong'
        }`}
      >
        All Posts
      </button>

      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onCategoryChange(cat)}
          className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm font-medium transition-all border ${
            activeCategory === cat
            ? 'bg-foreground text-background border-foreground'
            : 'bg-background border-border text-text-secondary hover:text-text-primary hover:border-border-strong'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
