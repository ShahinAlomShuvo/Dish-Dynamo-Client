/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Barlow: "'Barlow', sans-serif;",
      },
      animation: {
        "slide-right": "slide-right 3s ease-in-out infinite alternate",
      },
    },
    keyframes: {
      "slide-right": {
        "0%": { transform: "translateX(-10%)" },
        "100%": { transform: "translateX(20%)" },
      },
    },
  },
  plugins: [require("daisyui")],
};
