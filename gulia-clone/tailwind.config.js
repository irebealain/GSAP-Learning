/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Rosarivo', 'Times New Roman', 'sans-serif'],
        paragraphs: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        headlines: '90px',
        smallHeadlines: '64px',
      },
      letterSpacing: {
        '1': '0em',
        '2': '0.025em',
        '3': '0.05em',
        '4': '0.1em',
      },
      fontWeight: {
        light: '100',
      },
    },
  },
  plugins: [],
}

