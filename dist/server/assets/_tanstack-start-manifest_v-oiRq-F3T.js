//#region \0tanstack-start-manifest:v
var tsrStartManifest = () => ({ routes: {
	__root__: {
		filePath: "/home/runner/work/emerald-finish-co/emerald-finish-co/src/routes/__root.tsx",
		children: [
			"/",
			"/_authenticated",
			"/about",
			"/auth",
			"/blog",
			"/contact",
			"/gallery",
			"/request-quote",
			"/services",
			"/sitemap.xml"
		],
		preloads: [
			"/assets/index-D5T_wxCn.js",
			"/assets/jsx-runtime-n5LQ9ujS.js",
			"/assets/useStore-CzW7XWja.js",
			"/assets/link-BbqWFQot.js",
			"/assets/matchContext-LWWBHaUi.js",
			"/assets/useRouter-Bba_TupU.js",
			"/assets/react-dom-CQmWuZA8.js"
		],
		scripts: [{ attrs: {
			type: "module",
			async: !0,
			src: "/assets/index-D5T_wxCn.js"
		} }]
	},
	"/": {
		filePath: "/home/runner/work/emerald-finish-co/emerald-finish-co/src/routes/index.tsx",
		children: void 0,
		preloads: [
			"/assets/routes-DgedgHnb.js",
			"/assets/createLucideIcon-D1l_1SOF.js",
			"/assets/map-pin-DwlTNaXG.js",
			"/assets/Footer-CgCxVcOE.js",
			"/assets/services_Ceiling-BlHPu9AO.js",
			"/assets/services_Kitchen-BQ5D5Uj7.js",
			"/assets/WhatsAppButton-DK7YOd5b.js"
		]
	},
	"/_authenticated": {
		filePath: "/home/runner/work/emerald-finish-co/emerald-finish-co/src/routes/_authenticated/route.tsx",
		children: ["/_authenticated/admin"],
		preloads: ["/assets/route-CuyX35dQ.js"]
	},
	"/about": {
		filePath: "/home/runner/work/emerald-finish-co/emerald-finish-co/src/routes/about.tsx",
		children: void 0,
		preloads: [
			"/assets/about-FNC9yDWo.js",
			"/assets/Footer-CgCxVcOE.js",
			"/assets/services_Ceiling-BlHPu9AO.js",
			"/assets/WhatsAppButton-DK7YOd5b.js"
		]
	},
	"/auth": {
		filePath: "/home/runner/work/emerald-finish-co/emerald-finish-co/src/routes/auth.tsx",
		children: void 0,
		preloads: ["/assets/auth-CZQmPiTN.js"]
	},
	"/blog": {
		filePath: "/home/runner/work/emerald-finish-co/emerald-finish-co/src/routes/blog.tsx",
		children: ["/blog/$slug"],
		preloads: [
			"/assets/blog-CEFMe1DM.js",
			"/assets/useQuery-gRYU1Xaw.js",
			"/assets/Footer-CgCxVcOE.js",
			"/assets/SignedImage-Bt2dtZc_.js",
			"/assets/WhatsAppButton-DK7YOd5b.js"
		]
	},
	"/contact": {
		filePath: "/home/runner/work/emerald-finish-co/emerald-finish-co/src/routes/contact.tsx",
		children: void 0,
		preloads: [
			"/assets/contact-Cs1uBE83.js",
			"/assets/createLucideIcon-D1l_1SOF.js",
			"/assets/circle-check-Dct4aH6y.js",
			"/assets/phone-DO5HEkg6.js",
			"/assets/map-pin-DwlTNaXG.js",
			"/assets/Footer-CgCxVcOE.js",
			"/assets/WhatsAppButton-DK7YOd5b.js"
		]
	},
	"/gallery": {
		filePath: "/home/runner/work/emerald-finish-co/emerald-finish-co/src/routes/gallery.tsx",
		children: void 0,
		preloads: [
			"/assets/gallery-OR6zgiYF.js",
			"/assets/x-BtLDotfK.js",
			"/assets/Footer-CgCxVcOE.js",
			"/assets/WhatsAppButton-DK7YOd5b.js"
		]
	},
	"/request-quote": {
		filePath: "/home/runner/work/emerald-finish-co/emerald-finish-co/src/routes/request-quote.tsx",
		children: void 0,
		preloads: [
			"/assets/request-quote-DVCMvV4j.js",
			"/assets/circle-check-Dct4aH6y.js",
			"/assets/Footer-CgCxVcOE.js",
			"/assets/WhatsAppButton-DK7YOd5b.js"
		]
	},
	"/services": {
		filePath: "/home/runner/work/emerald-finish-co/emerald-finish-co/src/routes/services.tsx",
		children: void 0,
		preloads: [
			"/assets/services-thDJ763u.js",
			"/assets/Footer-CgCxVcOE.js",
			"/assets/services_Ceiling-BlHPu9AO.js",
			"/assets/services_Kitchen-BQ5D5Uj7.js",
			"/assets/WhatsAppButton-DK7YOd5b.js"
		]
	},
	"/_authenticated/admin": {
		filePath: "/home/runner/work/emerald-finish-co/emerald-finish-co/src/routes/_authenticated/admin.tsx",
		children: [
			"/_authenticated/admin/blog",
			"/_authenticated/admin/gallery",
			"/_authenticated/admin/messages",
			"/_authenticated/admin/quotes",
			"/_authenticated/admin/"
		],
		preloads: [
			"/assets/admin-W52OEQIT.js",
			"/assets/useRouterState-CvyIJj-W.js",
			"/assets/createLucideIcon-D1l_1SOF.js",
			"/assets/newspaper-DVHL_hZ8.js",
			"/assets/menu-Dez0RYOe.js",
			"/assets/x-BtLDotfK.js"
		]
	},
	"/blog/$slug": {
		filePath: "/home/runner/work/emerald-finish-co/emerald-finish-co/src/routes/blog.$slug.tsx",
		children: void 0,
		preloads: [
			"/assets/blog._slug-DypnitG8.js",
			"/assets/createLucideIcon-D1l_1SOF.js",
			"/assets/blog._slug-BVybP5q2.js",
			"/assets/blog._slug-U780GRo3.js"
		]
	},
	"/_authenticated/admin/blog": {
		filePath: "/home/runner/work/emerald-finish-co/emerald-finish-co/src/routes/_authenticated/admin.blog.tsx",
		children: ["/_authenticated/admin/blog/$id", "/_authenticated/admin/blog/new"],
		preloads: [
			"/assets/admin.blog-b2z-JnR2.js",
			"/assets/trash-2-BSQDqtRw.js",
			"/assets/useQuery-gRYU1Xaw.js"
		]
	},
	"/_authenticated/admin/gallery": {
		filePath: "/home/runner/work/emerald-finish-co/emerald-finish-co/src/routes/_authenticated/admin.gallery.tsx",
		children: void 0,
		preloads: [
			"/assets/admin.gallery--uw3Xj4p.js",
			"/assets/trash-2-BSQDqtRw.js",
			"/assets/useQuery-gRYU1Xaw.js",
			"/assets/upload-DBsJXyoP.js",
			"/assets/SignedImage-Bt2dtZc_.js"
		]
	},
	"/_authenticated/admin/messages": {
		filePath: "/home/runner/work/emerald-finish-co/emerald-finish-co/src/routes/_authenticated/admin.messages.tsx",
		children: void 0,
		preloads: [
			"/assets/admin.messages-QQyQ59TM.js",
			"/assets/trash-2-BSQDqtRw.js",
			"/assets/useQuery-gRYU1Xaw.js",
			"/assets/phone-DO5HEkg6.js"
		]
	},
	"/_authenticated/admin/quotes": {
		filePath: "/home/runner/work/emerald-finish-co/emerald-finish-co/src/routes/_authenticated/admin.quotes.tsx",
		children: void 0,
		preloads: [
			"/assets/admin.quotes-BDvjgVWw.js",
			"/assets/trash-2-BSQDqtRw.js",
			"/assets/useQuery-gRYU1Xaw.js",
			"/assets/phone-DO5HEkg6.js"
		]
	},
	"/_authenticated/admin/": {
		filePath: "/home/runner/work/emerald-finish-co/emerald-finish-co/src/routes/_authenticated/admin.index.tsx",
		children: void 0,
		preloads: ["/assets/admin.index-CwWuLhpS.js", "/assets/useQuery-gRYU1Xaw.js"]
	},
	"/_authenticated/admin/blog/$id": {
		filePath: "/home/runner/work/emerald-finish-co/emerald-finish-co/src/routes/_authenticated/admin.blog.$id.tsx",
		children: void 0,
		preloads: ["/assets/admin.blog._id-CBRCcDG_.js", "/assets/PostEditor-CCYzW23d.js"]
	},
	"/_authenticated/admin/blog/new": {
		filePath: "/home/runner/work/emerald-finish-co/emerald-finish-co/src/routes/_authenticated/admin.blog.new.tsx",
		children: void 0,
		preloads: ["/assets/admin.blog.new--A3jBi61.js", "/assets/PostEditor-CCYzW23d.js"]
	}
} });
//#endregion
export { tsrStartManifest };
