import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
//#region src/routes/_authenticated/admin.blog.$id.tsx
var $$splitComponentImporter = () => import("./admin.blog._id-Cg6WgtY8.js");
var Route = createFileRoute("/_authenticated/admin/blog/$id")({
	ssr: false,
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
