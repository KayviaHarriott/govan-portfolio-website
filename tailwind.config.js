/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "subtext-custom": [
          "14px",
          {
            // lineHeight: "21px",
            letterSpacing: "0.08em",
          },
        ],
        "title-custom": [
          {
            // lineHeight: "38.4px",
            letterSpacing: "-0.02em",
          },
        ],
      },
    },
  },
  plugins: [],
};
