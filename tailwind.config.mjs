/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#0d1117",
          subtle: "#161b22",
          elevated: "#21262d",
        },
        border: {
          DEFAULT: "#30363d",
          muted: "#21262d",
        },
        fg: {
          DEFAULT: "#e6edf3",
          muted: "#8b949e",
          subtle: "#6e7681",
        },
        accent: {
          DEFAULT: "#58a6ff",
          hover: "#79c0ff",
          muted: "#1f6feb",
        },
        success: "#3fb950",
        danger: "#f85149",
        warning: "#d29922",
      },
      fontFamily: {
        sans: [
          "system-ui",
          "-apple-system",
          "'Segoe UI'",
          "Roboto",
          "'PingFang TC'",
          "'PingFang SC'",
          "'Microsoft JhengHei'",
          "'Microsoft YaHei'",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },

      maxWidth: {
        "8xl": "88rem",
      },
    },
  },
  plugins: [],
};
