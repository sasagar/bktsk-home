/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				"bktsk-blue": {
					50: "#f0f3ff",
					100: "#e4e9ff",
					200: "#ccd5ff",
					300: "#a4b2ff",
					400: "#707eff",
					500: "#373fff",
					600: "#130fff",
					700: "#0000ff",
					800: "#0002da",
					900: "#0000ac",
					950: "#00087a",
				},
				"bktsk-yellow": {
					50: "#fbffe7",
					100: "#f4ffc1",
					200: "#eeff86",
					300: "#ecff41",
					400: "#f2ff0d",
					500: "#ffff00",
					600: "#d1bf00",
					700: "#a68b02",
					800: "#896c0a",
					900: "#74580f",
					950: "#443004",
				},
			},
		},
	},
	plugins: [require("tailwind-scrollbar")],
};
