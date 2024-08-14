/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      clipPath: {
        "aboutus-clip-path":
          "polygon(11.57% 20.52%, 20.41% 9.88%, 35.74% 2.02%, 57.34% 2.02%, 61.84% 6.1%, 74.82% 12.49%, 87.36% 25.25%, 90.57% 42.86%, 90.57% 64.36%, 83.82% 71.86%, 66.07% 78.36%, 40.57% 75.86%, 20.41% 71.86%, 11.57% 59.86%, 8.57% 39.86%)",
      },
      colors: {
        fiord: "#385469",
        peach: "#F39F5F"
      },
      fontFamily: {
        sans: ["Source Sans 3", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      quicksand: ["Quick-Sand-Bold", "sans-serif"],
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          '.clip-custom-shape': {
            clipPath: 'polygon(11.57% 20.52%, 20.41% 9.88%, 35.74% 2.02%, 57.34% 2.02%, 61.84% 6.1%, 74.82% 12.49%, 87.36% 25.25%, 90.57% 42.86%, 90.57% 64.36%, 83.82% 71.86%, 66.07% 78.36%, 40.57% 75.86%, 20.41% 71.86%, 11.57% 59.86%, 8.57% 39.86%)',
          },
        },
        ['responsive', 'hover']
      )
    },
  ],
};
