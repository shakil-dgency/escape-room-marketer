import Image from "next/image";
import React from "react";

function MarketingPlanCta({ bodyColor, title }) {
	return (
		<div>
			<div className={`g-page_structure ${bodyColor} flex flex-col md:flex-row items-center gap-8 pb-6`}>
				<div className="main-content  m-auto flex-1 ">
					<h1 className=" text-center md:text-left pt-10  md:pt-14 px-3 md:px-0  text-xl md:text-3xl xl:text-4xl font-bold">{title}</h1>
					<div className="flex justify-center md:block mt-5 md:mt-10">
						<button className="font-graphik bg-[#ff5056] py-3 px-5 text-white text-lg  rounded font-semibold">Get Your Free Marketing Plan</button>
					</div>
				</div>
				<div className="flex justify-end my-10 flex-1">
					<Image src="/marketing-plan-escape-room-marketer.svg" alt="escape-room-marketer-marketing plan" width={400} height={400} />
				</div>
			</div>
		</div>
	);
}

export default MarketingPlanCta;
