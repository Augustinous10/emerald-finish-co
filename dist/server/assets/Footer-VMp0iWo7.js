import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { Menu, X } from "lucide-react";
//#region src/assets/Extra_images/ubudasa_logo.png
var ubudasa_logo_default = "/assets/ubudasa_logo-BC-fuoYs.png";
//#endregion
//#region src/components/site/Header.tsx
var links = [
	{
		to: "/services",
		label: "Services"
	},
	{
		to: "/gallery",
		label: "Gallery"
	},
	{
		to: "/blog",
		label: "Blog"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function Header() {
	const [open, setOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 8);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ jsxs("nav", {
		className: `fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${scrolled ? "bg-canvas/85 backdrop-blur-md border-b border-black/5" : "bg-transparent"}`,
		children: [/* @__PURE__ */ jsxs("div", {
			className: "max-w-7xl mx-auto px-6 h-20 flex items-center justify-between",
			children: [
				/* @__PURE__ */ jsx(Link, {
					to: "/",
					className: "flex items-center",
					children: /* @__PURE__ */ jsx("img", {
						src: ubudasa_logo_default,
						alt: "Ubudasa Wall Paints Ltd",
						className: `h-16 md:h-20 w-auto transition-all duration-300 ${scrolled ? "" : "drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]"}`
					})
				}),
				/* @__PURE__ */ jsx("div", {
					className: `hidden md:flex gap-10 text-xs uppercase tracking-widest font-medium ${scrolled ? "text-ink" : "text-canvas"}`,
					children: links.map((l) => /* @__PURE__ */ jsx(Link, {
						to: l.to,
						className: "hover:text-gold transition-colors",
						children: l.label
					}, l.to))
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ jsx(Link, {
						to: "/request-quote",
						className: "hidden md:inline-flex bg-brand text-brand-foreground px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold hover:bg-ink transition-colors",
						children: "Get a Free Quote"
					}), /* @__PURE__ */ jsx("button", {
						type: "button",
						onClick: () => setOpen(!open),
						className: `md:hidden p-2 ${scrolled ? "text-ink" : "text-canvas"}`,
						"aria-label": "Toggle menu",
						children: open ? /* @__PURE__ */ jsx(X, { size: 22 }) : /* @__PURE__ */ jsx(Menu, { size: 22 })
					})]
				})
			]
		}), open && /* @__PURE__ */ jsxs("div", {
			className: "md:hidden bg-canvas border-t border-black/5 px-6 py-6 space-y-4",
			children: [links.map((l) => /* @__PURE__ */ jsx(Link, {
				to: l.to,
				onClick: () => setOpen(false),
				className: "block text-sm uppercase tracking-widest text-ink",
				children: l.label
			}, l.to)), /* @__PURE__ */ jsx(Link, {
				to: "/request-quote",
				onClick: () => setOpen(false),
				className: "block bg-brand text-brand-foreground text-center py-3 rounded-full text-xs uppercase tracking-widest font-semibold",
				children: "Get a Free Quote"
			})]
		})]
	});
}
//#endregion
//#region src/components/site/Footer.tsx
function Footer() {
	return /* @__PURE__ */ jsx("footer", {
		className: "pt-24 pb-12 bg-secondary border-t border-black/5",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-7xl mx-auto px-6",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "grid md:grid-cols-4 gap-12 mb-16",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "space-y-6 md:col-span-2 max-w-sm",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex flex-col leading-none",
							children: [/* @__PURE__ */ jsx("span", {
								className: "font-display text-2xl text-brand",
								children: "UBUDASA"
							}), /* @__PURE__ */ jsx("span", {
								className: "text-[9px] uppercase tracking-[0.3em] text-gold mt-1",
								children: "Wall Paints Ltd"
							})]
						}), /* @__PURE__ */ jsx("p", {
							className: "text-sm text-ink/70 leading-relaxed text-pretty",
							children: "Ubudasa wall paints Ltd is a private company limited by Shares, incorporated on 3July, 2021 company code N°119638573, whose head office is located in City of Kigali, Kicukiro District, Kanombe Sector, Kabeza Cell, KK18st."
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "space-y-4",
						children: [/* @__PURE__ */ jsx("h5", {
							className: "text-[10px] font-semibold uppercase tracking-[0.25em]",
							children: "Visit"
						}), /* @__PURE__ */ jsxs("div", {
							className: "space-y-2 text-sm text-ink/70",
							children: [
								/* @__PURE__ */ jsx("p", { children: "KK 18 Avenue, Kigali" }),
								/* @__PURE__ */ jsx("p", { children: "Kigali, Rwanda" }),
								/* @__PURE__ */ jsx("p", { children: "Mon – Sat · 8am – 6pm" })
							]
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "space-y-4",
						children: [/* @__PURE__ */ jsx("h5", {
							className: "text-[10px] font-semibold uppercase tracking-[0.25em]",
							children: "Contact"
						}), /* @__PURE__ */ jsxs("div", {
							className: "space-y-2 text-sm text-ink/70",
							children: [
								/* @__PURE__ */ jsx("a", {
									href: "tel:+250788679097",
									className: "block hover:text-brand",
									children: "+250 788 679 097"
								}),
								/* @__PURE__ */ jsx("a", {
									href: "tel:+250788789091",
									className: "block hover:text-brand",
									children: "+250 788 789 091"
								}),
								/* @__PURE__ */ jsx("a", {
									href: "mailto:ubudasawallpaints@gmail.com",
									className: "block hover:text-brand",
									children: "ubudasawallpaints@gmail.com"
								}),
								/* @__PURE__ */ jsx(Link, {
									to: "/request-quote",
									className: "block hover:text-brand",
									children: "Request a Quote →"
								})
							]
						})]
					})
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "pt-8 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-4",
				children: [/* @__PURE__ */ jsxs("p", {
					className: "text-[10px] text-ink/50 uppercase tracking-[0.2em]",
					children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" Ubudasa Wall Paints Ltd. All rights reserved."
					]
				}), /* @__PURE__ */ jsxs("p", {
					className: "text-[10px] text-ink/50 uppercase tracking-[0.2em]",
					children: ["CREATED BY ", /* @__PURE__ */ jsx("a", {
						href: "https://www.ikirezi.co.rw",
						target: "_blank",
						rel: "noopener noreferrer",
						className: "hover:text-brand",
						children: "ICYATSI TECHNOLOGY Limited"
					})]
				})]
			})]
		})
	});
}
//#endregion
export { Header as n, Footer as t };
