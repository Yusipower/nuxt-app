module.exports = {
  content: [],
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  mode: 'jit',
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: "#f0ebe3",
        accent: "#dbd0c2",
        dimgrey: "#70685f"
      },
      container: {
        padding: "2rem",
        center: true
      },
    },
    fontFamily: {
      Raleway: ["Raleway, sans-serif"],
    },
  },
  plugins: [],
}
