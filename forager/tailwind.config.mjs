/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "main-green": "#579076",
        "dark-green": "#397367",
        "main-white": "#f2f2f2",
        "main-blue": "#324053",
        "bg-gray": "#D9D9D9",
        "fg-gray": "#7C7C7C",
        "main-red": "#FF5050",
      },
      borderRadius: {
        "top-lr": '30px 30px 0 0'
      },
    },
  },
  plugins: [],
};
