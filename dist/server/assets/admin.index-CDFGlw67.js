import { t as supabase } from "./client-DR4jfEwv.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { useQuery } from "@tanstack/react-query";
import { Images, Inbox, MessageSquare, Newspaper } from "lucide-react";
//#region src/routes/_authenticated/admin.index.tsx?tsr-split=component
function AdminHome() {
	const s = useQuery({
		queryKey: ["admin", "overview"],
		queryFn: async () => {
			const [quotesNew, quotesAll, msgsNew, gallery, posts, recent] = await Promise.all([
				supabase.from("quote_requests").select("id", {
					count: "exact",
					head: true
				}).eq("status", "new"),
				supabase.from("quote_requests").select("id", {
					count: "exact",
					head: true
				}),
				supabase.from("contact_messages").select("id", {
					count: "exact",
					head: true
				}).eq("status", "new"),
				supabase.from("gallery_projects").select("id", {
					count: "exact",
					head: true
				}),
				supabase.from("blog_posts").select("id", {
					count: "exact",
					head: true
				}),
				supabase.from("quote_requests").select("id,name,service,created_at,status").order("created_at", { ascending: false }).limit(5)
			]);
			return {
				quotesNew: quotesNew.count ?? 0,
				quotesAll: quotesAll.count ?? 0,
				msgsNew: msgsNew.count ?? 0,
				gallery: gallery.count ?? 0,
				posts: posts.count ?? 0,
				recent: recent.data ?? []
			};
		}
	}).data;
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
				className: "text-xs uppercase tracking-[0.3em] text-gold",
				children: "Dashboard"
			}), /* @__PURE__ */ jsx("h1", {
				className: "font-display text-4xl mt-2",
				children: "Welcome back"
			})] }),
			/* @__PURE__ */ jsxs("div", {
				className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-4",
				children: [
					/* @__PURE__ */ jsx(Card, {
						to: "/admin/quotes",
						Icon: Inbox,
						label: "New Quotes",
						value: s?.quotesNew ?? "—",
						sub: `${s?.quotesAll ?? 0} total`
					}),
					/* @__PURE__ */ jsx(Card, {
						to: "/admin/messages",
						Icon: MessageSquare,
						label: "New Messages",
						value: s?.msgsNew ?? "—"
					}),
					/* @__PURE__ */ jsx(Card, {
						to: "/admin/gallery",
						Icon: Images,
						label: "Gallery Items",
						value: s?.gallery ?? "—"
					}),
					/* @__PURE__ */ jsx(Card, {
						to: "/admin/blog",
						Icon: Newspaper,
						label: "Blog Posts",
						value: s?.posts ?? "—"
					})
				]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "bg-canvas p-6 rounded",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center justify-between mb-4",
					children: [/* @__PURE__ */ jsx("h2", {
						className: "font-display text-xl",
						children: "Recent quote requests"
					}), /* @__PURE__ */ jsx(Link, {
						to: "/admin/quotes",
						className: "text-xs uppercase tracking-widest text-brand hover:text-gold",
						children: "View all →"
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "divide-y divide-black/5",
					children: [(s?.recent ?? []).map((r) => /* @__PURE__ */ jsxs("div", {
						className: "py-3 flex items-center justify-between gap-4 text-sm",
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
							className: "font-medium",
							children: r.name
						}), /* @__PURE__ */ jsx("p", {
							className: "text-ink/50 text-xs",
							children: r.service ?? "—"
						})] }), /* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ jsx("span", {
								className: `text-[10px] uppercase tracking-widest px-2 py-1 rounded ${r.status === "new" ? "bg-gold/20 text-brand" : "bg-ink/10 text-ink/60"}`,
								children: r.status
							}), /* @__PURE__ */ jsx("span", {
								className: "text-xs text-ink/40",
								children: new Date(r.created_at).toLocaleDateString()
							})]
						})]
					}, r.id)), !s?.recent.length && /* @__PURE__ */ jsx("p", {
						className: "py-6 text-ink/50 text-sm",
						children: "No quote requests yet."
					})]
				})]
			})
		]
	});
}
function Card({ to, Icon, label, value, sub }) {
	return /* @__PURE__ */ jsxs(Link, {
		to,
		className: "bg-canvas p-5 rounded hover:shadow-md transition-shadow block",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ jsx("p", {
					className: "text-[10px] uppercase tracking-[0.25em] text-ink/50",
					children: label
				}), /* @__PURE__ */ jsx(Icon, {
					size: 16,
					className: "text-brand"
				})]
			}),
			/* @__PURE__ */ jsx("p", {
				className: "font-display text-3xl mt-2 text-brand",
				children: value
			}),
			sub && /* @__PURE__ */ jsx("p", {
				className: "text-xs text-ink/40 mt-1",
				children: sub
			})
		]
	});
}
//#endregion
export { AdminHome as component };
