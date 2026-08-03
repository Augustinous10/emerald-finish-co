import { n as Header, t as Footer } from "./Footer-VMp0iWo7.js";
import { t as WhatsAppButton } from "./WhatsAppButton-rnXxDyOL.js";
import { t as services_Ceiling_default } from "./services_Ceiling-CkX_0LvS.js";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/about.tsx?tsr-split=component
var values = [
	{
		t: "Excellence",
		d: "We hold every brushstroke, every join, every edge to a single standard — exceptional."
	},
	{
		t: "Integrity",
		d: "Honest pricing, clear timelines, transparent material sourcing. No surprises."
	},
	{
		t: "Innovation",
		d: "We invest in new techniques and finishes so Rwandan spaces match the world's best."
	},
	{
		t: "Customer Care",
		d: "We don't finish until the client signs off. Satisfaction is the deliverable."
	}
];
var timeline = [
	{
		y: "2021",
		t: "Ubudasa Wall Paints Ltd incorporated",
		d: "Registered in Kigali as a private company limited by shares, led by co-founders Henriette and Delphine."
	},
	{
		y: "Growth",
		t: "216-strong team",
		d: "Our team has grown to 216 skilled staff, trained continuously to sharpen their craft."
	},
	{
		y: "Recognition",
		t: "Women's Excellence in Business & Leadership award",
		d: "Honoured alongside German Cooperation (GIZ) and 1000 Hills Events for excellence in business and leadership."
	},
	{
		y: "Today",
		t: "A full-service finishing studio",
		d: "Interior and exterior painting, 3D decorative wall tiles, tile application, and modern ceiling design — for homes, hotels, offices, and commercial spaces across Rwanda."
	}
];
function About() {
	return /* @__PURE__ */ jsxs("div", {
		className: "bg-canvas text-ink",
		children: [
			/* @__PURE__ */ jsx(Header, {}),
			/* @__PURE__ */ jsx(WhatsAppButton, {}),
			/* @__PURE__ */ jsxs("section", {
				className: "relative h-[60vh] min-h-[420px] flex items-end overflow-hidden",
				children: [
					/* @__PURE__ */ jsx("img", {
						src: services_Ceiling_default,
						alt: "Ubudasa team at work",
						className: "absolute inset-0 w-full h-full object-cover"
					}),
					/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-brand/80 via-brand/30 to-transparent" }),
					/* @__PURE__ */ jsxs("div", {
						className: "relative z-10 max-w-7xl mx-auto px-6 pb-16 text-canvas",
						children: [/* @__PURE__ */ jsx("span", {
							className: "text-gold text-xs uppercase tracking-[0.4em] font-semibold",
							children: "Our Story"
						}), /* @__PURE__ */ jsx("h1", {
							className: "font-display text-5xl md:text-7xl mt-4 font-medium max-w-3xl text-balance",
							children: "Crafted in Kigali. Built to endure."
						})]
					})
				]
			}),
			/* @__PURE__ */ jsx("section", {
				className: "py-28",
				children: /* @__PURE__ */ jsxs("div", {
					className: "max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "space-y-4",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "text-gold text-xs uppercase tracking-[0.3em] font-semibold",
								children: "Mission"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "font-display text-2xl text-pretty leading-snug",
								children: "Our mission is to help you transform your houses through art and skill using paint, while delivering the very best in quality and customer service. With every project, we thoroughly prepare and clean all surfaces prior to painting."
							}),
							/* @__PURE__ */ jsx("p", {
								className: "font-display text-2xl text-pretty leading-snug",
								children: "As experts and professionals, we work quickly, efficiently, and carefully to complete every job in a timely manner. Throughout the process, we remain in consistent communication with our clients to ensure expectations are not only met but exceeded — all while preserving and protecting our ecosystem."
							})
						]
					}), /* @__PURE__ */ jsxs("div", {
						className: "space-y-4",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "text-gold text-xs uppercase tracking-[0.3em] font-semibold",
								children: "Vision"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "font-display text-2xl text-pretty leading-snug",
								children: "To preserve the ancient Rwandan wall-painting style and adapt it to modern wall painting."
							}),
							/* @__PURE__ */ jsx("p", {
								className: "font-display text-2xl text-pretty leading-snug",
								children: "To help clients create the home, business, or commercial space of their dreams by providing the very highest quality products and working directly with them to capture their vision — we strive for nothing less than 100% customer satisfaction."
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "py-28 bg-secondary",
				children: /* @__PURE__ */ jsxs("div", {
					className: "max-w-7xl mx-auto px-6",
					children: [/* @__PURE__ */ jsx("h2", {
						className: "font-display text-4xl md:text-5xl font-medium mb-14",
						children: "Core values"
					}), /* @__PURE__ */ jsx("div", {
						className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6",
						children: values.map((v) => /* @__PURE__ */ jsxs("div", {
							className: "bg-canvas p-8 space-y-3",
							children: [/* @__PURE__ */ jsx("h3", {
								className: "font-display text-2xl",
								children: v.t
							}), /* @__PURE__ */ jsx("p", {
								className: "text-ink/65 text-sm text-pretty leading-relaxed",
								children: v.d
							})]
						}, v.t))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "py-28",
				children: /* @__PURE__ */ jsxs("div", {
					className: "max-w-4xl mx-auto px-6",
					children: [/* @__PURE__ */ jsx("h2", {
						className: "font-display text-4xl md:text-5xl font-medium mb-14",
						children: "Milestones"
					}), /* @__PURE__ */ jsx("ol", {
						className: "space-y-10 border-l border-brand/20 pl-8",
						children: timeline.map((m) => /* @__PURE__ */ jsxs("li", {
							className: "relative",
							children: [
								/* @__PURE__ */ jsx("span", { className: "absolute -left-[37px] top-1 size-3 bg-gold rounded-full ring-4 ring-canvas" }),
								/* @__PURE__ */ jsx("span", {
									className: "text-gold text-xs uppercase tracking-[0.3em] font-semibold",
									children: m.y
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "font-display text-2xl mt-2",
									children: m.t
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-ink/65 mt-2 text-pretty leading-relaxed",
									children: m.d
								})
							]
						}, m.y))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "py-28 bg-secondary",
				children: /* @__PURE__ */ jsxs("div", {
					className: "max-w-4xl mx-auto px-6 text-center space-y-3",
					children: [
						/* @__PURE__ */ jsx("span", {
							className: "text-gold text-xs uppercase tracking-[0.3em] font-semibold",
							children: "Led by"
						}),
						/* @__PURE__ */ jsx("h2", {
							className: "font-display text-3xl md:text-4xl font-medium",
							children: "Henriette & Delphine"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-ink/65 max-w-xl mx-auto text-pretty leading-relaxed",
							children: "Ubudasa Wall Paints Ltd is owned and led by Henriette and Delphine, based in Kicukiro District, Kigali."
						})
					]
				})
			}),
			/* @__PURE__ */ jsx(Footer, {})
		]
	});
}
//#endregion
export { About as component };
