import DedicatedTeam from "@/components/DedicatedTeam";
import FooterTopCta from "@/components/FooterTopCta";
import KeyServeice from "@/components/KeyServeice";
import ReportGraph from "@/components/ReportGraph";
import ConversionMarketing from "@/components/service/ConversionMarketing";
import FaqSection from "@/components/service/FaqSection";
import Hero from "@/components/service/Hero";
import ListOfServeice from "@/components/service/ListOfServeice";
import MarketingCompanies from "@/components/service/MarketingCompanies";
import MarketingPlanCta from "@/components/service/MarketingPlanCta";
import OurWork from "@/components/service/OurWork";
import Payperclick from "@/components/service/Payperclick";
import Head from "next/head";
import React, { useState } from "react";

function ConversionRateOptimization(props) {
	const [ourWork, setourWork] = useState(props.ourWork);
	const [companies, setCompanies] = useState(props.companiesData);
	const [listOfServeice, setListOfServeice] = useState(props.listOfServeiceData);
	const [keyserveice, setKeyserveice] = useState(props.keyServeice);
	const [faqSection, setFaqSection] = useState(props.faqData);
	return (
		<div>
			<Head>
				<title>conversion Rate Optimization</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				{/* <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" /> */}
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Hero
				title="Conversion Rate Optimization That Prints
                Money Like The Federal Reserve"
				pera="From landing pages to a/b testing, we're the conversion rate optimization agency
                that raises conversion rates and defines conversion goals for the best user experience."
				firstPic="/serveice/conversionRateOptimization/conversion-rate-optimization-hero-left-escape-room-marketer-01-01.svg"
				secondPic="/serveice/conversionRateOptimization/conversion-rate-optimization-hero-right-escape-room-marketer-01-01.svg"
			/>
			<OurWork ourWorkData={ourWork} />
			<div className="break_line image bg-[url('/section_break.svg')] h-[80px] bg-[length:2500px_90px]  bg-center rotate-180"></div>
			<Payperclick />
			<div className="break_line image bg-[url('/section_break.svg')] h-[80px] bg-[length:2500px_90px]  bg-center "></div>
			<ListOfServeice listOfServeiceData={listOfServeice} bodyColor="bg-[var(--section-bg-lightblue)]" />
			<div className="break_line image bg-[url('/section_break.svg')] h-[80px] bg-[length:2500px_90px]  bg-center rotate-180"></div>
			<KeyServeice bodyColor="bg-[var(--section-bg-lightred)]" cardColor="bg-[#ffffff]" keyServeiceData={keyserveice} />
			<div className="break_line image bg-[url('/section_break.svg')] h-[80px] bg-[length:2500px_90px]  bg-center "></div>
			<MarketingPlanCta
				bodyColor="bg-[var(--section-bg-lightblue)]"
				title="Clicking This Button Could Be The Best Decision You Ever Make For Your SEO"
			/>
			<div className="break_line image bg-[url('/section_break.svg')] h-[80px] bg-[length:2500px_90px]  bg-center rotate-180"></div>
			<ConversionMarketing
				bodyColor="bg-[var(--section-bg-lightred)]"
				cardColor="bg-[#ffffff]"
				title="As Your Conversion Rates Go Up,
				We’ll Improve Your Other Marketing Channels Too"
				pera="Discover the other marketing services we can continually improve for you."
				paidAdvertising
				emailMarketing
				searchEngineOptimization
			/>
			<div className="break_line image bg-[url('/section_break.svg')] h-[80px] bg-[length:2500px_90px]  bg-center "></div>
			<DedicatedTeam
				bodyColor="bg-[var(--section-bg-lightblue)]"
				title="Meet Your Dedicated SEO Team
                Before We Start Working Together"
				pera="As much as we promise they don’t bite, some
                people just need to see for themselves."
			/>
			<div className="break_line image bg-[url('/section_break.svg')] h-[80px] bg-[length:2500px_90px]  bg-center rotate-180"></div>
			<ReportGraph
				bodyColor="bg-[var(--section-bg-lightred)]"
				title="Reporting & Communication Tailored Exactly How You Want It"
				pera="Choose from custom dashboards and scheduled meetings to quick texts or Slack. If you're into it, we're into it."
			/>
			<div className="break_line image bg-[url('/section_break.svg')] h-[80px] bg-[length:2500px_90px]  bg-center "></div>
			<FaqSection bodyColor="bg-[var(--section-bg-lightblue)]" faqSectionData={faqSection} />
			<FooterTopCta />
		</div>
	);
}

export async function getServerSideProps(context) {
	// let cardContent = await fetch("http://localhost:3000/api/cardcontent?slug=linkBuildingService");
	// let cardContentData = await cardContent.json();

	let data = await fetch("http://localhost:3000/api/companies?slug=ppcAgency");
	let companiesData = await data.json();

	let keyserveicedata = await fetch("http://localhost:3000/api/keyserveice?slug=conversionRateOptimization");
	let keyServeice = await keyserveicedata.json();

	let faqSectiondata = await fetch("http://localhost:3000/api/faqsection?slug=conversionRateOptimization");
	let faqData = await faqSectiondata.json();

	let ourWorkData = await fetch("http://localhost:3000/api/ourwork?slug=conversionRateOptimization");
	let ourWork = await ourWorkData.json();

	let listOfServeice = await fetch("http://localhost:3000/api/listofserveice?slug=conversionRateOptimization");
	let listOfServeiceData = await listOfServeice.json();
	return {
		props: { ourWork, companiesData, listOfServeiceData, keyServeice, faqData }, // will be passed to the page component as props
	};
}

export default ConversionRateOptimization;
