import DedicatedTeam from "@/components/DedicatedTeam";
import KeyServeice from "@/components/KeyServeice";
import ConversionMarketing from "@/components/service/ConversionMarketing";
import FaqSection from "@/components/service/FaqSection";
import Hero from "@/components/service/Hero";
import ListOfServeice from "@/components/service/ListOfServeice";
import MarketingCompanies from "@/components/service/MarketingCompanies";
import MarketingPlanCta from "@/components/service/MarketingPlanCta";
import OurWork from "@/components/service/OurWork";
import Payperclick from "@/components/service/Payperclick";
import CardContent from "@/components/service/seo_convertion_specific/CardContent";
import SeoHandle from "@/components/service/seo_convertion_specific/SeoHandle";
import React, { useState } from "react";

function ContentMarketingAgency(props) {
	const [ourWork, setourWork] = useState(props.ourWork);
	const [cardcontent, setCardcontent] = useState(props.cardContentData);
	const [listOfServeice, setListOfServeice] = useState(props.listOfServeiceData);
	const [companies, setCompanies] = useState(props.companiesData);
	const [keyserveice, setKeyserveice] = useState(props.keyServeice);
	const [faqSection, setFaqSection] = useState(props.faqData);

	return (
		<div>
			<Hero
				thirdPic="contentMarketingAgency/content-marketing-hero-desktop.svg"
				title="Turn Your Content Marketing Into Your #1 Money-Maker"
				pera="If you're going to hire a content marketing agency,
                pick the one that built their business on digital content."
			/>
			<OurWork ourWorkData={ourWork} />
			<div className="break_line image bg-[url('/page_broke.png')] h-[75px] bg-[length:1600px_90px] bg-center bg-[#fafafa]"></div>
			<Payperclick />
			<div className="break_line image bg-[url('/page_broke.png')] h-[75px] bg-[length:1600px_90px] bg-center bg-[#fafafa] rotate-180"></div>
			<CardContent cardContentData={cardcontent} />
			<div className="break_line image bg-[url('/page_broke.png')] h-[75px] bg-[length:1600px_90px] bg-center bg-[#fafafa]"></div>
			<ListOfServeice listOfServeiceData={listOfServeice} />
			<div className="break_line image bg-[url('/page_broke.png')] h-[75px] bg-[length:1600px_90px] bg-center bg-[#fafafa] rotate-180 "></div>
			<MarketingCompanies companiesData={companies} />
			<div className="break_line image bg-[url('/page_broke.png')] h-[75px] bg-[length:1600px_90px] bg-center bg-[#fafafa] "></div>
			<SeoHandle
				title="We Handle The Nerdy Part of SEO Too"
				pera="In addition to creating great content for you, we'll fix technical Search
				Engine Optimization issues and prevent future ones from happening."
			/>
			<div className="break_line image bg-[url('/page_broke.png')] h-[75px] bg-[length:1600px_90px] bg-center bg-[#fafafa] rotate-180 "></div>
			<KeyServeice bodyColor="bg-white" cardColor="bg-[#fafafa]" keyServeiceData={keyserveice} />
			<div className="break_line image bg-[url('/page_broke.png')] h-[75px] bg-[length:1600px_90px] bg-center bg-[#fafafa] "></div>
			<MarketingPlanCta bodyColor="bg-[#fafafa]" title="Better Content Marketing Starts With Your Free Marketing Plan" />
			<div className="break_line image bg-[url('/page_broke.png')] h-[75px] bg-[length:1600px_90px] bg-center bg-[#fafafa] rotate-180 "></div>
			<ConversionMarketing
				bodyColor="bg-white"
				cardColor="bg-[#fafafa]"
				title="Content Marketing In a Good Spot?
				Let’s Scale Your Other Channels"
				pera="See how we can improve your other acquisition channels
				faster by having them all pull in the same direction."
			/>
			<div className="break_line image bg-[url('/page_broke.png')] h-[75px] bg-[length:1600px_90px] bg-center bg-[#fafafa] "></div>
			<DedicatedTeam
				bodyColor="bg-[#fafafa]"
				title="Meet Your Dedicated Team Before We Start Making You More Money"
				pera="Be confident in the people behind your marketing.Test their experience, their approach, and their humor."
			/>
			<div className="break_line image bg-[url('/page_broke.png')] h-[75px] bg-[length:1600px_90px] bg-center bg-[#fafafa] rotate-180 "></div>
			<FaqSection bodyColor="bg-white" faqSectionData={faqSection} />
		</div>
	);
}

export async function getServerSideProps(context) {
	let cardContent = await fetch("http://localhost:3000/api/cardcontent?slug=contentMarketingAgency");
	let cardContentData = await cardContent.json();

	let data = await fetch("http://localhost:3000/api/companies?slug=ppcAgency");
	let companiesData = await data.json();

	let keyserveicedata = await fetch("http://localhost:3000/api/keyserveice?slug=contentMarketingAgency");
	let keyServeice = await keyserveicedata.json();

	let faqSectiondata = await fetch("http://localhost:3000/api/faqsection?slug=ppcAgency");
	let faqData = await faqSectiondata.json();

	let ourWorkData = await fetch("http://localhost:3000/api/ourwork?slug=contentMarketingAgency");
	let ourWork = await ourWorkData.json();

	let listOfServeice = await fetch("http://localhost:3000/api/listofserveice?slug=contentMarketingAgency");
	let listOfServeiceData = await listOfServeice.json();
	return {
		props: { ourWork, cardContentData, listOfServeiceData, companiesData, keyServeice, faqData }, // will be passed to the page component as props
	};
}

export default ContentMarketingAgency;
