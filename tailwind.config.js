/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        content: {
          primary: '#000000',
          secondary: '#878A8F',
        },
        layer: {
          layer_01: '#FFFFFF',

        },
        border: {
          border_layer_1: '#F2F3F4',
          border_selected: '#4F46E5',
        },
        background: {
          background: '#FAFAFA',
        },
        cta: {
          primary: '#4F46E5',
        },
        feedback: {
          info_bg: '#EEF2FF',
        },
        badges: {
          yellow_bg: '#FEF9C3',
        },
      },
      fontFamily: {
        sans: ['PT Root UI', 'sans-serif'],
        racing: ['Racing Sans One', 'cursive'],
      },
      fontSize: {
        'basic-16-regular': ['16px', { lineHeight: '24px', fontWeight: '400', letterSpacing: '0.1px' }],
        'basic-16-medium': ['16px', { lineHeight: '24px', fontWeight: '500', letterSpacing: '0.1px' }],
        'small-14-regular': ['14px', { lineHeight: '21px', fontWeight: '400', letterSpacing: '0.1px' }],
        'small-14-medium': ['14px', { lineHeight: '21px', fontWeight: '500', letterSpacing: '0.1px' }],
        'racing-24': ['24px', { lineHeight: '30px', fontWeight: '400', letterSpacing: '0.1px' }],
        'header-h5': ['22px', { lineHeight: '27.5px', fontWeight: '700', letterSpacing: '0.1px' }],
      },
      textAlign: {
        left: 'left',
        center: 'center',
      },
    },
  },
  plugins: [],
};
