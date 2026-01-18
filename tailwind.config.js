/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#2F4538',
        'primary-dark': '#243529',
        'secondary': '#D8E0D3',
        'accent-light': '#E8EDE6',
        'text-dark': '#2F4538',
      },
      fontFamily: {
        'urbanist': ['Urbanist', 'sans-serif'],
        'proxima': ['Proxima Nova', 'sans-serif'],
      },
      fontSize: {
        'hero': ['44.8px', '49.8893px'],
        'section': ['35.2px', '40.2125px'],
        'nav': '16px',
      },
      letterSpacing: {
        'hero': '-0.896px',
        'section': '-0.704px',
        'tight': '-0.384px',
      },
      spacing: {
        'header': '198px',
        'header-inner': '40.32px',
        'section-y': '63.36px',
      },
      borderRadius: {
        'button': '10px',
      },
      minHeight: {
        'hero': '1080px',
      },
      maxWidth: {
        'header': '1920px',
      },
      zIndex: {
        'header': '10',
      },
    },
  },
  plugins: [],
}