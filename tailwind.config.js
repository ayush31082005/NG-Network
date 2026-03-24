/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef8ff',
          100: '#d9efff',
          200: '#bce3ff',
          300: '#8ed2ff',
          400: '#59b7ff',
          500: '#2d99ff',
          600: '#1678f5',
          700: '#145fe1',
          800: '#184db6',
          900: '#1a438f'
        }
      },
      boxShadow: {
        soft: '0 20px 60px rgba(15, 23, 42, 0.18)',
        glow: '0 0 0 1px rgba(255,255,255,0.08), 0 18px 60px rgba(14, 165, 233, 0.16)'
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        marqueeReverse: 'marqueeReverse 30s linear infinite',
        float: 'float 7s ease-in-out infinite'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        marqueeReverse: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' }
        }
      },
      backgroundImage: {
        grid: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.12) 1px, transparent 0)'
      }
    },
  },
  plugins: [],
};
