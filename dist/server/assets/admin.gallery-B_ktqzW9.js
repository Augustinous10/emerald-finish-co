import { t as supabase } from "./client-DR4jfEwv.js";
import { t as SignedImage } from "./SignedImage-D4nzZ5bV.js";
import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { Trash2, Upload, X } from "lucide-react";
//#region src/routes/_authenticated/admin.gallery.tsx?tsr-split=component
var CATEGORIES = [
	"interior",
	"exterior",
	"decorative",
	"gypsum",
	"kitchen",
	"bathroom",
	"commercial",
	"renovation"
];
function Gallery() {
	const qc = useQueryClient();
	const [showForm, setShowForm] = useState(false);
	const list = useQuery({
		queryKey: ["gallery-admin"],
		queryFn: async () => {
			const { data, error } = await supabase.from("gallery_projects").select("*").order("sort_order").order("created_at", { ascending: false });
			if (error) throw error;
			return data;
		}
	});
	const del = useMutation({
		mutationFn: async (item) => {
			if (item.image_path) await supabase.storage.from("gallery").remove([item.image_path]);
			const { error } = await supabase.from("gallery_projects").delete().eq("id", item.id);
			if (error) throw error;
		},
		onSuccess: () => {
			qc.invalidateQueries({ queryKey: ["gallery-admin"] });
			qc.invalidateQueries({ queryKey: ["gallery-public"] });
			toast.success("Deleted");
		}
	});
	const toggle = useMutation({
		mutationFn: async (item) => {
			const { error } = await supabase.from("gallery_projects").update({ published: !item.published }).eq("id", item.id);
			if (error) throw error;
		},
		onSuccess: () => {
			qc.invalidateQueries({ queryKey: ["gallery-admin"] });
			qc.invalidateQueries({ queryKey: ["gallery-public"] });
		}
	});
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex items-center justify-between flex-wrap gap-4",
				children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
					className: "text-xs uppercase tracking-[0.3em] text-gold",
					children: "Portfolio"
				}), /* @__PURE__ */ jsx("h1", {
					className: "font-display text-4xl mt-2",
					children: "Gallery"
				})] }), /* @__PURE__ */ jsxs("button", {
					onClick: () => setShowForm(true),
					className: "bg-brand text-canvas px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold flex items-center gap-2",
					children: [/* @__PURE__ */ jsx(Upload, { size: 14 }), " Upload project"]
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-4",
				children: [list.data?.map((p) => /* @__PURE__ */ jsxs("div", {
					className: "bg-canvas rounded overflow-hidden group",
					children: [/* @__PURE__ */ jsx("div", {
						className: "aspect-[4/3] bg-ink/5",
						children: /* @__PURE__ */ jsx(SignedImage, {
							bucket: "gallery",
							path: p.image_path,
							alt: p.title,
							className: "w-full h-full object-cover"
						})
					}), /* @__PURE__ */ jsxs("div", {
						className: "p-4 space-y-2",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ jsx("p", {
								className: "font-medium",
								children: p.title
							}), /* @__PURE__ */ jsx("span", {
								className: "text-[10px] uppercase tracking-widest text-ink/50",
								children: p.category
							})]
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex gap-2 pt-2 text-xs",
							children: [/* @__PURE__ */ jsx("button", {
								onClick: () => toggle.mutate(p),
								className: `px-3 py-1 rounded-full border ${p.published ? "border-green-600 text-green-700" : "border-black/15 text-ink/50"}`,
								children: p.published ? "Published" : "Hidden"
							}), /* @__PURE__ */ jsxs("button", {
								onClick: () => confirm("Delete this project?") && del.mutate(p),
								className: "ml-auto text-red-600 hover:underline flex items-center gap-1",
								children: [/* @__PURE__ */ jsx(Trash2, { size: 12 }), " Delete"]
							})]
						})]
					})]
				}, p.id)), !list.data?.length && /* @__PURE__ */ jsx("p", {
					className: "col-span-full p-8 text-center text-ink/50 bg-canvas rounded",
					children: "No gallery items — upload your first project."
				})]
			}),
			showForm && /* @__PURE__ */ jsx(UploadDialog, {
				onClose: () => setShowForm(false),
				onSaved: () => {
					qc.invalidateQueries({ queryKey: ["gallery-admin"] });
					qc.invalidateQueries({ queryKey: ["gallery-public"] });
				}
			})
		]
	});
}
function UploadDialog({ onClose, onSaved }) {
	const [title, setTitle] = useState("");
	const [category, setCategory] = useState("interior");
	const [description, setDescription] = useState("");
	const [file, setFile] = useState(null);
	const [busy, setBusy] = useState(false);
	async function save(e) {
		e.preventDefault();
		if (!file) return toast.error("Pick an image");
		setBusy(true);
		try {
			const ext = file.name.split(".").pop();
			const path = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
			const up = await supabase.storage.from("gallery").upload(path, file, { contentType: file.type });
			if (up.error) throw up.error;
			const { error } = await supabase.from("gallery_projects").insert({
				title,
				category,
				description: description || null,
				image_path: path,
				published: true
			});
			if (error) throw error;
			toast.success("Project added");
			onSaved();
			onClose();
		} catch (e) {
			toast.error(e.message);
		} finally {
			setBusy(false);
		}
	}
	return /* @__PURE__ */ jsx("div", {
		className: "fixed inset-0 z-50 bg-ink/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4",
		onClick: onClose,
		children: /* @__PURE__ */ jsxs("form", {
			onSubmit: save,
			onClick: (e) => e.stopPropagation(),
			className: "bg-canvas w-full max-w-lg rounded-t-2xl sm:rounded-lg p-6 space-y-4",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ jsx("h2", {
						className: "font-display text-2xl",
						children: "New project"
					}), /* @__PURE__ */ jsx("button", {
						type: "button",
						onClick: onClose,
						children: /* @__PURE__ */ jsx(X, { size: 20 })
					})]
				}),
				/* @__PURE__ */ jsx("input", {
					value: title,
					onChange: (e) => setTitle(e.target.value),
					required: true,
					placeholder: "Project title",
					className: "w-full bg-secondary border border-black/10 px-4 py-3 text-sm"
				}),
				/* @__PURE__ */ jsx("select", {
					value: category,
					onChange: (e) => setCategory(e.target.value),
					className: "w-full bg-secondary border border-black/10 px-4 py-3 text-sm",
					children: CATEGORIES.map((c) => /* @__PURE__ */ jsx("option", {
						value: c,
						children: c
					}, c))
				}),
				/* @__PURE__ */ jsx("textarea", {
					value: description,
					onChange: (e) => setDescription(e.target.value),
					rows: 3,
					placeholder: "Description (optional)",
					className: "w-full bg-secondary border border-black/10 px-4 py-3 text-sm"
				}),
				/* @__PURE__ */ jsx("input", {
					type: "file",
					accept: "image/*",
					onChange: (e) => setFile(e.target.files?.[0] ?? null),
					required: true,
					className: "w-full text-xs file:mr-3 file:py-2 file:px-4 file:border-0 file:bg-brand file:text-canvas file:text-xs file:uppercase file:tracking-widest file:font-semibold"
				}),
				/* @__PURE__ */ jsx("button", {
					disabled: busy,
					className: "w-full bg-brand text-canvas py-3 text-sm uppercase tracking-widest font-semibold disabled:opacity-50",
					children: busy ? "Uploading…" : "Save project"
				})
			]
		})
	});
}
//#endregion
export { Gallery as component };
