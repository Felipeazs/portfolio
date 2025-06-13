import js from "../assets/js.png"
import ts from "../assets/ts.png"
import python from "../assets/python.png"
import java from "../assets/java.png"

import Card from "./Card"

const images = [
	{
		id: 1,
		src: js.src,
		alt: "javascript",
	},
	{
		id: 2,
		src: ts.src,
		alt: "typescript",
	},
	{
		id: 3,
		src: python.src,
		alt: "python",
	},
	{
		id: 4,
		src: java.src,
		alt: "java",
	},
]

export default function Languages() {
	return (
		<Card
			title="Languages"
			images={images}
		/>
	)
}
