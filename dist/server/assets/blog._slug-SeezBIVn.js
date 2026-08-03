import { t as supabase } from "./client-DR4jfEwv.js";
import { t as Route } from "./blog._slug-BqkBwfks.js";
import { t as SignedImage } from "./SignedImage-D4nzZ5bV.js";
import { n as Header, t as Footer } from "./Footer-VMp0iWo7.js";
import { t as WhatsAppButton } from "./WhatsAppButton-rnXxDyOL.js";
import { t as NotFound } from "./blog._slug-rdlZc_NZ.js";
import { Link, notFound } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeft } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
//#region src/routes/blog.$slug.tsx?tsr-split=component
function Post() {
	const { slug } = Route.useParams();
	const q = useQuery({
		queryKey: ["blog-post", slug],
		queryFn: async () => {
			const { data, error } = await supabase.from("blog_posts").select("*").eq("slug", slug).eq("published", true).maybeSingle();
			if (error) throw error;
			if (!data) throw notFound();
			return data;
		}
	});
	if (q.isLoading) return /* @__PURE__ */ jsx("div", {
		className: "min-h-screen grid place-items-center text-ink/60",
		children: "Loading…"
	});
	if (!q.data) return /* @__PURE__ */ jsx(NotFound, {});
	const p = q.data;
	return /* @__PURE__ */ jsxs("div", {
		className: "bg-canvas text-ink",
		children: [
			/* @__PURE__ */ jsx(Header, {}),
			/* @__PURE__ */ jsx(WhatsAppButton, {}),
			/* @__PURE__ */ jsxs("article", {
				className: "pt-40 pb-24 px-6 max-w-3xl mx-auto",
				children: [
					/* @__PURE__ */ jsxs(Link, {
						to: "/blog",
						className: "inline-flex items-center gap-2 text-xs uppercase tracking-widest text-ink/60 hover:text-brand mb-8",
						children: [/* @__PURE__ */ jsx(ArrowLeft, { size: 14 }), " All posts"]
					}),
					p.tags?.[0] && /* @__PURE__ */ jsx("p", {
						className: "text-[10px] uppercase tracking-[0.4em] text-gold mb-3",
						children: p.tags[0]
					}),
					/* @__PURE__ */ jsx("h1", {
						className: "font-display text-4xl md:text-6xl text-brand leading-[1.1]",
						children: p.title
					}),
					p.published_at && /* @__PURE__ */ jsx("p", {
						className: "text-sm text-ink/50 mt-4",
						children: new Date(p.published_at).toLocaleDateString(void 0, { dateStyle: "long" })
					}),
					p.cover_image && /* @__PURE__ */ jsx("div", {
						className: "aspect-[16/9] overflow-hidden rounded my-10 bg-ink/5",
						children: /* @__PURE__ */ jsx(SignedImage, {
							bucket: "blog",
							path: p.cover_image,
							alt: p.title,
							className: "w-full h-full object-cover"
						})
					}),
					/* @__PURE__ */ jsx("div", {
						className: "prose prose-lg max-w-none prose-headings:font-display prose-headings:text-brand prose-a:text-brand",
						children: /* @__PURE__ */ jsx(ReactMarkdown, {
							remarkPlugins: [remarkGfm],
							children: p.content
						})
					})
				]
			}),
			/* @__PURE__ */ jsx(Footer, {})
		]
	});
}
//#endregion
export { Post as component };
