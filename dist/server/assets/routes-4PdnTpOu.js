import { t as hero_default } from "./hero-sbk2eZqF.js";
import { n as Header, t as Footer } from "./Footer-VMp0iWo7.js";
import { t as WhatsAppButton } from "./WhatsAppButton-cIgtjtFI.js";
import { t as services_Ceiling_default } from "./services_Ceiling-CkX_0LvS.js";
import { n as services_Interior_design_default, t as services_Kitchen_default } from "./services_Kitchen-BJ6yOj-4.js";
import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowUpRight, Award, Brush, Heart, MapPin, Sparkles, Users } from "lucide-react";
//#region src/components/site/BeforeAfter.tsx
function BeforeAfter({ beforeSrc, afterSrc, beforeAlt = "Before", afterAlt = "After" }) {
	const containerRef = useRef(null);
	const [pos, setPos] = useState(50);
	const draggingRef = useRef(false);
	const updateFromEvent = useCallback((clientX) => {
		const el = containerRef.current;
		if (!el) return;
		const rect = el.getBoundingClientRect();
		const pct = (clientX - rect.left) / rect.width * 100;
		setPos(Math.max(0, Math.min(100, pct)));
	}, []);
	return /* @__PURE__ */ jsxs("div", {
		ref: containerRef,
		className: "relative aspect-video rounded-md overflow-hidden select-none cursor-ew-resize bg-black",
		onMouseDown: (e) => {
			draggingRef.current = true;
			updateFromEvent(e.clientX);
		},
		onMouseMove: (e) => draggingRef.current && updateFromEvent(e.clientX),
		onMouseUp: () => draggingRef.current = false,
		onMouseLeave: () => draggingRef.current = false,
		onTouchStart: (e) => updateFromEvent(e.touches[0].clientX),
		onTouchMove: (e) => updateFromEvent(e.touches[0].clientX),
		children: [
			/* @__PURE__ */ jsx("img", {
				src: afterSrc,
				alt: afterAlt,
				className: "absolute inset-0 w-full h-full object-cover",
				draggable: false
			}),
			/* @__PURE__ */ jsx("div", {
				className: "absolute inset-0 overflow-hidden",
				style: { width: `${pos}%` },
				children: /* @__PURE__ */ jsx("img", {
					src: beforeSrc,
					alt: beforeAlt,
					className: "absolute inset-0 h-full object-cover",
					style: {
						width: containerRef.current?.clientWidth ?? "100vw",
						maxWidth: "none"
					},
					draggable: false
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "absolute inset-y-0 w-px bg-canvas shadow-[0_0_0_1px_rgba(0,0,0,0.1)]",
				style: { left: `${pos}%` },
				children: /* @__PURE__ */ jsx("div", {
					className: "absolute top-1/2 -translate-y-1/2 -translate-x-1/2 size-11 bg-canvas rounded-full grid place-items-center ring-4 ring-black/10",
					children: /* @__PURE__ */ jsxs("div", {
						className: "flex gap-1",
						children: [/* @__PURE__ */ jsx("div", { className: "w-0.5 h-3.5 bg-ink/50" }), /* @__PURE__ */ jsx("div", { className: "w-0.5 h-3.5 bg-ink/50" })]
					})
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "absolute bottom-6 left-6 bg-black/40 backdrop-blur-md text-canvas px-3 py-1 text-[10px] uppercase tracking-[0.25em]",
				children: "Before"
			}),
			/* @__PURE__ */ jsx("div", {
				className: "absolute bottom-6 right-6 bg-brand/80 backdrop-blur-md text-canvas px-3 py-1 text-[10px] uppercase tracking-[0.25em]",
				children: "After"
			})
		]
	});
}
//#endregion
//#region src/components/site/StatCounter.tsx
function StatCounter({ value, suffix = "", duration = 1600 }) {
	const [n, setN] = useState(0);
	const ref = useRef(null);
	const startedRef = useRef(false);
	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver((entries) => {
			entries.forEach((e) => {
				if (e.isIntersecting && !startedRef.current) {
					startedRef.current = true;
					const start = performance.now();
					const tick = (now) => {
						const p = Math.min(1, (now - start) / duration);
						const eased = 1 - Math.pow(1 - p, 3);
						setN(Math.floor(value * eased));
						if (p < 1) requestAnimationFrame(tick);
						else setN(value);
					};
					requestAnimationFrame(tick);
				}
			});
		}, { threshold: .4 });
		io.observe(el);
		return () => io.disconnect();
	}, [value, duration]);
	return /* @__PURE__ */ jsxs("span", {
		ref,
		children: [n.toLocaleString(), suffix]
	});
}
//#endregion
//#region src/components/site/HeroSlideshow.tsx
function HeroSlideshow({ slides, interval = 6e3 }) {
	const [active, setActive] = useState(0);
	const [paused, setPaused] = useState(false);
	const next = useCallback(() => {
		setActive((i) => (i + 1) % slides.length);
	}, [slides.length]);
	useEffect(() => {
		if (paused) return;
		const t = setInterval(next, interval);
		return () => clearInterval(t);
	}, [
		next,
		interval,
		paused
	]);
	return /* @__PURE__ */ jsxs("section", {
		className: "relative h-[92vh] min-h-[560px] overflow-hidden bg-ink",
		onMouseEnter: () => setPaused(true),
		onMouseLeave: () => setPaused(false),
		children: [
			slides.map((s, i) => /* @__PURE__ */ jsxs("div", {
				className: "absolute inset-0 transition-opacity duration-1000 ease-out",
				style: {
					opacity: i === active ? 1 : 0,
					zIndex: i === active ? 1 : 0
				},
				"aria-hidden": i !== active,
				children: [/* @__PURE__ */ jsx("img", {
					src: s.img,
					alt: s.title,
					className: "w-full h-full object-cover",
					style: { animation: i === active ? "heroZoom 8s ease-out forwards" : "none" },
					loading: i === 0 ? "eager" : "lazy",
					fetchPriority: i === 0 ? "high" : "auto"
				}), /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/30 to-ink/10" })]
			}, s.title)),
			/* @__PURE__ */ jsx("div", {
				className: "relative z-10 h-full flex flex-col justify-end",
				children: /* @__PURE__ */ jsxs("div", {
					className: "max-w-7xl mx-auto px-6 pb-20 md:pb-24 w-full",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "max-w-2xl text-canvas",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "text-gold text-xs uppercase tracking-[0.3em] font-semibold",
								children: slides[active].eyebrow
							}),
							/* @__PURE__ */ jsx("h1", {
								className: "font-display text-4xl md:text-6xl font-medium mt-4 leading-[1.05] text-balance",
								children: slides[active].title
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-canvas/80 text-lg mt-5 max-w-lg text-pretty",
								children: slides[active].body
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex flex-wrap gap-4 mt-8",
								children: [/* @__PURE__ */ jsx(Link, {
									to: "/request-quote",
									className: "bg-gold text-gold-foreground px-7 py-4 text-xs font-semibold uppercase tracking-widest hover:bg-canvas transition-colors",
									children: "Get a Free Quote"
								}), /* @__PURE__ */ jsx(Link, {
									to: "/services",
									className: "border border-canvas/40 text-canvas px-7 py-4 text-xs font-semibold uppercase tracking-widest hover:bg-canvas/10 transition-colors",
									children: "View Our Work"
								})]
							})
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "flex gap-2 mt-12",
						children: slides.map((s, i) => /* @__PURE__ */ jsx("button", {
							onClick: () => setActive(i),
							"aria-label": `Show slide ${i + 1}: ${s.title}`,
							className: "h-1 rounded-full transition-all duration-300",
							style: {
								width: i === active ? "2.5rem" : "1.25rem",
								backgroundColor: i === active ? "#C9A227" : "rgba(255,255,255,0.35)"
							}
						}, s.title))
					})]
				})
			}),
			/* @__PURE__ */ jsx("style", { children: `
        @keyframes heroZoom {
          from { transform: scale(1); }
          to { transform: scale(1.08); }
        }
        @media (prefers-reduced-motion: reduce) {
          img { animation: none !important; }
        }
      ` })
		]
	});
}
//#endregion
//#region src/assets/product-1.jpg
var product_1_default = "/assets/product-1-BGddQyrr.jpg";
//#endregion
//#region src/assets/product-2.jpg
var product_2_default = "/assets/product-2-BIJz5WOG.jpg";
//#endregion
//#region src/assets/product-3.jpg
var product_3_default = "/assets/product-3-BMklE-7A.jpg";
//#endregion
//#region src/assets/product-4.jpg
var product_4_default = "/assets/product-4-C2LqJSoH.jpg";
//#endregion
//#region src/assets/before.jpg
var before_default = "/assets/before-D2wiasQd.jpg";
//#endregion
//#region src/assets/after.jpg
var after_default = "/assets/after-BV4q70w-.jpg";
//#endregion
//#region src/routes/index.tsx?tsr-split=component
var slides = [
	{
		eyebrow: "Premium Wall Finishing",
		title: "Transform Your Space Into A Masterpiece",
		body: "Architectural painting and interior finishing tailored for Kigali's finest spaces.",
		img: hero_default
	},
	{
		eyebrow: "Interior Craft",
		title: "Every Room, Flawlessly Finished",
		body: "Premium application using luxury European techniques for a lasting finish.",
		img: services_Interior_design_default
	},
	{
		eyebrow: "Decorative Ceilings",
		title: "Architectural Depth, Overhead",
		body: "Bespoke gypsum ceilings and wall features designed for your space.",
		img: services_Ceiling_default
	},
	{
		eyebrow: "Kitchen Renovation",
		title: "Culinary Spaces, Reimagined",
		body: "Full makeovers integrating modern functionality and premium finishes.",
		img: services_Kitchen_default
	},
	{
		eyebrow: "Decorative Finishes",
		title: "Texture That Turns Heads",
		body: "Marble-effect and artistic finishes applied by master craftsmen.",
		img: product_3_default
	},
	{
		eyebrow: "The Transformation",
		title: "See The Ubudasa Difference",
		body: "Real before-and-after results from projects across Rwanda.",
		img: after_default
	}
];
var services = [
	{
		title: "Interior Painting",
		desc: "Premium application using luxury European techniques for a flawless finish.",
		img: services_Interior_design_default
	},
	{
		title: "Gypsum & Ceilings",
		desc: "Bespoke ceiling installations and decorative wall features for architectural depth.",
		img: services_Ceiling_default
	},
	{
		title: "Kitchen Renovation",
		desc: "Full culinary space makeovers integrating modern functionality and aesthetics.",
		img: services_Kitchen_default
	},
	{
		title: "Exterior Painting",
		desc: "Weather-resistant coatings engineered for Rwandan rainy seasons.",
		img: services_Interior_design_default
	},
	{
		title: "TV Wall Design",
		desc: "Custom built-in media walls with integrated LED architectural lighting.",
		img: services_Ceiling_default
	},
	{
		title: "Bathroom Renovation",
		desc: "Waterproofing, tiling and fittings — a complete bathroom transformation.",
		img: services_Kitchen_default
	}
];
var products = [
	{
		name: "Interior Matte Silk",
		sub: "200+ Custom Colors · 4L",
		price: 18e3,
		img: product_1_default
	},
	{
		name: "Smooth Base Putty",
		sub: "Professional Grade · 5kg",
		price: 9e3,
		img: product_2_default
	},
	{
		name: "Marble Effect Finish",
		sub: "Artistic Texture · 5kg",
		price: 28e3,
		img: product_3_default
	},
	{
		name: "Exterior Guard Plus",
		sub: "Weather Resistant · 4L",
		price: 22e3,
		img: product_4_default
	}
];
var whys = [
	{
		icon: Sparkles,
		t: "No Fixed Formula",
		d: "We don't repeat the same design twice — every wall is a fresh exploration, kept unique and new for each client."
	},
	{
		icon: Brush,
		t: "3D Decorative Finishes",
		d: "Interior and exterior wall paints applied in distinctive 3D dimensions, built to give any space depth and character."
	},
	{
		icon: Heart,
		t: "Born From Passion",
		d: "Founded in 2021 by Delphine Umugwizawase, who turned a personal love of painting into a company built on craft."
	},
	{
		icon: Users,
		t: "A Women-Led Team",
		d: "Six permanent professionals and a wider crew of part-timers — 70% of them women — trained and proud of every finish."
	},
	{
		icon: MapPin,
		t: "Rooted in Kigali",
		d: "Based in Kanombe, Kicukiro — close to the homes and businesses we serve across Rwanda."
	},
	{
		icon: Award,
		t: "A Growing Community",
		d: "A trusted name in Kigali's finishing scene, with a loyal following of clients who return for every new project."
	}
];
var testimonials = [
	{
		name: "Aline U.",
		loc: "Kicukiro, Kigali",
		text: "Ubudasa transformed our living room into something straight out of a design magazine. The attention to detail was unmatched."
	},
	{
		name: "Eric M.",
		loc: "Hotel Manager, Nyarugenge",
		text: "We've worked with three painting companies in Kigali. Ubudasa is in a league of its own — professional, clean, on time."
	},
	{
		name: "Sandrine K.",
		loc: "Property Developer, Gasabo",
		text: "Their finish quality holds up beautifully across all 14 apartments. We won't use anyone else for our future projects."
	}
];
function fmtRWF(n) {
	return new Intl.NumberFormat("en-RW").format(n);
}
function Home() {
	return /* @__PURE__ */ jsxs("div", {
		className: "bg-canvas text-ink",
		children: [
			/* @__PURE__ */ jsx(Header, {}),
			/* @__PURE__ */ jsx(WhatsAppButton, {}),
			/* @__PURE__ */ jsx(HeroSlideshow, { slides }),
			/* @__PURE__ */ jsx("section", {
				className: "py-14 bg-ink text-canvas",
				children: /* @__PURE__ */ jsx("div", {
					className: "max-w-7xl mx-auto px-6",
					children: /* @__PURE__ */ jsx("div", {
						className: "grid grid-cols-2 md:grid-cols-4 gap-8 md:divide-x md:divide-canvas/10",
						children: [
							{
								v: 500,
								s: "+",
								l: "Projects Completed"
							},
							{
								v: 1200,
								s: "+",
								l: "Happy Clients"
							},
							{
								v: 45,
								s: "+",
								l: "Certified Experts"
							},
							{
								v: 98,
								s: "%",
								l: "Satisfaction Rate"
							}
						].map((it) => /* @__PURE__ */ jsxs("div", {
							className: "text-center md:text-left md:pl-8",
							children: [/* @__PURE__ */ jsx("span", {
								className: "block font-display text-4xl md:text-5xl mb-1 text-gold",
								children: /* @__PURE__ */ jsx(StatCounter, {
									value: it.v,
									suffix: it.s
								})
							}), /* @__PURE__ */ jsx("span", {
								className: "text-[10px] uppercase tracking-[0.25em] text-canvas/60",
								children: it.l
							})]
						}, it.l))
					})
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "py-28 bg-canvas",
				children: /* @__PURE__ */ jsxs("div", {
					className: "max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "lg:col-span-5 relative",
						children: [/* @__PURE__ */ jsx("div", {
							className: "aspect-[4/5] overflow-hidden",
							children: /* @__PURE__ */ jsx("img", {
								src: services_Interior_design_default,
								alt: "Ubudasa Wall Paints craftsmen at work in Kigali",
								loading: "lazy",
								className: "w-full h-full object-cover"
							})
						}), /* @__PURE__ */ jsxs("div", {
							className: "absolute -bottom-6 -right-6 bg-brand text-canvas p-6 hidden md:block",
							children: [/* @__PURE__ */ jsx("div", {
								className: "font-display text-4xl text-gold",
								children: "10+"
							}), /* @__PURE__ */ jsx("div", {
								className: "text-[10px] uppercase tracking-[0.25em] mt-1",
								children: "Years of Craft"
							})]
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "lg:col-span-7 space-y-6",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "text-gold text-xs uppercase tracking-[0.3em] font-semibold",
								children: "Company Profile"
							}),
							/* @__PURE__ */ jsx("h2", {
								className: "font-display text-4xl md:text-5xl font-medium text-balance leading-[1.1]",
								children: "Rwanda's trusted name in premium wall finishing."
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-ink/70 text-lg leading-relaxed text-pretty",
								children: "Ubudasa Wall Paints Ltd is a Kigali-based architectural finishing studio specialising in interior and exterior painting, decorative plasters, gypsum ceilings, TV wall design, and full renovation work. From private villas to hotels, offices and developer projects, we deliver finishes that elevate every surface and endure every season."
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-ink/70 leading-relaxed text-pretty",
								children: "Founded on a commitment to craftsmanship and accountability, our certified teams have completed 500+ projects across 15+ districts — using only premium-grade materials and luxury European application techniques."
							}),
							/* @__PURE__ */ jsxs("dl", {
								className: "grid sm:grid-cols-2 gap-x-8 gap-y-5 pt-4 border-t border-black/10",
								children: [
									/* @__PURE__ */ jsxs("div", { children: [
										/* @__PURE__ */ jsx("dt", {
											className: "text-[10px] uppercase tracking-[0.25em] text-ink/55",
											children: "Mission"
										}),
										/* @__PURE__ */ jsx("dd", {
											className: "mt-2 text-sm text-ink/80",
											children: "Our mission is to help you transform your houses through art and skills from paints. While delivering the very best in quality and customer service. With every project, we thoroughly prepare and clean all surfaces prior to painting"
										}),
										/* @__PURE__ */ jsx("dd", {
											className: "mt-2 text-sm text-ink/80",
											children: "As expert and professional, we work quickly, efficiently, and carefully to complete the job in a timely manner. Throughout the process, we remain in consistent communication with you to ensure that your expectations are not only met but exceeded. We do all by preserving and protecting our ecosystem."
										})
									] }),
									/* @__PURE__ */ jsxs("div", { children: [
										/* @__PURE__ */ jsx("dt", {
											className: "text-[10px] uppercase tracking-[0.25em] text-ink/55",
											children: "Vision"
										}),
										/* @__PURE__ */ jsx("dd", {
											className: "mt-2 text-sm text-ink/80",
											children: "Preservation of Rwandan wall painting style from ancients and adopt it to the modern wall painting."
										}),
										/* @__PURE__ */ jsx("dd", {
											className: "mt-2 text-sm text-ink/80",
											children: "To help you create the home, business, or commercial space of your dreams by providing the very highest quality products and working directly with you to capture your vision, we strive for nothing less than 100% customer satisfaction."
										})
									] }),
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("dt", {
										className: "text-[10px] uppercase tracking-[0.25em] text-ink/55",
										children: "Headquarters"
									}), /* @__PURE__ */ jsx("dd", {
										className: "mt-2 text-sm text-ink/80",
										children: "Kigali, Rwanda"
									})] }),
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("dt", {
										className: "text-[10px] uppercase tracking-[0.25em] text-ink/55",
										children: "Coverage"
									}), /* @__PURE__ */ jsx("dd", {
										className: "mt-2 text-sm text-ink/80",
										children: "15+ districts nationwide"
									})] })
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex flex-wrap gap-4 pt-4",
								children: [/* @__PURE__ */ jsxs(Link, {
									to: "/about",
									className: "inline-flex items-center gap-2 bg-brand text-canvas px-7 py-4 rounded-sm text-xs font-semibold uppercase tracking-widest hover:bg-ink transition-colors",
									children: ["Full Company Profile ", /* @__PURE__ */ jsx(ArrowUpRight, { size: 14 })]
								}), /* @__PURE__ */ jsx(Link, {
									to: "/contact",
									className: "inline-flex items-center gap-2 border border-ink/20 px-7 py-4 rounded-sm text-xs font-semibold uppercase tracking-widest hover:bg-secondary transition-colors",
									children: "Contact Our Team"
								})]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "py-28",
				children: /* @__PURE__ */ jsxs("div", {
					className: "max-w-7xl mx-auto px-6",
					children: [/* @__PURE__ */ jsx("div", {
						className: "max-w-2xl mb-16 flex items-end justify-between gap-8",
						children: /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
							className: "text-gold text-xs uppercase tracking-[0.3em] font-semibold",
							children: "Why Ubudasa"
						}), /* @__PURE__ */ jsx("h2", {
							className: "font-display text-4xl md:text-5xl mt-4 font-medium text-balance",
							children: "The standard for finishing in Rwanda."
						})] })
					}), /* @__PURE__ */ jsx("div", {
						className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6",
						children: whys.map(({ icon: Icon, t, d }) => /* @__PURE__ */ jsxs("div", {
							className: "group relative bg-canvas border border-black/10 hover:border-gold/50 transition-colors duration-300",
							children: [/* @__PURE__ */ jsx("div", { className: "absolute top-5 right-5 w-3 h-3 rounded-full border border-black/15 group-hover:border-gold transition-colors" }), /* @__PURE__ */ jsxs("div", {
								className: "p-8 pt-9",
								children: [
									/* @__PURE__ */ jsx(Icon, {
										className: "text-brand",
										size: 26,
										strokeWidth: 1.5
									}),
									/* @__PURE__ */ jsx("h3", {
										className: "font-display text-xl font-medium mt-6",
										children: t
									}),
									/* @__PURE__ */ jsx("div", { className: "w-8 h-px bg-gold my-4" }),
									/* @__PURE__ */ jsx("p", {
										className: "text-ink/60 text-sm leading-relaxed text-pretty",
										children: d
									})
								]
							})]
						}, t))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "py-28 bg-secondary",
				children: /* @__PURE__ */ jsxs("div", {
					className: "max-w-7xl mx-auto px-6",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "max-w-xl",
							children: [/* @__PURE__ */ jsx("span", {
								className: "text-gold text-xs uppercase tracking-[0.3em] font-semibold",
								children: "Expertise"
							}), /* @__PURE__ */ jsx("h2", {
								className: "font-display text-4xl md:text-5xl mt-4 font-medium text-balance",
								children: "Architectural finishing tailored to your space."
							})]
						}), /* @__PURE__ */ jsx(Link, {
							to: "/services",
							className: "text-sm uppercase tracking-widest border-b border-ink pb-1 self-start md:self-auto",
							children: "All Services"
						})]
					}), /* @__PURE__ */ jsx("div", {
						className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6",
						children: services.map((s) => /* @__PURE__ */ jsxs(Link, {
							to: "/services",
							className: "group bg-canvas overflow-hidden",
							children: [/* @__PURE__ */ jsx("div", {
								className: "aspect-[4/3] overflow-hidden",
								children: /* @__PURE__ */ jsx("img", {
									src: s.img,
									alt: s.title,
									loading: "lazy",
									className: "w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
								})
							}), /* @__PURE__ */ jsxs("div", {
								className: "p-7 space-y-3",
								children: [
									/* @__PURE__ */ jsx("h3", {
										className: "font-display text-2xl font-medium",
										children: s.title
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-ink/65 text-sm text-pretty",
										children: s.desc
									}),
									/* @__PURE__ */ jsxs("span", {
										className: "inline-flex items-center gap-1 text-brand text-xs font-semibold uppercase tracking-widest border-b border-brand/20 pb-1",
										children: ["Learn More ", /* @__PURE__ */ jsx(ArrowUpRight, { size: 14 })]
									})
								]
							})]
						}, s.title))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "py-28",
				children: /* @__PURE__ */ jsxs("div", {
					className: "max-w-7xl mx-auto px-6",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "text-center mb-12 max-w-2xl mx-auto",
						children: [/* @__PURE__ */ jsx("span", {
							className: "text-gold text-xs uppercase tracking-[0.3em] font-semibold",
							children: "The Transformation"
						}), /* @__PURE__ */ jsx("h2", {
							className: "font-display text-4xl md:text-5xl mt-4 font-medium text-balance",
							children: "Drag to reveal the Ubudasa difference."
						})]
					}), /* @__PURE__ */ jsx(BeforeAfter, {
						beforeSrc: before_default,
						afterSrc: after_default
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "py-28 bg-secondary",
				children: /* @__PURE__ */ jsxs("div", {
					className: "max-w-7xl mx-auto px-6",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex justify-between items-end mb-12",
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
							className: "text-gold text-xs uppercase tracking-[0.3em] font-semibold",
							children: "Showroom"
						}), /* @__PURE__ */ jsx("h2", {
							className: "font-display text-4xl md:text-5xl mt-4 font-medium",
							children: "Premium Finishes"
						})] }), /* @__PURE__ */ jsx("a", {
							href: "#",
							className: "text-sm uppercase tracking-widest border-b border-ink pb-1",
							children: "Shop Collection"
						})]
					}), /* @__PURE__ */ jsx("div", {
						className: "grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8",
						children: products.map((p) => /* @__PURE__ */ jsxs("div", {
							className: "group",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "aspect-[4/5] bg-canvas overflow-hidden mb-5",
									children: /* @__PURE__ */ jsx("img", {
										src: p.img,
										alt: p.name,
										loading: "lazy",
										className: "w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
									})
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "flex justify-between items-start gap-2",
									children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
										className: "text-sm font-medium",
										children: p.name
									}), /* @__PURE__ */ jsx("p", {
										className: "text-xs text-ink/55 mt-0.5",
										children: p.sub
									})] }), /* @__PURE__ */ jsxs("span", {
										className: "text-sm font-medium text-brand whitespace-nowrap",
										children: [fmtRWF(p.price), " RWF"]
									})]
								}),
								/* @__PURE__ */ jsx("button", {
									className: "mt-4 w-full py-2.5 bg-ink text-canvas text-[11px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity",
									children: "Add to Cart"
								})
							]
						}, p.name))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "py-28",
				children: /* @__PURE__ */ jsxs("div", {
					className: "max-w-7xl mx-auto px-6",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "max-w-2xl mb-14",
						children: [/* @__PURE__ */ jsx("span", {
							className: "text-gold text-xs uppercase tracking-[0.3em] font-semibold",
							children: "Client Voices"
						}), /* @__PURE__ */ jsx("h2", {
							className: "font-display text-4xl md:text-5xl mt-4 font-medium text-balance",
							children: "Trusted by 1000+ clients across Rwanda and east Africa."
						})]
					}), /* @__PURE__ */ jsx("div", {
						className: "grid md:grid-cols-3 gap-6",
						children: testimonials.map((t) => /* @__PURE__ */ jsxs("figure", {
							className: "bg-secondary p-8 space-y-5 border border-ink/5 transition-colors hover:border-gold/30",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "flex gap-1 text-gold text-sm",
									children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ jsx("span", { children: "★" }, i))
								}),
								/* @__PURE__ */ jsxs("blockquote", {
									className: "text-ink/80 text-[15px] leading-relaxed text-pretty",
									children: [
										/* @__PURE__ */ jsx("span", {
											className: "text-gold",
											children: "\""
										}),
										t.text,
										/* @__PURE__ */ jsx("span", {
											className: "text-gold",
											children: "\""
										})
									]
								}),
								/* @__PURE__ */ jsxs("figcaption", {
									className: "pt-1 border-t border-ink/10",
									children: [/* @__PURE__ */ jsx("div", {
										className: "text-sm font-semibold pt-4",
										children: t.name
									}), /* @__PURE__ */ jsx("div", {
										className: "text-xs text-ink/55 mt-0.5",
										children: t.loc
									})]
								})
							]
						}, t.name))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "py-28 bg-brand text-canvas",
				children: /* @__PURE__ */ jsxs("div", {
					className: "max-w-4xl mx-auto px-6 text-center space-y-8",
					children: [
						/* @__PURE__ */ jsx("h2", {
							className: "font-display text-4xl md:text-6xl font-medium text-balance",
							children: "Ready to transform your home or business?"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-canvas/75 text-lg max-w-xl mx-auto text-pretty",
							children: "Join 1,200+ satisfied clients across Rwanda who chose Ubudasa for spaces that endure."
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex flex-wrap justify-center gap-4 pt-2",
							children: [/* @__PURE__ */ jsx(Link, {
								to: "/request-quote",
								className: "bg-gold text-gold-foreground px-8 py-4 text-sm uppercase tracking-widest font-semibold hover:bg-canvas transition-colors",
								children: "Get a Free Quote"
							}), /* @__PURE__ */ jsx(Link, {
								to: "/contact",
								className: "border border-canvas/30 text-canvas px-8 py-4 text-sm uppercase tracking-widest font-semibold hover:bg-canvas/10 transition-colors",
								children: "Contact Us"
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ jsx(Footer, {})
		]
	});
}
//#endregion
export { Home as component };
