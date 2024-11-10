/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing:{
        
        'custom-w': '100%', 
        'md-custom-w': '80%', 
        'lg-custom-w': '70%', 
        'custom-pt': '1rem', 
        'custom-pl': '1rem', 
        'custom-pr': '1rem', 
        'custom-pb': '2rem', 
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        "tt-primary": "#008080",
        "tt-black": "#0E0E2C",
        "tt-grey": "#A0A4AB"
      }
    },
  },
  plugins: [
    function({ addComponents, theme }) {
      addComponents({
        '.custom-container': {
          width: theme('spacing.custom-w'),
          marginTop: theme('spacing.custom-pt'),
          marginLeft: theme('spacing.custom-pl'),
          marginRight: theme('spacing.custom-pr'),
          marginBottom: theme('spacing.custom-pb'),
        },
      });
    },
  ],
};