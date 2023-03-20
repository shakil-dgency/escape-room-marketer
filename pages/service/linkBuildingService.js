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

function LinkBuildingService(props) {
	const [ourWork, setourWork] = useState(props.ourWork);
	const [cardcontent, setCardcontent] = useState(props.cardContentData);
	const [listOfServeice, setListOfServeice] = useState(props.listOfServeiceData);
	const [companies, setCompanies] = useState(props.companiesData);
	const [keyserveice, setKeyserveice] = useState(props.keyServeice);
	const [faqSection, setFaqSection] = useState(props.faqData);
	return (
		<div>
			<Hero
				thirdPic="linkBuildingService/illo-BillsLinks-Desktop.svg"
				title="The SEO Agency That Drives Visitors To Your
                Site & Dollar Bills To Your Bank Account"
				pera="A good SEO company brings you organic traffic. Great SEO services bring
                you buyers, backlinks, and first page rankings (we’re the second kind)."
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
				title="We Take Care
        of The Nerdy Part of SEO Too"
				pera="We got the tools to fix the technical part of SEO while we impress
                Google and your soon-to-be-customers at the same time."
			/>
			<div className="break_line image bg-[url('/page_broke.png')] h-[75px] bg-[length:1600px_90px] bg-center bg-[#fafafa] rotate-180 "></div>
			<KeyServeice bodyColor="bg-white" cardColor="bg-[#fafafa]" keyServeiceData={keyserveice} />
			<div className="break_line image bg-[url('/page_broke.png')] h-[75px] bg-[length:1600px_90px] bg-center bg-[#fafafa] "></div>
			<MarketingPlanCta bodyColor="bg-[#fafafa]" title="Clicking This Button Could Be The Best Decision You Ever Make For Your SEO" />
			<div className="break_line image bg-[url('/page_broke.png')] h-[75px] bg-[length:1600px_90px] bg-center bg-[#fafafa] rotate-180 "></div>
			<ConversionMarketing
				bodyColor="bg-white"
				cardColor="bg-[#fafafa]"
				title="Once Your Links Are Being Built,
				We’ll Help You With Your Other Channels"
				pera="With a unified strategy and specialized teams, we can get
				all your marketing channels aiming toward the same goal, faster."
			/>
			<div className="break_line image bg-[url('/page_broke.png')] h-[75px] bg-[length:1600px_90px] bg-center bg-[#fafafa] "></div>
			<DedicatedTeam
				bodyColor="bg-[#fafafa]"
				title="Meet Your Dedicated SEO Team
                Before We Start Working Together"
				pera="As much as we promise they don’t bite, some
                people just need to see for themselves."
			/>
			 <div className="break_line image bg-[url('/page_broke.png')] h-[75px] bg-[length:1600px_90px] bg-center bg-[#fafafa] rotate-180 "></div>
			 <FaqSection bodyColor="bg-white" faqSectionData={faqSection} />
		</div>
	);
}

export async function getServerSideProps(context) {
	let cardContent = await fetch("http://localhost:3000/api/cardcontent?slug=linkBuildingService");
	let cardContentData = await cardContent.json();

	let data = await fetch("http://localhost:3000/api/companies?slug=ppcAgency");
	let companiesData = await data.json();

	let keyserveicedata = await fetch("http://localhost:3000/api/keyserveice?slug=linkBuildingService");
	let keyServeice = await keyserveicedata.json();

	let faqSectiondata = await fetch("http://localhost:3000/api/faqsection?slug=linkBuildingService");
	let faqData = await faqSectiondata.json();

	let ourWorkData = await fetch("http://localhost:3000/api/ourwork?slug=linkBuildingService");
	let ourWork = await ourWorkData.json();

	let listOfServeice = await fetch("http://localhost:3000/api/listofserveice?slug=linkBuildingService");
	let listOfServeiceData = await listOfServeice.json();
	return {
		props: { ourWork, cardContentData, listOfServeiceData, companiesData, keyServeice, faqData }, // will be passed to the page component as props
	};
}

export default LinkBuildingService;
