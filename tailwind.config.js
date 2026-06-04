/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#E9E2DF',
        gold: '#DD9474',    // Terracotta (Primary Accent)
        peach: '#EFBBA6',   // Peach (Lighter Accent)
        dark: '#2C2621',
        muted: '#8B7D72',
        divider: '#D6CEC9', // Slightly darker than cream
        'off-white': '#FDFBF7',
        'teal-light': '#8EB7BB',
        'teal': '#5A9BA2',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        'marquee-fast': 'marquee 20s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
