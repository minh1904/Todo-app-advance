/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'AktivGrotesk-Regular': ['AktivGrotesk-Regular', 'sans-serif'],
        'AktivGrotesk-Medium': ['AktivGrotesk-Medium', 'sans-serif'],
        'AktivGrotesk-Bold': ['AktivGrotesk-Bold', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
