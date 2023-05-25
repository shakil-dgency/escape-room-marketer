import Image from "next/image";
import React from "react";

function ReportGraph({ bodyColor, title, pera }) {
	return (
		<div>
			<div className={`g-page_structure ${bodyColor}`}>
				<h1 className="g__section-heading pt-14   text-center mx-auto font-extrabold lg:w-[75%] xl:w-[70%] 2xl:w-[80%]">{title}</h1>
				<p className="font-graphik md:text-lg xl:text-xl 2xl:text-2xl text-center md:w-[60%] m-auto py-4">{pera}</p>
				<div className="px-6 flex justify-center py-14">
					<Image src="/components/graph.svg" alt="" width={400} height={100} />
				</div>
			</div>
		</div>
	);
}

export default ReportGraph;
