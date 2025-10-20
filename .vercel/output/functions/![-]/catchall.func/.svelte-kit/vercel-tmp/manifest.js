export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["robots.txt"]),
	mimeTypes: {".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.B7tYS6mn.js",app:"_app/immutable/entry/app.pcEu5QxO.js",imports:["_app/immutable/entry/start.B7tYS6mn.js","_app/immutable/chunks/3D19iZeg.js","_app/immutable/chunks/Bxb6UUOR.js","_app/immutable/chunks/cVipM7x5.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/entry/app.pcEu5QxO.js","_app/immutable/chunks/cVipM7x5.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/Bxb6UUOR.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/CG_efguc.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js')),
			__memo(() => import('../output/server/nodes/5.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/gallery",
				pattern: /^\/gallery\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/summer",
				pattern: /^\/summer\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/winter",
				pattern: /^\/winter\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
