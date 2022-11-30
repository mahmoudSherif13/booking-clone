/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        lg: ['20px', '28px'],
        xl: ['24px', '32px'],
      },  
      colors: {
        linkText: {
          DEFAULT: "#322744",
          hover: "#322744",
          active: "#322744",
          visited: "#662dbe",
          disabled: "#d1d0cf",
        },
        linkUnderline: {
          DEFAULT: "#8046f1",
          hover: "#662dbe",
          active: "#662dbe",
          visited: "#662dbe",
          disabled: "#662dbe",
        },
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
