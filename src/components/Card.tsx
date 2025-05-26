import type { ImagesProps } from ".astro/types";

import Tooltip from "./Tooltip";

export default function Frameworks(props: ImagesProps) {
	return (
		<div className="space-y-5">
			<p>{props.title}</p>
			<div className="flex w-full flex-row flex-wrap items-center justify-center gap-2">
				{props.images.map((image) => (
					<Tooltip content={image.alt}>
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
	);
}
