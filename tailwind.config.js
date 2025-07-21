// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      // Preserve your original font stack
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },

      // ==== NEW: enlarged heading scales ====
      fontSize: {
        '4xl': ['2.25rem', { lineHeight: '1.3' }],
        '5xl': ['3rem',   { lineHeight: '1.2' }],
        '6xl': ['3.5rem', { lineHeight: '1.2' }],
        '7xl': ['4.5rem', { lineHeight: '1.1' }],
      },

      // ==== NEW: extra section padding ====
      spacing: {
        '28': '7rem',
      },

      // ==== NEW: longer transition presets ====
      transitionDuration: {
        '400': '400ms',
        '500': '500ms',
        '700': '700ms',
      },

      // ==== original color palette + new hover step ====
      colors: {
        primary: {
          50:  '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          550: '#2f6cd1',  // ← new mid-hover shade
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        secondary: {
          50:  '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
        accent: {
          50:  '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        success: { 50: '#f0fdf4', 500: '#22c55e', 700: '#15803d' },
        warning: { 50: '#fffbeb', 500: '#eab308', 700: '#a16207' },
        error:   { 50: '#fef2f2', 500: '#ef4444', 700: '#b91c1c' },
      },

      // ==== original keyframes & tweaked durations ====
      keyframes: {
        fadeIn:    { '0%': { opacity: '0' },    '100%': { opacity: '1' } },
        slideUp:   { '0%': { transform: 'translateY(30px)', opacity: '0' }, '100%': { transform: 'translateY(0)', opacity: '1' } },
        slideDown: { '0%': { transform: 'translateY(-20px)', opacity: '0' }, '100%': { transform: 'translateY(0)', opacity: '1' } },
        slideInRight: { '0%': { transform: 'translateX(100px)', opacity: '0' }, '100%': { transform: 'translateX(0)', opacity: '1' } },
        slideInLeft:  { '0%': { transform: 'translateX(-100px)', opacity: '0' }, '100%': { transform: 'translateX(0)', opacity: '1' } },
        pulse: { '0%, 100%': { opacity: '1' }, '50%': { opacity: '0.5' } },
      },
      animation: {
        fadeIn:       'fadeIn 0.7s ease-out',
        slideUp:      'slideUp 0.7s ease-out',
        slideDown:    'slideDown 0.7s ease-out',
        slideInRight: 'slideInRight 0.7s ease-out',
        slideInLeft:  'slideInLeft 0.7s ease-out',
        pulse:        'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [
    // ← optional: consistent focus outline utility
    function ({ addUtilities }) {
      addUtilities({
        '.focus-ring': {
          outline: '2px solid var(--tw-ring-color)',
          outlineOffset: '2px',
        },
      });
    },
  ],
}
