/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        primary: "var(--background-main)",
        secondary: "var(--background-secondary)",
        "button-main": "var(--button-main)",
        "button-hover": "var(--button-hover)",
      },
      textColor: {
        "button-text": "var(--button-text)",
        "button-text-hover": "var(--button-text-hover)",
      },
    },
  },
  plugins: [],
};
