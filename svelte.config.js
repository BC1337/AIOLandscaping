import { sveltekit } from '@sveltejs/kit/vite';
import vercel from '@sveltejs/adapter-vercel';
import { preprocess } from 'svelte/compiler'; // optional, if you need preprocessing

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Use Vite preprocessing (handles SCSS, PostCSS, etc.)
	preprocess: [],

	kit: {
		adapter: vercel()
	}
};

export default config;
