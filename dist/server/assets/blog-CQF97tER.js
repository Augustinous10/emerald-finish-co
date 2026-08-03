import { t as supabase } from "./client-DR4jfEwv.js";
import { t as SignedImage } from "./SignedImage-D4nzZ5bV.js";
import { n as Header, t as Footer } from "./Footer-VMp0iWo7.js";
import { t as WhatsAppButton } from "./WhatsAppButton-rnXxDyOL.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { useQuery } from "@tanstack/react-query";
//#region src/routes/blog.tsx?tsr-split=component
function Blog() {
	const q = useQuery({
		queryKey: ["blog-public"],
		queryFn: async () => {
			const { data, error } = await supabase.from("blog_posts").select("id,title,slug,excerpt,cover_image,tags,published_at").eq("published", true).order("published_at", { ascending: false });
			if (error) throw error;
			return data;
		}
	});
	return /* @__PURE__ */ jsxs("div", {
		className: "bg-canvas text-ink",
		children: [
			/* @__PURE__ */ jsx(Header, {}),
			/* @__PURE__ */ jsx(WhatsAppButton, {}),
			/* @__PURE__ */ jsxs("section", {
				className: "pt-40 pb-12 px-6 max-w-7xl mx-auto",
				children: [/* @__PURE__ */ jsx("p", {
					className: "text-xs uppercase tracking-[0.4em] text-gold mb-4",
					children: "Journal"
				}), /* @__PURE__ */ jsx("h1", {
					className: "font-display text-5xl md:text-7xl text-brand leading-[1.05] max-w-3xl",
					children: "Insights, trends, and stories from Rwanda's finishing studio."
				})]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "px-6 max-w-7xl mx-auto pb-24",
				children: [
					q.isLoading && /* @__PURE__ */ jsx("p", {
						className: "text-ink/60",
						children: "Loading posts…"
					}),
					q.data?.length === 0 && /* @__PURE__ */ jsx("p", {
						className: "text-ink/60",
						children: "No posts yet — check back soon."
					}),
					/* @__PURE__ */ jsx("div", {
						className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
						children: q.data?.map((p) => /* @__PURE__ */ jsxs(Link, {
							to: "/blog/$slug",
							params: { slug: p.slug },
							className: "group",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "aspect-[4/3] overflow-hidden rounded bg-ink/5 mb-4",
									children: p.cover_image ? /* @__PURE__ */ jsx(SignedImage, {
										bucket: "blog",
										path: p.cover_image,
										alt: p.title,
										className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
									}) : /* @__PURE__ */ jsx("div", { className: "w-full h-full bg-brand/10" })
								}),
								p.tags?.[0] && /* @__PURE__ */ jsx("p", {
									className: "text-[10px] uppercase tracking-[0.3em] text-gold mb-1",
									children: p.tags[0]
								}),
								/* @__PURE__ */ jsx("h2", {
									className: "font-display text-2xl text-brand leading-tight group-hover:text-gold transition-colors",
									children: p.title
								}),
								p.excerpt && /* @__PURE__ */ jsx("p", {
									className: "mt-2 text-ink/70 text-sm line-clamp-3",
									children: p.excerpt
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-3 text-xs text-ink/40",
									children: p.published_at ? new Date(p.published_at).toLocaleDateString() : ""
								})
							]
						}, p.id))
					})
				]
			}),
			/* @__PURE__ */ jsx(Footer, {})
		]
	});
}
//#endregion
export { Blog as component };
