import { createFileRoute, Link, Outlet, useNavigate, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  LayoutDashboard, Inbox, MessageSquare, Images, Newspaper, LogOut, Menu, X, ExternalLink,
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";

export const Route = createFileRoute("/_authenticated/admin")({
  ssr: false,
  component: AdminLayout,
});

type NavItem = { to: string; label: string; icon: any; exact?: boolean };
const nav: NavItem[] = [
  { to: "/admin", label: "Overview", icon: LayoutDashboard, exact: true },
  { to: "/admin/quotes", label: "Quote Requests", icon: Inbox },
  { to: "/admin/messages", label: "Contact Messages", icon: MessageSquare },
  { to: "/admin/gallery", label: "Gallery", icon: Images },
  { to: "/admin/blog", label: "Blog Posts", icon: Newspaper },
];

function AdminLayout() {
  const navigate = useNavigate();
  const qc = useQueryClient();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);

  useEffect(() => {
    (async () => {
      const { data: u } = await supabase.auth.getUser();
      if (!u.user) { navigate({ to: "/auth" }); return; }
      const { data } = await supabase
        .from("user_roles").select("role").eq("user_id", u.user.id).eq("role", "admin").maybeSingle();
      setIsAdmin(!!data);
    })();
  }, [navigate]);

  async function signOut() {
    await qc.cancelQueries();
    qc.clear();
    await supabase.auth.signOut();
    toast.success("Signed out");
    navigate({ to: "/auth", replace: true });
  }

  if (isAdmin === null) {
    return <div className="min-h-screen grid place-items-center text-ink/60 text-sm">Loading…</div>;
  }
  if (!isAdmin) {
    return (
      <div className="min-h-screen grid place-items-center bg-canvas text-ink px-6">
        <div className="max-w-md text-center space-y-4">
          <h1 className="font-display text-3xl">Access denied</h1>
          <p className="text-ink/60">This account isn't authorized for the admin dashboard.</p>
          <button onClick={signOut} className="bg-brand text-brand-foreground px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold">Sign out</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-secondary text-ink flex">
      {/* Sidebar */}
      <aside className={`fixed lg:static inset-y-0 left-0 z-40 w-64 bg-brand text-brand-foreground p-6 flex flex-col transform transition-transform ${open ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}>
        <div className="flex items-center justify-between mb-10">
          <Link to="/" className="font-display text-2xl">UBUDASA</Link>
          <button className="lg:hidden" onClick={() => setOpen(false)}><X size={20} /></button>
        </div>
        <nav className="flex-1 space-y-1">
          {nav.map(({ to, label, icon: Icon, exact }) => {
            const active = exact ? pathname === to : pathname.startsWith(to);
            return (
              <Link
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded text-sm transition-colors ${
                  active ? "bg-canvas text-brand font-semibold" : "text-canvas/80 hover:bg-ink/30"
                }`}
              >
                <Icon size={16} /> {label}
              </Link>
            );
          })}
        </nav>
        <div className="space-y-2 mt-6 border-t border-canvas/10 pt-4">
          <a href="/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs text-canvas/70 hover:text-gold">
            <ExternalLink size={14} /> View public site
          </a>
          <button onClick={signOut} className="flex items-center gap-2 text-xs text-canvas/70 hover:text-gold">
            <LogOut size={14} /> Sign out
          </button>
        </div>
      </aside>

      {open && <div className="fixed inset-0 bg-ink/40 z-30 lg:hidden" onClick={() => setOpen(false)} />}

      <div className="flex-1 min-w-0">
        <header className="lg:hidden flex items-center justify-between px-4 py-3 bg-brand text-canvas">
          <button onClick={() => setOpen(true)}><Menu size={22} /></button>
          <span className="font-display">UBUDASA Admin</span>
          <span className="w-6" />
        </header>
        <main className="p-6 lg:p-10 max-w-6xl">
          <Outlet />
        </main>
      </div>
    </div>
  );
}