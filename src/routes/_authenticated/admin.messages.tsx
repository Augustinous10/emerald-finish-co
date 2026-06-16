import { createFileRoute } from "@tanstack/react-router";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Mail, Phone, Trash2 } from "lucide-react";

export const Route = createFileRoute("/_authenticated/admin/messages")({
  ssr: false,
  component: Messages,
});

function Messages() {
  const qc = useQueryClient();
  const [open, setOpen] = useState<any>(null);
  const list = useQuery({
    queryKey: ["messages"],
    queryFn: async () => {
      const { data, error } = await supabase.from("contact_messages").select("*").order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });
  const update = useMutation({
    mutationFn: async ({ id, patch }: any) => {
      const { error } = await supabase.from("contact_messages").update(patch).eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => { qc.invalidateQueries({ queryKey: ["messages"] }); toast.success("Updated"); },
  });
  const del = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("contact_messages").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => { qc.invalidateQueries({ queryKey: ["messages"] }); setOpen(null); toast.success("Deleted"); },
  });

  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-gold">Inbox</p>
        <h1 className="font-display text-4xl mt-2">Contact Messages</h1>
      </div>
      <div className="bg-canvas rounded divide-y divide-black/5">
        {list.data?.map((m) => (
          <button key={m.id} onClick={() => setOpen(m)}
            className={`w-full text-left p-4 hover:bg-secondary/50 flex items-start gap-4 ${m.status === "new" ? "font-medium" : "text-ink/70"}`}>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span>{m.name}</span>
                {m.status === "new" && <span className="size-1.5 bg-gold rounded-full" />}
              </div>
              <p className="text-xs text-ink/50 truncate">{m.subject ?? m.message?.slice(0, 80)}</p>
            </div>
            <span className="text-xs text-ink/40">{new Date(m.created_at).toLocaleDateString()}</span>
          </button>
        ))}
        {!list.data?.length && <p className="p-8 text-center text-ink/50">No messages</p>}
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-ink/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4" onClick={() => setOpen(null)}>
          <div className="bg-canvas w-full max-w-xl rounded-t-2xl sm:rounded-lg p-6 space-y-4" onClick={(e) => e.stopPropagation()}>
            <div>
              <h2 className="font-display text-2xl">{open.subject ?? "Message"}</h2>
              <p className="text-xs text-ink/50">{open.name} · {new Date(open.created_at).toLocaleString()}</p>
            </div>
            <div className="flex flex-wrap gap-2 text-sm">
              <a href={`mailto:${open.email}`} className="flex items-center gap-2 bg-secondary px-3 py-2 rounded hover:text-brand"><Mail size={14} /> {open.email}</a>
              {open.phone && <a href={`tel:${open.phone}`} className="flex items-center gap-2 bg-secondary px-3 py-2 rounded hover:text-brand"><Phone size={14} /> {open.phone}</a>}
            </div>
            <p className="text-sm whitespace-pre-wrap bg-secondary p-4 rounded">{open.message}</p>
            <div className="flex gap-2 pt-2 border-t border-black/5">
              <button onClick={() => update.mutate({ id: open.id, patch: { status: open.status === "new" ? "contacted" : "new" } })}
                className="text-xs uppercase tracking-widest px-3 py-2 rounded-full border border-black/15 hover:border-brand">
                Mark {open.status === "new" ? "contacted" : "new"}
              </button>
              <button onClick={() => confirm("Delete?") && del.mutate(open.id)}
                className="ml-auto flex items-center gap-1 text-xs text-red-600 hover:underline"><Trash2 size={14} /> Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}