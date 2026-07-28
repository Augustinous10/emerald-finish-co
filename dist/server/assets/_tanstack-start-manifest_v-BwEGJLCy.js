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
			"/assets/index-YaAv7sOZ.js",
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
			src: "/assets/index-YaAv7sOZ.js"
		} }]
	},
	"/": {
		filePath: "/home/runner/work/emerald-finish-co/emerald-finish-co/src/routes/index.tsx",
		children: void 0,
		preloads: [
			"/assets/routes-i-6W2wIv.js",
			"/assets/createLucideIcon-D1l_1SOF.js",
			"/assets/map-pin-DwlTNaXG.js",
			"/assets/Footer-CgCxVcOE.js",
			"/assets/service-gypsum-Czzf9p4h.js",
			"/assets/service-kitchen-BWvTCxcL.js",
			"/assets/WhatsAppButton-DK7YOd5b.js"
		]
	},
	"/_authenticated": {
		filePath: "/home/runner/work/emerald-finish-co/emerald-finish-co/src/routes/_authenticated/route.tsx",
		children: ["/_authenticated/admin"],
		preloads: ["/assets/route-KJatg2oK.js"]
	},
	"/about": {
		filePath: "/home/runner/work/emerald-finish-co/emerald-finish-co/src/routes/about.tsx",
		children: void 0,
		preloads: [
			"/assets/about-CEad3z3C.js",
			"/assets/Footer-CgCxVcOE.js",
			"/assets/service-gypsum-Czzf9p4h.js",
			"/assets/WhatsAppButton-DK7YOd5b.js"
		]
	},
	"/auth": {
		filePath: "/home/runner/work/emerald-finish-co/emerald-finish-co/src/routes/auth.tsx",
		children: void 0,
		preloads: ["/assets/auth-uNKhW29w.js"]
	},
	"/blog": {
		filePath: "/home/runner/work/emerald-finish-co/emerald-finish-co/src/routes/blog.tsx",
		children: ["/blog/$slug"],
		preloads: [
			"/assets/blog-Cijt-KVC.js",
			"/assets/useQuery-C8Z2jE7v.js",
			"/assets/Footer-CgCxVcOE.js",
			"/assets/SignedImage-BdUk4fxR.js",
			"/assets/WhatsAppButton-DK7YOd5b.js"
		]
	},
	"/contact": {
		filePath: "/home/runner/work/emerald-finish-co/emerald-finish-co/src/routes/contact.tsx",
		children: void 0,
		preloads: [
			"/assets/contact-BttE5PZo.js",
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
			"/assets/gallery-CBrukqs3.js",
			"/assets/x-BtLDotfK.js",
			"/assets/Footer-CgCxVcOE.js",
			"/assets/WhatsAppButton-DK7YOd5b.js"
		]
	},
	"/request-quote": {
		filePath: "/home/runner/work/emerald-finish-co/emerald-finish-co/src/routes/request-quote.tsx",
		children: void 0,
		preloads: [
			"/assets/request-quote-CvjITVVn.js",
			"/assets/circle-check-Dct4aH6y.js",
			"/assets/Footer-CgCxVcOE.js",
			"/assets/WhatsAppButton-DK7YOd5b.js"
		]
	},
	"/services": {
		filePath: "/home/runner/work/emerald-finish-co/emerald-finish-co/src/routes/services.tsx",
		children: void 0,
		preloads: [
			"/assets/services-Cp75-Rnj.js",
			"/assets/Footer-CgCxVcOE.js",
			"/assets/service-gypsum-Czzf9p4h.js",
			"/assets/service-kitchen-BWvTCxcL.js",
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
			"/assets/admin-BiKQT0r6.js",
			"/assets/useRouterState-HFyCHdWx.js",
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
			"/assets/blog._slug-EbYfg-rM.js",
			"/assets/createLucideIcon-D1l_1SOF.js",
			"/assets/blog._slug-BVybP5q2.js",
			"/assets/blog._slug-U780GRo3.js"
		]
	},
	"/_authenticated/admin/blog": {
		filePath: "/home/runner/work/emerald-finish-co/emerald-finish-co/src/routes/_authenticated/admin.blog.tsx",
		children: ["/_authenticated/admin/blog/$id", "/_authenticated/admin/blog/new"],
		preloads: [
			"/assets/admin.blog-ub9xBZFt.js",
			"/assets/trash-2-DDZh97P2.js",
			"/assets/useQuery-C8Z2jE7v.js"
		]
	},
	"/_authenticated/admin/gallery": {
		filePath: "/home/runner/work/emerald-finish-co/emerald-finish-co/src/routes/_authenticated/admin.gallery.tsx",
		children: void 0,
		preloads: [
			"/assets/admin.gallery-DF0X-NpP.js",
			"/assets/trash-2-DDZh97P2.js",
			"/assets/useQuery-C8Z2jE7v.js",
			"/assets/upload-DBsJXyoP.js",
			"/assets/SignedImage-BdUk4fxR.js"
		]
	},
	"/_authenticated/admin/messages": {
		filePath: "/home/runner/work/emerald-finish-co/emerald-finish-co/src/routes/_authenticated/admin.messages.tsx",
		children: void 0,
		preloads: [
			"/assets/admin.messages-DalXBaze.js",
			"/assets/trash-2-DDZh97P2.js",
			"/assets/useQuery-C8Z2jE7v.js",
			"/assets/phone-DO5HEkg6.js"
		]
	},
	"/_authenticated/admin/quotes": {
		filePath: "/home/runner/work/emerald-finish-co/emerald-finish-co/src/routes/_authenticated/admin.quotes.tsx",
		children: void 0,
		preloads: [
			"/assets/admin.quotes-BK04a5Fg.js",
			"/assets/trash-2-DDZh97P2.js",
			"/assets/useQuery-C8Z2jE7v.js",
			"/assets/phone-DO5HEkg6.js"
		]
	},
	"/_authenticated/admin/": {
		filePath: "/home/runner/work/emerald-finish-co/emerald-finish-co/src/routes/_authenticated/admin.index.tsx",
		children: void 0,
		preloads: ["/assets/admin.index-ntdRNGc4.js", "/assets/useQuery-C8Z2jE7v.js"]
	},
	"/_authenticated/admin/blog/$id": {
		filePath: "/home/runner/work/emerald-finish-co/emerald-finish-co/src/routes/_authenticated/admin.blog.$id.tsx",
		children: void 0,
		preloads: ["/assets/admin.blog._id-CiJEz3fh.js", "/assets/PostEditor-pIWnRW6N.js"]
	},
	"/_authenticated/admin/blog/new": {
		filePath: "/home/runner/work/emerald-finish-co/emerald-finish-co/src/routes/_authenticated/admin.blog.new.tsx",
		children: void 0,
		preloads: ["/assets/admin.blog.new-DQ4Nlphi.js", "/assets/PostEditor-pIWnRW6N.js"]
	}
} });
//#endregion
export { tsrStartManifest };
