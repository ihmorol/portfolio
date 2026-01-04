/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#0A0A0F',
          secondary: '#1A1A24',
          tertiary: '#252530',
        },
        accent: {
          coral: '#FF6B7A',
          blue: '#4A9FFF',
          teal: '#5DDEF4',
          green: '#4ADE80',
          purple: '#E94B8C',
          yellow: '#F5C842',
        },
        surface: {
            DEFAULT: '#1a1b1e',
            light: '#2c2d31', // Approximated from design context
        },
        "background-dark": "#050505",
        "card-dark": "#18181b",
        "card-lighter": "#242429",
        "accent-peach": "#fdba74",
        "accent-red": "#ef4444",
        
        text: {
          primary: '#FFFFFF',
          secondary: '#B4B4C0',
          muted: '#6B6B78',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
        display: ['Spline Sans', 'sans-serif'],
        jakarta: ['var(--font-jakarta)', 'sans-serif'],
      },
      borderRadius: {
        'card': '28px',
      },
      boxShadow: {
        'card': '0px 8px 32px rgba(0, 0, 0, 0.4)',
        'card-hover': '0px 16px 48px rgba(0, 0, 0, 0.6)',
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
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
