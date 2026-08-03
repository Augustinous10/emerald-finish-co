import { t as supabase } from "./client-DR4jfEwv.js";
import { n as Header, t as Footer } from "./Footer-VMp0iWo7.js";
import { t as WhatsAppButton } from "./WhatsAppButton-rnXxDyOL.js";
import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { toast } from "sonner";
import { CheckCircle2 } from "lucide-react";
//#region src/routes/request-quote.tsx?tsr-split=component
var SERVICES = [
	"Interior Painting",
	"Exterior Painting",
	"Decorative Finishes",
	"TV Wall Design",
	"Gypsum Ceilings",
	"Kitchen Renovation",
	"Bathroom Renovation",
	"Interior Decoration",
	"Commercial Painting",
	"Home Renovation"
];
var BUDGETS = [
	"Under 500,000 RWF",
	"500,000 – 2,000,000 RWF",
	"2,000,000 – 5,000,000 RWF",
	"5,000,000 – 15,000,000 RWF",
	"15,000,000+ RWF"
];
function Quote() {
	const [submitted, setSubmitted] = useState(false);
	const [busy, setBusy] = useState(false);
	async function handleSubmit(e) {
		e.preventDefault();
		setBusy(true);
		const fd = new FormData(e.currentTarget);
		const payload = {
			name: String(fd.get("name") || "").trim(),
			email: String(fd.get("email") || "").trim(),
			phone: String(fd.get("phone") || "").trim() || null,
			service: String(fd.get("service") || "") || null,
			budget: String(fd.get("budget") || "") || null,
			message: String(fd.get("message") || "") || null,
			project_type: String(fd.get("location") || "") || null
		};
		const { error } = await supabase.from("quote_requests").insert(payload);
		setBusy(false);
		if (error) {
			toast.error("Couldn't submit. Please try again or call us directly.");
			return;
		}
		setSubmitted(true);
	}
	return /* @__PURE__ */ jsxs("div", {
		className: "bg-canvas text-ink",
		children: [
			/* @__PURE__ */ jsx(Header, {}),
			/* @__PURE__ */ jsx(WhatsAppButton, {}),
			/* @__PURE__ */ jsx("section", {
				className: "pt-36 pb-12 bg-secondary",
				children: /* @__PURE__ */ jsxs("div", {
					className: "max-w-4xl mx-auto px-6 text-center",
					children: [
						/* @__PURE__ */ jsx("span", {
							className: "text-gold text-xs uppercase tracking-[0.4em] font-semibold",
							children: "Free Quote"
						}),
						/* @__PURE__ */ jsx("h1", {
							className: "font-display text-5xl md:text-6xl mt-4 font-medium text-balance",
							children: "Tell us about your project."
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-5 text-ink/65 max-w-xl mx-auto text-pretty",
							children: "A senior consultant will respond within 48 hours and arrange a free site visit at your convenience."
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "py-20",
				children: /* @__PURE__ */ jsx("div", {
					className: "max-w-3xl mx-auto px-6",
					children: submitted ? /* @__PURE__ */ jsxs("div", {
						className: "bg-secondary p-12 text-center space-y-4",
						children: [
							/* @__PURE__ */ jsx(CheckCircle2, {
								className: "mx-auto text-brand",
								size: 48,
								strokeWidth: 1.5
							}),
							/* @__PURE__ */ jsx("h2", {
								className: "font-display text-3xl",
								children: "Thank you"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-ink/70 max-w-md mx-auto",
								children: "Your request is in. A senior consultant will be in touch within 48 hours to confirm your site visit."
							})
						]
					}) : /* @__PURE__ */ jsxs("form", {
						onSubmit: handleSubmit,
						className: "space-y-6 bg-secondary p-8 md:p-10",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "grid sm:grid-cols-2 gap-5",
								children: [/* @__PURE__ */ jsx(Field, {
									label: "Full name *",
									name: "name",
									required: true
								}), /* @__PURE__ */ jsx(Field, {
									label: "Phone (MTN / Airtel) *",
									name: "phone",
									type: "tel",
									required: true
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "grid sm:grid-cols-2 gap-5",
								children: [/* @__PURE__ */ jsx(Field, {
									label: "Email *",
									name: "email",
									type: "email",
									required: true
								}), /* @__PURE__ */ jsx(Field, {
									label: "Location / District",
									name: "location"
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ jsx("label", {
									className: "text-[10px] uppercase tracking-[0.25em] font-semibold text-ink/60",
									children: "Service required *"
								}), /* @__PURE__ */ jsxs("select", {
									name: "service",
									required: true,
									className: "w-full bg-canvas border border-black/10 px-4 py-3 text-sm focus:outline-none focus:border-brand",
									children: [/* @__PURE__ */ jsx("option", {
										value: "",
										children: "Choose a service…"
									}), SERVICES.map((s) => /* @__PURE__ */ jsx("option", { children: s }, s))]
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ jsx("label", {
									className: "text-[10px] uppercase tracking-[0.25em] font-semibold text-ink/60",
									children: "Estimated budget"
								}), /* @__PURE__ */ jsxs("select", {
									name: "budget",
									className: "w-full bg-canvas border border-black/10 px-4 py-3 text-sm focus:outline-none focus:border-brand",
									children: [/* @__PURE__ */ jsx("option", {
										value: "",
										children: "Select a range…"
									}), BUDGETS.map((b) => /* @__PURE__ */ jsx("option", { children: b }, b))]
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ jsx("label", {
									className: "text-[10px] uppercase tracking-[0.25em] font-semibold text-ink/60",
									children: "Project description"
								}), /* @__PURE__ */ jsx("textarea", {
									name: "message",
									rows: 5,
									className: "w-full bg-canvas border border-black/10 px-4 py-3 text-sm focus:outline-none focus:border-brand",
									placeholder: "Rooms, dimensions, finish preferences, timeline…"
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "grid sm:grid-cols-2 gap-5",
								children: [/* @__PURE__ */ jsx(Field, {
									label: "Preferred start date",
									name: "date",
									type: "date"
								}), /* @__PURE__ */ jsxs("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ jsx("label", {
										className: "text-[10px] uppercase tracking-[0.25em] font-semibold text-ink/60",
										children: "Photos (optional)"
									}), /* @__PURE__ */ jsx("input", {
										type: "file",
										multiple: true,
										accept: "image/*",
										className: "w-full text-xs file:mr-3 file:py-2 file:px-4 file:border-0 file:bg-brand file:text-canvas file:text-xs file:uppercase file:tracking-widest file:font-semibold"
									})]
								})]
							}),
							/* @__PURE__ */ jsx("button", {
								type: "submit",
								disabled: busy,
								className: "w-full bg-brand text-brand-foreground py-4 text-sm uppercase tracking-widest font-semibold hover:bg-ink transition-colors disabled:opacity-50",
								children: busy ? "Sending…" : "Send Request"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-[11px] text-ink/50 text-center",
								children: "By submitting, you agree to be contacted about your project. We respect your privacy."
							})
						]
					})
				})
			}),
			/* @__PURE__ */ jsx(Footer, {})
		]
	});
}
function Field({ label, name, type = "text", required }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-2",
		children: [/* @__PURE__ */ jsx("label", {
			className: "text-[10px] uppercase tracking-[0.25em] font-semibold text-ink/60",
			children: label
		}), /* @__PURE__ */ jsx("input", {
			name,
			type,
			required,
			className: "w-full bg-canvas border border-black/10 px-4 py-3 text-sm focus:outline-none focus:border-brand"
		})]
	});
}
//#endregion
export { Quote as component };
