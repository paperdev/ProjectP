/** @format */

module.exports = {
	env: {
		browser: true,
		es2021: true,
		'react-native/react-native': true
	},
	extends: [
		'@react-native-community',
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended'
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 12,
		sourceType: 'module'
	},
	plugins: ['@typescript-eslint', 'react', 'react-native'],
	settings: {
		react: {
			pragma: 'React',
			version: 'detect'
		}
	},
	rules: {
		indent: ['error', 'tab'],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
		'react/prop-types': 'off' // disable props validation error
	}
};
