/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f13a01',
      },
      fontFamily: {
        josefin: ['var(--font-josefin-sans)', 'sans-serif'],
        lilita: ['var(--font-lilita-one)', 'cursive'],
        roboto: ['var(--font-roboto)', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 45s linear 1',
        'spin-preloader': 'spin 10s linear infinite',
      },
    },
  },
  plugins: [],
}
