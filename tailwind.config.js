/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily:{
'lato':['lato-bold']
    },
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      ms: "320px",
      mm: "375px",
      ml: "425px",
      md: "768px",
      lg: "1024px",
      xl: "1300px",
    },
    extend: {
      backgroundImage: {
        "product-discount": "url('/public/bgSpicial.png')",
      },
      colors: {
        primary: "#101828",
        secondary: "#667085",
        basic: {
          DEFAULT: "#ed1d24",
          hover: "#dd242a",
        },
        body: "#f8f8f8",
      },
    },
  },
  plugins: [],
};
