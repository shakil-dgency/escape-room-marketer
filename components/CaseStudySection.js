import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useRef } from "react";
import { FaLinkedin } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import CaseStudyCard from "./CaseStudyCard";

function CaseStudySection({ caseStudyCard }) {
	console.log(caseStudyCard.case_card.map((d) => d.title));
	return (
		<div>
			<div id="case" className="g-page_structure  bg-[var(--section-bg-lightblue)]">
				<h1 className="g__section-heading pt-14   text-center mx-auto font-extrabold lg:w-[75%] xl:w-[70%] 2xl:w-[80%]">
					You Could Choose a Marketing Team With Zero Years of Experience. But Why Would You?
				</h1>
				<p className="font-graphik text-center text-[16px] mx-auto md:text-xl 2xl:text-[22px] pt-4 md:w-[70%]  ">
					Everything that costs a buck to get a click. Our management services include all paid advertising platforms, from Google ads to LinkedIn ads
					to Bing ads, and everything in between.
				</p>

				<div className="lg:w-[1000px] mx-auto mt-14 grid grid-cols-2 gap-4">
					{caseStudyCard.case_card.slice(0, 4).map((d) => {
						return <CaseStudyCard key={d.id} item={d} />;
					})}
				</div>

				{/* <Link href={"/"} className="group  text-lg md:text-2xl list-none text-red-500">
					<p className="font-medium pb-8 text-center leading-[0px] px-4">See All Case Stusies</p>
					
				</Link> */}
				<div className=" flex justify-center pb-8">
					<Link href={"/all-case-study"} className="text-red-500 text-xl font-semibold mt-6 flex items-center">
						See All Case Studies <MdKeyboardArrowDown className=" text-2xl mt-2 -rotate-90" />
					</Link>
				</div>
			</div>
		</div>
	);
}

export default CaseStudySection;
