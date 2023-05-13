import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

function MarketingCompanies({ companiesData, bodyColor }) {
	return (
		<div className={`g-page_structure ${bodyColor}`}>
			<div className="m-auto">
				<h1 className="g__section-heading text-center pt-10 md:px-16 font-bold">
					{companiesData.head_message && companiesData.head_message.heading}
				</h1>
				<p className="font-graphik md:text-lg xl:text-xl 2xl:text-2xl text-center md:px-48 m-auto py-4">
					{companiesData.head_message && companiesData.head_message.text_line}
				</p>
			</div>
			<div className="mx-auto py-14 grid grid-cols-6 gap-y-12 md:w-[600px]">
				{companiesData &&
					companiesData.companies.map((data, i) => {
						return (
							<div className="" key={data.id}>
								<Image
									src={`/serveice/companies/${data.image}`}
									alt=""
									width={50}
									height={150}
									className="mx-auto w-[50px] h-[50px] object-contain grayscale hover:grayscale-0"
								/>
							</div>
						);
					})}
			</div>
		</div>
	);
}

export default MarketingCompanies;
