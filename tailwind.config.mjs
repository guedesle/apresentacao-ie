/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bahia: {
          cyan: {
            DEFAULT: '#008ABE',
            50: '#F0F9FF',
            100: '#E0F2FE',
            500: '#008ABE',
            600: '#007AA8',
            700: '#00658C',
          },
          blue: {
            DEFAULT: '#1A63AF',
            50: '#EFF6FF',
            100: '#DBEAFE',
            500: '#1A63AF',
            600: '#145191',
            700: '#0F3E70',
          },
          indigo: {
            DEFAULT: '#4D4C9D',
            50: '#F5F3FF',
            100: '#EDE9FE',
            500: '#4D4C9D',
            600: '#3F3E83',
            700: '#323168',
          },
          magenta: {
            DEFAULT: '#FF0347',
            50: '#FFF1F4',
            100: '#FFE4E9',
            500: '#FF0347',
            600: '#E0003D',
            700: '#B80031',
          },
          red: {
            DEFAULT: '#FF0337',
            50: '#FEF2F2',
            100: '#FEE2E2',
            500: '#FF0337',
            600: '#DE002D',
            700: '#B30023',
          },
          teal: {
            DEFAULT: '#5992A6',
            50: '#F0F7F9',
            100: '#DDEEF2',
            500: '#5992A6',
            600: '#487A8C',
            700: '#396170',
          },
          slate: {
            DEFAULT: '#6B9FB3',
            50: '#F2F8FA',
            100: '#E2EFF4',
            500: '#6B9FB3',
            600: '#558394',
            700: '#416573',
          },
          dark: '#0D1527',
        }
      },
      fontFamily: {
        sans: ['Geist', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"Geist Mono"', 'monospace'],
      },
      backgroundImage: {
        'bahia-gradient': 'linear-gradient(135deg, #008ABE 0%, #4D4C9D 50%, #FF0337 100%)',
        'bahia-soft-gradient': 'linear-gradient(135deg, rgba(0, 138, 190, 0.08) 0%, rgba(77, 76, 157, 0.06) 50%, rgba(255, 3, 55, 0.08) 100%)',
        'bahia-cyan-blue': 'linear-gradient(135deg, #008ABE 0%, #1A63AF 100%)',
        'bahia-red-magenta': 'linear-gradient(135deg, #FF0337 0%, #FF0347 100%)',
      }
    },
  },
  plugins: [],
};
