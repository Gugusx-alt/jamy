/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#fff8f2",
        blush: "#ffe4ec",
        rose: "#f8b4c4",
        lilac: "#e8d4ff",
        violet: "#c4b5fd",
        ink: "#3d2c3d",
        "ink-soft": "#6b5a68",
        accent: "#ff6b9d",
      },
      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
        sans: ["Nunito", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "noise":
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        polaroid: "0 4px 6px rgb(0 0 0 / 0.04), 0 18px 42px rgb(61 44 61 / 0.12)",
        card: "0 2px 4px rgb(0 0 0 / 0.04), 0 16px 40px rgb(61 44 61 / 0.1)",
        glow: "0 0 80px rgb(248 180 196 / 0.45)",
      },
      animation: {
        drift: "drift 20s linear infinite",
        shimmer: "shimmer 8s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        drift: {
          "0%": { transform: "translateY(0) rotate(0deg)", opacity: "0" },
          "10%": { opacity: "0.45" },
          "100%": { transform: "translateY(-110vh) rotate(300deg)", opacity: "0" },
        },
        shimmer: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};
