import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Inbox, MessageSquare, Images, Newspaper } from "lucide-react";

export const Route = createFileRoute("/_authenticated/admin/")({
  ssr: false,
  component: AdminHome,
});

function AdminHome() {
  const stats = useQuery({
    queryKey: ["admin", "overview"],
    queryFn: async () => {
      const [quotesNew, quotesAll, msgsNew, gallery, posts, recent] = await Promise.all([
        supabase.from("quote_requests").select("id", { count: "exact", head: true }).eq("status", "new"),
        supabase.from("quote_requests").select("id", { count: "exact", head: true }),
        supabase.from("contact_messages").select("id", { count: "exact", head: true }).eq("status", "new"),
        supabase.from("gallery_projects").select("id", { count: "exact", head: true }),
        supabase.from("blog_posts").select("id", { count: "exact", head: true }),
        supabase.from("quote_requests").select("id,name,service,created_at,status").order("created_at", { ascending: false }).limit(5),
      ]);
      return {
        quotesNew: quotesNew.count ?? 0, quotesAll: quotesAll.count ?? 0,
        msgsNew: msgsNew.count ?? 0, gallery: gallery.count ?? 0,
        posts: posts.count ?? 0, recent: recent.data ?? [],
      };
    },
  });

  const s = stats.data;

  return (
    <div className="space-y-8">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-gold">Dashboard</p>
        <h1 className="font-display text-4xl mt-2">Welcome back</h1>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card to="/admin/quotes" Icon={Inbox} label="New Quotes" value={s?.quotesNew ?? "—"} sub={`${s?.quotesAll ?? 0} total`} />
        <Card to="/admin/messages" Icon={MessageSquare} label="New Messages" value={s?.msgsNew ?? "—"} />
        <Card to="/admin/gallery" Icon={Images} label="Gallery Items" value={s?.gallery ?? "—"} />
        <Card to="/admin/blog" Icon={Newspaper} label="Blog Posts" value={s?.posts ?? "—"} />
      </div>

      <section className="bg-canvas p-6 rounded">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-display text-xl">Recent quote requests</h2>
          <Link to="/admin/quotes" className="text-xs uppercase tracking-widest text-brand hover:text-gold">View all →</Link>
        </div>
        <div className="divide-y divide-black/5">
          {(s?.recent ?? []).map((r: any) => (
            <div key={r.id} className="py-3 flex items-center justify-between gap-4 text-sm">
              <div>
                <p className="font-medium">{r.name}</p>
                <p className="text-ink/50 text-xs">{r.service ?? "—"}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className={`text-[10px] uppercase tracking-widest px-2 py-1 rounded ${r.status === "new" ? "bg-gold/20 text-brand" : "bg-ink/10 text-ink/60"}`}>{r.status}</span>
                <span className="text-xs text-ink/40">{new Date(r.created_at).toLocaleDateString()}</span>
              </div>
            </div>
          ))}
          {!s?.recent.length && <p className="py-6 text-ink/50 text-sm">No quote requests yet.</p>}
        </div>
      </section>
    </div>
  );
}

function Card({ to, Icon, label, value, sub }: { to: string; Icon: any; label: string; value: any; sub?: string }) {
  return (
    <Link to={to} className="bg-canvas p-5 rounded hover:shadow-md transition-shadow block">
      <div className="flex items-center justify-between">
        <p className="text-[10px] uppercase tracking-[0.25em] text-ink/50">{label}</p>
        <Icon size={16} className="text-brand" />
      </div>
      <p className="font-display text-3xl mt-2 text-brand">{value}</p>
      {sub && <p className="text-xs text-ink/40 mt-1">{sub}</p>}
    </Link>
  );
}