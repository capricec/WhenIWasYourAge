import { c as create_ssr_component, v as validate_component } from "../../chunks/index2.js";
const app = "";
const Header_svelte_svelte_type_style_lang = "";
const css = {
  code: ".wordmark.svelte-uh0ss5.svelte-uh0ss5{max-width:15em;margin:0 auto;padding:1em 0}.wordmark.svelte-uh0ss5 a.svelte-uh0ss5{border:none;display:block;font-size:30px;text-align:center;color:var(--color-fg);color:white}.wordmark.svelte-uh0ss5 a.svelte-uh0ss5:hover{background-color:transparent}.wordmark svg path{fill:currentColor}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<header class="${"ontop"}"><div class="${"wordmark svelte-uh0ss5"}"><a href="${"https://originaldatum.com/"}" aria-label="${"Original Datum"}" class="${"svelte-uh0ss5"}">Original Datum</a></div>
</header>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
<main id="${"content"}">${slots.default ? slots.default({}) : ``}</main>`;
});
export {
  Layout as default
};
