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
      colors: {
        // refer to https://www.happyhues.co/palettes/14
        // transparent: "transparent",
        // white: "#ffffff",
        // background_color: "#fffffe",
        // paragraph_color: "#2d334a",
        // button_color: "#ffd803",
        // button_text_color: "#272343",
        // tertiary_color: "#bae8e8",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
