/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.tsx", "./index.html"],
	theme: {
		fontFamily: {
			sans: ["Manrope", "sans-serif"],
		},
		extend: {
			colors: {
				blue: {
					dark_gray: "hsl(217, 19%, 35%)",
					desaturated: "hsl(214, 17%, 51%)",
					gray: "hsl(212, 23%, 69%)",
					light: "hsl(210, 46%, 95%)",
				},
			},
		},
	},
	plugins: [],
};
