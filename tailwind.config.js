/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        935: "935px",
        280: "280px",
      },
      gridTemplateColumns: {
        auto: "repeat(auto-fit, minmax(250px, 1fr))",
      },
      spacing: {
        128: "935px",
      },
    },
  },
  plugins: [],
};
