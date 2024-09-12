/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   
    screens: {
      xs: "340px",
      sm: "600px",
      tt: "670px",
      md: "1024px",
      lg: "1440px"
    },
    extend: {
      gridTemplateColumns: {
        fit_4: "repeat(4, auto)",
        fit_2: "repeat(2, auto)",
        fit_1: "repeat(1, auto )"
      }
    },
  },
  plugins: [],
}

