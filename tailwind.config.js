/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "475px", // Extra Small Devices
        sm: "640px", // Small Devices
        md: "768px", // Medium Devices
        lg: "1024px", // Large Devices
        xl: "1280px", // Extra Large Devices
        "2xl": "1536px", // 2XL Devices
        "3xl": "1920px", // 3X large devices
        "4xl": "2560px", // 4X large devices
      },
    },
  },
  plugins: [],
};
