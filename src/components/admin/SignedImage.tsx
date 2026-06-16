import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

const cache = new Map<string, { url: string; exp: number }>();

export function useSignedUrl(bucket: string, path: string | null | undefined) {
  const [url, setUrl] = useState<string | null>(() => {
    if (!path) return null;
    const key = `${bucket}::${path}`;
    const hit = cache.get(key);
    return hit && hit.exp > Date.now() ? hit.url : null;
  });

  useEffect(() => {
    if (!path) return;
    const key = `${bucket}::${path}`;
    const hit = cache.get(key);
    if (hit && hit.exp > Date.now()) {
      setUrl(hit.url);
      return;
    }
    let cancelled = false;
    supabase.storage.from(bucket).createSignedUrl(path, 60 * 60 * 24 * 7).then(({ data }) => {
      if (cancelled || !data?.signedUrl) return;
      cache.set(key, { url: data.signedUrl, exp: Date.now() + 60 * 60 * 24 * 6 * 1000 });
      setUrl(data.signedUrl);
    });
    return () => { cancelled = true; };
  }, [bucket, path]);

  return url;
}

export function SignedImage({ bucket, path, alt, className }: { bucket: string; path: string | null | undefined; alt: string; className?: string }) {
  const url = useSignedUrl(bucket, path);
  if (!url) return <div className={`bg-ink/5 ${className ?? ""}`} aria-label={alt} />;
  return <img src={url} alt={alt} className={className} loading="lazy" />;
}