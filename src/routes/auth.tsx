import { createFileRoute, useNavigate, redirect } from "@tanstack/react-router";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const Route = createFileRoute("/auth")({
  ssr: false,
  beforeLoad: async () => {
    const { data } = await supabase.auth.getSession();
    if (data.session) throw redirect({ to: "/admin" });
  },
  head: () => ({
    meta: [
      { title: "Admin Sign In — Ubudasa" },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    try {
      if (mode === "signin") {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        toast.success("Welcome back");
        navigate({ to: "/admin" });
      } else {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: window.location.origin + "/admin" },
        });
        if (error) throw error;
        toast.success("Account created — sign in now");
        setMode("signin");
      }
    } catch (err: any) {
      toast.error(err.message ?? "Sign-in failed");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="min-h-screen bg-canvas grid lg:grid-cols-2">
      <div className="hidden lg:flex flex-col justify-between p-12 bg-brand text-brand-foreground">
        <a href="/" className="font-display text-3xl">UBUDASA</a>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Admin Studio</p>
          <h1 className="font-display text-5xl mt-3 leading-tight">
            Manage your projects, posts and leads.
          </h1>
        </div>
        <p className="text-canvas/60 text-xs">© Ubudasa Wall Paints Ltd · Kigali, Rwanda</p>
      </div>
      <div className="flex items-center justify-center p-8">
        <form onSubmit={submit} className="w-full max-w-sm space-y-5">
          <div>
            <h2 className="font-display text-3xl text-ink">
              {mode === "signin" ? "Sign in" : "Create admin account"}
            </h2>
            <p className="text-sm text-ink/60 mt-1">
              {mode === "signin" ? "Access your dashboard" : "First-time admin? Use your authorized email"}
            </p>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-[0.25em] font-semibold text-ink/60">Email</label>
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-secondary border border-black/10 px-4 py-3 text-sm focus:outline-none focus:border-brand" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-[0.25em] font-semibold text-ink/60">Password</label>
            <input type="password" required minLength={6} value={password} onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-secondary border border-black/10 px-4 py-3 text-sm focus:outline-none focus:border-brand" />
          </div>
          <button disabled={busy} className="w-full bg-brand text-brand-foreground py-3 text-sm uppercase tracking-widest font-semibold hover:bg-ink transition-colors disabled:opacity-50">
            {busy ? "Working…" : mode === "signin" ? "Sign In" : "Create Account"}
          </button>
          <button type="button" onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
            className="w-full text-xs text-ink/60 hover:text-brand">
            {mode === "signin" ? "First time? Create an admin account" : "Already have an account? Sign in"}
          </button>
        </form>
      </div>
    </div>
  );
}