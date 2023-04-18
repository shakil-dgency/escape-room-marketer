import React, { useState } from "react";
import Hero from "@/components/service/Hero";
import ConversionMarketing from "@/components/service/ConversionMarketing";
import Image from "next/image";
import FaqSection from "@/components/service/FaqSection";
import Link from "next/link";
import FooterTopCta from "@/components/FooterTopCta";

function Services(props) {
	const [faqSection, setFaqSection] = useState(props.faqData);
	return (
		<div>
			<Hero
				firstPic="/services/Scientist.svg"
				secondPic="/services/Tree.svg"
				title="We’ll Make You Excessively More Money Than Any Other Marketing Team"
				pera="Increase your conversion rates to lower your cost per conversion and get a higher conversion volume. All leading to more revenue as well."
			/>
			<ConversionMarketing
				bodyColor="bg-[#F9FCFF]"
				cardColor="bg-white"
				title="Improve One Channel or Rapidly Scale Performance Across All of Them at Once"
				pera="Work with specialized teams that rapidly adapt, expand, and scale as one cohesive unit."
				paidAdvertising
				conversionRateOptimization
				emailMarketing
				searchEngineOptimization
			/>
			<div className="break_line image bg-[url('/section_break.svg')] h-[80px] bg-[length:3200px_90px]  bg-center rotate-180"></div>
			<div className=" g-page_structure bg-[#FFF7F5]">
				<div className="main-content  m-auto">
					<h1 className="text-center md:px-16 md:pt-14 pt-4 text-xl md:text-3xl xl:text-5xl font-bold">
						10+ Custom Built Marketing Recipes & Counting
					</h1>
					<p className="md:text-lg xl:text-xl 2xl:text-2xl text-center md:px-36 m-auto py-4">
						Choose from custom dashboards and scheduled meetings <br />
						to quick texts or Slack. If you're into it, we're into it.
					</p>
				</div>
				<div className="q-card mx-28 mt-20 grid gap-x-12 gap-y-12 md:grid-cols-2 pb-12">
					<div className="px-10 pt-10 pb-4  rounded bg-white shadow-md">
						<p className="font-bold text-xl text-center">The Breadcrumb Technique</p>
						<p className="text-lg text-center mt-3">Get detailed to-do’s to hit your goals faster than ever before.</p>
						<Image height={200} width={200} src="/services/breadcrumd.svg" alt="" className="mt-6 mx-auto  w-" />
					</div>
					<div className="px-10 pt-10 pb-4  rounded bg-white shadow-md">
						<p className="font-bold text-xl text-center">The Bottom Feeding Approach</p>
						<p className="text-lg text-center mt-3">We’ll build you a high performing engine and you run it by yourself.</p>
						<Image height={200} width={200} src="/services/bottomfeeding.svg" alt="" className="mt-6  mx-auto w-" />
					</div>

					<div className="px-10 pt-10 pb-4  rounded bg-white shadow-md">
						<p className="font-bold text-xl text-center">Single Keyword Ad Groups</p>
						<p className="text-lg text-center mt-3">Get detailed to-do’s to hit your goals faster than ever before.</p>
						<Image height={200} width={200} src="/services/singlead.svg" alt="" className="mt-6  mx-auto w-" />
					</div>

					<div className="px-10 pt-10 pb-4  rounded bg-white shadow-md">
						<p className="font-bold text-xl text-center">Keyword Tapering</p>
						<p className="text-lg text-center mt-3">Revenue split partnership. Less risk for you, higher reward for us.</p>
						<Image height={200} width={200} src="/services/keywordtapering.svg" alt="" className="mt-6  mx-auto w-" />
					</div>
					<div className="px-10 pt-10 pb-4  rounded bg-white shadow-md">
						<p className="font-bold text-xl text-center">The Iceberg Effect</p>
						<p className="text-lg text-center mt-3">Get ongoing step-by-step advice with data-driven prioritization.</p>
						<Image height={200} width={200} src="/services/iceberg.svg" alt="" className="mt-6  mx-auto w-" />
					</div>
					<div className="px-10 pt-10 pb-4  rounded bg-white shadow-md">
						<p className="font-bold text-xl text-center">TLC Email Framework</p>
						<p className="text-lg text-center mt-3">Revenue split partnership. Less risk for you, higher reward for us.</p>
						<Image height={200} width={200} src="/services/emailframework.svg" alt="" className="mt-6  mx-auto w-" />
					</div>
				</div>
			</div>
			<div className="break_line image bg-[url('/section_break.svg')] h-[80px] bg-[length:3200px_90px]  bg-center"></div>
			<FaqSection bodyColor="bg-[#F9FCFF]" faqSectionData={faqSection} />
		    <FooterTopCta />
		</div>
	);
}

export async function getServerSideProps(context) {
	let faqSectiondata = await fetch("http://localhost:3000/api/faqsection?slug=services");
	let faqData = await faqSectiondata.json();

	return {
		props: { faqData },
	};
}

export default Services;
