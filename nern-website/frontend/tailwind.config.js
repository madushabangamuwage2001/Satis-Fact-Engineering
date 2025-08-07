/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          white: "#FFFFFF",
          red: "#8B0000",
          gray: "#4B5563",
          yellow: "#FACC15",
          black: "#000000",
        },
        construction: {
          red: "#8B0000",
          yellow: "#FACC15",
          gray: "#4B5563",
          darkGray: "#374151",
          lightGray: "#F3F4F6",
        },
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Open Sans", "sans-serif"],
      },
      animation: {
        "bounce-subtle": "bounce 2s infinite",
        "fade-in": "fadeIn 0.3s ease-in-out",
        "scale-in": "scaleIn 0.3s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
}
