import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        'sora': ['Sora', 'Inter', 'Poppins', 'sans-serif'],
        'google': ['Google Sans', 'Arial', 'sans-serif'],
      },
      spacing: {
        '4.5': '1.125rem',
        '5.5': '1.375rem',
        '9.5': '2.375rem',
        '18': '4.5rem',
        '25': '6.25rem',
        '40': '10rem',
        '50': '12.5rem',
        '70': '17.5rem',
        '75': '18.75rem',
        '105': '26.25rem',
        '125': '31.25rem',
      },
      maxWidth: {
        '6xl': '1440px',
      },
      height: {
        '18': '4.5rem',
        'screen-minus-18': 'calc(100vh - 4.5rem)',
      },
      inset: {
        '18': '4.5rem',
      },
      zIndex: {
        '100': '100',
      },
    },
  },
  plugins: [],
} satisfies Config;
