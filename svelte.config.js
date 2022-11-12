import adapter from "@sveltejs/adapter-auto";
import preprocess from "svelte-preprocess";

const config = {
	kit: {
		adapter: adapter(),
		inlineStyleThreshold: Infinity
	},
	preprocess: [
		preprocess({
			postcss: true,
			preserve: ['ld+json'],
		}),
	],
};

export default config;