/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'forest-green': '#3a5a40',
        'sage': '#a3b18a',
        'earth': '#d9c5b2',
        'stone': '#5e503f',
      },
    },
  },
  plugins: [],
};
