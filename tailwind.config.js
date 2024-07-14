/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ulColor: "#49557e",
        tomato: "#ff6347",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      // backgroundImage: {
      //   bgImage: "url('header_img.png')",
      // },
    },
  },
  plugins: [],
};
