import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Светлая тема
        primary: {
          DEFAULT: '#6366F1',
          light: '#818CF8'
        },
        secondary: {
          DEFAULT: '#EC4899',
          light: '#F472B6'
        },
        accent: {
          yellow: '#FBBF24',
          'yellow-light': '#FCD34D',
          green: '#10B981',
          'green-light': '#34D399',
          orange: '#F97316',
          'orange-light': '#FB923C'
        },
        // Нейтральные цвета для светлой темы
        light: {
          bg: '#FFFFFF',
          'bg-alt': '#F9FAFB',
          'bg-card': '#F3F4F6',
          text: '#1F2937',
          'text-secondary': '#6B7280'
        },
        // Нейтральные цвета для тёмной темы
        dark: {
          bg: '#0F172A',
          'bg-alt': '#1E293B',
          'bg-card': '#334155',
          text: '#F1F5F9',
          'text-secondary': '#CBD5E1',
          border: '#475569'
        }
      },
      fontFamily: {
        heading: ['Nunito', 'sans-serif'],
        body: ['Inter', 'sans-serif']
      },
      fontSize: {
        // Desktop sizes
        'hero': ['56px', { lineHeight: '1.2' }],
        'h1': ['42px', { lineHeight: '1.2' }],
        'h2': ['36px', { lineHeight: '1.3' }],
        'h3': ['28px', { lineHeight: '1.3' }],
        // Mobile sizes (через responsive breakpoints)
      },
      borderRadius: {
        'card': '24px',
        'button': '16px'
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
      }
    }
  },
  plugins: []
}
