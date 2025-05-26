import js from "../assets/js.png";
import ts from "../assets/ts.png";
import python from "../assets/python.png";
import java from "../assets/java.png";

import Card from "./Card";

const images = [
	{
		src: js.src,
		alt: "javascript",
	},
	{
		src: ts.src,
		alt: "typescript",
	},
	{
		src: python.src,
		alt: "python",
	},
	{
		src: java.src,
		alt: "java",
	},
];

export default function Languages() {
	return <Card title="Languages" images={images} />;
}
