import { t as supabase } from "./client-DR4jfEwv.js";
import { t as hero_default } from "./hero-sbk2eZqF.js";
import { n as Header, t as Footer } from "./Footer-VMp0iWo7.js";
import { t as WhatsAppButton } from "./WhatsAppButton-cIgtjtFI.js";
import { useEffect, useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { X } from "lucide-react";
//#region src/routes/gallery.tsx?tsr-split=component
var modules = /* #__PURE__ */ Object.assign({});
function buildItems() {
	const entries = Object.entries(modules).map(([path, src]) => {
		const base = (path.split("/").pop() ?? "").replace(/\.[^.]+$/, "");
		const [rawCat, rawTitle] = base.includes("--") ? base.split("--") : ["all", base];
		const category = rawCat.replace(/[-_]/g, " ").trim().toLowerCase();
		return {
			src,
			name: (rawTitle ?? base).replace(/^\d+[-_]?/, "").replace(/[-_]/g, " ").replace(/\b\w/g, (m) => m.toUpperCase()).trim(),
			category
		};
	}).sort((a, b) => a.name.localeCompare(b.name));
	if (entries.length > 0) return entries;
	return Array.from({ length: 6 }).map((_, i) => ({
		src: hero_default,
		name: `Featured Project ${i + 1}`,
		category: "featured"
	}));
}
function titleCase(s) {
	return s.replace(/\b\w/g, (m) => m.toUpperCase());
}
function slugify(s) {
	return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
function Gallery() {
	const fileItems = useMemo(buildItems, []);
	const [dbItems, setDbItems] = useState([]);
	useEffect(() => {
		(async () => {
			const { data } = await supabase.from("gallery_projects").select("title, category, image_path").eq("published", true).order("sort_order");
			if (!data?.length) return;
			setDbItems((await Promise.all(data.map(async (p) => {
				const { data: signed } = await supabase.storage.from("gallery").createSignedUrl(p.image_path, 3600 * 24 * 7);
				return signed?.signedUrl ? {
					src: signed.signedUrl,
					name: p.title,
					category: p.category
				} : null;
			}))).filter(Boolean));
		})();
	}, []);
	const items = useMemo(() => {
		const merged = [...dbItems, ...fileItems];
		return dbItems.length > 0 ? dbItems : merged;
	}, [dbItems, fileItems]);
	const grouped = useMemo(() => {
		const map = /* @__PURE__ */ new Map();
		for (const item of items) {
			const key = item.category || "all";
			if (!map.has(key)) map.set(key, []);
			map.get(key).push(item);
		}
		return Array.from(map.entries()).sort((a, b) => a[0].localeCompare(b[0]));
	}, [items]);
	const categories = useMemo(() => grouped.map(([c]) => c), [grouped]);
	const [lightbox, setLightbox] = useState(null);
	return /* @__PURE__ */ jsxs("div", {
		className: "bg-canvas text-ink",
		children: [
			/* @__PURE__ */ jsx(Header, {}),
			/* @__PURE__ */ jsx(WhatsAppButton, {}),
			/* @__PURE__ */ jsxs("section", {
				className: "pt-40 pb-16 px-6 max-w-7xl mx-auto",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "text-xs uppercase tracking-[0.4em] text-gold mb-4",
						children: "Portfolio"
					}),
					/* @__PURE__ */ jsx("h1", {
						className: "font-display text-5xl md:text-7xl text-brand leading-[1.05] max-w-4xl",
						children: "Spaces we've transformed across Rwanda."
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-6 max-w-2xl text-ink/70 text-lg",
						children: "A living archive of interiors, exteriors, gypsum ceilings, decorative finishes and full renovations — each delivered to the Ubudasa standard."
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-10 flex flex-wrap gap-2",
						children: categories.map((c) => /* @__PURE__ */ jsx("a", {
							href: `#${slugify(c)}`,
							className: "px-4 py-2 rounded-full text-xs uppercase tracking-widest border border-black/15 text-ink hover:border-brand hover:text-brand transition-colors",
							children: titleCase(c)
						}, c))
					})
				]
			}),
			grouped.length === 0 && /* @__PURE__ */ jsx("section", {
				className: "px-6 max-w-7xl mx-auto pb-24",
				children: /* @__PURE__ */ jsx("p", {
					className: "text-center text-ink/60 py-20",
					children: "No projects yet."
				})
			}),
			grouped.map(([category, catItems]) => /* @__PURE__ */ jsxs("section", {
				id: slugify(category),
				className: "px-6 max-w-7xl mx-auto pb-20 scroll-mt-28",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-end justify-between gap-6 mb-8 border-b border-black/10 pb-4",
					children: [/* @__PURE__ */ jsx("h2", {
						className: "font-display text-3xl md:text-4xl",
						children: titleCase(category)
					}), /* @__PURE__ */ jsxs("span", {
						className: "text-xs uppercase tracking-[0.3em] text-ink/45",
						children: [
							catItems.length,
							" ",
							catItems.length === 1 ? "project" : "projects"
						]
					})]
				}), /* @__PURE__ */ jsx("div", {
					className: "columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]",
					children: catItems.map((item, idx) => /* @__PURE__ */ jsxs("button", {
						type: "button",
						onClick: () => setLightbox(item),
						className: "mb-6 block w-full break-inside-avoid group relative overflow-hidden rounded-md bg-ink/5",
						children: [
							/* @__PURE__ */ jsx("img", {
								src: item.src,
								alt: item.name,
								loading: "lazy",
								className: "w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
							}),
							/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" }),
							/* @__PURE__ */ jsxs("div", {
								className: "absolute bottom-0 left-0 right-0 p-5 text-left opacity-0 group-hover:opacity-100 transition-opacity duration-500",
								children: [/* @__PURE__ */ jsx("p", {
									className: "text-[10px] uppercase tracking-[0.3em] text-gold",
									children: item.category
								}), /* @__PURE__ */ jsx("p", {
									className: "font-display text-xl text-canvas mt-1",
									children: item.name
								})]
							})
						]
					}, `${item.src}-${idx}`))
				})]
			}, category)),
			/* @__PURE__ */ jsx("section", {
				className: "bg-brand text-brand-foreground py-20 px-6",
				children: /* @__PURE__ */ jsxs("div", {
					className: "max-w-4xl mx-auto text-center",
					children: [
						/* @__PURE__ */ jsx("h2", {
							className: "font-display text-4xl md:text-5xl",
							children: "Your space could be next."
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-4 text-canvas/80 max-w-xl mx-auto",
							children: "Tell us about your project and our team will visit, measure, and design a finish that elevates your space."
						}),
						/* @__PURE__ */ jsx(Link, {
							to: "/request-quote",
							className: "inline-block mt-8 bg-gold text-brand px-8 py-4 rounded-full text-xs uppercase tracking-widest font-semibold hover:bg-canvas transition-colors",
							children: "Request a Free Quote"
						})
					]
				})
			}),
			/* @__PURE__ */ jsx(Footer, {}),
			lightbox && /* @__PURE__ */ jsxs("div", {
				className: "fixed inset-0 z-[100] bg-ink/90 backdrop-blur-sm flex items-center justify-center p-4",
				onClick: () => setLightbox(null),
				children: [/* @__PURE__ */ jsx("button", {
					type: "button",
					onClick: () => setLightbox(null),
					className: "absolute top-6 right-6 text-canvas p-2 hover:text-gold",
					"aria-label": "Close",
					children: /* @__PURE__ */ jsx(X, { size: 28 })
				}), /* @__PURE__ */ jsxs("figure", {
					className: "max-w-6xl max-h-[90vh]",
					onClick: (e) => e.stopPropagation(),
					children: [/* @__PURE__ */ jsx("img", {
						src: lightbox.src,
						alt: lightbox.name,
						className: "max-h-[80vh] w-auto mx-auto object-contain rounded"
					}), /* @__PURE__ */ jsxs("figcaption", {
						className: "text-center mt-4 text-canvas",
						children: [/* @__PURE__ */ jsx("p", {
							className: "text-[10px] uppercase tracking-[0.3em] text-gold",
							children: lightbox.category
						}), /* @__PURE__ */ jsx("p", {
							className: "font-display text-2xl mt-1",
							children: lightbox.name
						})]
					})]
				})]
			})
		]
	});
}
//#endregion
export { Gallery as component };
