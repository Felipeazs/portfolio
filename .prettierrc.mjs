/** @type {import("prettier").Config} */
export default {
	printWidth: 100,
	useTabs: true,
	trailingComma: "all",
	semi: false,
	bracketSameLine: true,
	endOfLine: "auto",
	singleAttributePerLine: true,
	plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
	overrides: [
		{
			files: ["**/*.astro"],
			options: {
				parser: "astro",
			},
		},
	],
}
