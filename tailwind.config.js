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
        // New Palette
        'app-teal': '#2D8B8E',
        'app-teal-dk': '#1A5F62',
        'app-rose': '#C9856A',
        'app-rose-lt': '#E8C4B0',
        'app-rose-pale': '#FAF0EB',
        'app-gold': '#C9A84C',
        'app-gold-lt': '#F5E6C0',
        'app-cream': '#FBF7F4',
        'app-bark': '#3D2B1F',
        'app-bark-lt': '#6B4C3B',
        'app-text': '#2A1A12',
        'app-text-2': '#6B4C3B',
        'app-text-3': '#9E7D6F',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['Jost', 'system-ui', 'sans-serif'],
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
