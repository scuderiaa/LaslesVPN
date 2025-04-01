/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: "Rubik",
        rubikItalic: "Rubik Italic",
        rubikBold: "Rubik Bold",
        rubikBoldItalic: "Rubik Bold Italic",
        rubikLight: "Rubik Light",
        rubikLightItalic: "Rubik Light Italic",
        rubikMedium: "Rubik Medium",
        rubikMediumItalic: "Rubik Medium Italic",
        rubikSemiBold: "Rubik SemiBold",
        rubikSemiBoldItalic: "Rubik SemiBold Italic", 
        rubikExtraBold: "Rubik ExtraBold",
        rubikExtraBoldItalic: "Rubik ExtraBold Italic",
        rubikBlack: "Rubik Black",
        rubikBlackItalic: "Rubik Black Italic",
      }
    },
  },
  plugins: [],
}