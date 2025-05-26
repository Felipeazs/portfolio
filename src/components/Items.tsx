import Frameworks from "./Frameworks";
import Languages from "./Languages";
import Libraries from "./Libraries";
import Herramientas from "./Herramientas";
import Item from "./Item";

export default function Items({ items }: { items: any[] }) {
	return (
		<div className="snap-mandatoy flex w-full snap-y flex-col items-center justify-center scroll-smooth">
			{items.map(({ slug, data: { title } }) => {
				return (
					<Item>
						<a
							href={`/${slug}`}
							className="mb-2 cursor-pointer snap-center text-2xl leading-tight font-semibold text-white uppercase drop-shadow-[1px_35px_35px_rgba(255,99,126,0.8)] transition-all ease-in-out group-hover:w-max before:absolute before:bottom-0 before:left-[50%] before:h-[2px] before:w-0 before:origin-center before:bg-rose-400 before:transition-[width] before:duration-700 before:ease-in-out after:absolute after:right-[50%] after:bottom-0 after:h-[2px] after:w-0 after:origin-center after:bg-rose-400 after:transition-[width] after:duration-700 after:ease-in-out hover:text-rose-400 hover:before:w-[50%] hover:after:w-[50%] md:text-4xl"
						>
							{`<${title}/>`}
						</a>
					</Item>
				);
			})}
			<Item>
				<div className="group relative flex w-full flex-col items-center justify-center">
					<span className="mb-2 cursor-pointer snap-center text-2xl leading-tight font-semibold text-white uppercase drop-shadow-[1px_35px_35px_rgba(255,99,126,0.8)] transition-all ease-in-out group-hover:w-max before:absolute before:bottom-0 before:left-[50%] before:h-[2px] before:w-0 before:origin-center before:bg-rose-400 before:transition-[width] before:duration-700 before:ease-in-out after:absolute after:right-[50%] after:bottom-0 after:h-[2px] after:w-0 after:origin-center after:bg-rose-400 after:transition-[width] after:duration-700 after:ease-in-out hover:text-rose-400 hover:before:w-[50%] hover:after:w-[50%] md:text-4xl">
						{"<Habilidades/>"}
					</span>
					<div className="text-md invisible translate-y-8 transform transition ease-in-out group-hover:visible group-hover:translate-y-0 group-hover:text-white">
						<div className="flex flex-row flex-wrap items-center justify-center gap-10">
							<Languages />
							<Frameworks />
							<Libraries />
							<Herramientas />
						</div>
					</div>
				</div>
			</Item>
		</div>
	);
}
