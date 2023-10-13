/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#DDDDDD",
				"primary-dark": "#202020",
				"primary-bg-dark": "#202020",
				"primary-bg-light": "#DDDDDD",
				active: "#D77A45",
			},
			borderRadius: {
				large: "50px",
				medium: "25px",
			},
			screens: {
				mobile: "400px",
				tablet: "768px",
				laptop: "1024px",
			},
		},
	},
	plugins: [],
};
