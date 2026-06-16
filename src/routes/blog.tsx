import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { SignedImage } from "@/components/admin/SignedImage";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/blog")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Insights & Stories — Ubudasa Wall Paints Blog" },
      { name: "description", content: "Wall finishing tips, color trends, and project stories from Rwanda's premier painting and interior design team." },
      { property: "og:title", content: "Ubudasa Blog — Wall Finishing Insights" },
      { property: "og:description", content: "Color trends, technique guides, and project case studies." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: Blog,
});

function Blog() {
  const q = useQuery({
    queryKey: ["blog-public"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("id,title,slug,excerpt,cover_image,tags,published_at")
        .eq("published", true)
        .order("published_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  return (
    <div className="bg-canvas text-ink">
      <Header />
      <WhatsAppButton />
      <section className="pt-40 pb-12 px-6 max-w-7xl mx-auto">
        <p className="text-xs uppercase tracking-[0.4em] text-gold mb-4">Journal</p>
        <h1 className="font-display text-5xl md:text-7xl text-brand leading-[1.05] max-w-3xl">
          Insights, trends, and stories from Rwanda's finishing studio.
        </h1>
      </section>

      <section className="px-6 max-w-7xl mx-auto pb-24">
        {q.isLoading && <p className="text-ink/60">Loading posts…</p>}
        {q.data?.length === 0 && <p className="text-ink/60">No posts yet — check back soon.</p>}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {q.data?.map((p) => (
            <Link key={p.id} to="/blog/$slug" params={{ slug: p.slug }} className="group">
              <div className="aspect-[4/3] overflow-hidden rounded bg-ink/5 mb-4">
                {p.cover_image
                  ? <SignedImage bucket="blog" path={p.cover_image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  : <div className="w-full h-full bg-brand/10" />}
              </div>
              {p.tags?.[0] && <p className="text-[10px] uppercase tracking-[0.3em] text-gold mb-1">{p.tags[0]}</p>}
              <h2 className="font-display text-2xl text-brand leading-tight group-hover:text-gold transition-colors">{p.title}</h2>
              {p.excerpt && <p className="mt-2 text-ink/70 text-sm line-clamp-3">{p.excerpt}</p>}
              <p className="mt-3 text-xs text-ink/40">{p.published_at ? new Date(p.published_at).toLocaleDateString() : ""}</p>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}