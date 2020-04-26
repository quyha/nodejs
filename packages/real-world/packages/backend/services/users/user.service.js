const { SERVICE_USER } = require('../../constants');

module.exports = {
	name: SERVICE_USER,
	actions: {
		add(ctx) {
			return Number(ctx.params.a) + Number(ctx.params.b);
		},
	},
};
