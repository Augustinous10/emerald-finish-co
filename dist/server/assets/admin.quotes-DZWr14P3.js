import { t as supabase } from "./client-DR4jfEwv.js";
import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { Mail, Phone, Trash2 } from "lucide-react";
//#region src/routes/_authenticated/admin.quotes.tsx?tsr-split=component
var STATUSES = [
	"new",
	"contacted",
	"won",
	"lost",
	"archived"
];
function Quotes() {
	const qc = useQueryClient();
	const [filter, setFilter] = useState("all");
	const [selected, setSelected] = useState(null);
	const list = useQuery({
		queryKey: ["quotes", filter],
		queryFn: async () => {
			let q = supabase.from("quote_requests").select("*").order("created_at", { ascending: false });
			if (filter !== "all") q = q.eq("status", filter);
			const { data, error } = await q;
			if (error) throw error;
			return data ?? [];
		}
	});
	const update = useMutation({
		mutationFn: async ({ id, patch }) => {
			const { error } = await supabase.from("quote_requests").update(patch).eq("id", id);
			if (error) throw error;
		},
		onSuccess: () => {
			qc.invalidateQueries({ queryKey: ["quotes"] });
			toast.success("Updated");
		},
		onError: (e) => toast.error(e.message)
	});
	const del = useMutation({
		mutationFn: async (id) => {
			const { error } = await supabase.from("quote_requests").delete().eq("id", id);
			if (error) throw error;
		},
		onSuccess: () => {
			qc.invalidateQueries({ queryKey: ["quotes"] });
			setSelected(null);
			toast.success("Deleted");
		}
	});
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex items-end justify-between flex-wrap gap-4",
				children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
					className: "text-xs uppercase tracking-[0.3em] text-gold",
					children: "Inbox"
				}), /* @__PURE__ */ jsx("h1", {
					className: "font-display text-4xl mt-2",
					children: "Quote Requests"
				})] }), /* @__PURE__ */ jsx("div", {
					className: "flex gap-1 flex-wrap",
					children: ["all", ...STATUSES].map((s) => /* @__PURE__ */ jsx("button", {
						onClick: () => setFilter(s),
						className: `px-3 py-1.5 text-xs uppercase tracking-widest rounded-full border ${filter === s ? "bg-brand text-canvas border-brand" : "border-black/15 hover:border-brand"}`,
						children: s
					}, s))
				})]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "bg-canvas rounded overflow-hidden",
				children: /* @__PURE__ */ jsxs("table", {
					className: "w-full text-sm",
					children: [/* @__PURE__ */ jsx("thead", {
						className: "bg-secondary text-[10px] uppercase tracking-widest text-ink/60",
						children: /* @__PURE__ */ jsxs("tr", { children: [
							/* @__PURE__ */ jsx("th", {
								className: "text-left p-3",
								children: "Name"
							}),
							/* @__PURE__ */ jsx("th", {
								className: "text-left p-3 hidden sm:table-cell",
								children: "Service"
							}),
							/* @__PURE__ */ jsx("th", {
								className: "text-left p-3 hidden md:table-cell",
								children: "Date"
							}),
							/* @__PURE__ */ jsx("th", {
								className: "text-left p-3",
								children: "Status"
							})
						] })
					}), /* @__PURE__ */ jsxs("tbody", { children: [list.data?.map((q) => /* @__PURE__ */ jsxs("tr", {
						onClick: () => setSelected(q),
						className: "border-t border-black/5 hover:bg-secondary/50 cursor-pointer",
						children: [
							/* @__PURE__ */ jsxs("td", {
								className: "p-3",
								children: [/* @__PURE__ */ jsx("p", {
									className: "font-medium",
									children: q.name
								}), /* @__PURE__ */ jsx("p", {
									className: "text-xs text-ink/50",
									children: q.email
								})]
							}),
							/* @__PURE__ */ jsx("td", {
								className: "p-3 hidden sm:table-cell text-ink/70",
								children: q.service ?? "—"
							}),
							/* @__PURE__ */ jsx("td", {
								className: "p-3 hidden md:table-cell text-ink/50 text-xs",
								children: new Date(q.created_at).toLocaleString()
							}),
							/* @__PURE__ */ jsx("td", {
								className: "p-3",
								children: /* @__PURE__ */ jsx(StatusPill, { status: q.status })
							})
						]
					}, q.id)), !list.data?.length && /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", {
						colSpan: 4,
						className: "p-8 text-center text-ink/50",
						children: "No quotes"
					}) })] })]
				})
			}),
			selected && /* @__PURE__ */ jsx("div", {
				className: "fixed inset-0 z-50 bg-ink/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4",
				onClick: () => setSelected(null),
				children: /* @__PURE__ */ jsx("div", {
					className: "bg-canvas w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-t-2xl sm:rounded-lg",
					onClick: (e) => e.stopPropagation(),
					children: /* @__PURE__ */ jsxs("div", {
						className: "p-6 space-y-5",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-start justify-between",
								children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
									className: "font-display text-2xl",
									children: selected.name
								}), /* @__PURE__ */ jsx("p", {
									className: "text-xs text-ink/50",
									children: new Date(selected.created_at).toLocaleString()
								})] }), /* @__PURE__ */ jsx(StatusPill, { status: selected.status })]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "grid sm:grid-cols-2 gap-3 text-sm",
								children: [/* @__PURE__ */ jsxs("a", {
									href: `mailto:${selected.email}`,
									className: "flex items-center gap-2 bg-secondary p-3 rounded hover:text-brand",
									children: [
										/* @__PURE__ */ jsx(Mail, { size: 14 }),
										" ",
										selected.email
									]
								}), selected.phone && /* @__PURE__ */ jsxs("a", {
									href: `tel:${selected.phone}`,
									className: "flex items-center gap-2 bg-secondary p-3 rounded hover:text-brand",
									children: [
										/* @__PURE__ */ jsx(Phone, { size: 14 }),
										" ",
										selected.phone
									]
								})]
							}),
							/* @__PURE__ */ jsx(Detail, {
								label: "Service",
								value: selected.service
							}),
							/* @__PURE__ */ jsx(Detail, {
								label: "Project type",
								value: selected.project_type
							}),
							/* @__PURE__ */ jsx(Detail, {
								label: "Surface area (m²)",
								value: selected.surface_area
							}),
							/* @__PURE__ */ jsx(Detail, {
								label: "Budget",
								value: selected.budget
							}),
							/* @__PURE__ */ jsx(Detail, {
								label: "Message",
								value: selected.message,
								multiline: true
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ jsx("label", {
									className: "text-[10px] uppercase tracking-[0.25em] text-ink/60",
									children: "Admin notes"
								}), /* @__PURE__ */ jsx("textarea", {
									defaultValue: selected.admin_notes ?? "",
									rows: 3,
									onBlur: (e) => e.target.value !== (selected.admin_notes ?? "") && update.mutate({
										id: selected.id,
										patch: { admin_notes: e.target.value }
									}),
									className: "w-full bg-secondary border border-black/10 p-3 text-sm"
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex flex-wrap items-center gap-2 pt-2 border-t border-black/5",
								children: [STATUSES.map((s) => /* @__PURE__ */ jsx("button", {
									onClick: () => update.mutate({
										id: selected.id,
										patch: {
											status: s,
											contacted_at: s === "contacted" ? (/* @__PURE__ */ new Date()).toISOString() : selected.contacted_at
										}
									}),
									className: `px-3 py-1.5 text-xs uppercase tracking-widest rounded-full border ${selected.status === s ? "bg-brand text-canvas border-brand" : "border-black/15 hover:border-brand"}`,
									children: s
								}, s)), /* @__PURE__ */ jsxs("button", {
									onClick: () => confirm("Delete this request?") && del.mutate(selected.id),
									className: "ml-auto flex items-center gap-1 text-xs text-red-600 hover:underline",
									children: [/* @__PURE__ */ jsx(Trash2, { size: 14 }), " Delete"]
								})]
							})
						]
					})
				})
			})
		]
	});
}
function StatusPill({ status }) {
	return /* @__PURE__ */ jsx("span", {
		className: `text-[10px] uppercase tracking-widest px-2 py-1 rounded ${status === "new" ? "bg-gold/20 text-brand" : status === "won" ? "bg-green-100 text-green-800" : status === "lost" ? "bg-red-100 text-red-700" : "bg-ink/10 text-ink/60"}`,
		children: status
	});
}
function Detail({ label, value, multiline }) {
	if (value === null || value === void 0 || value === "") return null;
	return /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
		className: "text-[10px] uppercase tracking-[0.25em] text-ink/60 mb-1",
		children: label
	}), /* @__PURE__ */ jsx("p", {
		className: `text-sm ${multiline ? "whitespace-pre-wrap" : ""}`,
		children: String(value)
	})] });
}
//#endregion
export { Quotes as component };
