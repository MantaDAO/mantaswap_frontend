import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'system-ui'],
      brand: ['Inter', 'system-ui'],
    },
    extend: {
      borderRadius: {
        DEFAULT: '12px',
        md: '18px',
        lg: '24px',
      },
      fontSize: {
        h1: 'var(--text-h1)',
        h2: 'var(--text-h2)',
        h3: 'var(--text-h3)',
        h4: 'var(--text-h4)',
        lg: 'var(--text-body-large)',
        base: 'var(--text-body)',
        md: 'var(--text-md)',
        sm: 'var(--text-sm)',
        xs: 'var(--text-xs)',
      },
      boxShadow: {
        DEFAULT:
          '0px 8px 40px 0px rgba(0, 0, 0, 0.25), 0px 0px 16px 0px rgba(45, 45, 81, 0.50) inset, 0px 0px 10px 0px rgba(52, 52, 69, 0.30) inset',
        dark: '0 11px 33px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.09)',
        c1: '0px 8px 40px 0px rgba(0, 0, 0, 0.25), 0px 0px 16px 0px rgba(45, 45, 81, 0.50) inset, 0px 0px 10px 0px rgba(52, 52, 69, 0.30) inset',
        c2: 'box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.12), 0px 0px 16px 0px rgba(45, 45, 81, 0.20) inset',
        c3: 'box-shadow: 0px 0px 16px 0px rgba(45, 45, 81, 0.50) inset',
      },
      colors: {
        primary: {
          DEFAULT: 'var(--color-primary)',
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)',
        },
        tertiary: {
          DEFAULT: 'var(--color-tertiary)',
        },
        surface: {
          lightest: 'var(--color-surface-lightest)',
          lighter: 'var(--color-surface-lighter)',
          light: 'var(--color-surface-light)',
          bg: 'var(--color-surface-bg)',
          dark: 'var(--color-surface-dark)',
          darkest: 'var(--color-surface-darkest)',
          c1: 'rgba(23,23,40,0.3)',
          c2: 'var(--color-surface-lighter)',
          c3: '#151526',
          nav: 'rgba(12,12,24,0.6)',
        },
        positive: '#00D395',
        negative: '#E55656',
        caution: '#EE8A46',
        gold: '#F6B611',
        header: {
          DEFAULT: 'var(--color-header)',
        },
        body: {
          DEFAULT: 'var(--color-body)',
          '2': 'var(--color-body-2)',
        },
      },
      borderColor: (theme) => ({
        DEFAULT: 'var(--color-border)',
        dark: 'var(--color-border)',
      }),
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    container: {
      center: true,
    },
  },
  plugins: [require('@headlessui/tailwindcss')],
};
export default config;
