import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { SignedImage } from "@/components/admin/SignedImage";
import { supabase } from "@/integrations/supabase/client";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/blog/$slug")({
  ssr: false,
  component: Post,
  notFoundComponent: () => <NotFound />,
});

function Post() {
  const { slug } = Route.useParams();
  const q = useQuery({
    queryKey: ["blog-post", slug],
    queryFn: async () => {
      const { data, error } = await supabase.from("blog_posts").select("*").eq("slug", slug).eq("published", true).maybeSingle();
      if (error) throw error;
      if (!data) throw notFound();
      return data;
    },
  });

  if (q.isLoading) return <div className="min-h-screen grid place-items-center text-ink/60">Loading…</div>;
  if (!q.data) return <NotFound />;
  const p = q.data;

  return (
    <div className="bg-canvas text-ink">
      <Header />
      <WhatsAppButton />
      <article className="pt-40 pb-24 px-6 max-w-3xl mx-auto">
        <Link to="/blog" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-ink/60 hover:text-brand mb-8">
          <ArrowLeft size={14} /> All posts
        </Link>
        {p.tags?.[0] && <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-3">{p.tags[0]}</p>}
        <h1 className="font-display text-4xl md:text-6xl text-brand leading-[1.1]">{p.title}</h1>
        {p.published_at && <p className="text-sm text-ink/50 mt-4">{new Date(p.published_at).toLocaleDateString(undefined, { dateStyle: "long" })}</p>}

        {p.cover_image && (
          <div className="aspect-[16/9] overflow-hidden rounded my-10 bg-ink/5">
            <SignedImage bucket="blog" path={p.cover_image} alt={p.title} className="w-full h-full object-cover" />
          </div>
        )}

        <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-brand prose-a:text-brand">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{p.content}</ReactMarkdown>
        </div>
      </article>
      <Footer />
    </div>
  );
}

function NotFound() {
  return (
    <div className="bg-canvas min-h-screen">
      <Header />
      <div className="pt-40 pb-24 px-6 max-w-2xl mx-auto text-center">
        <h1 className="font-display text-5xl text-brand">Post not found</h1>
        <Link to="/blog" className="inline-block mt-6 text-brand hover:text-gold">← Back to blog</Link>
      </div>
      <Footer />
    </div>
  );
}