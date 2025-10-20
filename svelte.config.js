import vercel from '@sveltejs/adapter-vercel';

export default {
  kit: {
    adapter: vercel(),
    prerender: { default: true } // optional if you want static pre-rendering
  }
};
