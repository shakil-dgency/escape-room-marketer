import Image from "next/image";
import Link from "next/link";
import React from "react";

function ConversionMarketing({
	bodyColor,
	cardColor,
	pera,
	title,
	paidAdvertising,
	conversionRateOptimization,
	emailMarketing,
	searchEngineOptimization,
}) {
	return (
		<div className={`g-page_structure ${bodyColor}`}>
			<div className="m-auto pt-10 md:pt-20">
				<h1 className="g__section-heading text-center mx-auto font-extrabold lg:w-[75%] xl:w-[70%] 2xl:w-[80%]">{title}</h1>
				<p className="font-graphik  md:text-lg xl:text-xl 2xl:text-2xl text-center md:px-48 m-auto py-4">{pera}</p>
			</div>
			<div className="md:mx-20 mt-10  flex flex-col gap-8">
				{paidAdvertising && (
					<Link href={"/"} className={`${cardColor} px-8 py-10 rounded-md shadow`}>
						<div className=" text-center ">
							<p className="font-circular font-extrabold text-xl md:text-2xl">Paid Advertising</p>
							<p className="font-graphik text-lg mt-2">
								Increase your conversion rates to lower your cost per conversion and get a higher <br /> conversion volume. All leading to more
								revenue as well.
							</p>
						</div>
						<Image
							src="/serveice/Service-box-image-paid-Advertising-escape-room-marketer.svg"
							alt=""
							width={100}
							height={150}
							className="w-full h-[110px] md:h-[260px] mt-7"
						/>
					</Link>
				)}
				{conversionRateOptimization && (
					<Link href={"/"} className={`${cardColor} px-8 py-10 rounded-md shadow`}>
						<div className=" text-center ">
							<p className="font-circular font-extrabold text-xl md:text-2xl">Conversion Rate Optimization</p>
							<p className="font-graphik text-lg mt-2">
								Increase your conversion rates to lower your cost per conversion and get a higher <br /> conversion volume. All leading to more
								revenue as well.
							</p>
						</div>
						<Image
							src="/serveice/Service-box-image-conversion-rate-optimization-escape-room-marketer.svg"
							alt=""
							width={100}
							height={150}
							className="w-full h-[110px] md:h-[260px] mt-7"
						/>
					</Link>
				)}
				{emailMarketing && (
					<Link href={"/"} className={`${cardColor} px-8 py-10 rounded-md shadow`}>
						<div className=" text-center ">
							<p className="font-circular font-extrabold text-xl md:text-2xl">Email Marketing</p>
							<p className="font-graphik text-lg mt-2">
								From complex eCommerce email sequences to creative B2B cold outbound email marketing, <br /> you’ll drive more ROI from your
								marketing.
							</p>
						</div>
						<Image
							src="/serveice/Service-box-image-email-marketing-escape-room-marketer.svg"
							alt=""
							width={100}
							height={150}
							className="w-full h-[110px] md:h-[260px] mt-7"
						/>
					</Link>
				)}
				{searchEngineOptimization && (
					<Link href={"/"} className={`${cardColor} px-8 py-10 rounded-md shadow mb-16`}>
						<div className=" text-center ">
							<p className="font-circular font-extrabold text-xl md:text-2xl">Search Engine Optimization</p>
							<p className="font-graphik text-lg mt-2">
								Rise in organic search and reach the first page as we’ll get your higher quality backlinks <br /> with content marketing &
								higher-converting website traffic.
							</p>
						</div>
						<Image
							src="/serveice/Service-box-image-search-engineeoptimization-escape-room-marketer.svg"
							alt=""
							width={100}
							height={150}
							className="w-full h-[110px] md:h-[260px] mt-7"
						/>
					</Link>
				)}
			</div>
		</div>
	);
}

export default ConversionMarketing;
