module.exports = {
	rules: {
		'array-bracket-newline': ['error', { multiline: true }],
		'array-element-newline': ['error', 'consistent'],
		'block-spacing': ['error', 'always'],
		'brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
		'comma-dangle': ['error', 'always-multiline'],
		'comma-spacing': 'error',
		'comma-style': 'error',
		'computed-property-spacing': 'error',
		'consistent-this': ['error', 'self'],
		'eol-last': 'error',
		'func-call-spacing': 'error',
		'func-names': ['error', 'as-needed'],
		'function-call-argument-newline': ['error', 'consistent'],
		'function-paren-newline': ['error', 'multiline-arguments'],
		'implicit-arrow-linebreak': 'error',
		indent: ['error', 'tab'],
		'key-spacing': 'error',
		'keyword-spacing': 'error',
		'lines-around-comment': [
			'error',
			{
				beforeBlockComment: true,
				beforeLineComment: true,
			},
		],
		'max-params': ['error', 3],
		'no-bitwise': 'error',
		'no-multiple-empty-lines': 'error',
		'no-trailing-space': 'error',
		'no-unneeded-ternary': 'error',
		'no-whitespace-before-property': 'error',
		'nonblock-statement-body-position': 'error',
		'object-curly-newline': ['error', { multiline: true }],
		'object-curly-spacing': ['error', 'always'],
		'object-property-newline': [
			'error',
			{ allowAllPropertiesOnSameLine: true },
		],
		'one-var': ['error', 'never'],
		quotes: ['error', 'single'],
		semi: 'error',
		'semi-spacing': 'error',
		'semi-style': 'error',
		'sort-keys': 'warn',
		'space-before-blocks': 'error',
		'space-before-function-paren': ['error', 'always'],
		'space-in-parens': 'error',
		'spaced-comment': ['error', 'always'],
		'switch-colon-spacing': 'error',
		'template-tag-spacing': 'error',
	},
};