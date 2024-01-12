/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primarayColor: "#8755FE",
          backgroundColor:"#0A1628"
      },
      fontFamily: {
        poppins: ["poppins"]
      }
    },
  },
  plugins: [],
};
