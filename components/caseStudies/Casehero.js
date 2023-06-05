import React from "react";
import { BiChevronLeft } from "react-icons/bi";
import { useRouter } from "next/router";
import Image from "next/image";

function Casehero({ heading }) {
	const router = useRouter();
	const backToPreviousPage = () => {
		router.back();
	};
	return (
		<div>
			<div className="break_line image bg-[url('/breakline_white.svg')] h-[85px] w-full bg-[length:2500px_90px] absolute z-10 -mt-5 bg-center rotate-180 "></div>
			<div className="  case_study-card px-10 py-10 text-center bg-no-repeat bg-cover">
				<div onClick={backToPreviousPage} className="text-[#FF492C] font-bold text-base absolute left-0 md:left-[5%] lg:left-[10%] z-10   ">
					<div className="flex items-center cursor-pointer">
						<BiChevronLeft className="text-2xl" /> Go Back <span className="ml-1 hidden md:inline "> To All Case Study</span>
					</div>
				</div>
				<Image src="/results/testimonial/client-logo.svg" alt="" height={100} width={100} className="mx-auto pt-10 " />
				<h1 className="hero_heading text-center  md:px-[10%] lg:px-[20%] pt-20 pb-10 md:pb-20 text-white">
					Our Secret Weapon: The Ridiculously Talented and Fun-Loving Escape Room Marketing Team
				</h1>
			</div>
			<div className="case-hero_cta font-graphik flex justify-between items-end rounded-2xl  bg-[#FFF4E5] w-[80%] px-2 md:px-10 pt-0 md:pt-8 gap-2 md:gap-6 absolute -mt-16 md:-mt-20 left-[50%] translate-x-[-50%]">
				<div className="md:border-l-[4px] border-[#2FB1D4]  ">
					<p className="pl-2 pt-2 md:pt-0 text-[24px] md:text-[28px]  lg:text-[40px] text-[#2FB1D4] font-semibold">49%</p>
					<p className="pl-2 pb-2 md:pb-4 text-[12px]">Decrease in Cost per Acquisition</p>
				</div>
				<div className="border-l-[4px] border-[#FF5A5A]">
					<p className="pl-2 pt-2 md:pt-0  text-[24px] md:text-[28px]  lg:text-[40px] text-[#FF5A5A] font-semibold">49%</p>
					<p className="pl-2 pb-2 md:pb-4 text-[12px]">Decrease in Cost per Acquisition</p>
				</div>
				<div className="border-l-[4px] border-[#FFA733]">
					<p className="pl-2 pt-2 md:pt-0 text-[24px]  md:text-[28px]  lg:text-[40px] text-[#FFA733] font-semibold">49%</p>
					<p className="pl-2 pb-2 md:pb-4 text-[12px]">Decrease in Cost per Acquisition</p>
				</div>
				<div className="hidden md:inline border-l-[4px] border-[#7EC927]">
					<p className="pl-2 text-[24px]  md:text-[28px]  lg:text-[40px] text-[#7EC927] font-semibold">49%</p>
					<p className="pl-2 md:pb-4 text-[12px]">Decrease in Cost per Acquisition</p>
				</div>
			</div>
		</div>
	);
}

export default Casehero;
