import { useRef, type ReactNode } from "react"

import { motion } from "motion/react"

const transition = {
	duration: 1,
	delay: 0.5,
	ease: [0, 0.71, 0.2, 1.01],
}

export default function Item({ children }: { children: ReactNode }) {
	const scrollRef = useRef(null)

	return (
		<div
			ref={scrollRef}
			className="flex h-[500px] w-full snap-center flex-col items-center justify-center">
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={transition}
				viewport={{ root: scrollRef }}>
				{children}
			</motion.div>
		</div>
	)
}
