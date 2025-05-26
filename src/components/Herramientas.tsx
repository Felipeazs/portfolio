import neovim from "../assets/neovim.png";
import git from "../assets/git.png";
import github from "../assets/github.png";
import openai from "../assets/openai.png";

import Card from "./Card";

const images = [
	{
		src: neovim.src,
		alt: "neovim",
	},
	{
		src: git.src,
		alt: "git",
	},
	{
		src: github.src,
		alt: "github",
	},
	{
		src: openai.src,
		alt: "openai",
	},
];

export default function Herramientas() {
	return <Card title="Herramientas" images={images} />;
}
