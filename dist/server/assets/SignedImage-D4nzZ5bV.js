import { t as supabase } from "./client-DR4jfEwv.js";
import { useEffect, useState } from "react";
import { jsx } from "react/jsx-runtime";
//#region src/components/admin/SignedImage.tsx
var cache = /* @__PURE__ */ new Map();
function useSignedUrl(bucket, path) {
	const [url, setUrl] = useState(() => {
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
		supabase.storage.from(bucket).createSignedUrl(path, 3600 * 24 * 7).then(({ data }) => {
			if (cancelled || !data?.signedUrl) return;
			cache.set(key, {
				url: data.signedUrl,
				exp: Date.now() + 3600 * 24 * 6 * 1e3
			});
			setUrl(data.signedUrl);
		});
		return () => {
			cancelled = true;
		};
	}, [bucket, path]);
	return url;
}
function SignedImage({ bucket, path, alt, className }) {
	const url = useSignedUrl(bucket, path);
	if (!url) return /* @__PURE__ */ jsx("div", {
		className: `bg-ink/5 ${className ?? ""}`,
		"aria-label": alt
	});
	return /* @__PURE__ */ jsx("img", {
		src: url,
		alt,
		className,
		loading: "lazy"
	});
}
//#endregion
export { SignedImage as t };
