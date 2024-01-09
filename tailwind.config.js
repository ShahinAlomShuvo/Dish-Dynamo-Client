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
        spin: "spin 9s linear infinite",
        "spin-reverse": "spin-reverse 9s linear infinite",
      },
    },
    keyframes: {
      "slide-right": {
        "0%": { transform: "translateX(-10%)" },
        "100%": { transform: "translateX(20%)" },
      },
      spin: {
        from: { transform: "rotate(0deg)" },
        to: { transform: "rotate(360deg)" },
      },
      "spin-reverse": {
        from: { transform: "rotate(360deg)" },
        to: { transform: "rotate(0deg)" },
      },
    },
  },
  plugins: [require("daisyui")],
};
