const ApiGateway = require('moleculer-web');

module.exports = {
	name: 'api',
	mixins: [ApiGateway],
	settings: {
		port: 4000,
		routes: [
			{
				path: '/api',
				authentication: false,
				autoAliases: false,
				aliases: { 'GET /add': 'user.add' },
				bodyParsers: {
					json: { limit: '2MB' },
					urlencoded: { extended: true, limit: '2MB' },
				},
			},
		],
	},
};
