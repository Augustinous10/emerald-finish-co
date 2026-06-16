import { useEffect, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Upload } from "lucide-react";
import { SignedImage } from "./SignedImage";

function slugify(s: string) {
  return s.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-").slice(0, 80);
}

export function PostEditor({ initial }: { initial?: any }) {
  const navigate = useNavigate();
  const editing = !!initial;
  const [title, setTitle] = useState(initial?.title ?? "");
  const [slug, setSlug] = useState(initial?.slug ?? "");
  const [excerpt, setExcerpt] = useState(initial?.excerpt ?? "");
  const [content, setContent] = useState(initial?.content ?? "");
  const [tags, setTags] = useState((initial?.tags ?? []).join(", "));
  const [coverPath, setCoverPath] = useState<string | null>(initial?.cover_image ?? null);
  const [published, setPublished] = useState(initial?.published ?? false);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (!editing && title && !slug) setSlug(slugify(title));
  }, [title, slug, editing]);

  async function uploadCover(file: File) {
    const ext = file.name.split(".").pop();
    const path = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
    const { error } = await supabase.storage.from("blog").upload(path, file, { contentType: file.type });
    if (error) return toast.error(error.message);
    setCoverPath(path);
    toast.success("Cover uploaded");
  }

  async function save(publish: boolean) {
    if (!title || !slug) return toast.error("Title and slug required");
    setBusy(true);
    try {
      const { data: u } = await supabase.auth.getUser();
      const payload = {
        title, slug: slugify(slug), excerpt: excerpt || null, content,
        tags: tags.split(",").map((t) => t.trim()).filter(Boolean),
        cover_image: coverPath, published: publish,
        published_at: publish ? (initial?.published_at ?? new Date().toISOString()) : null,
        author_id: u.user?.id ?? null,
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
    } catch (e: any) {
      toast.error(e.message);
    } finally { setBusy(false); }
  }

  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-gold">{editing ? "Edit post" : "New post"}</p>
        <h1 className="font-display text-4xl mt-2">{editing ? title : "Write a new post"}</h1>
      </div>

      <div className="space-y-4 bg-canvas p-6 rounded">
        <Field label="Title" value={title} onChange={setTitle} />
        <Field label="URL slug" value={slug} onChange={setSlug} />
        <Field label="Excerpt (shown in listings)" value={excerpt} onChange={setExcerpt} />
        <Field label="Tags (comma separated)" value={tags} onChange={setTags} />

        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-[0.25em] text-ink/60">Cover image</label>
          {coverPath && <div className="aspect-[16/9] bg-ink/5 rounded overflow-hidden mb-2"><SignedImage bucket="blog" path={coverPath} alt="" className="w-full h-full object-cover" /></div>}
          <label className="inline-flex items-center gap-2 cursor-pointer bg-secondary px-4 py-2 rounded text-xs uppercase tracking-widest">
            <Upload size={14} /> {coverPath ? "Replace" : "Upload"} cover
            <input type="file" accept="image/*" className="hidden" onChange={(e) => e.target.files?.[0] && uploadCover(e.target.files[0])} />
          </label>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-[0.25em] text-ink/60">Content (Markdown supported)</label>
          <textarea value={content} onChange={(e) => setContent(e.target.value)} rows={18}
            className="w-full bg-secondary border border-black/10 p-4 text-sm font-mono"
            placeholder="# Heading&#10;&#10;Write your post in markdown..." />
        </div>
      </div>

      <div className="flex gap-2">
        <button disabled={busy} onClick={() => save(false)} className="px-6 py-3 border border-black/15 text-xs uppercase tracking-widest font-semibold rounded-full hover:border-brand">
          Save as draft
        </button>
        <button disabled={busy} onClick={() => save(true)} className="px-6 py-3 bg-brand text-canvas text-xs uppercase tracking-widest font-semibold rounded-full">
          {published ? "Update & republish" : "Publish"}
        </button>
      </div>
    </div>
  );
}

function Field({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] uppercase tracking-[0.25em] text-ink/60">{label}</label>
      <input value={value} onChange={(e) => onChange(e.target.value)} className="w-full bg-secondary border border-black/10 px-4 py-3 text-sm" />
    </div>
  );
}