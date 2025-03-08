// import { config } from "process";
import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		fontFamily: {
			montserrat: ["var(--font-montserrat)",],
			roboto: ["var(--font-roboto)",],
			dancingScript: ["var(--font-dancing-script)"]
		  },
		// },
		screens:{
			xs:"400px"
		},
  		colors: {
			background: {
				DEFAULT: 'hsl(var(--background))',
				50: 'hsl(var(--background-50))',
				100: 'hsl(var(--background-100))',
				200: 'hsl(var(--background-200))',
				300: 'hsl(var(--background-300))',
				400: 'hsl(var(--background-400))',
				500: 'hsl(var(--background-500))',
				600: 'hsl(var(--background-600))',
				700: 'hsl(var(--background-700))',
				800: 'hsl(var(--background-800))',
				900: 'hsl(var(--background-900))',
				950: 'hsl(var(--background-950))',
				foreground: 'hsl(var(--primary-foreground))',
			  },
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
        primary: {
          DEFAULT: 'hsl(var(--primary-500))',
          50: 'hsl(var(--primary-50))',
          100: 'hsl(var(--primary-100))',
          200: 'hsl(var(--primary-200))',
          300: 'hsl(var(--primary-300))',
          400: 'hsl(var(--primary-400))',
          500: 'hsl(var(--primary-500))',
          600: 'hsl(var(--primary-600))',
          700: 'hsl(var(--primary-700))',
          800: 'hsl(var(--primary-800))',
          900: 'hsl(var(--primary-900))',
          950: 'hsl(var(--primary-950))',
          foreground: 'hsl(var(--primary-foreground))',
        },
  			secondary: {
          DEFAULT: 'hsl(var(--secondary-400))',
          50: 'hsl(var(--secondary-50))',
          100: 'hsl(var(--secondary-100))',
          200: 'hsl(var(--secondary-200))',
          300: 'hsl(var(--secondary-300))',
          400: 'hsl(var(--secondary-400))',
          500: 'hsl(var(--secondary-500))',
          600: 'hsl(var(--secondary-600))',
          700: 'hsl(var(--secondary-700))',
          800: 'hsl(var(--secondary-800))',
          900: 'hsl(var(--secondary-900))',
          950: 'hsl(var(--secondary-950))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
		blue: {
			DEFAULT: 'hsl(var(--blue-500))',
			50: 'hsl(var(--blue-50))',
			100: 'hsl(var(--blue-100))',
			200: 'hsl(var(--blue-200))',
			300: 'hsl(var(--blue-300))',
			400: 'hsl(var(--blue-400))',
			500: 'hsl(var(--blue-500))',
			600: 'hsl(var(--blue-600))',
			700: 'hsl(var(--blue-700))',
			800: 'hsl(var(--blue-800))',
			900: 'hsl(var(--blue-900))',
			950: 'hsl(var(--blue-950))',
			foreground: 'hsl(var(--secondary-foreground))',
		  },
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
