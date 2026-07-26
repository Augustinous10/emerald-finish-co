import { n as Header, t as Footer } from "./Footer-VMp0iWo7.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/blog.$slug.tsx?tsr-shared=1
function NotFound() {
	return /* @__PURE__ */ jsxs("div", {
		className: "bg-canvas min-h-screen",
		children: [
			/* @__PURE__ */ jsx(Header, {}),
			/* @__PURE__ */ jsxs("div", {
				className: "pt-40 pb-24 px-6 max-w-2xl mx-auto text-center",
				children: [/* @__PURE__ */ jsx("h1", {
					className: "font-display text-5xl text-brand",
					children: "Post not found"
				}), /* @__PURE__ */ jsx(Link, {
					to: "/blog",
					className: "inline-block mt-6 text-brand hover:text-gold",
					children: "← Back to blog"
				})]
			}),
			/* @__PURE__ */ jsx(Footer, {})
		]
	});
}
//#endregion
export { NotFound as t };
