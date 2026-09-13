/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/data/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: 'hsl(var(--background) / <alpha-value>)',
          secondary: 'hsl(var(--bg-elev-1) / <alpha-value>)',
          tertiary: 'hsl(var(--bg-elev-2) / <alpha-value>)',
        },
        surface: {
          DEFAULT: 'hsl(var(--bg-elev-1) / <alpha-value>)',
          light: 'hsl(var(--bg-elev-2) / <alpha-value>)',
        },
        accent: {
          coral: 'hsl(var(--accent-warm))',
          blue: 'hsl(var(--accent-primary))',
          teal: 'hsl(var(--accent-cyan))',
          green: '#4ade80',
          purple: '#e879f9',
          yellow: 'hsl(var(--accent-warm))',
        },
        text: {
          primary: 'hsl(var(--text-primary) / <alpha-value>)',
          secondary: 'hsl(var(--text-secondary) / <alpha-value>)',
          muted: 'hsl(var(--text-muted) / <alpha-value>)',
        },
        border: {
          DEFAULT: 'hsl(var(--border-soft) / <alpha-value>)',
          strong: 'hsl(var(--border-strong) / <alpha-value>)',
        },
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        foreground: 'hsl(var(--foreground) / <alpha-value>)',
        'background-dark': 'hsl(var(--bg-base))',
        'card-dark': 'hsl(var(--bg-elev-1))',
        'card-lighter': 'hsl(var(--bg-elev-2))',
        'accent-peach': 'hsl(var(--accent-warm))',
        'accent-red': '#ff6b6b',
      },
      fontFamily: {
        sans: ['var(--font-jakarta)', 'sans-serif'],
        body: ['var(--font-jakarta)', 'sans-serif'],
        display: ['var(--font-spline)', 'sans-serif'],
        jakarta: ['var(--font-jakarta)', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      borderRadius: {
        card: 'var(--radius-xl)',
      },
      boxShadow: {
        card: 'var(--shadow-soft)',
        'card-hover': 'var(--shadow-elevated)',
        accent: 'var(--glow-accent)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      maxWidth: {
        '8xl': '1400px',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
