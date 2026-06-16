import { createFileRoute } from "@tanstack/react-router";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Mail, Phone, Trash2 } from "lucide-react";

export const Route = createFileRoute("/_authenticated/admin/quotes")({
  ssr: false,
  component: Quotes,
});

const STATUSES = ["new", "contacted", "won", "lost", "archived"] as const;

function Quotes() {
  const qc = useQueryClient();
  const [filter, setFilter] = useState<string>("all");
  const [selected, setSelected] = useState<any>(null);

  const list = useQuery({
    queryKey: ["quotes", filter],
    queryFn: async () => {
      let q = supabase.from("quote_requests").select("*").order("created_at", { ascending: false });
      if (filter !== "all") q = q.eq("status", filter as any);
      const { data, error } = await q;
      if (error) throw error;
      return data ?? [];
    },
  });

  const update = useMutation({
    mutationFn: async ({ id, patch }: { id: string; patch: any }) => {
      const { error } = await supabase.from("quote_requests").update(patch).eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => { qc.invalidateQueries({ queryKey: ["quotes"] }); toast.success("Updated"); },
    onError: (e: any) => toast.error(e.message),
  });

  const del = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("quote_requests").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => { qc.invalidateQueries({ queryKey: ["quotes"] }); setSelected(null); toast.success("Deleted"); },
  });

  return (
    <div className="space-y-6">
      <div className="flex items-end justify-between flex-wrap gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Inbox</p>
          <h1 className="font-display text-4xl mt-2">Quote Requests</h1>
        </div>
        <div className="flex gap-1 flex-wrap">
          {["all", ...STATUSES].map((s) => (
            <button key={s} onClick={() => setFilter(s)}
              className={`px-3 py-1.5 text-xs uppercase tracking-widest rounded-full border ${
                filter === s ? "bg-brand text-canvas border-brand" : "border-black/15 hover:border-brand"
              }`}>{s}</button>
          ))}
        </div>
      </div>

      <div className="bg-canvas rounded overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-secondary text-[10px] uppercase tracking-widest text-ink/60">
            <tr><th className="text-left p-3">Name</th><th className="text-left p-3 hidden sm:table-cell">Service</th><th className="text-left p-3 hidden md:table-cell">Date</th><th className="text-left p-3">Status</th></tr>
          </thead>
          <tbody>
            {list.data?.map((q) => (
              <tr key={q.id} onClick={() => setSelected(q)} className="border-t border-black/5 hover:bg-secondary/50 cursor-pointer">
                <td className="p-3">
                  <p className="font-medium">{q.name}</p>
                  <p className="text-xs text-ink/50">{q.email}</p>
                </td>
                <td className="p-3 hidden sm:table-cell text-ink/70">{q.service ?? "—"}</td>
                <td className="p-3 hidden md:table-cell text-ink/50 text-xs">{new Date(q.created_at).toLocaleString()}</td>
                <td className="p-3"><StatusPill status={q.status} /></td>
              </tr>
            ))}
            {!list.data?.length && <tr><td colSpan={4} className="p-8 text-center text-ink/50">No quotes</td></tr>}
          </tbody>
        </table>
      </div>

      {selected && (
        <div className="fixed inset-0 z-50 bg-ink/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4" onClick={() => setSelected(null)}>
          <div className="bg-canvas w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-t-2xl sm:rounded-lg" onClick={(e) => e.stopPropagation()}>
            <div className="p-6 space-y-5">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="font-display text-2xl">{selected.name}</h2>
                  <p className="text-xs text-ink/50">{new Date(selected.created_at).toLocaleString()}</p>
                </div>
                <StatusPill status={selected.status} />
              </div>
              <div className="grid sm:grid-cols-2 gap-3 text-sm">
                <a href={`mailto:${selected.email}`} className="flex items-center gap-2 bg-secondary p-3 rounded hover:text-brand"><Mail size={14} /> {selected.email}</a>
                {selected.phone && <a href={`tel:${selected.phone}`} className="flex items-center gap-2 bg-secondary p-3 rounded hover:text-brand"><Phone size={14} /> {selected.phone}</a>}
              </div>
              <Detail label="Service" value={selected.service} />
              <Detail label="Project type" value={selected.project_type} />
              <Detail label="Surface area (m²)" value={selected.surface_area} />
              <Detail label="Budget" value={selected.budget} />
              <Detail label="Message" value={selected.message} multiline />
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.25em] text-ink/60">Admin notes</label>
                <textarea defaultValue={selected.admin_notes ?? ""} rows={3}
                  onBlur={(e) => e.target.value !== (selected.admin_notes ?? "") && update.mutate({ id: selected.id, patch: { admin_notes: e.target.value } })}
                  className="w-full bg-secondary border border-black/10 p-3 text-sm" />
              </div>
              <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-black/5">
                {STATUSES.map((s) => (
                  <button key={s} onClick={() => update.mutate({ id: selected.id, patch: { status: s, contacted_at: s === "contacted" ? new Date().toISOString() : selected.contacted_at } })}
                    className={`px-3 py-1.5 text-xs uppercase tracking-widest rounded-full border ${
                      selected.status === s ? "bg-brand text-canvas border-brand" : "border-black/15 hover:border-brand"
                    }`}>{s}</button>
                ))}
                <button onClick={() => confirm("Delete this request?") && del.mutate(selected.id)}
                  className="ml-auto flex items-center gap-1 text-xs text-red-600 hover:underline"><Trash2 size={14} /> Delete</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function StatusPill({ status }: { status: string }) {
  const cls = status === "new" ? "bg-gold/20 text-brand"
    : status === "won" ? "bg-green-100 text-green-800"
    : status === "lost" ? "bg-red-100 text-red-700"
    : "bg-ink/10 text-ink/60";
  return <span className={`text-[10px] uppercase tracking-widest px-2 py-1 rounded ${cls}`}>{status}</span>;
}

function Detail({ label, value, multiline }: { label: string; value: any; multiline?: boolean }) {
  if (value === null || value === undefined || value === "") return null;
  return (
    <div>
      <p className="text-[10px] uppercase tracking-[0.25em] text-ink/60 mb-1">{label}</p>
      <p className={`text-sm ${multiline ? "whitespace-pre-wrap" : ""}`}>{String(value)}</p>
    </div>
  );
}