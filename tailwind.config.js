/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        darkMain: '#1D2123',
        darkAlt: '#1A1E1F', // background для всяких карточек
        darkText: '#ffffff', //для текста в темной теме
        darkAltText: '#EFEEE0', // для заголовков в темной теме
        lightMain: '#fffdfc', 
        lightAlt: '#dadcd2',
        lightText: '#000000',
        lightAltText: '#03080a', 
        yellowPrimary: '#FACD66',
        darkSecondaryText: '#A4C7C6',
        lightSecondaryText: '#095ba4',
      },
      fontFamily: {
        quicksandRegular: [
          'Quicksand-Regular',
          ...defaultTheme.fontFamily.mono,
        ],
        quicksandBold: ['Quicksand-Bold', ...defaultTheme.fontFamily.mono],
        quicksandSemiBold: [
          'Quicksand-SemiBold',
          ...defaultTheme.fontFamily.mono,
        ],
      },
    },
  },
  plugins: [],
  darkMode: 'selector',
};
