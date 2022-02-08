module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      orange: {
        default: '#F16718',
        light: '#FF9B62',
      },
      navi: {
        default: '#162542',
        light: '#7B8BAD',
      },
      gray: '#E8EFF2',
      white: '#FFF',
    },
    fontFamily: {
      heading: ['Barlow', 'sans-serif'],
      body: ['Barlow', 'sans-serif'],
    },
    fontWeight: {
      heading: 900,
      body: 500,
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
