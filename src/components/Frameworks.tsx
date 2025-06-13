import react from "../assets/react.png"
import express from "../assets/express.png"
import hono from "../assets/hono.png"
import tailwind from "../assets/tailwind.png"
import astro from "../assets/astro.png"
import spring_boot from "../assets/spring_boot.png"
import svelte from "../assets/svelte.png"

import Card from "./Card"

const images = [
	{
		id: 1,
		src: react.src,
		alt: "react",
	},
	{
		id: 2,
		src: express.src,
		alt: "express",
	},
	{
		id: 3,
		src: hono.src,
		alt: "hono",
	},
	{
		id: 4,
		src: tailwind.src,
		alt: "tailwind",
	},
	{
		id: 5,
		src: astro.src,
		alt: "astro",
	},
	{
		id: 6,
		src: spring_boot.src,
		alt: "spring boot",
	},
	{
		id: 7,
		src: svelte.src,
		alt: "svelte",
	},
]

export default function Frameworks() {
	return (
		<Card
			title="Frameworks"
			images={images}
		/>
	)
}
