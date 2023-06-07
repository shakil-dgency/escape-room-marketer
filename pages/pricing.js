import PricingCalculator from "@/components/PricingCalculator";
import Image from "next/image";
import React, { useState } from "react";

function Pricing(props) {
	const [pricingData, setPricingData] = useState(props.pricingPageData);
	return (
		<div className="pt-[4.5rem] md:pt-[6rem] ">
			<div className="break_line image bg-[url('/page_broke.png')] h-[75px] bg-[length:1600px_90px] bg-center -mt-10 bg-[var(--section-bg-lightblue)]"></div>
			<div className="bg-[var(--section-bg-lightblue)] pb-10">
				<div className=" px-2 md:px-0 m-auto">
					<h1 className="hero_heading text-center  md:px-[10%] lg:px-[20%] pt-14 pb-8">
						Pricing Palooza: Rocking the Deals, Jamming with Savings! Prices Shrink and Smiles Grow
					</h1>
				</div>
				<div className="flex justify-between  md:px-[5%] 2xl:px-[10%]">
					<Image src="/results/testimonial/left.svg" alt="" height={100} width={100} className="w-[80px] md:w-[100px]" />
					<Image src="/results/testimonial/middle.svg" alt="" height={100} width={150} className="w-[100px] md:w-[150px]" />
					<Image src="/results/testimonial/right.svg" alt="" height={100} width={100} className="w-[80px] md:w-[100px]" />
				</div>
			</div>
			<div className="break_line image bg-[url('/section_break.svg')] h-[80px] bg-[length:2500px_90px]  bg-center rotate-180"></div>

			<div className=" g-page_structure bg-[var(--section-bg-lightred)]">
				<div className="pb-14">
					<div className="bg-white rounded-md drop-shadow-md pb-14">
						<h1 className="g__section-heading pt-14   text-center mx-auto font-extrabold lg:w-[75%] xl:w-[70%] 2xl:w-[90%]">
							Pricing Palooza: Rocking the Deals, Jamming with Savings! Prices Shrink and Smiles Grow
						</h1>
						<div className="">
							<Image src="/pricing/doller.svg" alt="" height={100} width={500} className="mx-auto pt-4" />
						</div>
						<PricingCalculator pricingData={pricingData} />
					</div>
				</div>
			</div>
		</div>
	);
}

export async function getServerSideProps(context) {
	// Fetch data from external API
	let data = await fetch("http://localhost:3000/api/pricingcalculator");
	let pricingPageData = await data.json();
	// Pass data to the page via props
	return {
		props: { pricingPageData },
	};
}

export default Pricing;
