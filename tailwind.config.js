/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        mainPrimary: "#092661",
        bodyPrimary: "#F9FBFE",
        linkPrimary: "#FFF",
        textPrimary: "#000",
  
        mainSecondary: "#1F3663",
        linkSecondary: "#b7c3df",
        textSecondary: "#324253",
  
        textTertiary: "#8F9FBC"
      }
    }
  },
  plugins: [],
}

