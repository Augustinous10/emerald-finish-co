import { t as supabase } from "./client-DR4jfEwv.js";
import { t as Route } from "./admin.blog._id-DsyTPQDL.js";
import { t as PostEditor } from "./PostEditor-BHlZzXzL.js";
import { jsx } from "react/jsx-runtime";
import { useQuery } from "@tanstack/react-query";
//#region src/routes/_authenticated/admin.blog.$id.tsx?tsr-split=component
function EditPost() {
	const { id } = Route.useParams();
	const q = useQuery({
		queryKey: ["blog-edit", id],
		queryFn: async () => {
			const { data, error } = await supabase.from("blog_posts").select("*").eq("id", id).single();
			if (error) throw error;
			return data;
		}
	});
	if (q.isLoading) return /* @__PURE__ */ jsx("p", {
		className: "text-ink/60",
		children: "Loading…"
	});
	if (!q.data) return /* @__PURE__ */ jsx("p", { children: "Not found" });
	return /* @__PURE__ */ jsx(PostEditor, { initial: q.data });
}
//#endregion
export { EditPost as component };
