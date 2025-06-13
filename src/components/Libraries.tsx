import shadcn from "../assets/shadcn.png"
import zod from "../assets/zod.png"
import zustand from "../assets/zustand.png"
import tanstack_query from "../assets/tanstack_query.png"
import vitest from "../assets/vitest.png"
import posthog from "../assets/posthog.png"
import sentry from "../assets/sentry.png"
import discord from "../assets/discord.png"
import Card from "./Card"

const images = [
	{
		id: 1,
		src: shadcn.src,
		alt: "shadcn",
	},
	{
		id: 2,
		src: zod.src,
		alt: "zod",
	},
	{
		id: 3,
		src: zustand.src,
		alt: "zustand",
	},
	{
		id: 4,
		src: tanstack_query.src,
		alt: "tanstack",
	},
	{
		id: 5,
		src: vitest.src,
		alt: "vitest",
	},
	{
		id: 10,
		src: posthog.src,
		alt: "posthog",
	},
	{
		id: 11,
		src: sentry.src,
		alt: "sentry",
	},
	{
		id: 12,
		src: discord.src,
		alt: "discord",
	},
]

export default function Libraries() {
	return (
		<Card
			title="Librerías"
			images={images}
		/>
	)
}
