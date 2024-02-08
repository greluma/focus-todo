// cspell:ignore tailwindcss
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 0.3s ease-in-out",
      },
      transitionProperty: {
        myTransition: "all",
      },
      transitionTimingFunction: {
        myTransition: "linear",
      },
      transitionDuration: {
        myTransition: "300ms",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, scale: 0 },
          "100%": { opacity: 1, scale: 1 },
        },
      },
      boxShadow: {
        top: "0 -4px 2px -2px rgba(0, 0, 0, 0.1)",
        bottom: "0 4px 2px -2px rgba(0, 0, 0, 0.1)",
        right: "4px 0 2px -2px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
