import Hero from "@/components/serveice/Hero";
import ListOfServeice from "@/components/serveice/ListOfServeice";
import MarketingCompanies from "@/components/serveice/MarketingCompanies";
import OurWork from "@/components/serveice/OurWork";
import Payperclick from "@/components/serveice/Payperclick";
import CardContent from "@/components/serveice/seo_convertion_specific/CardContent";
import React, { useState } from "react";

function SeoAgency(props) {
    const [ourWork, setourWork] = useState(props.ourWork);
    const [cardcontent, setCardcontent] = useState(props.cardContentData);
    const [listOfServeice, setListOfServeice] = useState(props.listOfServeiceData);
    const [companies, setCompanies] = useState(props.companiesData);

	return (
		<div>
			<Hero
				thirdPic="contentMarketingAgency/content-marketing-hero-desktop.svg"
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
		</div>
	);
}

export async function getServerSideProps(context) {
	let cardContent = await fetch("http://localhost:3000/api/cardcontent?slug=seoAgency");
	let cardContentData = await cardContent.json();

	let data = await fetch("http://localhost:3000/api/companies?slug=ppcAgency");
	let companiesData = await data.json();

	// let keyserveicedata = await fetch("http://localhost:3000/api/keyserveice?slug=contentMarketingAgency");
	// let keyServeice = await keyserveicedata.json();

	// let faqSectiondata = await fetch("http://localhost:3000/api/faqsection?slug=ppcAgency");
	// let faqData = await faqSectiondata.json();

	let ourWorkData = await fetch("http://localhost:3000/api/ourwork?slug=seoAgency");
	let ourWork = await ourWorkData.json();

	let listOfServeice = await fetch("http://localhost:3000/api/listofserveice?slug=seoAgency");
	let listOfServeiceData = await listOfServeice.json();
	return {
		props: { ourWork, cardContentData, listOfServeiceData,companiesData}, // will be passed to the page component as props
	};
}

export default SeoAgency;
