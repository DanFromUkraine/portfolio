import type { Config } from "tailwindcss";
import { SECONDARY, SECONDARY_HOVER } from "./app/lib/constants/colors";

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
                secondary_hover: SECONDARY_HOVER,
            },
        },
    },
    plugins: [],
};
export default config;
