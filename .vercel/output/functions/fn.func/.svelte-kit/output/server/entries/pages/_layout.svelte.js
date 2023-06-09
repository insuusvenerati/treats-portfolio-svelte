import { c as create_ssr_component } from "../../chunks/index.js";
const app = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-6xd2a6_START -->${$$result.title = `<title>laura norwood</title>`, ""}<meta name="description" content="Portfolio of laura norwood"><!-- HEAD_svelte-6xd2a6_END -->`, ""}

<nav class="float-left w-64 flex flex-col gap-4"><a href="/">Home</a>
	<a href="/visdev">Visdev</a>
	<a href="/contact">Contact</a></nav>
${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
