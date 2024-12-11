import type { Config } from 'tailwindcss'

export default {
	darkMode: 'class',
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				apple: [
					'-apple-system',
					'BlinkMacSystemFont',
					'"Segoe UI"',
					'Roboto',
					'"Helvetica Neue"',
					'Arial',
					'sans-serif',
				],
			},
			colors: {
				dark: {
					background: '#121212',
					'background-secondary': '#1f1f1f',
					text: '#E0E0E0',
					'text-secondary': '#B0B0B0',
					heading: '#FFFFFF',
					primary: '#BB86FC',
					secondary: '#03DAC6',
					border: '#333333',
					'border-light': '#444444',
					error: '#CF6679',
					warning: '#FFB74D',
				},
				light: {
					background: '#FFFFFF',
					'background-secondary': '#F5F5F5',
					text: '#333333',
					'text-secondary': '#666666',
					heading: '#111111',
					primary: '#6200EE',
					secondary: '#018786',
					border: '#E0E0E0',
					'border-light': '#DDDDDD',
					error: '#B00020',
					warning: '#FF8F00',
				},
			},
		},
	},
	plugins: [],
} satisfies Config
