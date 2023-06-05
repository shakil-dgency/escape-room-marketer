import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import CaseStudy1 from "@/components/caseStudies/CaseStudy1";
import CaseStudy2 from "@/components/caseStudies/CaseStudy2";
import CaseStudy3 from "@/components/caseStudies/CaseStudy3";
import CaseStudy4 from "@/components/caseStudies/CaseStudy4";
import Casehero from "@/components/caseStudies/Casehero";

function CaseStudy(props) {
	const [studyDetails, setStudyDetails] = useState(props.caseStudyDetails);
	const router = useRouter();
	const dynamicpage = router.query.caseStudy;

	return (
		// <div className="pt-[6rem]">
		// 	{dynamicpage === "caseStudy1" && <CaseStudy1 />}
		// 	{dynamicpage === "caseStudy2" && <CaseStudy2 />}
		// 	{dynamicpage === "caseStudy3" && <CaseStudy3 />}
		// 	{dynamicpage === "caseStudy4" && <CaseStudy4 />}
		// </div>

		<div className="pt-[6rem]">
			<Casehero />
			<div className="g-page_structure bg-[var(--section-bg-lightblue)] ">
				<div className="flex pt-[10rem] pb-8 gap-8">
					{studyDetails.study_details &&
						studyDetails.study_details.map((data) => {
							return (
								<div className="flex flex-col gap-10 relative" key={data.id}>
									{dynamicpage === data.id && (
										<div className="">
											<h3 className="font-circular text-3xl text-red-500">Overview</h3>
											<p className="font-graphik mt-4">
												{data.overview && data.overview.first_pera}
												<br /> <br /> {data.overview && data.overview.second_pera}
											</p>
										</div>
									)}
									{dynamicpage === data.id && (
										<div>
											<h3 className="font-circular text-3xl text-red-500">Squeezing Your Market Size</h3>
											<p className="font-graphik mt-4">
												{data.market_size && data.market_size.first_pera}
												<br /> <br /> {data.market_size && data.market_size.second_pera}
											</p>
										</div>
									)}
									{dynamicpage === data.id && (
										<div>
											<h3 className="font-circular text-3xl text-red-500">Results</h3>
											<p className="font-graphik mt-4">
												{data.results && data.results.first_pera}
												<br /> <br /> {data.results && data.results.second_pera}
											</p>
										</div>
									)}
								</div>
							);
						})}
					<div className="bg-[#F2F4EF] px-4 py-6  h-full sticky top-0 rounded-xl">
						<div className="">
							<h5 className="text-[15px] font-circular">ABOUT THE CLIENT</h5>
							<p className="font-graphik text-[14px] ">
								TRUE BIJOUX Jewellery owned and operated by The Jewellery Sisters, Lindsay and Stephanie Appotive. They’re committed to seeking out
								and offering their customers engagement rings, wedding rings, fine jewelry and fashion jewelry from Canada, the US, and around the
								globe. They offer various price points and styles, including vintage estate and pre-owned jewelry.
							</p>
						</div>
						<div className="">
							<h5 className="text-[15px] font-circular mt-2">HEADQUARTERS</h5>
							<p className="font-graphik text-[14px]">
								206 Sparks Street,
								<br /> Ottawa ON K2P 5C1,
								<br /> Canada
							</p>
						</div>
						<div className="">
							<h5 className="text-[15px] font-circular mt-2">INDUSTRY</h5>
							<p className="font-graphik text-[14px]">Jewelry Ecommerce</p>
						</div>
						<div className="">
							<h5 className="text-[15px] font-circular mt-2">SERVICES RENDERED</h5>
							<ul className="font-graphik text-[14px] list-disc list-inside ">
								<li>Buyer Persona Analysis</li>
								<li>Google Search Ads</li>
								<li>Google Shopping Ads</li>
								<li>Programmatic Display Ads</li>
								<li>Dynamic Remarketing Ads</li>
								<li>User Testing</li>
								<li>Conversion Rate Optimization</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="break_line image bg-[url('/test_break.svg')] h-[90px] w-full bg-[length:2500px_90px] absolute z-10   bg-center rotate-180 "></div>
		</div>
	);
}

export async function getServerSideProps(context) {
	// Fetch data from external API
	let data = await fetch("http://localhost:3000/api/casestudydetails");
	let caseStudyDetails = await data.json();
	// Pass data to the page via props
	return {
		props: { caseStudyDetails },
	};
}

export default CaseStudy;
