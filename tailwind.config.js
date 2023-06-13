/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/img/hero-pattern.svg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
      height: {
        30: "120px",
        15: "60px",
      },
      width: {
        15: "60px",
        20: "80px",
        13.5: "54px",
      },
    },
  },
  plugins: [],
};
