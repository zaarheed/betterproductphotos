module.exports = {
  content: [
    "./pages/**/*.js",
    "./components/**/*.js",
    "./constants/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        azure: {
          "50": "#E5F2FF",
          "100": "#CCE5FF",
          "200": "#99CBFF",
          "300": "#66B0FF",
          "400": "#3396FF",
          "500": "#007CFF",
          "600": "#0063CC",
          "700": "#004A99",
          "800": "#003266",
          "900": "#001933"
        }
      },
      fontFamily: {
        poppins: ["Poppins"]
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography")
  ],
}
