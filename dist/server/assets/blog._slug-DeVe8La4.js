import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
//#region src/routes/blog.$slug.tsx
var $$splitNotFoundComponentImporter = () => import("./blog._slug-C88UjZaU.js");
var $$splitComponentImporter = () => import("./blog._slug-CUd-7-3Q.js");
var Route = createFileRoute("/blog/$slug")({
	ssr: false,
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});
//#endregion
export { Route as t };
