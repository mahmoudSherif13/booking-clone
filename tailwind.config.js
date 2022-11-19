/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          DEFAULT: "#8046f1",
          t0: "#a57bf5",
        },
        maroon: { t4: "#fae1f5" },
      },
      fontFamily: {
        zoopla: ["ZooplaSans", "Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
