import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

function MarketingCompanies({ companiesData }) {
	
	return (
		<div className="g-page_structure">
			<div className="m-auto">
				<h1 className="text-center md:px-16 text-xl md:text-3xl xl:text-5xl font-bold">
					{companiesData.head_message && companiesData.head_message.heading }
				</h1>
				<p className="md:text-lg xl:text-xl 2xl:text-2xl text-center md:px-48 m-auto py-4">
					{companiesData.head_message && companiesData.head_message.text_line}
				</p>
			</div>
			<div className="my-14 grid grid-cols-1 md:grid-cols-3 gap-6">
				{companiesData &&
					companiesData.companies.map((data, i) => {
						return (
							<div className="shadow-md" key={data.id}>
								<Image src={`/serveice/companies/${data.image}`} alt="" width={300} height={150} className="w-[100%]" />
							</div>
						);
					})}
			</div>

			<div className="m-auto">
				<h1 className="text-center md:px-16 text-xl md:text-3xl xl:text-5xl font-bold">Read the 5-star reviews</h1>
				<div className="flex flex-wrap my-20 justify-center gap-8">
					<Image src="/serveice/companies/clutch.svg" alt="" width={130} height={150} className="w-[100px] md:w-[130px]" />
					<Image src="/serveice/companies/logoo2.svg" alt="" width={50} height={150} className="w-[50px] md:w-[50px]" />
					<Image src="/serveice/companies/hubspot.svg" alt="" width={130} height={150} className="w-[100px] md:w-[130px]" />
				</div>
				<Link href={"/"} className="group flex justify-center items-center gap-2  text-lg md:text-xl list-none text-red-500">
					<p className="font-medium text-center leading-[0px]">
						See all the SEO results we continue to bring
						{/* <span class="material-symbols-outlined translate-y-2 pl-2 text-3xl ">arrow_right_alt</span> */}
					</p>
					<HiArrowNarrowRight className="text-4xl font-bold group-hover:translate-x-1 pt-2  " />
				</Link>
			</div>
		</div>
	);
}

export default MarketingCompanies;
