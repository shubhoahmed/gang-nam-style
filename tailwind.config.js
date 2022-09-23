/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#1c1477",

          "secondary": "#fcc7d5",

          "accent": "#f6bef7",

          "neutral": "#161622",

          "base-100": "#FFFFFF",

          "info": "#4288C2",

          "success": "#108979",

          "warning": "#E09915",

          "error": "#E24B76",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
