/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "purple-secondary": "#F0E8FF",
        "purple-primary": "#7325F8",
        "purple-tertiary": "#5C10D1",
      },
      colors: {
        nebula: "#165BCC",
        "violet-echo": "#7325F8",
      },
      textColor: {
        "purple-secondary": "#F0E8FF",
        "purple-primary": "#7325F8",
        tertiary: "#445B70",
      },
      fontFamily: {
        gabarito: ["Gabarito", "sans-serif"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        slideIn: {
          "0%": { transform: "translateY(-50%)", opacity: "0" },
          "75%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(15%)", opacity: "0" },
        },
        slide: {
          "0%": { transform: "translateY(-30%)", opacity: 0.1 },
          "15%": { transform: "translateY(-30%)", opacity: 1 },
          "30%": { transform: "translateY(0)", opacity: 1 },
          "45%": { transform: "translateY(0)", opacity: 0.1 },
          "100%": { transform: "translateY(30%)", opacity: 0 },
        },
      },
      animation: {
        marquee: "marquee 14s linear infinite",
        "slide-in": "slideIn 2.5s ease-out both",
        slide: "slide 3s linear infinite",
      },
    },
  },
  plugins: [],
};
