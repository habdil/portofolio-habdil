// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  extend: {
		colors: {
		  // Base colors
		  'base-black': '#000000',
		  'base-white': '#FFFFFF',
		  
		  // Blues
		  'blue': {
			dark: '#0B3042',
			medium: '#173443',
			light: '#286F6B'
		  },
		  
		  // Teals
		  'teal': {
			DEFAULT: '#296E69',
			dark: '#38766B'
		  },
		  
		  // Reds
		  'red': {
			DEFAULT: '#ED6245',
			dark: '#900406'
		  },
		  
		  // Accent colors
		  'salmon': '#E59987',
		  'gold': '#ECC142',
		  
		  // Grays
		  'gray': {
			light: '#F8F7F2',
			lighter: '#F6F6F6',
			white: '#FFFFFF'
		  },

		  animation: {
			'float': 'float 6s ease-in-out infinite',
		  },
		  keyframes: {
			float: {
			  '0%, 100%': { transform: 'translateY(0)' },
			  '50%': { transform: 'translateY(-20px)' },
			}
		  },
		  transitionTimingFunction: {
			'bounce-soft': 'cubic-bezier(0.4, 0, 0.2, 1)',
		  },
		}
	  }
	},
	plugins: []
  }