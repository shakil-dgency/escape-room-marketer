import CaseStudyCard from "@/components/CaseStudyCard";
import Image from "next/image";
import React, { useState } from "react";

function AllCaseStudy(props) {
	const [caseStudyCard, setCaseStudyCard] = useState(props.cardData);
	return (
		<div className="pt-[4.5rem] md:pt-[6rem] ">
			<div className="break_line image bg-[url('/page_broke.png')] h-[75px] bg-[length:1600px_90px] bg-center -mt-10 bg-[var(--section-bg-lightblue)]"></div>
			<div className="bg-[var(--section-bg-lightblue)] pb-10">
				<div className=" px-2 md:px-0 m-auto">
					<h1 className="hero_heading text-center  md:px-[10%] lg:px-[20%] pt-14 pb-8">
						Our Secret Weapon: The Ridiculously Talented and Fun-Loving Escape Room Marketing Team
					</h1>
				</div>
				<div className="flex justify-between  md:px-[5%] 2xl:px-[10%]">
					<Image src="/results/testimonial/left.svg" alt="" height={100} width={100} className="w-[80px] md:w-[100px]" />
					<Image src="/results/testimonial/middle.svg" alt="" height={100} width={150} className="w-[100px] md:w-[150px]" />
					<Image src="/results/testimonial/right.svg" alt="" height={100} width={100} className="w-[80px] md:w-[100px]" />
				</div>
			</div>
			<div className="break_line image bg-[url('/section_break.svg')] h-[80px] bg-[length:2500px_90px]  bg-center rotate-180"></div>
			<div className="g-page_structure  bg-[var(--section-bg-lightred)]">
				<h1 className="g__section-heading pt-8  text-center mx-auto font-extrabold lg:w-[75%] xl:w-[70%] 2xl:w-[80%]">
					From Hustling on Craigslist, To Working With Billion-Dollar Companies
				</h1>
				<p className="font-graphik text-center text-[16px] mx-auto md:text-xl 2xl:text-[22px] pt-4 md:w-[70%]  ">
					Everything that costs a buck to get a click. Our management services include all paid advertising platforms, from Google ads to LinkedIn ads
					to Bing ads, and everything in between.
				</p>

				<div className="pb-10 lg:w-[1000px] mx-auto mt-14 grid md:grid-cols-2  gap-4">
					{caseStudyCard.case_card.map((d) => {
						return <CaseStudyCard key={d.id} item={d} />;
					})}
				</div>
			</div>
			<div className="break_line image bg-[url('/section_break.svg')] h-[80px] bg-[length:2500px_90px]  bg-center "></div>
		</div>
	);
}

export async function getServerSideProps(context) {
	// Fetch data from external API
	let data = await fetch("http://localhost:3000/api/casestudycard");
	let cardData = await data.json();
	// Pass data to the page via props
	return {
		props: { cardData },
	};
}

export default AllCaseStudy;
