export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Outfit', 'sans-serif'],
      },
      colors: {
        forest: {
          50: '#f2f6f2',
          100: '#dfe9df',
          200: '#b9cdb9',
          300: '#8fac8f',
          400: '#658a65',
          500: '#496b49',
          600: '#38533a',
          700: '#2c4230',
          800: '#1e3524',
          900: '#14261a',
          950: '#0c1810',
        },
        gold: {
          50: '#fdf9ee',
          100: '#f9edc9',
          200: '#f2da93',
          300: '#eac35c',
          400: '#e2ac37',
          500: '#d4af37',
          600: '#b8912a',
          700: '#946f22',
          800: '#78581f',
          900: '#63481e',
        },
        cream: {
          50: '#fefdfa',
          100: '#faf6ec',
          200: '#f3ecd9',
          300: '#e9deba',
        },
        olive: {
          400: '#93a86a',
          500: '#7a8b4f',
          600: '#5f6d3d',
        },
        clay: {
          50: '#fbf1ee',
          100: '#f4dcd4',
          400: '#c1694f',
          500: '#a8503a',
          600: '#8a3f2d',
        },
      },
      boxShadow: {
        soft: '0 20px 60px -15px rgba(20, 38, 26, 0.25)',
      },
    },
  },
  plugins: [],
};
