import { createFileRoute } from "@tanstack/react-router";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Trash2, Upload, X } from "lucide-react";
import { SignedImage } from "@/components/admin/SignedImage";

export const Route = createFileRoute("/_authenticated/admin/gallery")({
  ssr: false,
  component: Gallery,
});

const CATEGORIES = ["interior", "exterior", "decorative", "gypsum", "kitchen", "bathroom", "commercial", "renovation"];

function Gallery() {
  const qc = useQueryClient();
  const [showForm, setShowForm] = useState(false);

  const list = useQuery({
    queryKey: ["gallery-admin"],
    queryFn: async () => {
      const { data, error } = await supabase.from("gallery_projects").select("*").order("sort_order").order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  const del = useMutation({
    mutationFn: async (item: any) => {
      if (item.image_path) await supabase.storage.from("gallery").remove([item.image_path]);
      const { error } = await supabase.from("gallery_projects").delete().eq("id", item.id);
      if (error) throw error;
    },
    onSuccess: () => { qc.invalidateQueries({ queryKey: ["gallery-admin"] }); qc.invalidateQueries({ queryKey: ["gallery-public"] }); toast.success("Deleted"); },
  });

  const toggle = useMutation({
    mutationFn: async (item: any) => {
      const { error } = await supabase.from("gallery_projects").update({ published: !item.published }).eq("id", item.id);
      if (error) throw error;
    },
    onSuccess: () => { qc.invalidateQueries({ queryKey: ["gallery-admin"] }); qc.invalidateQueries({ queryKey: ["gallery-public"] }); },
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Portfolio</p>
          <h1 className="font-display text-4xl mt-2">Gallery</h1>
        </div>
        <button onClick={() => setShowForm(true)} className="bg-brand text-canvas px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold flex items-center gap-2">
          <Upload size={14} /> Upload project
        </button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {list.data?.map((p) => (
          <div key={p.id} className="bg-canvas rounded overflow-hidden group">
            <div className="aspect-[4/3] bg-ink/5">
              <SignedImage bucket="gallery" path={p.image_path} alt={p.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-4 space-y-2">
              <div className="flex items-center justify-between">
                <p className="font-medium">{p.title}</p>
                <span className="text-[10px] uppercase tracking-widest text-ink/50">{p.category}</span>
              </div>
              <div className="flex gap-2 pt-2 text-xs">
                <button onClick={() => toggle.mutate(p)} className={`px-3 py-1 rounded-full border ${p.published ? "border-green-600 text-green-700" : "border-black/15 text-ink/50"}`}>
                  {p.published ? "Published" : "Hidden"}
                </button>
                <button onClick={() => confirm("Delete this project?") && del.mutate(p)} className="ml-auto text-red-600 hover:underline flex items-center gap-1"><Trash2 size={12} /> Delete</button>
              </div>
            </div>
          </div>
        ))}
        {!list.data?.length && <p className="col-span-full p-8 text-center text-ink/50 bg-canvas rounded">No gallery items — upload your first project.</p>}
      </div>

      {showForm && <UploadDialog onClose={() => setShowForm(false)} onSaved={() => { qc.invalidateQueries({ queryKey: ["gallery-admin"] }); qc.invalidateQueries({ queryKey: ["gallery-public"] }); }} />}
    </div>
  );
}

function UploadDialog({ onClose, onSaved }: { onClose: () => void; onSaved: () => void }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("interior");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [busy, setBusy] = useState(false);

  async function save(e: React.FormEvent) {
    e.preventDefault();
    if (!file) return toast.error("Pick an image");
    setBusy(true);
    try {
      const ext = file.name.split(".").pop();
      const path = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
      const up = await supabase.storage.from("gallery").upload(path, file, { contentType: file.type });
      if (up.error) throw up.error;
      const { error } = await supabase.from("gallery_projects").insert({
        title, category, description: description || null, image_path: path, published: true,
      });
      if (error) throw error;
      toast.success("Project added");
      onSaved();
      onClose();
    } catch (e: any) {
      toast.error(e.message);
    } finally { setBusy(false); }
  }

  return (
    <div className="fixed inset-0 z-50 bg-ink/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4" onClick={onClose}>
      <form onSubmit={save} onClick={(e) => e.stopPropagation()} className="bg-canvas w-full max-w-lg rounded-t-2xl sm:rounded-lg p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-2xl">New project</h2>
          <button type="button" onClick={onClose}><X size={20} /></button>
        </div>
        <input value={title} onChange={(e) => setTitle(e.target.value)} required placeholder="Project title" className="w-full bg-secondary border border-black/10 px-4 py-3 text-sm" />
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full bg-secondary border border-black/10 px-4 py-3 text-sm">
          {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={3} placeholder="Description (optional)" className="w-full bg-secondary border border-black/10 px-4 py-3 text-sm" />
        <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files?.[0] ?? null)} required className="w-full text-xs file:mr-3 file:py-2 file:px-4 file:border-0 file:bg-brand file:text-canvas file:text-xs file:uppercase file:tracking-widest file:font-semibold" />
        <button disabled={busy} className="w-full bg-brand text-canvas py-3 text-sm uppercase tracking-widest font-semibold disabled:opacity-50">
          {busy ? "Uploading…" : "Save project"}
        </button>
      </form>
    </div>
  );
}