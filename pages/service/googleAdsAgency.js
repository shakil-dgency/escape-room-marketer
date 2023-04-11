import Head from "next/head";
import DedicatedTeam from "@/components/DedicatedTeam";
import KeyServeice from "@/components/KeyServeice";
import ConversionMarketing from "@/components/service/ConversionMarketing";
import Hero from "@/components/service/Hero";
import ListOfServeice from "@/components/service/ListOfServeice";
import MarketingCompanies from "@/components/service/MarketingCompanies";
import MarketingPlanCta from "@/components/service/MarketingPlanCta";
import OthersSite from "@/components/service/OthersSite";
import OurWork from "@/components/service/OurWork";
import Payperclick from "@/components/service/Payperclick";
import React, { useState } from "react";
import FaqSection from "@/components/service/FaqSection";

function GoogleAdsAgency(props) {
	const [ourwork, setOurwork] = useState(props.ourWork);
	const [companies, setCompanies] = useState(props.companiesData);
	const [listOfServeice, setListOfServeice] = useState(props.listOfServeiceData);
	const [keyserveice, setKeyserveice] = useState(props.keyServeice);
    const [faqSection, setFaqSection] = useState(props.faqData);
	return (
		<div>
			<Head>
				<title>Google Ads Management Agency</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				{/* <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" /> */}
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Hero
				title="We’re The PPC Agency That Puts More Dollars In Your Pocket"
				pera="Increase your conversion rates to lower your cost per conversion and get a higher conversion volume. All leading to more revenue as well."
				thirdPic="/serveice/googleAdsAgency/diaper-pacifier-bottle-desktop.svg"
			/>
			<OurWork ourWorkData={ourwork} />
			<div className="break_line image bg-[url('/page_broke.png')] h-[75px] bg-[length:1600px_90px] bg-center bg-[#fafafa]"></div>
			<Payperclick />
			<div className="break_line image bg-[url('/page_broke.png')] h-[75px] bg-[length:1600px_90px] bg-center bg-[#fafafa] rotate-180"></div>
			<MarketingCompanies companiesData={companies} />
			<div className="break_line image bg-[url('/page_broke.png')] h-[75px] bg-[length:1600px_90px] bg-center bg-[#fafafa] "></div>
			<ListOfServeice listOfServeiceData={listOfServeice} />
			<div className="break_line image bg-[url('/page_broke.png')] h-[75px] bg-[length:1600px_90px] bg-center bg-[#fafafa] rotate-180 "></div>
			<KeyServeice bodyColor="bg-white" cardColor="bg-[#fafafa]" keyServeiceData={keyserveice} />
			<div className="break_line image bg-[url('/page_broke.png')] h-[75px] bg-[length:1600px_90px] bg-center bg-[#fafafa] "></div>
			<MarketingPlanCta bodyColor="bg-[#fafafa]" title="Your Competitors Might Get This Proposal Before You, Don't Let Them" />
			<div className="break_line image bg-[url('/page_broke.png')] h-[75px] bg-[length:1600px_90px] bg-center bg-[#fafafa] rotate-180 "></div>
			<OthersSite
				title="Want To Expand To Other PPC Channels?  We Got You "
				pera="We can start where you're at, crush every goal you have, and then help you expand."
			/>
			<div className="break_line image bg-[url('/page_broke.png')] h-[75px] bg-[length:1600px_90px] bg-center bg-[#fafafa] "></div>
			<ConversionMarketing
				bodyColor="bg-[#fafafa]"
				cardColor="bg-white"
				title="Want To See Massive Results Across All Your Marketing Efforts? We Do That"
				pera="Our specialized teams know how to play well with each other, so we combine our team expertise to help you scale faster."
			/>
			<div className="break_line image bg-[url('/page_broke.png')] h-[75px] bg-[length:1600px_90px] bg-center bg-[#fafafa] rotate-180 "></div>
			<DedicatedTeam
				bodyColor="bg-white"
				title="Meet Your Team Before They Start Hitting Your Goals"
				pera="Our team’s happy to prove their expertise and share their favorite
                one-liners so you can be comfortable working together."
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

	let keyserveicedata = await fetch("http://localhost:3000/api/keyserveice?slug=googleAdsAgency");
	let keyServeice = await keyserveicedata.json();

	let faqSectiondata = await fetch("http://localhost:3000/api/faqsection?slug=googleAdsAgency");
	let faqData = await faqSectiondata.json();

	let ourWorkData = await fetch("http://localhost:3000/api/ourwork?slug=googleAdsAgency");
	let ourWork = await ourWorkData.json();

	let listOfServeice = await fetch("http://localhost:3000/api/listofserveice?slug=googleAdsAgency");
	let listOfServeiceData = await listOfServeice.json();
	return {
		props: { ourWork, companiesData, listOfServeiceData, keyServeice,faqData }, // will be passed to the page component as props
	};
}

export default GoogleAdsAgency;
