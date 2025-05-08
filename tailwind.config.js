/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "blink-fast": "blink 0.8s steps(1) infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
        "move-left": {
          "0%, 100%": { transform: "translateX(-10px)" },
          "50%": { transform: "translateX(0)" },
        },
        "move-right": {
          "0%, 100%": { transform: "translateX(10px)" },
          "50%": { transform: "translateX(0)" },
        },
        zoom: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
        },
      },
      animation: {
        "move-left": "move-left 1s infinite ease-in-out",
        "move-right": "move-right 1s infinite ease-in-out",
        zoom: "zoom 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
