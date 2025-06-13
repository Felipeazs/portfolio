import drizzle from "../assets/drizzle.png"
import prisma from "../assets/prisma.png"
import mongodb from "../assets/mongodb.png"
import redis from "../assets/redis.png"
import postgres from "../assets/postgres.png"

import Card from "./Card"

const images = [
	{
		id: 6,
		src: drizzle.src,
		alt: "drizzle",
	},
	{
		id: 9,
		src: prisma.src,
		alt: "prisma",
	},
	{
		id: 8,
		src: redis.src,
		alt: "redis",
	},
	{
		id: 7,
		src: mongodb.src,
		alt: "mongodb",
	},
	{
		id: 1,
		src: postgres.src,
		alt: "postgres",
	},
]

export default function Databases() {
	return (
		<Card
			title="Bases de Datos"
			images={images}
		/>
	)
}
