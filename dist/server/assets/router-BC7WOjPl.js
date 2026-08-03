import { t as supabase } from "./client-DR4jfEwv.js";
import { t as hero_default } from "./hero-sbk2eZqF.js";
import { t as Route$18 } from "./blog._slug-BqkBwfks.js";
import { t as Route$19 } from "./admin.blog._id-DsyTPQDL.js";
import { useEffect } from "react";
import { HeadContent, Link, Outlet, Scripts, createFileRoute, createRootRouteWithContext, createRouter, lazyRouteComponent, redirect, useRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
//#region src/styles.css?url
var styles_default = "/assets/styles-BCt0U0Ma.css";
//#endregion
//#region src/lib/lovable-error-reporting.ts
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
//#endregion
//#region src/routes/__root.tsx
function NotFoundComponent() {
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-6",
					children: /* @__PURE__ */ jsx(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	useEffect(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ jsx("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ jsx("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$17 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Ubudasa Wall Paints — Premium Wall Finishing in Rwanda" },
			{
				name: "description",
				content: "Rwanda's leading wall finishing, painting, and interior design studio. Premium craftsmanship for homes, hotels, and commercial spaces across Kigali."
			},
			{
				name: "author",
				content: "Ubudasa Wall Paints Ltd"
			},
			{
				property: "og:site_name",
				content: "Ubudasa Wall Paints Ltd"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary"
			},
			{
				property: "og:title",
				content: "Ubudasa Wall Paints — Premium Wall Finishing in Rwanda"
			},
			{
				name: "twitter:title",
				content: "Ubudasa Wall Paints — Premium Wall Finishing in Rwanda"
			},
			{
				property: "og:description",
				content: "Rwanda's leading wall finishing, painting, and interior design studio. Premium craftsmanship for homes, hotels, and commercial spaces across Kigali."
			},
			{
				name: "twitter:description",
				content: "Rwanda's leading wall finishing, painting, and interior design studio. Premium craftsmanship for homes, hotels, and commercial spaces across Kigali."
			},
			{
				property: "og:image",
				content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/4d74a073-ca00-4ff4-a995-3a06d122334e/id-preview-d9efbbf5--718cccf4-c5ff-43d5-a790-3a7b3b0eb85b.lovable.app-1781610022865.png"
			},
			{
				name: "twitter:image",
				content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/4d74a073-ca00-4ff4-a995-3a06d122334e/id-preview-d9efbbf5--718cccf4-c5ff-43d5-a790-3a7b3b0eb85b.lovable.app-1781610022865.png"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Inter:wght@400;500;600;700&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "en",
		children: [/* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }), /* @__PURE__ */ jsxs("body", { children: [children, /* @__PURE__ */ jsx(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$17.useRouteContext();
	return /* @__PURE__ */ jsxs(QueryClientProvider, {
		client: queryClient,
		children: [/* @__PURE__ */ jsx(Outlet, {}), /* @__PURE__ */ jsx(Toaster, {
			richColors: true,
			position: "top-center"
		})]
	});
}
//#endregion
//#region src/routes/sitemap[.]xml.ts
var BASE_URL = "";
var entries = [
	{
		path: "/",
		changefreq: "weekly",
		priority: "1.0"
	},
	{
		path: "/services",
		changefreq: "monthly",
		priority: "0.9"
	},
	{
		path: "/about",
		changefreq: "monthly",
		priority: "0.7"
	},
	{
		path: "/contact",
		changefreq: "monthly",
		priority: "0.7"
	},
	{
		path: "/request-quote",
		changefreq: "monthly",
		priority: "0.9"
	}
];
var Route$16 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.map((e) => `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`).join("\n")}\n</urlset>`;
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
//#endregion
//#region src/routes/services.tsx
var $$splitComponentImporter$15 = () => import("./services-CWupWsYL.js");
var Route$15 = createFileRoute("/services")({
	head: () => ({
		meta: [
			{ title: "Services — Painting, Gypsum, Renovation in Rwanda | Ubudasa" },
			{
				name: "description",
				content: "Ten dedicated finishing services: interior & exterior painting, gypsum ceilings, TV walls, kitchen and bathroom renovation, and more — across Rwanda."
			},
			{
				property: "og:title",
				content: "Ubudasa Services — Wall Finishing & Renovation"
			},
			{
				property: "og:description",
				content: "Premium wall painting, decorative finishes, gypsum design, and full home renovation."
			},
			{
				property: "og:url",
				content: "/services"
			}
		],
		links: [{
			rel: "canonical",
			href: "/services"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$15, "component")
});
//#endregion
//#region src/routes/request-quote.tsx
var $$splitComponentImporter$14 = () => import("./request-quote-CoJsyuE6.js");
var Route$14 = createFileRoute("/request-quote")({
	head: () => ({
		meta: [
			{ title: "Request a Free Quote — Ubudasa Wall Paints" },
			{
				name: "description",
				content: "Tell us about your project and get an instant response from a senior consultant within 48 hours."
			},
			{
				property: "og:title",
				content: "Request a Free Quote — Ubudasa"
			},
			{
				property: "og:description",
				content: "Free site visit. Premium materials. Master craftsmen."
			},
			{
				property: "og:url",
				content: "/request-quote"
			}
		],
		links: [{
			rel: "canonical",
			href: "/request-quote"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
//#endregion
//#region src/routes/gallery.tsx
var $$splitComponentImporter$13 = () => import("./gallery-BccCu4d-.js");
var Route$13 = createFileRoute("/gallery")({
	head: () => ({
		meta: [
			{ title: "Project Gallery — Painting, Gypsum & Renovation | Ubudasa" },
			{
				name: "description",
				content: "Browse Ubudasa Wall Paints' portfolio of premium interior painting, decorative finishes, gypsum ceilings, kitchens and full renovations across Rwanda."
			},
			{
				property: "og:title",
				content: "Ubudasa Project Gallery — Transforming Spaces in Rwanda"
			},
			{
				property: "og:description",
				content: "Real projects, real craftsmanship. Explore our finished interiors, exteriors, ceilings and bespoke wall designs."
			},
			{
				property: "og:url",
				content: "/gallery"
			}
		],
		links: [{
			rel: "canonical",
			href: "/gallery"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
//#endregion
//#region src/routes/contact.tsx
var $$splitComponentImporter$12 = () => import("./contact-DXFwcOcy.js");
var Route$12 = createFileRoute("/contact")({
	head: () => ({
		meta: [
			{ title: "Contact Ubudasa — Kigali, Rwanda" },
			{
				name: "description",
				content: "Visit our Kigali office, call, WhatsApp, or send a message. We respond within 2 business hours."
			},
			{
				property: "og:title",
				content: "Contact Ubudasa Wall Paints Ltd"
			},
			{
				property: "og:description",
				content: "Get in touch with Rwanda's premier wall finishing studio."
			},
			{
				property: "og:url",
				content: "/contact"
			}
		],
		links: [{
			rel: "canonical",
			href: "/contact"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
//#endregion
//#region src/routes/blog.tsx
var $$splitComponentImporter$11 = () => import("./blog-CQF97tER.js");
var Route$11 = createFileRoute("/blog")({
	ssr: false,
	head: () => ({
		meta: [
			{ title: "Insights & Stories — Ubudasa Wall Paints Blog" },
			{
				name: "description",
				content: "Wall finishing tips, color trends, and project stories from Rwanda's premier painting and interior design team."
			},
			{
				property: "og:title",
				content: "Ubudasa Blog — Wall Finishing Insights"
			},
			{
				property: "og:description",
				content: "Color trends, technique guides, and project case studies."
			},
			{
				property: "og:url",
				content: "/blog"
			}
		],
		links: [{
			rel: "canonical",
			href: "/blog"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
//#endregion
//#region src/routes/auth.tsx
var $$splitComponentImporter$10 = () => import("./auth-B2ydgrte.js");
var Route$10 = createFileRoute("/auth")({
	ssr: false,
	beforeLoad: async () => {
		const { data } = await supabase.auth.getSession();
		if (data.session) throw redirect({ to: "/admin" });
	},
	head: () => ({ meta: [{ title: "Admin Sign In — Ubudasa" }, {
		name: "robots",
		content: "noindex,nofollow"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
//#endregion
//#region src/routes/about.tsx
var $$splitComponentImporter$9 = () => import("./about-1RhTxGNX.js");
var Route$9 = createFileRoute("/about")({
	head: () => ({
		meta: [
			{ title: "About Ubudasa — Rwanda's Premium Wall Finishing Studio" },
			{
				name: "description",
				content: "Our story, mission, and the team behind Rwanda's most trusted wall finishing and interior design company."
			},
			{
				property: "og:title",
				content: "About Ubudasa Wall Paints Ltd"
			},
			{
				property: "og:description",
				content: "Founded in 2021, Ubudasa is a 216-strong team of wall finishing and interior design specialists based in Kigali."
			},
			{
				property: "og:url",
				content: "/about"
			}
		],
		links: [{
			rel: "canonical",
			href: "/about"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
//#endregion
//#region src/routes/_authenticated/route.tsx
var $$splitComponentImporter$8 = () => import("./route-Di7iQBCH.js");
var Route$8 = createFileRoute("/_authenticated")({
	ssr: false,
	beforeLoad: async () => {
		const { data, error } = await supabase.auth.getUser();
		if (error || !data.user) throw redirect({ to: "/auth" });
		return { user: data.user };
	},
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
//#endregion
//#region src/routes/index.tsx
var $$splitComponentImporter$7 = () => import("./routes-CD2ed6sW.js");
var Route$7 = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "Ubudasa Wall Paints — Premium Wall Finishing in Kigali, Rwanda" },
			{
				name: "description",
				content: "Rwanda's leading wall painting, gypsum design, and interior finishing studio. 500+ projects, premium craftsmanship, instant quote calculator."
			},
			{
				property: "og:title",
				content: "Ubudasa Wall Paints — Transforming Spaces Across Rwanda"
			},
			{
				property: "og:description",
				content: "Premium interior & exterior painting, decorative finishes, gypsum ceilings and full renovations in Kigali."
			},
			{
				property: "og:url",
				content: "/"
			},
			{
				property: "og:type",
				content: "website"
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}, {
			rel: "preload",
			as: "image",
			href: hero_default,
			fetchpriority: "high"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
//#endregion
//#region src/routes/_authenticated/admin.tsx
var $$splitComponentImporter$6 = () => import("./admin-DiBa9aKM.js");
var Route$6 = createFileRoute("/_authenticated/admin")({
	ssr: false,
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
//#endregion
//#region src/routes/_authenticated/admin.index.tsx
var $$splitComponentImporter$5 = () => import("./admin.index-CDFGlw67.js");
var Route$5 = createFileRoute("/_authenticated/admin/")({
	ssr: false,
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
//#endregion
//#region src/routes/_authenticated/admin.quotes.tsx
var $$splitComponentImporter$4 = () => import("./admin.quotes-DZWr14P3.js");
var Route$4 = createFileRoute("/_authenticated/admin/quotes")({
	ssr: false,
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
//#endregion
//#region src/routes/_authenticated/admin.messages.tsx
var $$splitComponentImporter$3 = () => import("./admin.messages-AS3dJ_PP.js");
var Route$3 = createFileRoute("/_authenticated/admin/messages")({
	ssr: false,
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
//#endregion
//#region src/routes/_authenticated/admin.gallery.tsx
var $$splitComponentImporter$2 = () => import("./admin.gallery-B_ktqzW9.js");
var Route$2 = createFileRoute("/_authenticated/admin/gallery")({
	ssr: false,
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
//#endregion
//#region src/routes/_authenticated/admin.blog.tsx
var $$splitComponentImporter$1 = () => import("./admin.blog-DB2OEZpx.js");
var Route$1 = createFileRoute("/_authenticated/admin/blog")({
	ssr: false,
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
//#endregion
//#region src/routes/_authenticated/admin.blog.new.tsx
var $$splitComponentImporter = () => import("./admin.blog.new-BRnV-ARE.js");
var Route = createFileRoute("/_authenticated/admin/blog/new")({
	ssr: false,
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
//#region src/routeTree.gen.ts
var SitemapDotxmlRoute = Route$16.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$17
});
var ServicesRoute = Route$15.update({
	id: "/services",
	path: "/services",
	getParentRoute: () => Route$17
});
var RequestQuoteRoute = Route$14.update({
	id: "/request-quote",
	path: "/request-quote",
	getParentRoute: () => Route$17
});
var GalleryRoute = Route$13.update({
	id: "/gallery",
	path: "/gallery",
	getParentRoute: () => Route$17
});
var ContactRoute = Route$12.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$17
});
var BlogRoute = Route$11.update({
	id: "/blog",
	path: "/blog",
	getParentRoute: () => Route$17
});
var AuthRoute = Route$10.update({
	id: "/auth",
	path: "/auth",
	getParentRoute: () => Route$17
});
var AboutRoute = Route$9.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$17
});
var AuthenticatedRouteRoute = Route$8.update({
	id: "/_authenticated",
	getParentRoute: () => Route$17
});
var IndexRoute = Route$7.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$17
});
var BlogSlugRoute = Route$18.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => BlogRoute
});
var AuthenticatedAdminRoute = Route$6.update({
	id: "/admin",
	path: "/admin",
	getParentRoute: () => AuthenticatedRouteRoute
});
var AuthenticatedAdminIndexRoute = Route$5.update({
	id: "/",
	path: "/",
	getParentRoute: () => AuthenticatedAdminRoute
});
var AuthenticatedAdminQuotesRoute = Route$4.update({
	id: "/quotes",
	path: "/quotes",
	getParentRoute: () => AuthenticatedAdminRoute
});
var AuthenticatedAdminMessagesRoute = Route$3.update({
	id: "/messages",
	path: "/messages",
	getParentRoute: () => AuthenticatedAdminRoute
});
var AuthenticatedAdminGalleryRoute = Route$2.update({
	id: "/gallery",
	path: "/gallery",
	getParentRoute: () => AuthenticatedAdminRoute
});
var AuthenticatedAdminBlogRoute = Route$1.update({
	id: "/blog",
	path: "/blog",
	getParentRoute: () => AuthenticatedAdminRoute
});
var AuthenticatedAdminBlogNewRoute = Route.update({
	id: "/new",
	path: "/new",
	getParentRoute: () => AuthenticatedAdminBlogRoute
});
var AuthenticatedAdminBlogRouteChildren = {
	AuthenticatedAdminBlogIdRoute: Route$19.update({
		id: "/$id",
		path: "/$id",
		getParentRoute: () => AuthenticatedAdminBlogRoute
	}),
	AuthenticatedAdminBlogNewRoute
};
var AuthenticatedAdminRouteChildren = {
	AuthenticatedAdminBlogRoute: AuthenticatedAdminBlogRoute._addFileChildren(AuthenticatedAdminBlogRouteChildren),
	AuthenticatedAdminGalleryRoute,
	AuthenticatedAdminMessagesRoute,
	AuthenticatedAdminQuotesRoute,
	AuthenticatedAdminIndexRoute
};
var AuthenticatedRouteRouteChildren = { AuthenticatedAdminRoute: AuthenticatedAdminRoute._addFileChildren(AuthenticatedAdminRouteChildren) };
var AuthenticatedRouteRouteWithChildren = AuthenticatedRouteRoute._addFileChildren(AuthenticatedRouteRouteChildren);
var BlogRouteChildren = { BlogSlugRoute };
var rootRouteChildren = {
	IndexRoute,
	AuthenticatedRouteRoute: AuthenticatedRouteRouteWithChildren,
	AboutRoute,
	AuthRoute,
	BlogRoute: BlogRoute._addFileChildren(BlogRouteChildren),
	ContactRoute,
	GalleryRoute,
	RequestQuoteRoute,
	ServicesRoute,
	SitemapDotxmlRoute
};
var routeTree = Route$17._addFileChildren(rootRouteChildren)._addFileTypes();
//#endregion
//#region src/router.tsx
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
