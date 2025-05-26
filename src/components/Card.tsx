import type { ImagesProps } from ".astro/types";

import Tooltip from "./Tooltip";

export default function Frameworks(props: ImagesProps) {
	return (
		<div className="h-max space-y-5">
			<p>{props.title}</p>
			<div className="flex flex-wrap justify-center gap-2">
				{props.images.map((image) => (
					<Tooltip content={image.alt}>
						<img
							src={image.src}
							width={50}
							height={50}
							alt={image.alt}
							className="obeject-contain"
						/>
					</Tooltip>
				))}
			</div>
		</div>
	);
}
