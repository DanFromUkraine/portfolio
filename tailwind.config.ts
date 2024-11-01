import type { Config } from "tailwindcss";
import { SECONDARY } from "./components/constants/colors";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main_bg: "#282C33",
        purple: "#C778DD",
        secondary: SECONDARY,
        secondary_hover: "#CACDD2"
      },
    },
  },
  plugins: [],
};
export default config;
