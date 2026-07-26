import { t as supabase } from "./client-DR4jfEwv.js";
import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate, useRouterState } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { ExternalLink, Images, Inbox, LayoutDashboard, LogOut, Menu, MessageSquare, Newspaper, X } from "lucide-react";
//#region src/routes/_authenticated/admin.tsx?tsr-split=component
var nav = [
	{
		to: "/admin",
		label: "Overview",
		icon: LayoutDashboard,
		exact: true
	},
	{
		to: "/admin/quotes",
		label: "Quote Requests",
		icon: Inbox
	},
	{
		to: "/admin/messages",
		label: "Contact Messages",
		icon: MessageSquare
	},
	{
		to: "/admin/gallery",
		label: "Gallery",
		icon: Images
	},
	{
		to: "/admin/blog",
		label: "Blog Posts",
		icon: Newspaper
	}
];
function AdminLayout() {
	const navigate = useNavigate();
	const qc = useQueryClient();
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const [open, setOpen] = useState(false);
	const [isAdmin, setIsAdmin] = useState(null);
	useEffect(() => {
		(async () => {
			const { data: u } = await supabase.auth.getUser();
			if (!u.user) {
				navigate({ to: "/auth" });
				return;
			}
			const { data } = await supabase.from("user_roles").select("role").eq("user_id", u.user.id).eq("role", "admin").maybeSingle();
			setIsAdmin(!!data);
		})();
	}, [navigate]);
	async function signOut() {
		await qc.cancelQueries();
		qc.clear();
		await supabase.auth.signOut();
		toast.success("Signed out");
		navigate({
			to: "/auth",
			replace: true
		});
	}
	if (isAdmin === null) return /* @__PURE__ */ jsx("div", {
		className: "min-h-screen grid place-items-center text-ink/60 text-sm",
		children: "Loading…"
	});
	if (!isAdmin) return /* @__PURE__ */ jsx("div", {
		className: "min-h-screen grid place-items-center bg-canvas text-ink px-6",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center space-y-4",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "font-display text-3xl",
					children: "Access denied"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-ink/60",
					children: "This account isn't authorized for the admin dashboard."
				}),
				/* @__PURE__ */ jsx("button", {
					onClick: signOut,
					className: "bg-brand text-brand-foreground px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold",
					children: "Sign out"
				})
			]
		})
	});
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-secondary text-ink flex",
		children: [
			/* @__PURE__ */ jsxs("aside", {
				className: `fixed lg:static inset-y-0 left-0 z-40 w-64 bg-brand text-brand-foreground p-6 flex flex-col transform transition-transform ${open ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`,
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-between mb-10",
						children: [/* @__PURE__ */ jsx(Link, {
							to: "/",
							className: "font-display text-2xl",
							children: "UBUDASA"
						}), /* @__PURE__ */ jsx("button", {
							className: "lg:hidden",
							onClick: () => setOpen(false),
							children: /* @__PURE__ */ jsx(X, { size: 20 })
						})]
					}),
					/* @__PURE__ */ jsx("nav", {
						className: "flex-1 space-y-1",
						children: nav.map(({ to, label, icon: Icon, exact }) => {
							return /* @__PURE__ */ jsxs(Link, {
								to,
								onClick: () => setOpen(false),
								className: `flex items-center gap-3 px-3 py-2.5 rounded text-sm transition-colors ${(exact ? pathname === to : pathname.startsWith(to)) ? "bg-canvas text-brand font-semibold" : "text-canvas/80 hover:bg-ink/30"}`,
								children: [
									/* @__PURE__ */ jsx(Icon, { size: 16 }),
									" ",
									label
								]
							}, to);
						})
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "space-y-2 mt-6 border-t border-canvas/10 pt-4",
						children: [/* @__PURE__ */ jsxs("a", {
							href: "/",
							target: "_blank",
							rel: "noreferrer",
							className: "flex items-center gap-2 text-xs text-canvas/70 hover:text-gold",
							children: [/* @__PURE__ */ jsx(ExternalLink, { size: 14 }), " View public site"]
						}), /* @__PURE__ */ jsxs("button", {
							onClick: signOut,
							className: "flex items-center gap-2 text-xs text-canvas/70 hover:text-gold",
							children: [/* @__PURE__ */ jsx(LogOut, { size: 14 }), " Sign out"]
						})]
					})
				]
			}),
			open && /* @__PURE__ */ jsx("div", {
				className: "fixed inset-0 bg-ink/40 z-30 lg:hidden",
				onClick: () => setOpen(false)
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex-1 min-w-0",
				children: [/* @__PURE__ */ jsxs("header", {
					className: "lg:hidden flex items-center justify-between px-4 py-3 bg-brand text-canvas",
					children: [
						/* @__PURE__ */ jsx("button", {
							onClick: () => setOpen(true),
							children: /* @__PURE__ */ jsx(Menu, { size: 22 })
						}),
						/* @__PURE__ */ jsx("span", {
							className: "font-display",
							children: "UBUDASA Admin"
						}),
						/* @__PURE__ */ jsx("span", { className: "w-6" })
					]
				}), /* @__PURE__ */ jsx("main", {
					className: "p-6 lg:p-10 max-w-6xl",
					children: /* @__PURE__ */ jsx(Outlet, {})
				})]
			})
		]
	});
}
//#endregion
export { AdminLayout as component };
