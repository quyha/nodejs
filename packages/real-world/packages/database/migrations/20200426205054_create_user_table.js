const { mutationSet, baseFlag } = require('../utils');

exports.up = function (knex) {
	return knex.schema.withSchema('usr').createTable('User', function (table) {
		table.increments('usrId').comment('User Id');
		table.string('usrNm').unique().comment('Username');
		table.string('usrEml').unique().comment('User email');
		table.string('usrPwd').comment('User password');

		baseFlag(table);
		mutationSet(knex, table);

		table.comment('User');
	});
};

exports.down = function (knex) {
	return knex.schema;
};
