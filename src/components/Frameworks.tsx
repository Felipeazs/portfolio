import react from "../assets/react.png";
import express from "../assets/express.png";
import hono from "../assets/hono.png";
import tailwind from "../assets/tailwind.png";
import astro from "../assets/astro.png";
import spring_boot from "../assets/spring_boot.png";
import svelte from "../assets/svelte.png";

import Card from "./Card";

const images = [
	{
		src: react.src,
		alt: "react",
	},
	{
		src: express.src,
		alt: "express",
	},
	{
		src: hono.src,
		alt: "hono",
	},
	{
		src: tailwind.src,
		alt: "tailwind",
	},
	{
		src: astro.src,
		alt: "astro",
	},
	{
		src: spring_boot.src,
		alt: "spring boot",
	},
	{
		src: svelte.src,
		alt: "svelte",
	},
];

export default function Frameworks() {
	return <Card title="Frameworks" images={images} />;
}
