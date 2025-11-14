import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './providers/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        // Semantic color tokens (using CSS variables)
        primary: {
          DEFAULT: 'rgb(var(--primary) / <alpha-value>)',
          foreground: 'rgb(var(--primary-foreground) / <alpha-value>)',
          hover: 'rgb(var(--primary-hover) / <alpha-value>)',
        },
        accent: {
          DEFAULT: 'rgb(var(--accent) / <alpha-value>)',
          foreground: 'rgb(var(--accent-foreground) / <alpha-value>)',
          hover: 'rgb(var(--accent-hover) / <alpha-value>)',
        },
        bg: 'rgb(var(--bg) / <alpha-value>)',
        surface: 'rgb(var(--surface) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
        foreground: {
          DEFAULT: 'rgb(var(--foreground) / <alpha-value>)',
          muted: 'rgb(var(--foreground-muted) / <alpha-value>)',
          subtle: 'rgb(var(--foreground-subtle) / <alpha-value>)',
        },
        border: {
          DEFAULT: 'rgb(var(--border) / <alpha-value>)',
          muted: 'rgb(var(--border-muted) / <alpha-value>)',
        },
        ring: 'rgb(var(--ring) / <alpha-value>)',
        card: {
          DEFAULT: 'rgb(var(--card) / <alpha-value>)',
          foreground: 'rgb(var(--card-foreground) / <alpha-value>)',
          border: 'rgb(var(--card-border) / <alpha-value>)',
        },
        // Legacy brand colors (for backward compatibility)
        brand: {
          DEFAULT: '#4F46E5',
          50: '#EEF2FF',
          100: '#E0E7FF',
          200: '#C7D2FE',
          300: '#A5B4FC',
          400: '#818CF8',
          500: '#6366F1',
          600: '#4F46E5',
          700: '#4338CA',
          800: '#3730A3',
          900: '#312E81'
        }
      },
      spacing: {
        xs: 'var(--space-xs)',
        sm: 'var(--space-sm)',
        md: 'var(--space-md)',
        lg: 'var(--space-lg)',
        xl: 'var(--space-xl)',
        '2xl': 'var(--space-2xl)',
        '3xl': 'var(--space-3xl)',
        '4xl': 'var(--space-4xl)',
        '5xl': 'var(--space-5xl)',
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        DEFAULT: 'var(--shadow)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        xl: 'var(--shadow-xl)',
        glow: '0 0 30px rgba(125, 86, 255, 0.35)',
        soft: 'var(--shadow)',
        'soft-lg': 'var(--shadow-lg)'
      },
      backgroundImage: {
        'radial-faint': 'radial-gradient(circle at 20% 20%, rgba(79,70,229,0.08) 0%, transparent 60%)'
      },
      backgroundSize: {
        '200%': '200% 200%'
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
        blob: '40% 60% 60% 40% / 40% 40% 60% 60%'
      },
      transitionTimingFunction: {
        glide: 'cubic-bezier(0.16, 1, 0.3, 1)'
      },
      animation: {
        'gradient-slow': 'gradient 12s ease infinite'
      },
      keyframes: {
        gradient: {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        }
      },
      // note: Tailwind plugin option typed param support
      typography: ({ theme }: { theme: (path: string) => any }) => ({
        DEFAULT: {
          css: {
            color: theme('colors.neutral.800'),
            a: { color: theme('colors.brand.600'), '&:hover': { color: theme('colors.brand.700') } }
          }
        },
        invert: {
          css: {
            color: theme('colors.neutral.200'),
            a: { color: theme('colors.brand.400'), '&:hover': { color: theme('colors.brand.300') } }
          }
        }
      })
    }
  },
  plugins: [require('@tailwindcss/typography')]
}

export default config
