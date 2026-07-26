import { t as supabase } from "./client-DR4jfEwv.js";
import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { toast } from "sonner";
//#region src/routes/auth.tsx?tsr-split=component
function AuthPage() {
	const navigate = useNavigate();
	const [mode, setMode] = useState("signin");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [busy, setBusy] = useState(false);
	async function submit(e) {
		e.preventDefault();
		setBusy(true);
		try {
			if (mode === "signin") {
				const { error } = await supabase.auth.signInWithPassword({
					email,
					password
				});
				if (error) throw error;
				toast.success("Welcome back");
				navigate({ to: "/admin" });
			} else {
				const { error } = await supabase.auth.signUp({
					email,
					password,
					options: { emailRedirectTo: window.location.origin + "/admin" }
				});
				if (error) throw error;
				toast.success("Account created — sign in now");
				setMode("signin");
			}
		} catch (err) {
			toast.error(err.message ?? "Sign-in failed");
		} finally {
			setBusy(false);
		}
	}
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-canvas grid lg:grid-cols-2",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "hidden lg:flex flex-col justify-between p-12 bg-brand text-brand-foreground",
			children: [
				/* @__PURE__ */ jsx("a", {
					href: "/",
					className: "font-display text-3xl",
					children: "UBUDASA"
				}),
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
					className: "text-xs uppercase tracking-[0.3em] text-gold",
					children: "Admin Studio"
				}), /* @__PURE__ */ jsx("h1", {
					className: "font-display text-5xl mt-3 leading-tight",
					children: "Manage your projects, posts and leads."
				})] }),
				/* @__PURE__ */ jsx("p", {
					className: "text-canvas/60 text-xs",
					children: "© Ubudasa Wall Paints Ltd · Kigali, Rwanda"
				})
			]
		}), /* @__PURE__ */ jsx("div", {
			className: "flex items-center justify-center p-8",
			children: /* @__PURE__ */ jsxs("form", {
				onSubmit: submit,
				className: "w-full max-w-sm space-y-5",
				children: [
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
						className: "font-display text-3xl text-ink",
						children: mode === "signin" ? "Sign in" : "Create admin account"
					}), /* @__PURE__ */ jsx("p", {
						className: "text-sm text-ink/60 mt-1",
						children: mode === "signin" ? "Access your dashboard" : "First-time admin? Use your authorized email"
					})] }),
					/* @__PURE__ */ jsxs("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ jsx("label", {
							className: "text-[10px] uppercase tracking-[0.25em] font-semibold text-ink/60",
							children: "Email"
						}), /* @__PURE__ */ jsx("input", {
							type: "email",
							required: true,
							value: email,
							onChange: (e) => setEmail(e.target.value),
							className: "w-full bg-secondary border border-black/10 px-4 py-3 text-sm focus:outline-none focus:border-brand"
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ jsx("label", {
							className: "text-[10px] uppercase tracking-[0.25em] font-semibold text-ink/60",
							children: "Password"
						}), /* @__PURE__ */ jsx("input", {
							type: "password",
							required: true,
							minLength: 6,
							value: password,
							onChange: (e) => setPassword(e.target.value),
							className: "w-full bg-secondary border border-black/10 px-4 py-3 text-sm focus:outline-none focus:border-brand"
						})]
					}),
					/* @__PURE__ */ jsx("button", {
						disabled: busy,
						className: "w-full bg-brand text-brand-foreground py-3 text-sm uppercase tracking-widest font-semibold hover:bg-ink transition-colors disabled:opacity-50",
						children: busy ? "Working…" : mode === "signin" ? "Sign In" : "Create Account"
					}),
					/* @__PURE__ */ jsx("button", {
						type: "button",
						onClick: () => setMode(mode === "signin" ? "signup" : "signin"),
						className: "w-full text-xs text-ink/60 hover:text-brand",
						children: mode === "signin" ? "First time? Create an admin account" : "Already have an account? Sign in"
					})
				]
			})
		})]
	});
}
//#endregion
export { AuthPage as component };
