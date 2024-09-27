/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        fiord: "#385469",
        peach: "#F39F5F",
        ivory: "#F4EEE5",
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
      quicksandMedium: ["Quick-Sand-Medium", "sans-serif"],
      quicksandRegular: ["Quick-Sand-Regular", "sans-serif"],
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          ".clip-custom-shape": {
            clipPath:
              "polygon(11.57% 20.52%, 20.41% 9.88%, 35.74% 2.02%, 57.34% 2.02%, 61.84% 6.1%, 74.82% 12.49%, 87.36% 25.25%, 90.57% 42.86%, 90.57% 64.36%, 83.82% 71.86%, 66.07% 78.36%, 40.57% 75.86%, 20.41% 71.86%, 11.57% 59.86%, 8.57% 39.86%)",
          },
          ".clip-path-activities": {
            clipPath:
              "polygon(1.89% 32.97%, 16.18% 20.37%, 8.54% 29.74%, 23.81% 11.01%, 26.73% 4.35%, 31.64% 1.93%, 47.53% 2.77%, 55.85% 3.29%, 68.43% 0.69%, 74.79% 0.69%, 80.07% 4.64%, 86.83% 14.39%, 91.48% 29.42%, 93.65% 36.45%, 95.82% 43.48%, 93.65% 57.69%, 93.65% 72.11%, 85.91% 87.14%, 68.43% 98.55%, 57.21% 100%, 45.82% 95.51%, 35.74% 95.51%, 24.6% 97.36%, 18.03% 95.51%, 9.89% 88.89%, 6.75% 78.96%, 7.73% 71.98%, 10.33% 53.3%, 1.89% 43.48%, 0.33% 38.22%)",
          },
        },
        ["responsive", "hover"]
      );
    },
  ],
};
