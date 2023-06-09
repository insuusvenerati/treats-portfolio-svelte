export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.7ebf23cb.js","app":"_app/immutable/entry/app.dcd4891a.js","imports":["_app/immutable/entry/start.7ebf23cb.js","_app/immutable/chunks/index.da2dd6f9.js","_app/immutable/chunks/singletons.54897595.js","_app/immutable/entry/app.dcd4891a.js","_app/immutable/chunks/index.da2dd6f9.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/3.js'),
			() => import('../output/server/nodes/4.js')
		],
		routes: [
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/visdev",
				pattern: /^\/visdev\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
