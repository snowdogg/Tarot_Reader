import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Tarot-specific theme colors
        mystical: {
          900: "#1a0b2e",
          800: "#2d1b69",
          700: "#3730a3",
          600: "#4338ca",
          500: "#6366f1",
          400: "#818cf8",
          300: "#a5b4fc",
          200: "#c7d2fe",
          100: "#e0e7ff",
          50: "#f0f4ff",
        },
        cosmic: {
          900: "#0f0c29",
          800: "#24243e",
          700: "#302b63",
          600: "#3c3c7a",
          500: "#6a5acd",
          400: "#9370db",
          300: "#ba55d3",
          200: "#dda0dd",
          100: "#e6e6fa",
          50: "#f8f8ff",
        },
        gold: {
          900: "#7c2d12",
          800: "#9a3412",
          700: "#c2410c",
          600: "#ea580c",
          500: "#f97316",
          400: "#fb923c",
          300: "#fdba74",
          200: "#fed7aa",
          100: "#ffedd5",
          50: "#fff7ed",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "card-flip": {
          "0%": { transform: "rotateY(0deg)" },
          "50%": { transform: "rotateY(90deg)" },
          "100%": { transform: "rotateY(0deg)" },
        },
        "card-deal": {
          "0%": {
            transform: "translateY(-200px) rotate(-10deg)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0) rotate(0deg)",
            opacity: "1",
          },
        },
        "mystical-glow": {
          "0%, 100%": {
            boxShadow: "0 0 20px rgba(99, 102, 241, 0.3)",
          },
          "50%": {
            boxShadow: "0 0 40px rgba(99, 102, 241, 0.6)",
          },
        },
        shimmer: {
          "0%": {
            backgroundPosition: "-1000px 0",
          },
          "100%": {
            backgroundPosition: "1000px 0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "card-flip": "card-flip 0.6s ease-in-out",
        "card-deal": "card-deal 0.8s ease-out",
        "mystical-glow": "mystical-glow 2s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
      },
      backgroundImage: {
        "mystical-gradient":
          "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        "cosmic-gradient": "linear-gradient(135deg, #2E3192 0%, #1BFFFF 100%)",
        "card-shimmer":
          "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
