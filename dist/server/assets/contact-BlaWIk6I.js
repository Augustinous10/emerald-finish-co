import { t as supabase } from "./client-DR4jfEwv.js";
import { n as Header, t as Footer } from "./Footer-VMp0iWo7.js";
import { t as WhatsAppButton } from "./WhatsAppButton-cIgtjtFI.js";
import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { toast } from "sonner";
import { CheckCircle2, Clock, Mail, MapPin, Phone } from "lucide-react";
//#region src/routes/contact.tsx?tsr-split=component
function Contact() {
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
			subject: String(fd.get("subject") || "").trim() || null,
			message: String(fd.get("message") || "").trim()
		};
		const { error } = await supabase.from("contact_messages").insert(payload);
		setBusy(false);
		if (error) {
			toast.error("Couldn't send. Try again or WhatsApp us.");
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
				className: "pt-36 pb-16",
				children: /* @__PURE__ */ jsxs("div", {
					className: "max-w-7xl mx-auto px-6",
					children: [/* @__PURE__ */ jsx("span", {
						className: "text-gold text-xs uppercase tracking-[0.4em] font-semibold",
						children: "Contact"
					}), /* @__PURE__ */ jsx("h1", {
						className: "font-display text-5xl md:text-7xl mt-4 font-medium max-w-3xl text-balance",
						children: "Let's plan something exceptional."
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "pb-28",
				children: /* @__PURE__ */ jsxs("div", {
					className: "max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16",
					children: [/* @__PURE__ */ jsx("div", {
						className: "space-y-8",
						children: [
							{
								Icon: MapPin,
								t: "Visit Our Showroom",
								v: "KK 18 Avenue,\nKigali, Rwanda"
							},
							{
								Icon: Phone,
								t: "Call or WhatsApp",
								v: "+250 788 679 097,+250 788 789 091"
							},
							{
								Icon: Mail,
								t: "Email",
								v: "ubudasawallpaints@gmail.com"
							},
							{
								Icon: Clock,
								t: "Business Hours",
								v: "Mon – Sat · 8:00 – 18:00"
							}
						].map(({ Icon, t, v }) => /* @__PURE__ */ jsxs("div", {
							className: "flex gap-5",
							children: [/* @__PURE__ */ jsx("div", {
								className: "size-12 grid place-items-center bg-brand text-canvas rounded-sm shrink-0",
								children: /* @__PURE__ */ jsx(Icon, {
									size: 20,
									strokeWidth: 1.5
								})
							}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
								className: "font-display text-xl",
								children: t
							}), /* @__PURE__ */ jsx("p", {
								className: "text-ink/70 mt-1 whitespace-pre-line",
								children: v
							})] })]
						}, t))
					}), submitted ? /* @__PURE__ */ jsxs("div", {
						className: "bg-secondary p-12 text-center space-y-4",
						children: [
							/* @__PURE__ */ jsx(CheckCircle2, {
								className: "mx-auto text-brand",
								size: 48,
								strokeWidth: 1.5
							}),
							/* @__PURE__ */ jsx("h2", {
								className: "font-display text-3xl",
								children: "Message received"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-ink/70",
								children: "Our team will respond within 2 business hours."
							})
						]
					}) : /* @__PURE__ */ jsxs("form", {
						onSubmit: handleSubmit,
						className: "bg-secondary p-8 md:p-10 space-y-5",
						children: [
							/* @__PURE__ */ jsx("h2", {
								className: "font-display text-2xl mb-2",
								children: "Send a message"
							}),
							[
								{
									label: "Full name",
									name: "name",
									type: "text",
									required: true
								},
								{
									label: "Email",
									name: "email",
									type: "email",
									required: true
								},
								{
									label: "Phone",
									name: "phone",
									type: "tel",
									required: false
								},
								{
									label: "Subject",
									name: "subject",
									type: "text",
									required: false
								}
							].map((f) => /* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ jsx("label", {
									className: "text-[10px] uppercase tracking-[0.25em] font-semibold text-ink/60",
									children: f.label
								}), /* @__PURE__ */ jsx("input", {
									name: f.name,
									type: f.type,
									required: f.required,
									className: "w-full bg-canvas border border-black/10 px-4 py-3 text-sm focus:outline-none focus:border-brand"
								})]
							}, f.name)),
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ jsx("label", {
									className: "text-[10px] uppercase tracking-[0.25em] font-semibold text-ink/60",
									children: "Message"
								}), /* @__PURE__ */ jsx("textarea", {
									name: "message",
									rows: 5,
									required: true,
									className: "w-full bg-canvas border border-black/10 px-4 py-3 text-sm focus:outline-none focus:border-brand"
								})]
							}),
							/* @__PURE__ */ jsx("button", {
								type: "submit",
								disabled: busy,
								className: "w-full bg-brand text-brand-foreground py-4 text-sm uppercase tracking-widest font-semibold hover:bg-ink transition-colors disabled:opacity-50",
								children: busy ? "Sending…" : "Send Message"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-[11px] text-ink/50",
								children: "We typically respond within 2 business hours."
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ jsx(Footer, {})
		]
	});
}
//#endregion
export { Contact as component };
