/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF9764",
        background: "#E9EAEA",
      },
      boxShadow:{
        shadow1:"0px 8px 20px rgba(35, 35, 35, 0.1)"
      }
    },
  },
  important:true,
  plugins: [],
};
