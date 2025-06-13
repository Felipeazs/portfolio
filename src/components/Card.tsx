import Tooltip from "./Tooltip"

type ImageProps = {
	title: string
	images: {
		id: number
		src: string
		alt: string
	}[]
}

export default function Card(props: ImageProps) {
	return (
		<div className="space-y-5">
			<p>{props.title}</p>
			<div className="flex w-full flex-row flex-wrap items-center justify-center gap-2">
				{props.images.map((image) => (
					<Tooltip
						content={image.alt}
						key={image.id}>
						<img
							src={image.src}
							width={50}
							height={50}
							alt={image.alt}
							className="obeject-contain w-[50px]"
						/>
					</Tooltip>
				))}
			</div>
		</div>
	)
}
