import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter({
      fallback: 'index.html', // SPA fallback
      strict: false           // ignore missing prerendered pages
    }),
    prerender: {
      entries: ['*']          // prerender all reachable pages
    }
  }
};
