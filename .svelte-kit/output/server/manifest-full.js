export const manifest = {
	appDir: "_app",
	appPath: "2023/02/demo/_app",
	assets: new Set([".DS_Store","assets/beachbackground.jpg"]),
	mimeTypes: {".jpg":"image/jpeg"},
	_: {
		entry: {"file":"_app/immutable/start-872a8910.js","imports":["_app/immutable/start-872a8910.js","_app/immutable/chunks/index-1573d241.js","_app/immutable/chunks/singletons-0cfc3572.js","_app/immutable/chunks/index-1aaecebc.js","_app/immutable/chunks/preload-helper-41c905a7.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
