import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  prefix: "tw-",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        syko: "#3068D0",
      },
      keyframes: {
        'wiggle': {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        'ring': {
          '0%': { transform: 'rotate(-15deg)' },
          '2%': { transform: 'rotate(15deg)' },
          '4%': { transform: 'rotate(-18deg)' },
          '6%': { transform: 'rotate(18deg)' },
          '8%': { transform: 'rotate(-22deg)' },
          '10%': { transform: 'rotate(22deg)' },
          '12%': { transform: 'rotate(-18deg)' },
          '14%': { transform: 'rotate(18deg)' },
          '16%': { transform: 'rotate(-12deg)' },
          '18%': { transform: 'rotate(12deg)' },
          '20%': { transform: 'rotate(0deg)' },
        },
      },
      animation: {
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'ring': 'ring 2s ease infinite',
      },
    },
  },
  corePlugins: {
    preflight: false
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};