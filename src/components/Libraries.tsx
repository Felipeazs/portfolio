import shadcn from "../assets/shadcn.png";
import zod from "../assets/zod.png";
import zustand from "../assets/zustand.png";
import tanstack_query from "../assets/tanstack_query.png";
import vitest from "../assets/vitest.png";
import drizzle from "../assets/drizzle.png";
import prisma from "../assets/prisma.png";
import posthog from "../assets/posthog.png";
import mongodb from "../assets/mongodb.png";
import redis from "../assets/redis.png";
import sentry from "../assets/sentry.png";
import discord from "../assets/discord.png";
import Card from "./Card";

const images = [
	{
		src: shadcn.src,
		alt: "shadcn",
	},
	{
		src: zod.src,
		alt: "zod",
	},
	{
		src: zustand.src,
		alt: "zustand",
	},
	{
		src: tanstack_query.src,
		alt: "tanstack",
	},
	{
		src: vitest.src,
		alt: "vitest",
	},
	{
		src: drizzle.src,
		alt: "drizzle",
	},
	{
		src: mongodb.src,
		alt: "mongodb",
	},
	{
		src: redis.src,
		alt: "redis",
	},
	{
		src: prisma.src,
		alt: "prisma",
	},
	{
		src: posthog.src,
		alt: "posthog",
	},
	{
		src: sentry.src,
		alt: "sentry",
	},
	{
		src: discord.src,
		alt: "discord",
	},
];

export default function Libraries() {
	return <Card title="Librerías" images={images} />;
}
