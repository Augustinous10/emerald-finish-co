import { t as supabase } from "./client-DR4jfEwv.js";
import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { Mail, Phone, Trash2 } from "lucide-react";
//#region src/routes/_authenticated/admin.messages.tsx?tsr-split=component
function Messages() {
	const qc = useQueryClient();
	const [open, setOpen] = useState(null);
	const list = useQuery({
		queryKey: ["messages"],
		queryFn: async () => {
			const { data, error } = await supabase.from("contact_messages").select("*").order("created_at", { ascending: false });
			if (error) throw error;
			return data;
		}
	});
	const update = useMutation({
		mutationFn: async ({ id, patch }) => {
			const { error } = await supabase.from("contact_messages").update(patch).eq("id", id);
			if (error) throw error;
		},
		onSuccess: () => {
			qc.invalidateQueries({ queryKey: ["messages"] });
			toast.success("Updated");
		}
	});
	const del = useMutation({
		mutationFn: async (id) => {
			const { error } = await supabase.from("contact_messages").delete().eq("id", id);
			if (error) throw error;
		},
		onSuccess: () => {
			qc.invalidateQueries({ queryKey: ["messages"] });
			setOpen(null);
			toast.success("Deleted");
		}
	});
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
				className: "text-xs uppercase tracking-[0.3em] text-gold",
				children: "Inbox"
			}), /* @__PURE__ */ jsx("h1", {
				className: "font-display text-4xl mt-2",
				children: "Contact Messages"
			})] }),
			/* @__PURE__ */ jsxs("div", {
				className: "bg-canvas rounded divide-y divide-black/5",
				children: [list.data?.map((m) => /* @__PURE__ */ jsxs("button", {
					onClick: () => setOpen(m),
					className: `w-full text-left p-4 hover:bg-secondary/50 flex items-start gap-4 ${m.status === "new" ? "font-medium" : "text-ink/70"}`,
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex-1 min-w-0",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ jsx("span", { children: m.name }), m.status === "new" && /* @__PURE__ */ jsx("span", { className: "size-1.5 bg-gold rounded-full" })]
						}), /* @__PURE__ */ jsx("p", {
							className: "text-xs text-ink/50 truncate",
							children: m.subject ?? m.message?.slice(0, 80)
						})]
					}), /* @__PURE__ */ jsx("span", {
						className: "text-xs text-ink/40",
						children: new Date(m.created_at).toLocaleDateString()
					})]
				}, m.id)), !list.data?.length && /* @__PURE__ */ jsx("p", {
					className: "p-8 text-center text-ink/50",
					children: "No messages"
				})]
			}),
			open && /* @__PURE__ */ jsx("div", {
				className: "fixed inset-0 z-50 bg-ink/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4",
				onClick: () => setOpen(null),
				children: /* @__PURE__ */ jsxs("div", {
					className: "bg-canvas w-full max-w-xl rounded-t-2xl sm:rounded-lg p-6 space-y-4",
					onClick: (e) => e.stopPropagation(),
					children: [
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
							className: "font-display text-2xl",
							children: open.subject ?? "Message"
						}), /* @__PURE__ */ jsxs("p", {
							className: "text-xs text-ink/50",
							children: [
								open.name,
								" · ",
								new Date(open.created_at).toLocaleString()
							]
						})] }),
						/* @__PURE__ */ jsxs("div", {
							className: "flex flex-wrap gap-2 text-sm",
							children: [/* @__PURE__ */ jsxs("a", {
								href: `mailto:${open.email}`,
								className: "flex items-center gap-2 bg-secondary px-3 py-2 rounded hover:text-brand",
								children: [
									/* @__PURE__ */ jsx(Mail, { size: 14 }),
									" ",
									open.email
								]
							}), open.phone && /* @__PURE__ */ jsxs("a", {
								href: `tel:${open.phone}`,
								className: "flex items-center gap-2 bg-secondary px-3 py-2 rounded hover:text-brand",
								children: [
									/* @__PURE__ */ jsx(Phone, { size: 14 }),
									" ",
									open.phone
								]
							})]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-sm whitespace-pre-wrap bg-secondary p-4 rounded",
							children: open.message
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex gap-2 pt-2 border-t border-black/5",
							children: [/* @__PURE__ */ jsxs("button", {
								onClick: () => update.mutate({
									id: open.id,
									patch: { status: open.status === "new" ? "contacted" : "new" }
								}),
								className: "text-xs uppercase tracking-widest px-3 py-2 rounded-full border border-black/15 hover:border-brand",
								children: ["Mark ", open.status === "new" ? "contacted" : "new"]
							}), /* @__PURE__ */ jsxs("button", {
								onClick: () => confirm("Delete?") && del.mutate(open.id),
								className: "ml-auto flex items-center gap-1 text-xs text-red-600 hover:underline",
								children: [/* @__PURE__ */ jsx(Trash2, { size: 14 }), " Delete"]
							})]
						})
					]
				})
			})
		]
	});
}
//#endregion
export { Messages as component };
