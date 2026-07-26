import { t as supabase } from "./client-DR4jfEwv.js";
import { t as SignedImage } from "./SignedImage-D4nzZ5bV.js";
import { useEffect, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { toast } from "sonner";
import { Upload } from "lucide-react";
//#region src/components/admin/PostEditor.tsx
function slugify(s) {
	return s.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-").slice(0, 80);
}
function PostEditor({ initial }) {
	const navigate = useNavigate();
	const editing = !!initial;
	const [title, setTitle] = useState(initial?.title ?? "");
	const [slug, setSlug] = useState(initial?.slug ?? "");
	const [excerpt, setExcerpt] = useState(initial?.excerpt ?? "");
	const [content, setContent] = useState(initial?.content ?? "");
	const [tags, setTags] = useState((initial?.tags ?? []).join(", "));
	const [coverPath, setCoverPath] = useState(initial?.cover_image ?? null);
	const [published, setPublished] = useState(initial?.published ?? false);
	const [busy, setBusy] = useState(false);
	useEffect(() => {
		if (!editing && title && !slug) setSlug(slugify(title));
	}, [
		title,
		slug,
		editing
	]);
	async function uploadCover(file) {
		const ext = file.name.split(".").pop();
		const path = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
		const { error } = await supabase.storage.from("blog").upload(path, file, { contentType: file.type });
		if (error) return toast.error(error.message);
		setCoverPath(path);
		toast.success("Cover uploaded");
	}
	async function save(publish) {
		if (!title || !slug) return toast.error("Title and slug required");
		setBusy(true);
		try {
			const { data: u } = await supabase.auth.getUser();
			const payload = {
				title,
				slug: slugify(slug),
				excerpt: excerpt || null,
				content,
				tags: tags.split(",").map((t) => t.trim()).filter(Boolean),
				cover_image: coverPath,
				published: publish,
				published_at: publish ? initial?.published_at ?? (/* @__PURE__ */ new Date()).toISOString() : null,
				author_id: u.user?.id ?? null
			};
			if (editing) {
				const { error } = await supabase.from("blog_posts").update(payload).eq("id", initial.id);
				if (error) throw error;
			} else {
				const { error } = await supabase.from("blog_posts").insert(payload);
				if (error) throw error;
			}
			toast.success(publish ? "Published" : "Saved as draft");
			navigate({ to: "/admin/blog" });
		} catch (e) {
			toast.error(e.message);
		} finally {
			setBusy(false);
		}
	}
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-6 max-w-3xl",
		children: [
			/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
				className: "text-xs uppercase tracking-[0.3em] text-gold",
				children: editing ? "Edit post" : "New post"
			}), /* @__PURE__ */ jsx("h1", {
				className: "font-display text-4xl mt-2",
				children: editing ? title : "Write a new post"
			})] }),
			/* @__PURE__ */ jsxs("div", {
				className: "space-y-4 bg-canvas p-6 rounded",
				children: [
					/* @__PURE__ */ jsx(Field, {
						label: "Title",
						value: title,
						onChange: setTitle
					}),
					/* @__PURE__ */ jsx(Field, {
						label: "URL slug",
						value: slug,
						onChange: setSlug
					}),
					/* @__PURE__ */ jsx(Field, {
						label: "Excerpt (shown in listings)",
						value: excerpt,
						onChange: setExcerpt
					}),
					/* @__PURE__ */ jsx(Field, {
						label: "Tags (comma separated)",
						value: tags,
						onChange: setTags
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "space-y-2",
						children: [
							/* @__PURE__ */ jsx("label", {
								className: "text-[10px] uppercase tracking-[0.25em] text-ink/60",
								children: "Cover image"
							}),
							coverPath && /* @__PURE__ */ jsx("div", {
								className: "aspect-[16/9] bg-ink/5 rounded overflow-hidden mb-2",
								children: /* @__PURE__ */ jsx(SignedImage, {
									bucket: "blog",
									path: coverPath,
									alt: "",
									className: "w-full h-full object-cover"
								})
							}),
							/* @__PURE__ */ jsxs("label", {
								className: "inline-flex items-center gap-2 cursor-pointer bg-secondary px-4 py-2 rounded text-xs uppercase tracking-widest",
								children: [
									/* @__PURE__ */ jsx(Upload, { size: 14 }),
									" ",
									coverPath ? "Replace" : "Upload",
									" cover",
									/* @__PURE__ */ jsx("input", {
										type: "file",
										accept: "image/*",
										className: "hidden",
										onChange: (e) => e.target.files?.[0] && uploadCover(e.target.files[0])
									})
								]
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ jsx("label", {
							className: "text-[10px] uppercase tracking-[0.25em] text-ink/60",
							children: "Content (Markdown supported)"
						}), /* @__PURE__ */ jsx("textarea", {
							value: content,
							onChange: (e) => setContent(e.target.value),
							rows: 18,
							className: "w-full bg-secondary border border-black/10 p-4 text-sm font-mono",
							placeholder: "# Heading\n\nWrite your post in markdown..."
						})]
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex gap-2",
				children: [/* @__PURE__ */ jsx("button", {
					disabled: busy,
					onClick: () => save(false),
					className: "px-6 py-3 border border-black/15 text-xs uppercase tracking-widest font-semibold rounded-full hover:border-brand",
					children: "Save as draft"
				}), /* @__PURE__ */ jsx("button", {
					disabled: busy,
					onClick: () => save(true),
					className: "px-6 py-3 bg-brand text-canvas text-xs uppercase tracking-widest font-semibold rounded-full",
					children: published ? "Update & republish" : "Publish"
				})]
			})
		]
	});
}
function Field({ label, value, onChange }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-2",
		children: [/* @__PURE__ */ jsx("label", {
			className: "text-[10px] uppercase tracking-[0.25em] text-ink/60",
			children: label
		}), /* @__PURE__ */ jsx("input", {
			value,
			onChange: (e) => onChange(e.target.value),
			className: "w-full bg-secondary border border-black/10 px-4 py-3 text-sm"
		})]
	});
}
//#endregion
export { PostEditor as t };
