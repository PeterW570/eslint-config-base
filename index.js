module.exports = {
	extends: [
		'./rules/best-practices',
		'./rules/errors',
		'./rules/style',
		'./rules/variables',
		'./rules/es6',
	].map(require.resolve),
	parserOptions: {
		ecmaVersion: 2021,
		sourceType: 'module',
	},
	env: {
		browser: true,
		node: true,
	},
	rules: {},
};
