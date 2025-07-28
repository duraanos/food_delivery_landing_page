import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xl: '1180px',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',

        customLime: {
          '50': '#f9fbe2',
          '100': '#f4f8c5',
          '200': '#ecf39e',
          '700': '#4f772d',
          '900': '#2f471b',
          '950': '#1d341a',
        },

        customGreen: {
          '100': '#f2f5eb',
          '400': '#bccb99',
          '600': '#90a955',
          '800': '#31572c',
        },

        customGray: {
          '200': '#e6e6e6',
          '300': '#cccccc',
          '400': '#999999',
          '500': '#808080',
          '600': '#666666',
          '700': '#4d4d4d',
          '800': '#333333',
          '900': '#1a1a1a',
        },
      },

      fontSize: {
        heading1: [
          '110px',
          {
            lineHeight: '',
            letterSpacing: '',
            fontWeight: '700',
          },
        ],

        heading2: [
          '68px',
          {
            lineHeight: '',
            letterSpacing: '',
            fontWeight: '700',
          },
        ],

        heading3: [
          '42px',
          {
            lineHeight: '',
            letterSpacing: '',
            fontWeight: '700',
          },
        ],

        paragraphLarge: [
          '26px',
          {
            lineHeight: '',
            letterSpacing: '',
            fontWeight: '400',
          },
        ],

        paragrapgh: [
          '16px',
          {
            lineHeight: '',
            letterSpacing: '',
            fontWeight: '400',
          },
        ],
      },
    },
  },
  plugins: [],
};
export default config;
