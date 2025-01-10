/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#de2c4d",
        secondary: "#fb923c",
        extra: "#8026e6",
        dark: {
          bg: "#1a1a1a", // Color de fondo oscuro
          text: "#e5e5e5", // Color de texto claro en modo oscuro
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        averia: ["Averia Serif Libre", "serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  darkMode: 'class', // Asegúrate de que el modo oscuro esté habilitado por clase
  plugins: [],
};
