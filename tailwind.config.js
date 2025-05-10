/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    "./src/**/*.{html,js,css}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--border, #333333)",
        input: "var(--input, #E0E0E0)",
        ring: "var(--ring, #00529F)",
        background: "var(--bg-primary, #0A0A0A)",
        foreground: "var(--text-primary, #E0E0E0)",
        primary: {
          DEFAULT: "var(--text-primary, #E0E0E0)",
          foreground: "var(--bg-primary, #0A0A0A)",
        },
        secondary: {
          DEFAULT: "var(--text-secondary, #A0A0A0)",
          foreground: "var(--bg-primary, #0A0A0A)",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive, 0 84% 60%))",
          foreground: "hsl(var(--destructive-foreground, 0 0% 98%))",
        },
        muted: {
          DEFAULT: "var(--text-secondary, #A0A0A0)",
          foreground: "var(--text-primary, #E0E0E0)",
        },
        accent: {
          DEFAULT: "var(--accent-primary, #00D4FF)",
          foreground: "var(--text-primary, #E0E0E0)",
        },
        popover: {
          DEFAULT: "var(--bg-primary, #0A0A0A)",
          foreground: "var(--text-primary, #E0E0E0)",
        },
        card: {
          DEFAULT: "var(--bg-primary, #0A0A0A)",
          foreground: "var(--text-primary, #E0E0E0)",
        },
        real: {
          white: "#FFFFFF",
          blue: "#00529F",
          gold: "#F5C107",
          gray: {
            dark: "#333333", // Reverted to original gray
            light: "#666666",
          },
        },
      },
      borderRadius: {
        lg: "var(--radius, 0.5rem)",
        md: "calc(var(--radius, 0.5rem) - 2px)",
        sm: "calc(var(--radius, 0.5rem) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};