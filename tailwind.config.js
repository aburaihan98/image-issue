// tailwind.config.js

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // ঠিক মত path ensure করো
  theme: {
    extend: {
      animation: {
        bubble: "bubble 2s ease-in-out infinite",
      },
      keyframes: {
        bubble: {
          "0%": {
            transform: "translateY(0px) scale(1)",
            opacity: "1",
          },
          "100%": {
            transform: "translateY(-40px) scale(0.5)",
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [],
};
