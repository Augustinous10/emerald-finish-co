import { t as supabase } from "./client-DR4jfEwv.js";
import { Link, Outlet, useRouterState } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { Plus, Trash2 } from "lucide-react";
//#region src/routes/_authenticated/admin.blog.tsx?tsr-split=component
function BlogLayout() {
	return useRouterState({ select: (s) => s.location.pathname }) === "/admin/blog" ? /* @__PURE__ */ jsx(BlogList, {}) : /* @__PURE__ */ jsx(Outlet, {});
}
function BlogList() {
	const qc = useQueryClient();
	const list = useQuery({
		queryKey: ["blog-admin"],
		queryFn: async () => {
			const { data, error } = await supabase.from("blog_posts").select("*").order("created_at", { ascending: false });
			if (error) throw error;
			return data;
		}
	});
	const del = useMutation({
		mutationFn: async (id) => {
			const { error } = await supabase.from("blog_posts").delete().eq("id", id);
			if (error) throw error;
		},
		onSuccess: () => {
			qc.invalidateQueries({ queryKey: ["blog-admin"] });
			toast.success("Deleted");
		}
	});
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex items-center justify-between flex-wrap gap-4",
			children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
				className: "text-xs uppercase tracking-[0.3em] text-gold",
				children: "Content"
			}), /* @__PURE__ */ jsx("h1", {
				className: "font-display text-4xl mt-2",
				children: "Blog Posts"
			})] }), /* @__PURE__ */ jsxs(Link, {
				to: "/admin/blog/new",
				className: "bg-brand text-canvas px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold flex items-center gap-2",
				children: [/* @__PURE__ */ jsx(Plus, { size: 14 }), " New post"]
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: "bg-canvas rounded divide-y divide-black/5",
			children: [list.data?.map((p) => /* @__PURE__ */ jsxs("div", {
				className: "p-4 flex items-center gap-4",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "flex-1 min-w-0",
						children: [/* @__PURE__ */ jsx(Link, {
							to: "/admin/blog/$id",
							params: { id: p.id },
							className: "font-medium hover:text-brand",
							children: p.title
						}), /* @__PURE__ */ jsxs("p", {
							className: "text-xs text-ink/50",
							children: ["/", p.slug]
						})]
					}),
					/* @__PURE__ */ jsx("span", {
						className: `text-[10px] uppercase tracking-widest px-2 py-1 rounded ${p.published ? "bg-green-100 text-green-800" : "bg-ink/10 text-ink/60"}`,
						children: p.published ? "Published" : "Draft"
					}),
					/* @__PURE__ */ jsx("span", {
						className: "text-xs text-ink/40 hidden sm:inline",
						children: new Date(p.created_at).toLocaleDateString()
					}),
					/* @__PURE__ */ jsx("button", {
						onClick: () => confirm("Delete this post?") && del.mutate(p.id),
						className: "text-red-600 hover:underline",
						children: /* @__PURE__ */ jsx(Trash2, { size: 14 })
					})
				]
			}, p.id)), !list.data?.length && /* @__PURE__ */ jsx("p", {
				className: "p-8 text-center text-ink/50",
				children: "No posts yet. Create your first one →"
			})]
		})]
	});
}
//#endregion
export { BlogLayout as component };
