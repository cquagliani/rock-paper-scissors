/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: "jit",
	purge: ["./src/**/*.{html, js}"],
	corePlugins: {
		preflight: false,
	},
	content: ["./src/**/*.{html, js}"],
	theme: {
		extend: {
			fontFamily: {
				display: ["Sora", "Inter", "sans-serif"],
				body: ["Sora", "Inter", "sans-serif"],
			},
			colors: {
				purple: "#6876CF",
				blue: "#38BDF8",
				blueGradient: "#173755",
				background: "#0F182A",
				pink: "#E86EAE",
				gray: "#647386",
			},
		},
	},
	plugins: [],
};