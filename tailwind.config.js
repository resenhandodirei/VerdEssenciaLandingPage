/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "green-dark": "#2E7D32",
        "green-light": "#A5D6A7",
        purple: "#7E57C2",
        brown: "#8D6E63",
        neutral: {
          100: "#F7F7F7",
          900: "#1A1A1A",
        },
      },
      fontFamily: {
        heading: ["'Playfair Display'", "serif"],
        body: ["Inter", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 20px rgba(0,0,0,0.06)",
      },
    },
  },
  plugins: [],
};
