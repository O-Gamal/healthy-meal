/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      dark: {
        primary: '#121418',
        secondary: '#1b1f24',
      },
      gunmetal: '#2A2F39',
      green: '#17bb80',
      white: '#FAFBFB',
      yellow: '#ffd155',
      purple: '#c89afe',
      blue: '#4a9fff',
      red: '#f97564',
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
