import Head from "next/head";
import Hero from "@/components/service/Hero";
import ListOfServeice from "@/components/service/ListOfServeice";
import MarketingCompanies from "@/components/service/MarketingCompanies";
import OurWork from "@/components/service/OurWork";
import Payperclick from "@/components/service/Payperclick";
import KeyServeice from "@/components/KeyServeice";
import React, { useState } from "react";
import MarketingPlanCta from "@/components/service/MarketingPlanCta";
import OthersSite from "@/components/service/OthersSite";
import ConversionMarketing from "@/components/service/ConversionMarketing";
import DedicatedTeam from "@/components/DedicatedTeam";
import FaqSection from "@/components/service/FaqSection";
import FooterTopCta from "@/components/FooterTopCta";

function FacebookAdsAgency(props) {
	const [ourWork, setourWork] = useState(props.ourWork);
	const [companies, setCompanies] = useState(props.companiesData);
	const [listOfServeice, setListOfServeice] = useState(props.listOfServeiceData);
	const [keyserveice, setKeyserveice] = useState(props.keyServeice);
	const [faqSection, setFaqSection] = useState(props.faqData);
	return (
		<div>
			<Head>
				<title>Top Facebook Advertising and marketing Agency</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				{/* <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" /> */}
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Hero
				firstPic="/serveice/facebookAdsAgency/facebook-ads-agency-hero-left-escape-room-marketer-01.svg"
				secondPic="/serveice/facebookAdsAgency/facebook-ads-agency-hero-right-escape-room-marketer-01.svg"
				title="Work With a Facebook Ad Agency That Talks Less & Delivers More"
				pera="Partner with the strongest Facebook advertising services out there and dominate any social media platform."
			/>
			<OurWork ourWorkData={ourWork} />
			<div className="break_line image bg-[url('/section_break.svg')] h-[80px] bg-[length:2500px_90px]  bg-center rotate-180"></div>
			<Payperclick />
			<div className="break_line image bg-[url('/section_break.svg')] h-[80px] bg-[length:2500px_90px]  bg-center "></div>
			<ListOfServeice listOfServeiceData={listOfServeice} />
			<div className="break_line image bg-[url('/section_break.svg')] h-[80px] bg-[length:2500px_90px]  bg-center rotate-180"></div>
			<KeyServeice bodyColor="bg-[var(--section-bg-lightred)]" cardColor="bg-[#fafafa]" keyServeiceData={keyserveice} />
			<div className="break_line image bg-[url('/section_break.svg')] h-[80px] bg-[length:2500px_90px]  bg-center "></div>
			<MarketingPlanCta bodyColor="bg-[var(--section-bg-lightblue)]" title="WARNING: This Free Marketing Plan May Give You Unfair Advantages" />
			<div className="break_line image bg-[url('/section_break.svg')] h-[80px] bg-[length:2500px_90px]  bg-center rotate-180"></div>
			<ConversionMarketing
				bodyColor="bg-[var(--section-bg-lightred)]"
				cardColor="bg-white"
				title="Try a Multi-Pronged Marketing Approach For Exponential Growth"
				pera="We swore we’d never use the word “synergy,” so we’ll just say our
             specialized teams can do amazing things when they work together."
				conversionRateOptimization
				emailMarketing
				searchEngineOptimization
			/>
			<div className="break_line image bg-[url('/section_break.svg')] h-[80px] bg-[length:2500px_90px]  bg-center "></div>
			<DedicatedTeam
				bodyColor="bg-[var(--section-bg-lightblue)]"
				title="We’re Totally Down For Some Small Talk Before It Gets Real"
				pera="Meet your dedicated team before you sign on the dotted line. We wanna make sure you like us as much as we like you."
			/>
			<div className="break_line image bg-[url('/section_break.svg')] h-[80px] bg-[length:2500px_90px]  bg-center rotate-180"></div>
			<FaqSection bodyColor="bg-[var(--section-bg-lightblue)]" faqSectionData={faqSection} />
			
			<FooterTopCta />
		</div>
	);
}

export async function getServerSideProps(context) {
	let ourWorkData = await fetch("http://localhost:3000/api/ourwork?slug=facebookAdsAgency");
	let ourWork = await ourWorkData.json();

	let data = await fetch("http://localhost:3000/api/companies?slug=facebookAdsAgency");
	let companiesData = await data.json();

	let listOfServeice = await fetch("http://localhost:3000/api/listofserveice?slug=facebookAdsAgency");
	let listOfServeiceData = await listOfServeice.json();

	let keyserveicedata = await fetch("http://localhost:3000/api/keyserveice?slug=facebookAdsAgency");
	let keyServeice = await keyserveicedata.json();

	let faqSectiondata = await fetch("http://localhost:3000/api/faqsection?slug=facebookAdsAgency");
	let faqData = await faqSectiondata.json();
	return {
		props: { ourWork, companiesData, listOfServeiceData, keyServeice, faqData }, // will be passed to the page component as props
	};
}

export default FacebookAdsAgency;
