/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        rb: {
          bg: '#0a0a0b',
          bg2: '#121214',
          panel: '#17171a',
          panel2: '#1f1f23',
          red: '#ff6a1a', // neon orange (primary)
          'red-deep': '#e8450f', // deep orange
          gold: '#16d6a4', // jade accent
          'gold-light': '#52ecc3', // light jade
          cream: '#f4f2ec',
          muted: '#8d8880',
        },
      },
      fontFamily: {
        display: ['Bungee', 'Impact', 'sans-serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        script: ['Pacifico', 'cursive'],
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(26px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        floaty: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
        glow: { '0%,100%': { opacity: '0.45' }, '50%': { opacity: '1' } },
        marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
        shine: {
          '0%': { transform: 'translateX(-120%) skewX(-18deg)' },
          '60%,100%': { transform: 'translateX(360%) skewX(-18deg)' },
        },
        neon: {
          '0%,100%': { opacity: '1', filter: 'drop-shadow(0 0 6px rgba(255,106,26,.7))' },
          '50%': { opacity: '.85', filter: 'drop-shadow(0 0 14px rgba(255,106,26,.95))' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s ease both',
        floaty: 'floaty 6s ease-in-out infinite',
        glow: 'glow 4s ease-in-out infinite',
        marquee: 'marquee 24s linear infinite',
        shine: 'shine 4.5s ease-in-out infinite',
        neon: 'neon 2.8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
