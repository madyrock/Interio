/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        fontFamily: {
          josefin: ['Josefin Sans', 'sans-serif'], // Custom font
        },
      },
    },
    plugins: [require("tailwind-scrollbar-hide")],
  };
  