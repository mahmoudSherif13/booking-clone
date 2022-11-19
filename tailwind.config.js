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
          dark: '#322744'
        },
        maroon: { t4: "#fae1f5" },
        buttonSecondaryBackgroundHover: "#322744",
      },
      fontFamily: {
        zoopla: ["ZooplaSans", "Helvetica", "Arial", "sans-serif"],
      },
      boxShadow:{
        "800": "0px 0px 12px #32274414,0px 0px 1px #32274452,0px 8px 16px -8px #322744cc",
        pinkBorder: "0 0 0 3px #fac8f0"
      }
    },
  },
  plugins: [],
};
