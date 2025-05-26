import { useState } from "react";

export default function Tooltip({ content, children }) {
	const [visible, setVisible] = useState(false);
	const show = () => setVisible(true);
	const hide = () => setVisible(false);

	return (
		<span
			onMouseEnter={show}
			onMouseLeave={hide}
			onFocus={show}
			onBlur={hide}
			tabIndex={0}
			className="relative block cursor-pointer"
		>
			{children}
			{visible && (
				<span className="absolute left-0 z-10 translate-y-14 rounded-md bg-rose-400 px-[8px] py-[2px] font-semibold text-nowrap text-[#333]">
					{content}
				</span>
			)}
		</span>
	);
}
