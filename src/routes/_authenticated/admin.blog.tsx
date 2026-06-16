import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/_authenticated/admin/blog")({
  ssr: false,
  component: BlogLayout,
});

function BlogLayout() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isList = pathname === "/admin/blog";
  return isList ? <BlogList /> : <Outlet />;
}

function BlogList() {
  const qc = useQueryClient();
  const list = useQuery({
    queryKey: ["blog-admin"],
    queryFn: async () => {
      const { data, error } = await supabase.from("blog_posts").select("*").order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });
  const del = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("blog_posts").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => { qc.invalidateQueries({ queryKey: ["blog-admin"] }); toast.success("Deleted"); },
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Content</p>
          <h1 className="font-display text-4xl mt-2">Blog Posts</h1>
        </div>
        <Link to="/admin/blog/new" className="bg-brand text-canvas px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold flex items-center gap-2">
          <Plus size={14} /> New post
        </Link>
      </div>

      <div className="bg-canvas rounded divide-y divide-black/5">
        {list.data?.map((p) => (
          <div key={p.id} className="p-4 flex items-center gap-4">
            <div className="flex-1 min-w-0">
              <Link to="/admin/blog/$id" params={{ id: p.id }} className="font-medium hover:text-brand">{p.title}</Link>
              <p className="text-xs text-ink/50">/{p.slug}</p>
            </div>
            <span className={`text-[10px] uppercase tracking-widest px-2 py-1 rounded ${p.published ? "bg-green-100 text-green-800" : "bg-ink/10 text-ink/60"}`}>
              {p.published ? "Published" : "Draft"}
            </span>
            <span className="text-xs text-ink/40 hidden sm:inline">{new Date(p.created_at).toLocaleDateString()}</span>
            <button onClick={() => confirm("Delete this post?") && del.mutate(p.id)} className="text-red-600 hover:underline"><Trash2 size={14} /></button>
          </div>
        ))}
        {!list.data?.length && <p className="p-8 text-center text-ink/50">No posts yet. Create your first one →</p>}
      </div>
    </div>
  );
}