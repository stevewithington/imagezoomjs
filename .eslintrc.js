module.exports = {
	// https://eslint.org/docs/user-guide/configuring#specifying-environments
	env: {
		browser: true,
		commonjs: true,
		node: true,
	},
	// https://eslint.org/docs/user-guide/configuring#configuring-plugins
	plugins: ['eslint-plugin', '@typescript-eslint'],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'prettier/@typescript-eslint',
	],
	// https://www.npmjs.com/package/@typescript-eslint/eslint-plugin
	parser: '@typescript-eslint/parser',
	// https://eslint.org/docs/user-guide/configuring#specifying-parser-options-1
	parserOptions: {
		ecmaVersion: 6, // commonjs or 6
		sourceType: 'module', // `script` or `module`
		ecmaFeatures: {
			jsx: true,
		},
		project: './tsconfig.json',
	},
	// https://eslint.org/docs/user-guide/configuring#configuring-rules
	// https://github.com/typescript-eslint/typescript-eslint/blob/master/.eslintrc.js
	rules: {
		semi: 'error',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-var-requires': 'warn',
		'@typescript-eslint/no-unsafe-assignment': 'off',
		'@typescript-eslint/no-unsafe-call': 'off',
		'@typescript-eslint/no-unsafe-member-access': 'off',
		'@typescript-eslint/no-unsafe-return': 'warn',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-empty-function': [
			'error',
			{
				allow: ['arrowFunctions'],
			},
		],
		'@typescript-eslint/unbound-method': 'off',
		'@typescript-eslint/prefer-as-const': 'warn',
		'@typescript-eslint/no-unused-vars': 'off',
		'@typescript-eslint/no-floating-promises': 'off',

		// eslint base
		curly: ['error', 'all'],
		'no-mixed-operators': 'warn',
		'no-console': 'warn',
		'no-process-exit': 'error',

		//
		// eslint-plugin-import
		//

		// disallow non-import statements appearing before import statements
		'import/first': 'off',
		// Require a newline after the last import/require in a group
		'import/newline-after-import': 'off',
		// Forbid import of modules using absolute paths
		'import/no-absolute-path': 'off',
		// Named exports
		'import/no-named-export': 'off',
		// Forbid a module from importing itself
		'import/no-self-import': 'off',
	},
	overrides: [
		{
			files: ['./examples/**/*.js'],
			rules: {
				strict: 'off',
			},
		},
	],
};
