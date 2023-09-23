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
        "background-tertiary": "var( --background-tertiary)",
        "button-main": "var(--button-main)",
        "button-hover": "var(--button-hover)",
        "highlight-color": "var(--highlight-color)",
      },
      textColor: {
        "button-text": "var(--button-text)",
        "button-text-hover": "var(--button-text-hover)",
        "paraghraph-text": "var(--paraghraph-text)",
      },
      borderColor: {
        "highlight-color": "var(--highlight-color)",
      },
      caretColor: {
        "highlight-color": "var(--highlight-color)",
      },
      colors: {
        "highlight-color": "var(--highlight-color)",
        "background-tertiary": "var( --background-tertiary)",
        "button-main": "var(--button-main)",
        "button-hover": "var(--button-hover)",
        "highlight-color": "var(--highlight-color)",
        "paraghraph-text": "var(--paraghraph-text)",
        "cust-bg": "#ffd803",
        wrn: "#e3f6f5",
        scd: "#bae8e8",
      },
    },
  },
  plugins: [],
};
