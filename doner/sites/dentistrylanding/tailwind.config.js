/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./data/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        clinic: {
          ink: "#12323B",
          body: "#3A5962",
          muted: "#6B858C",
          surface: "#FFFFFF",
          mist: "#ECFEFF",
          ice: "#DDF7FA",
          line: "#B9E6EE",
          primary: "#0891B2",
          primaryDark: "#0E7490",
          accent: "#059669",
          accentDark: "#047857",
          coral: "#F9735B",
          amber: "#F4B860",
          navy: "#102A43"
        }
      },
      fontFamily: {
        sans: ["var(--font-body)", "Arial", "sans-serif"],
        display: ["var(--font-display)", "Arial", "sans-serif"]
      },
      boxShadow: {
        soft: "0 16px 40px rgba(18, 50, 59, 0.10)",
        lift: "0 22px 60px rgba(8, 145, 178, 0.16)",
        focus: "0 0 0 4px rgba(8, 145, 178, 0.18)"
      },
      borderRadius: {
        card: "0.5rem"
      },
      aspectRatio: {
        photo: "4 / 3"
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.2, 0.8, 0.2, 1)"
      },
      backgroundImage: {
        "clinic-mesh": "linear-gradient(135deg, #ECFEFF 0%, #FFFFFF 48%, #DDF7FA 100%)",
        "clinic-dark": "linear-gradient(135deg, #081A20 0%, #102A43 52%, #12323B 100%)"
      }
    }
  },
  plugins: []
};
