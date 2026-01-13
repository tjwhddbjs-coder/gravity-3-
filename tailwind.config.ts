import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                sky: {
                    50: '#f0f9ff',
                    100: '#e0f2fe',
                },
            },
        },
    },
    plugins: [],
};
export default config;
