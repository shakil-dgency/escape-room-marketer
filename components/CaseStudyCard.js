import Image from "next/image";
import Link from "next/link";
import React from "react";

function CaseStudyCard({ item }) {
	return (
		<div>
			<div className=" font-graphik">
				<div className=" case_study-card rounded-lg  px-10 py-5 text-center  ">
					<div className="">
						<Image src="/results/testimonial/client-logo.svg" alt="" height={100} width={80} className="mx-auto pb-6" />
						<button className="bg-red-500 text-white mb-2 mx-5 py-1 px-3 font-medium ">{item.category}</button>
						<p className="text-lg md:text-xl 2xl:text-[28px] text-white ">{item.title}</p>
						<Link href={"/team/caseStudy1"}>
							<button className="text-lg bg-white px-4 py-1 rounded-md font-medium mt-4 mb-4">Read Case Study</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CaseStudyCard;
