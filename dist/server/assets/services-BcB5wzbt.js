import { n as Header, t as Footer } from "./Footer-VMp0iWo7.js";
import { t as WhatsAppButton } from "./WhatsAppButton-cIgtjtFI.js";
import { t as services_Ceiling_default } from "./services_Ceiling-CkX_0LvS.js";
import { n as services_Interior_design_default, t as services_Kitchen_default } from "./services_Kitchen-BJ6yOj-4.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/assets/services_Exterior design.jpeg
var services_Exterior_design_default = "/assets/services_Exterior%20design-DAppksB9.jpeg";
//#endregion
//#region src/assets/services_American wall.jpeg
var services_American_wall_default = "/assets/services_American%20wall-BzX38BOZ.jpeg";
//#endregion
//#region src/routes/services.tsx?tsr-split=component
var list = [
	{
		t: "Interior wall painting",
		d: "Full interior wall painting with premium paint brands and master-grade application.",
		img: services_Interior_design_default
	},
	{
		t: "Exterior wall painting",
		d: "Weather-resistant exterior coatings engineered for Rwandan rainy seasons.",
		img: services_Exterior_design_default
	},
	{
		t: "Three-dimensional finishes",
		d: "Textured, stencil, marble, and metallic artistic wall finishes.",
		img: services_American_wall_default
	},
	{
		t: "TV Wall Design",
		d: "Custom built-in TV wall units with integrated LED architectural lighting.",
		img: "/assets/service_tv_wall-CL7McLPN.jpeg"
	},
	{
		t: "artistic wall designs",
		d: "False ceilings, coffered designs, and LED panel installations.",
		img: services_Ceiling_default
	},
	{
		t: "Modern Kitchen Design",
		d: "Full kitchen renovation and finishing with premium cabinetry.",
		img: services_Kitchen_default
	},
	{
		t: "modern floors and modern ceilings design",
		d: "Tile, waterproofing, fittings, and complete bathroom transformations.",
		img: services_Ceiling_default
	},
	{
		t: "treatment and prevention of wall humidity",
		d: "Furniture arrangement, soft furnishings, and full décor styling.",
		img: services_American_wall_default
	},
	{
		t: "Commercial Painting",
		d: "Offices, hotels, warehouses, and large-scale commercial projects.",
		img: services_Exterior_design_default
	},
	{
		t: "Home Renovation",
		d: "Complete home makeovers — floor to ceiling, on schedule and on budget.",
		img: services_Interior_design_default
	}
];
function Services() {
	return /* @__PURE__ */ jsxs("div", {
		className: "bg-canvas text-ink",
		children: [
			/* @__PURE__ */ jsx(Header, {}),
			/* @__PURE__ */ jsx(WhatsAppButton, {}),
			/* @__PURE__ */ jsx("section", {
				className: "pt-36 pb-16 bg-secondary",
				children: /* @__PURE__ */ jsxs("div", {
					className: "max-w-7xl mx-auto px-6",
					children: [/* @__PURE__ */ jsx("span", {
						className: "text-gold text-xs uppercase tracking-[0.4em] font-semibold",
						children: "Services"
					}), /* @__PURE__ */ jsx("h1", {
						className: "font-display text-5xl md:text-7xl mt-4 font-medium max-w-3xl text-balance",
						children: "Ten services. One uncompromising standard."
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "py-20",
				children: /* @__PURE__ */ jsx("div", {
					className: "max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6",
					children: list.map((s) => /* @__PURE__ */ jsxs("article", {
						className: "bg-secondary overflow-hidden group",
						children: [/* @__PURE__ */ jsx("div", {
							className: "aspect-[4/3] overflow-hidden",
							children: /* @__PURE__ */ jsx("img", {
								src: s.img,
								alt: s.t,
								loading: "lazy",
								className: "w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
							})
						}), /* @__PURE__ */ jsxs("div", {
							className: "p-7 space-y-3",
							children: [
								/* @__PURE__ */ jsx("h2", {
									className: "font-display text-2xl",
									children: s.t
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-ink/65 text-sm text-pretty leading-relaxed",
									children: s.d
								}),
								/* @__PURE__ */ jsx(Link, {
									to: "/request-quote",
									className: "inline-block text-brand text-xs font-semibold uppercase tracking-widest border-b border-brand/20 pb-1",
									children: "Request Quote"
								})
							]
						})]
					}, s.t))
				})
			}),
			/* @__PURE__ */ jsx(Footer, {})
		]
	});
}
//#endregion
export { Services as component };
