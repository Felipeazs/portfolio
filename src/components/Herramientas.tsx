import neovim from "../assets/neovim.png"
import git from "../assets/git.png"
import github from "../assets/github.png"
import openai from "../assets/openai.png"

import Card from "./Card"

const images = [
	{
		id: 1,
		src: neovim.src,
		alt: "neovim",
	},
	{
		id: 2,
		src: git.src,
		alt: "git",
	},
	{
		id: 3,
		src: github.src,
		alt: "github",
	},
	{
		id: 4,
		src: openai.src,
		alt: "openai",
	},
]

export default function Herramientas() {
	return (
		<Card
			title="Herramientas"
			images={images}
		/>
	)
}
