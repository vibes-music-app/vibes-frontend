import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
        colors: {
            yellow: "#F8A147",
            blue: "#028A9B",
            red: "#DE5A5A",
            white: "#FFFFFF",
            black: "#000000",
        },
        animation: {
            "expand-popup": "expand-popup 0.2s ease-out",
        },
        keyframes: {
            "expand-popup": {
                "0%": {
                    scale: "1",
                },
                "70%": {
                    scale: "1.1",
                },
                "100%": {
                    scale: "1",
                },
            },
        },
        fontFamily: {
            secondary: ["Comfortaa", "system-ui", "sans-serif"],
        },
    },
    plugins: [],
};
export default config;
