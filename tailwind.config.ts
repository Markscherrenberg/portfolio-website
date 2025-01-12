import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/services/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/helpers.ts",
  ],
  safelist: [
    "lg:grid-cols-1",
    "lg:grid-cols-2",
    "lg:grid-cols-3",
    "lg:grid-cols-4",
    "lg:grid-cols-5",
    "w-*",
    "w-32",
    "w-24",
    "w-40",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "var(--font-inter)",
        body: "var(--font-inter)",
        display: "var(--font-epilogue)",
      },
      borderRadius: {
        button: "48px",
      },
      fontSize: {
        "display-1": "5.5rem",
        "display-2": "2.5rem",
        "display-3": "4rem",
        "display-4": "2rem",
        "display-5": "1.5rem",
        "display-6": "1.25rem",
      },
      height: {
        banner: "calc(100vh - 88px - 200px)",
      },
      boxShadow: {
        box: "0px 1px 2px 0px rgba(209, 209, 209, 0.20)",
      },
      colors: {
        // box: "rgba(36, 36, 37, 0.70)",
        box: "#242425",
        accent: {
          DEFAULT: "#E5FF76",
          50: "#FDFFE5",
          100: "#F8FFC7",
          200: "#EFFF95",
          300: "#E5FF76",
          400: "#CCF624",
          500: "#ADDD06",
          600: "#86B100",
          700: "#658606",
          800: "#51690A",
          900: "#42590F",
          950: "#233200",
        },
        // accent: {
        //   DEFAULT: "#FFFFFF", // Pure white for main highlights
        //   50: "#FAFAFA", // Very light grey for subtle backgrounds
        //   100: "#F5F5F5", // Light grey for secondary backgrounds
        //   200: "#EEEEEE", // Soft grey for accents
        //   300: "#E0E0E0", // Calm grey for elements
        //   400: "#BDBDBD", // Medium grey for text or borders
        //   500: "#9E9E9E", // Darker grey for deeper accents
        //   600: "#757575", // Deep grey for strong contrasts
        //   700: "#616161", // Rich grey for bold elements
        //   800: "#424242", // Dark grey for backgrounds
        //   900: "#212121", // Very dark grey for deep accents
        //   950: "#121212", // Near-black grey for subtle depth
        // },
        black: {
          // DEFAULT: "#121212",
          DEFAULT: "#000",
        },
        error: {
          DEFAULT: "#FF4F4E",
        },
        primary: {
          DEFAULT: "#333333",
          50: "#F6F6F6",
          100: "#E7E7E7",
          200: "#D1D1D1",
          300: "#B0B0B0",
          400: "#888888",
          500: "#6D6D6D",
          600: "#5D5D5D",
          700: "#4F4F4F",
          800: "#454545",
          900: "#333333",
          925: "#202020",
          950: "#000",
        },
        white: {
          DEFAULT: "#F7F7F7",
        },
      },
      maxWidth: {
        "8xl": "90rem",
        page: "67.5rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
