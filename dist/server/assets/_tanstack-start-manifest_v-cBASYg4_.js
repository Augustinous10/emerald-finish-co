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
			"/assets/index-PeWvYS-J.js",
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
			src: "/assets/index-PeWvYS-J.js"
		} }]
	},
	"/": {
		filePath: "/home/runner/work/emerald-finish-co/emerald-finish-co/src/routes/index.tsx",
		children: void 0,
		preloads: [
			"/assets/routes-CgfOg5UB.js",
			"/assets/createLucideIcon-D1l_1SOF.js",
			"/assets/map-pin-DwlTNaXG.js",
			"/assets/x-BtLDotfK.js",
			"/assets/Footer-CgCxVcOE.js",
			"/assets/services_Ceiling-BlHPu9AO.js",
			"/assets/services_Kitchen-BQ5D5Uj7.js",
			"/assets/WhatsAppButton-BqYF4ZnK.js"
		]
	},
	"/_authenticated": {
		filePath: "/home/runner/work/emerald-finish-co/emerald-finish-co/src/routes/_authenticated/route.tsx",
		children: ["/_authenticated/admin"],
		preloads: ["/assets/route-FFCnaTcb.js"]
	},
	"/about": {
		filePath: "/home/runner/work/emerald-finish-co/emerald-finish-co/src/routes/about.tsx",
		children: void 0,
		preloads: [
			"/assets/about-CVsAE2TR.js",
			"/assets/Footer-CgCxVcOE.js",
			"/assets/services_Ceiling-BlHPu9AO.js",
			"/assets/WhatsAppButton-BqYF4ZnK.js"
		]
	},
	"/auth": {
		filePath: "/home/runner/work/emerald-finish-co/emerald-finish-co/src/routes/auth.tsx",
		children: void 0,
		preloads: ["/assets/auth-DjafLqcx.js"]
	},
	"/blog": {
		filePath: "/home/runner/work/emerald-finish-co/emerald-finish-co/src/routes/blog.tsx",
		children: ["/blog/$slug"],
		preloads: [
			"/assets/blog-DPQEZxNu.js",
			"/assets/useQuery-DM4JPekQ.js",
			"/assets/Footer-CgCxVcOE.js",
			"/assets/SignedImage-DqcGMqN-.js",
			"/assets/WhatsAppButton-BqYF4ZnK.js"
		]
	},
	"/contact": {
		filePath: "/home/runner/work/emerald-finish-co/emerald-finish-co/src/routes/contact.tsx",
		children: void 0,
		preloads: [
			"/assets/contact-unP7dXiH.js",
			"/assets/createLucideIcon-D1l_1SOF.js",
			"/assets/circle-check-Dct4aH6y.js",
			"/assets/phone-DO5HEkg6.js",
			"/assets/map-pin-DwlTNaXG.js",
			"/assets/Footer-CgCxVcOE.js",
			"/assets/WhatsAppButton-BqYF4ZnK.js"
		]
	},
	"/gallery": {
		filePath: "/home/runner/work/emerald-finish-co/emerald-finish-co/src/routes/gallery.tsx",
		children: void 0,
		preloads: [
			"/assets/gallery-BqBFdagL.js",
			"/assets/x-BtLDotfK.js",
			"/assets/Footer-CgCxVcOE.js",
			"/assets/WhatsAppButton-BqYF4ZnK.js"
		]
	},
	"/request-quote": {
		filePath: "/home/runner/work/emerald-finish-co/emerald-finish-co/src/routes/request-quote.tsx",
		children: void 0,
		preloads: [
			"/assets/request-quote-BWwggDlC.js",
			"/assets/circle-check-Dct4aH6y.js",
			"/assets/Footer-CgCxVcOE.js",
			"/assets/WhatsAppButton-BqYF4ZnK.js"
		]
	},
	"/services": {
		filePath: "/home/runner/work/emerald-finish-co/emerald-finish-co/src/routes/services.tsx",
		children: void 0,
		preloads: [
			"/assets/services-DmYKQE1B.js",
			"/assets/Footer-CgCxVcOE.js",
			"/assets/services_Ceiling-BlHPu9AO.js",
			"/assets/services_Kitchen-BQ5D5Uj7.js",
			"/assets/WhatsAppButton-BqYF4ZnK.js"
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
			"/assets/admin-xZlzzece.js",
			"/assets/useRouterState-Dcmsm93n.js",
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
			"/assets/blog._slug-CZDDxlLR.js",
			"/assets/createLucideIcon-D1l_1SOF.js",
			"/assets/blog._slug-BVybP5q2.js",
			"/assets/blog._slug-U780GRo3.js"
		]
	},
	"/_authenticated/admin/blog": {
		filePath: "/home/runner/work/emerald-finish-co/emerald-finish-co/src/routes/_authenticated/admin.blog.tsx",
		children: ["/_authenticated/admin/blog/$id", "/_authenticated/admin/blog/new"],
		preloads: [
			"/assets/admin.blog-gMtB5TiC.js",
			"/assets/trash-2-B3rM091Y.js",
			"/assets/useQuery-DM4JPekQ.js"
		]
	},
	"/_authenticated/admin/gallery": {
		filePath: "/home/runner/work/emerald-finish-co/emerald-finish-co/src/routes/_authenticated/admin.gallery.tsx",
		children: void 0,
		preloads: [
			"/assets/admin.gallery-lTyHjDkQ.js",
			"/assets/trash-2-B3rM091Y.js",
			"/assets/useQuery-DM4JPekQ.js",
			"/assets/upload-DBsJXyoP.js",
			"/assets/SignedImage-DqcGMqN-.js"
		]
	},
	"/_authenticated/admin/messages": {
		filePath: "/home/runner/work/emerald-finish-co/emerald-finish-co/src/routes/_authenticated/admin.messages.tsx",
		children: void 0,
		preloads: [
			"/assets/admin.messages-zIMOqPNe.js",
			"/assets/trash-2-B3rM091Y.js",
			"/assets/useQuery-DM4JPekQ.js",
			"/assets/phone-DO5HEkg6.js"
		]
	},
	"/_authenticated/admin/quotes": {
		filePath: "/home/runner/work/emerald-finish-co/emerald-finish-co/src/routes/_authenticated/admin.quotes.tsx",
		children: void 0,
		preloads: [
			"/assets/admin.quotes-C3-NCItU.js",
			"/assets/trash-2-B3rM091Y.js",
			"/assets/useQuery-DM4JPekQ.js",
			"/assets/phone-DO5HEkg6.js"
		]
	},
	"/_authenticated/admin/": {
		filePath: "/home/runner/work/emerald-finish-co/emerald-finish-co/src/routes/_authenticated/admin.index.tsx",
		children: void 0,
		preloads: ["/assets/admin.index-BQyNOiSO.js", "/assets/useQuery-DM4JPekQ.js"]
	},
	"/_authenticated/admin/blog/$id": {
		filePath: "/home/runner/work/emerald-finish-co/emerald-finish-co/src/routes/_authenticated/admin.blog.$id.tsx",
		children: void 0,
		preloads: ["/assets/admin.blog._id-DLhgbH2R.js", "/assets/PostEditor-Bv9-W32Z.js"]
	},
	"/_authenticated/admin/blog/new": {
		filePath: "/home/runner/work/emerald-finish-co/emerald-finish-co/src/routes/_authenticated/admin.blog.new.tsx",
		children: void 0,
		preloads: ["/assets/admin.blog.new-CLfB1PMV.js", "/assets/PostEditor-Bv9-W32Z.js"]
	}
} });
//#endregion
export { tsrStartManifest };
