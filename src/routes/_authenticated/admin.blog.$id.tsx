import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { PostEditor } from "@/components/admin/PostEditor";

export const Route = createFileRoute("/_authenticated/admin/blog/$id")({
  ssr: false,
  component: EditPost,
});

function EditPost() {
  const { id } = Route.useParams();
  const q = useQuery({
    queryKey: ["blog-edit", id],
    queryFn: async () => {
      const { data, error } = await supabase.from("blog_posts").select("*").eq("id", id).single();
      if (error) throw error;
      return data;
    },
  });
  if (q.isLoading) return <p className="text-ink/60">Loading…</p>;
  if (!q.data) return <p>Not found</p>;
  return <PostEditor initial={q.data} />;
}