import Hero from "@/components/serveice/hero";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Payperclick from "@/components/serveice/Payperclick";
import MarketingCompanies from "@/components/serveice/MarketingCompanies";
import KeyServeice from "@/components/KeyServeice";
import { useRouter } from "next/router";
import MarketingPlanCta from "@/components/serveice/MarketingPlanCta";
import OthersSite from "@/components/serveice/OthersSite";
import ConversionMarketing from "@/components/serveice/ConversionMarketing";
import DedicatedTeam from "@/components/DedicatedTeam";
import FaqSection from "@/components/serveice/FaqSection";
import OurWork from "@/components/serveice/OurWork";
import ListOfServeice from "@/components/serveice/ListOfServeice";

function PpcAgency(props) {
	const [companies, setCompanies] = useState(props.companiesData);
	const [keyserveice, setKeyserveice] = useState(props.keyServeice);
	const [faqSection, setFaqSection] = useState(props.faqData);
	const [ourWork, setourWork] = useState(props.ourWork);
	const [listOfServeice, setListOfServeice] = useState(props.listOfServeiceData);

	// useEffect(() => {
	// 	fetch('http://localhost:3000/api/companies')
	// 	.then(res => res.json())
	// 	.then(data => setCompanies(data))

	//   }, [])

	return (
		<div>
			<Hero
				firstPic="HappyPockets-L-updated.svg"
				secondPic="HappyPockets-R-updated.svg"
				title="We’re The PPC Agency That Puts More Dollars In Your Pocket"
				pera="Increase your conversion rates to lower your cost per conversion and get a higher conversion volume. All leading to more revenue as well."
			/>
			<OurWork ourWorkData={ourWork}/>
			<div className="break_line image bg-[url('/page_broke.png')] h-[75px] bg-[length:1600px_90px] bg-center bg-[#fafafa]"></div>
			<Payperclick />
			<div className="break_line image bg-[url('/page_broke.png')] h-[75px] bg-[length:1600px_90px] bg-center bg-[#fafafa] rotate-180"></div>
			<MarketingCompanies companiesData={companies} />
			<div className="break_line image bg-[url('/page_broke.png')] h-[75px] bg-[length:1600px_90px] bg-center bg-[#fafafa] "></div>
			<ListOfServeice listOfServeiceData={listOfServeice}/>
			<div className="break_line image bg-[url('/page_broke.png')] h-[75px] bg-[length:1600px_90px] bg-center bg-[#fafafa] rotate-180 "></div>
			<KeyServeice bodyColor="bg-white" cardColor="bg-[#fafafa]" keyServeiceData={keyserveice} />
			<div className="break_line image bg-[url('/page_broke.png')] h-[75px] bg-[length:1600px_90px] bg-center bg-[#fafafa] "></div>
			<MarketingPlanCta bodyColor="bg-[#fafafa]" title="Your Custom Marketing Plan Shows The Exact Steps We’ll Take To Hit Your Goals" />
			<div className="break_line image bg-[url('/page_broke.png')] h-[75px] bg-[length:1600px_90px] bg-center bg-[#fafafa] rotate-180 "></div>
			<OthersSite
				title="Want To Expand To Other PPC Channels?  We Got You "
				pera="We can start where you're at, crush every goal you have, and then help you expand."
			/>
			<div className="break_line image bg-[url('/page_broke.png')] h-[75px] bg-[length:1600px_90px] bg-center bg-[#fafafa] "></div>
			<ConversionMarketing
				bodyColor="bg-[#fafafa]"
				cardColor="bg-white"
				title="Improve One Channel or Rapidly Scale Performance Across All of Them at Once"
				pera="Work with specialized teams that rapidly adapt, expand, and scale as one cohesive unit."
			/>
			<div className="break_line image bg-[url('/page_broke.png')] h-[75px] bg-[length:1600px_90px] bg-center bg-[#fafafa] rotate-180 "></div>
			<DedicatedTeam
				bodyColor="bg-white"
				title="Meet Your Dedicated Team Before We Start Making You More Money"
				pera="Be confident in the people behind your marketing.Test their experience, their approach, and their humor."
			/>
			<div className="break_line image bg-[url('/page_broke.png')] h-[75px] bg-[length:1600px_90px] bg-center bg-[#fafafa] "></div>
			<FaqSection
				bodyColor="bg-[#fafafa]"
				faqSectionData={faqSection}
			/>
			<div className="break_line image bg-[url('/page_broke.png')] h-[75px] bg-[length:1600px_90px] bg-center bg-[#fafafa] rotate-180"></div>
		</div>
	);
}

export async function getServerSideProps(context) {
	let data = await fetch("http://localhost:3000/api/companies?slug=ppcAgency");
	let companiesData = await data.json();

	let keyserveicedata = await fetch("http://localhost:3000/api/keyserveice?slug=ppcAgency");
	let keyServeice = await keyserveicedata.json();

	let faqSectiondata = await fetch("http://localhost:3000/api/faqsection?slug=ppcAgency");
	let faqData = await faqSectiondata.json();

	let ourWorkData = await fetch('http://localhost:3000/api/ourwork?slug=ppcAgency')
    let ourWork = await ourWorkData.json()

	let listOfServeice = await fetch("http://localhost:3000/api/listofserveice?slug=ppcAgency");
	let listOfServeiceData = await listOfServeice.json();
	return {
		props: { companiesData, keyServeice, faqData,ourWork,listOfServeiceData }, // will be passed to the page component as props
	};
}

export default PpcAgency;
