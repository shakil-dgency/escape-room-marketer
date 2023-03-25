"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { HiMenu } from "react-icons/hi";
import { BiChevronRight } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";

function Navbar() {
	const [toggle, setToggle] = useState(false);
	const serveiceRef = useRef();
	const handlePopup = (e) => {
		let _id;
		//  console.log(document.getElementsByClassName('serveice_list'));
		let serveiceClick = document.getElementsByClassName("serveice_list");
		for (var i = 0; i < serveiceClick.length; i++) {
			serveiceClick[i].addEventListener("click", function (E) {
				serveiceRef.current.classList.add("hidden");
				e.target.children[0].classList.remove("rotate-180");
				if (_id) {
					serveiceClick[_id].classList.remove("text-red-500");
				}
				_id = E.target.id;
				this.classList.add("text-red-500");
			});
			// if(i==_id){
			// 	serveiceClick[i].classList.remove('text-red-500')
			// }
		}

		if (serveiceRef.current.classList.contains("hidden")) {
			serveiceRef.current.classList.remove("hidden");
			serveiceRef.current.classList.add("flex");
			e.target.children[0].classList.add("rotate-180");
		} else {
			serveiceRef.current.classList.add("hidden");
			e.target.children[0].classList.remove("rotate-180");
		}
		// serveiceRef.current.classList.add('flex');
	};

	return (
		<div>
			<div className="nav_container g-page_structure ">
				<div className="flex gap-1 md:gap-0 md:justify-between items-center py-2 md:py-5 relative">
					<Link href={"/"} className="logomain flex-1 text-lg md:text-3xl  text-[#6adaf7] hover:text-[#93e0f5] cursor-pointer">
						Escaperoom Marketer
					</Link>
					<div className="nav_elements flex gap-4 md:gap-10 items-center ">
						<ul className="hidden md:flex gap-5 font-[600] transform transition-transform translate-x-full absolute top-0 right-0 md:transform-none md:static ">
							<li>PRICING</li>
							<li onClick={handlePopup} className="group cursor-pointer flex items-center gap-1">
								SERVICES <MdKeyboardArrowDown className="text-xl transition-transform duration-300" />{" "}
							</li>
							<li>RESULTS</li>
							<li>TEAM</li>
							<li>BLOG</li>
							<li>RESOURCES</li>
						</ul>
						<Link
							href={"/freemarketing"}
							className="flex-[2] border-2 border-red-500 px-2 py-1 md:px-6 md:py-3 text-red-500 font-semibold text-sm md:text-xl"
						>
							FREE MARKETING PLAN
						</Link>
						<HiMenu className="text-2xl md:hidden" />
					</div>
					<div ref={serveiceRef} className="serveice_popup  shadow md:px-6 md:py-4 rounded  absolute left-0 top-24 right-0 z-30 bg-white ">
						<p className="pb-2 text-[#ff5056] font-semibold">ALL OF OUR SERVICES</p>
						<div className=" grid grid-cols-3 grid-rows-8 gap-5 border-t-[1px] pt-2">
							<ul className="flex flex-col gap-4 row-start-1 row-end-7">
								<h3 className=" text-[16px] font-semibold pb-2">PAID ADVERTISING</h3>
								<li>
									<Link href={"/service/ppcAgency"} id="0" className="serveice_list group">
										<div className="flex gap-3 p-2 rounded shadow bg-[#F5FAFF] group-hover:bg-[#FFF7F5]">
											<div>
											<Image src={""} alt="" height={60} width={60} className="" />
											</div>
											<div className="">
												<p className="group-hover:text-[#ff5056] font-semibold flex items-center gap-1">PPC Agency <BiChevronRight className="pt-[2px] text-xl" /> </p>
												<p className="text-[14px] text-[#515E6F]">Increase your conversion rates to lower your cost per conversion</p>
											</div>
										</div>
									</Link>
								</li>
								<li>
									<Link href={"/service/facebookAdsAgency"} id="1" className="serveice_list group ">
										<div className="flex gap-3 p-2 rounded shadow bg-[#F5FAFF] group-hover:bg-[#FFF7F5]">
											<div>
											<Image src={""} alt="" height={60} width={60} className="" />
											</div>
											<div className="">
												<p className="group-hover:text-[#ff5056] font-semibold flex items-center gap-1">Facebook Ads Agency<BiChevronRight className="pt-[2px] text-xl" /> </p>
												<p className="text-[14px] text-[#515E6F]">Increase your conversion rates to lower your cost per conversion</p>
											</div>
										</div>
									</Link>
								</li>
								<li>
									<Link href={"/service/googleAdsAgency"} id="2" className="serveice_list group">
										
										<div className="flex gap-3 p-2 rounded shadow bg-[#F5FAFF] group-hover:bg-[#FFF7F5]">
											<div>
											<Image src={""} alt="" height={60} width={60} className="" />
											</div>
											<div className="">
												<p className="group-hover:text-[#ff5056] font-semibold flex items-center gap-1">Google Ads Agency <BiChevronRight className="pt-[2px] text-xl" /> </p>
												<p className="text-[14px] text-[#515E6F]">Increase your conversion rates to lower your cost per conversion</p>
											</div>
										</div>
									</Link>{" "}
								</li>
								<li>
									<Link href={"/service/semAgency"} id="3" className="serveice_list group">
									
										<div className="flex gap-3 p-2 rounded shadow bg-[#F5FAFF] group-hover:bg-[#FFF7F5]">
											<div>
											<Image src={""} alt="" height={60} width={60} className="" />
											</div>
											<div className="">
												<p className="group-hover:text-[#ff5056] font-semibold flex items-center gap-1">	SEM Agency <BiChevronRight className="pt-[2px] text-xl" /> </p>
												<p className="text-[14px] text-[#515E6F]">Increase your conversion rates to lower your cost per conversion</p>
											</div>
										</div>
									</Link>{" "}
								</li>
								<li>
									<Link href={"/service/ppcManagement"} id="4" className="serveice_list group">
										
										<div className="flex gap-3 p-2 rounded shadow bg-[#F5FAFF] group-hover:bg-[#FFF7F5]">
											<div>
											<Image src={""} alt="" height={60} width={60} className="" />
											</div>
											<div className="">
												<p className="group-hover:text-[#ff5056] font-semibold flex items-center gap-1">PPC Management <BiChevronRight className="pt-[2px] text-xl" /> </p>
												<p className="text-[14px] text-[#515E6F]">Increase your conversion rates to lower your cost per conversion</p>
											</div>
										</div>
									</Link>
								</li>
							</ul>
							<ul className="flex flex-col gap-4 row-start-1 row-end-4">
								<h3 className=" text-[16px] font-semibold pb-2 ">SEO</h3>
								<li>
									<Link href={"/service/contentMarketingAgency"} id="5" className="serveice_list group">
										
										<div className="flex gap-3 p-2 rounded shadow bg-[#F5FAFF] group-hover:bg-[#FFF7F5]">
											<div>
											<Image src={""} alt="" height={60} width={60} className="" />
											</div>
											<div className="">
												<p className="group-hover:text-[#ff5056] font-semibold flex items-center gap-1">Content Marketing Agency <BiChevronRight className="pt-[2px] text-xl" /> </p>
												<p className="text-[14px] text-[#515E6F]">Increase your conversion rates to lower your cost per conversion</p>
											</div>
										</div>
									</Link>
								</li>
								<li>
									<Link href={"/service/seoAgency"} id="6" className="serveice_list group">
										
										<div className="flex gap-3 p-2 rounded shadow bg-[#F5FAFF] group-hover:bg-[#FFF7F5]">
											<div>
											<Image src={""} alt="" height={60} width={60} className="" />
											</div>
											<div className="">
												<p className="group-hover:text-[#ff5056] font-semibold flex items-center gap-1">SEO Agency <BiChevronRight className="pt-[2px] text-xl" /> </p>
												<p className="text-[14px] text-[#515E6F]">Increase your conversion rates to lower your cost per conversion</p>
											</div>
										</div>
									</Link>
								</li>
								<li>
									<Link href={"/service/linkBuildingService"} id="7" className="serveice_list group">
										
										<div className="flex gap-3 p-2 rounded shadow bg-[#F5FAFF] group-hover:bg-[#FFF7F5]">
											<div>
											<Image src={""} alt="" height={60} width={60} className="" />
											</div>
											<div className="">
												<p className="group-hover:text-[#ff5056] font-semibold flex items-center gap-1">Link Building Services <BiChevronRight className="pt-[2px] text-xl" /> </p>
												<p className="text-[14px] text-[#515E6F]">Increase your conversion rates to lower your cost per conversion</p>
											</div>
										</div>
									</Link>
								</li>
							</ul>
							<ul className="flex flex-col gap-4 row-start-1 row-end-4">
								<h3 className=" text-[16px] font-semibold  pb-2">CONVERSION</h3>
								<li>
									<Link href={"/service/conversionRateOptimization"} id="8" className="serveice_list group">
										
										<div className="flex gap-3 p-2 rounded shadow bg-[#F5FAFF] group-hover:bg-[#FFF7F5]">
											<div>
											<Image src={""} alt="" height={60} width={60} className="" />
											</div>
											<div className="">
												<p className="group-hover:text-[#ff5056] text-base font-semibold flex items-center whitespace-nowrap">Conversion Rate Optimization<BiChevronRight className="pt-[2px] text-xl" /> </p>
												<p className="text-[14px] text-[#515E6F]">Increase your conversion rates to lower your cost per conversion</p>
											</div>
										</div>
									</Link>
								</li>
								<li>
									<Link href={"/service/landingPageAgency"} id="9" className="serveice_list group">
										
										<div className="flex gap-3 p-2 rounded shadow bg-[#F5FAFF] group-hover:bg-[#FFF7F5]">
											<div>
											<Image src={""} alt="" height={60} width={60} className="" />
											</div>
											<div className="">
												<p className="group-hover:text-[#ff5056] font-semibold flex items-center gap-1">Landing Page Agency<BiChevronRight className="pt-[2px] text-xl" /> </p>
												<p className="text-[14px] text-[#515E6F]">Increase your conversion rates to lower your cost per conversion</p>
											</div>
										</div>
									</Link>
								</li>
								<li>
									<Link href={"/service/landingPageDesign"} id="10" className="serveice_list group">
										
										<div className="flex gap-3 p-2 rounded shadow bg-[#F5FAFF] group-hover:bg-[#FFF7F5]">
											<div>
											<Image src={""} alt="" height={60} width={60} className="" />
											</div>
											<div className="">
												<p className="group-hover:text-[#ff5056] font-semibold flex items-center gap-1">Landing Page Design<BiChevronRight className="pt-[2px] text-xl" /> </p>
												<p className="text-[14px] text-[#515E6F]">Increase your conversion rates to lower your cost per conversion</p>
											</div>
										</div>
									</Link>
								</li>
							</ul>
							<ul className="col-start-2 row-start-4">
								<h3 className=" text-[16px] font-semibold  pb-2">EMAIL MARKETING</h3>
								<Link href={"/service/emailMarketingAgency"} id="11" className="serveice_list group">
									
									<div className="flex gap-3 p-2 rounded shadow bg-[#F5FAFF] group-hover:bg-[#FFF7F5]">
											<div>
											<Image src={""} alt="" height={60} width={60} className="" />
											</div>
											<div className="">
												<p className="group-hover:text-[#ff5056] font-semibold flex items-center gap-1">Email Marketing Agency<BiChevronRight className="pt-[2px] text-xl" /> </p>
												<p className="text-[14px] text-[#515E6F]">Increase your conversion rates to lower your cost per conversion</p>
											</div>
										</div>
								</Link>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
