module.exports = {
	rules: {
		'array-callback-return': 'error',
		'block-scoped-var': 'error',
		curly: ['error', 'multi-line'],
		'default-case': 'error',
		'default-param-last': 'error',
		'dot-location': ['error', 'property'],
		'no-alert': 'error',
		'no-case-declarations': 'error',
		'no-magic-numbers': [
			'error',
			{
				ignoreDefaultValues: true,
				ignoreArrayIndexes: true,
				enforceConst: true,
			},
		],
		'no-multi-spaces': 'error',
		'no-param-reassign': 'error',
		'no-redeclare': 'error',
		'no-return-assign': 'error',
		'no-unused-expressions': 'error',
		'no-useless-return': 'error',
		yoda: 'error',
	},
};
