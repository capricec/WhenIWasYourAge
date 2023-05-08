import * as server from '../entries/pages/_page.server.js';

export const index = 2;
export const component = async () => (await import('../entries/pages/_page.svelte.js')).default;
export const file = '_app/immutable/components/pages/_page.svelte-d15790d6.js';
export { server };
export const imports = ["_app/immutable/components/pages/_page.svelte-d15790d6.js","_app/immutable/chunks/index-1573d241.js","_app/immutable/chunks/index-1aaecebc.js","_app/immutable/chunks/preload-helper-41c905a7.js"];
export const stylesheets = ["_app/immutable/assets/_page-fc1d466e.css"];
export const fonts = [];
