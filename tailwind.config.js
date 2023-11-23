module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}'
  ],
  darkMode: 'class', // false or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'blue-basic': '#30a5ff',
        'blue-title': '#d9edf7',
        'blue-title-text': '#31708f',
        'red-carousel': '#f9243f',
        'blue-siruba': '#1a114e',
        'green-btn': '#8ad919',
        'green-success': '#dff0d8',
        'green-caption': '#009da4',
        // 'orange-siruba':'#fa461e'
        'orange-siruba': '#fff',
        'blue-inputbg': '#20184f'
      }
    },
    screens: {
      '2xl': { 'max': '1535px' },
      'xl': { 'max': '1279px' },
      'lg': { 'max': '1023px' },
      'md': { 'max': '767px' },
      'sm': { 'max': '639px' }
    }
  },
  plugins: [],
}