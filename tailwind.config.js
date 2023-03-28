const { fontFamily } = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
        backgroundImage: {
          'nude-bg': "url('/img/bg-nude.png')",
          'peach-bg': "url('/img/bg-peach.png')",
          'event1': "url('/img/img1.svg')",
          'event2': "url('/img/img2.svg')",
          'rand': "url('/img/Desktop - 8.png')",
          'eventplan': "url('/img/event-plan-maxi.svg')",
          'eventmgt': "url('/img/event-mgt-maxi.svg')",
          'eventcreate': "url('/img/event-cre-maxi.svg')",
          // 'orange-midi': "url('/img/stat-white-midi.svg')",
        },
      fontFamily: {
        sans: ["var(--font-gooddog)", ...fontFamily.sans],
        // here
      },
      colors: {
        primary: "var(--color-primary)",
        "gray-1": "var(--color-gray-1)",
        "gray-2": "var(--color-gray-2)",
        "rust": "#AB3500",
        "nude": "#FFB870",
        "light-nude": "#FFDCBE",
        "active": "#D34D18",
        "black-brown": "#53433F",
        "brown": "#53433F",
        "faint-typo": "#F5DED7",
        "faint-bg": "#FFEEE1",
        "footer-typo": "#C5C8BA",
        "peach-typo": "#FFB59D",
        "peach2-typo": "#FFDBD0",
      },
    },
    
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "940px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  
  plugins: [],
};
