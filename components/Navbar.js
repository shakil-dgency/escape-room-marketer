"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import { HiMenu } from "react-icons/hi";
import { BiChevronRight } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

function Navbar() {
	const [open, setOpen] = useState(false);
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const [serviceMenubar, setServiceMenubar] = useState(false);
	const serveiceRef = useRef();
	const serviceBtnRef = useRef();
	const sidebarMainref = useRef();
	const sidebarServiceref = useRef();
	const hamburgRef = useRef();

	const handlePopup = (e) => {
		let _id;
		//  console.log(document.getElementsByClassName('serveice_list'));
		let serveiceClick = document.getElementsByClassName("serveice_list");
		for (var i = 0; i < serveiceClick.length; i++) {
			serveiceClick[i].addEventListener("click", function (E) {
				setServiceMenubar(false);

				if (_id) {
					serveiceClick[_id].classList.remove("text-red-500");
				}
				_id = this.id;
				this.classList.add("text-red-500");
			});
		}

		setServiceMenubar(!serviceMenubar);
	};

	const handleHamburg = () => {
		setSidebarOpen(true);
		document.body.classList.add("overflow-hidden");
	};

	const closeSidebar = () => {
		setSidebarOpen(false);
		document.body.classList.remove("overflow-hidden");
	};

	useEffect(() => {
		document.addEventListener("click", (e) => {
			if (sidebarMainref.current) {
				if (!sidebarMainref.current.contains(e.target) && !hamburgRef.current.contains(e.target)) {
					setSidebarOpen(false);
				}
			}

			if (serveiceRef.current) {
				if (!serveiceRef.current.contains(e.target) && !serviceBtnRef.current.contains(e.target)) {
					setServiceMenubar(false);
				}
			}
		});

		var lastScrollTop = 0;
		const navbar = document.getElementById("navbar");
		window.addEventListener("scroll", function () {
			let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			if (scrollTop > lastScrollTop) {
				navbar.style.top = "-100px";
			} else if (lastScrollTop > scrollTop + 20) {
				navbar.style.top = "0";
			}
			lastScrollTop = scrollTop;
			
		});
	});

	const handleSidebarService = (e) => {
		setOpen(!open);

		let _id;
		let serveiceClick = document.getElementsByClassName("serveice_list");
		for (var i = 0; i < serveiceClick.length; i++) {
			serveiceClick[i].addEventListener("click", function (E) {
				setSidebarOpen(false);
				document.body.classList.remove("overflow-hidden");
				if (_id) {
					serveiceClick[_id].classList.remove("text-red-500");
				}
				_id = this.id;
				this.classList.add("text-red-500");
			});
		}
	};

	return (
		<div id="navbar" className="bg-white fixed top-0 w-full h-[70px] md:h-[100px] z-30 duration-500">
			<div className="nav_container g-page_structure ">
				<div className="flex gap-1 md:gap-0 md:justify-between items-center py-5 relative ">
					<Link href={"/"} className="logomain flex-1 cursor-pointer">
					<Image src="/logo.png" alt="logo" height={100} width={170} className="w-[120px] sm:w-[150px] lg:w-[170px]" />
					</Link>
					<div className="nav_elements flex gap-4 md:gap-10 items-center ">
						<ul className="hidden lg:flex gap-5 font-[600] transform transition-transform translate-x-full absolute top-0 right-0 md:transform-none md:static ">
							<li>PRICING</li>
							<li ref={serviceBtnRef} onClick={handlePopup} className="group cursor-pointer flex items-center gap-1">
								SERVICES{" "}
								<MdKeyboardArrowDown className={`arrow_rotate text-xl transition-transform duration-300 ${serviceMenubar ? "rotate-180" : ""}`} />
							</li>
							<li>RESULTS</li>
							<li>TEAM</li>
							<li>BLOG</li>
							<li>RESOURCES</li>
						</ul>
						<Link
							href={"/freemarketing"}
							className="flex-[2] border-2 border-red-500 px-1 py-1 md:px-6  md:py-3 lg:px-3 lg:py-2 xl:px-6 xl:py-3 text-red-500 font-semibold text-[12px] md:text-xl lg:text-base xl:text-xl"
						>
							FREE MARKETING PLAN
						</Link>
						<div ref={hamburgRef} className="lg:hidden">
							<HiMenu id="hamburg" onClick={handleHamburg} className="text-2xl " />
						</div>
					</div>
					<div
						ref={serveiceRef}
						className={`serveice_popup shadow md:px-6 md:py-4 rounded  absolute left-0 top-24 right-0  z-30 bg-white ${
							serviceMenubar ? "block" : "hidden"
						} `}
					>
						<p className="pb-2 text-[#ff5056] font-semibold">ALL OF OUR SERVICES</p>
						<div className=" grid grid-cols-3 grid-rows-8 gap-5 border-t-[1px] pt-2">
							<ul className="flex flex-col gap-4 row-start-1 row-end-7">
								<h3 className=" text-[16px] font-semibold pb-2">PAID ADVERTISING</h3>
								<li>
									<Link href={"/service/ppcAgency"} id="0" className="serveice_list group">
										<div className="flex items-center gap-2 p-2 rounded shadow bg-[#F5FAFF] group-hover:bg-[#FFF7F5]">
											<div className="">
												<Image src="/navbar/ppc_agency.png" alt="" height={60} width={80} className="" />
											</div>
											<div className="">
												<p className="group-hover:text-[#ff5056] font-semibold flex items-center gap-1">
													PPC Agency <BiChevronRight className="pt-[2px] text-xl" />{" "}
												</p>
												<p className="text-[14px] text-[#515E6F]">Increase your conversion rates to lower your cost per conversion</p>
											</div>
										</div>
									</Link>
								</li>
								<li>
									<Link href={"/service/facebookAdsAgency"} id="1" className="serveice_list group ">
										<div className="flex items-center gap-2  p-2 rounded shadow bg-[#F5FAFF] group-hover:bg-[#FFF7F5]">
											<div className="">
												<Image src="/navbar/facebook_ads_agency.png" alt="" height={60} width={80} className="" />
											</div>
											<div className="">
												<p className="group-hover:text-[#ff5056] font-semibold flex items-center gap-1">
													Facebook Ads Agency
													<BiChevronRight className="pt-[2px] text-xl" />{" "}
												</p>
												<p className="text-[14px] text-[#515E6F]">Increase your conversion rates to lower your cost per conversion</p>
											</div>
										</div>
									</Link>
								</li>
								<li>
									<Link href={"/service/googleAdsAgency"} id="2" className="serveice_list group">
										<div className="flex items-center gap-2  p-2 rounded shadow bg-[#F5FAFF] group-hover:bg-[#FFF7F5]">
											<div className="">
												<Image src="/navbar/google_ads_agency.png" alt="" height={60} width={80} className="" />
											</div>
											<div className="">
												<p className="group-hover:text-[#ff5056] font-semibold flex items-center gap-1">
													Google Ads Agency <BiChevronRight className="pt-[2px] text-xl" />{" "}
												</p>
												<p className="text-[14px] text-[#515E6F]">Increase your conversion rates to lower your cost per conversion</p>
											</div>
										</div>
									</Link>{" "}
								</li>
								<li>
									<Link href={"/service/semAgency"} id="3" className="serveice_list group">
										<div className="flex items-center gap-2  p-2 rounded shadow bg-[#F5FAFF] group-hover:bg-[#FFF7F5]">
											<div className="">
												<Image src="/navbar/sem_management.png" alt="" height={60} width={80} className="" />
											</div>
											<div className="">
												<p className="group-hover:text-[#ff5056] font-semibold flex items-center gap-1">
													{" "}
													SEM Agency <BiChevronRight className="pt-[2px] text-xl" />{" "}
												</p>
												<p className="text-[14px] text-[#515E6F]">Increase your conversion rates to lower your cost per conversion</p>
											</div>
										</div>
									</Link>{" "}
								</li>
								<li>
									<Link href={"/service/ppcManagement"} id="4" className="serveice_list group">
										<div className="flex items-center gap-2  p-2 rounded shadow bg-[#F5FAFF] group-hover:bg-[#FFF7F5]">
											<div className="">
												<Image src="/navbar/ppc_management.png" alt="" height={60} width={80} className="" />
											</div>
											<div className="">
												<p className="group-hover:text-[#ff5056] font-semibold flex items-center gap-1">
													PPC Management <BiChevronRight className="pt-[2px] text-xl" />{" "}
												</p>
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
										<div className="flex items-center gap-2  p-2 rounded shadow bg-[#F5FAFF] group-hover:bg-[#FFF7F5]">
											<div className="">
												<Image src="/navbar/content_marketing_agency.svg" alt="" height={60} width={80} className="" />
											</div>
											<div className="">
												<p className="group-hover:text-[#ff5056] font-semibold flex items-center gap-1">
													Content Marketing Agency <BiChevronRight className="pt-[2px] text-xl" />{" "}
												</p>
												<p className="text-[14px] text-[#515E6F]">Increase your conversion rates to lower your cost per conversion</p>
											</div>
										</div>
									</Link>
								</li>
								<li>
									<Link href={"/service/seoAgency"} id="6" className="serveice_list group">
										<div className="flex items-center gap-2  p-2 rounded shadow bg-[#F5FAFF] group-hover:bg-[#FFF7F5]">
											<div className="">
												<Image src="/navbar/seo_agency.svg" alt="" height={60} width={80} className="" />
											</div>
											<div className="">
												<p className="group-hover:text-[#ff5056] font-semibold flex items-center gap-1">
													SEO Agency <BiChevronRight className="pt-[2px] text-xl" />{" "}
												</p>
												<p className="text-[14px] text-[#515E6F]">Increase your conversion rates to lower your cost per conversion</p>
											</div>
										</div>
									</Link>
								</li>
								<li>
									<Link href={"/service/linkBuildingService"} id="7" className="serveice_list group">
										<div className="flex items-center gap-2  p-2 rounded shadow bg-[#F5FAFF] group-hover:bg-[#FFF7F5]">
											<div className="">
												<Image src="/navbar/link_building_service.svg" alt="" height={60} width={80} className="" />
											</div>
											<div className="">
												<p className="group-hover:text-[#ff5056] font-semibold flex items-center gap-1">
													Link Building Services <BiChevronRight className="pt-[2px] text-xl" />{" "}
												</p>
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
										<div className="flex items-center gap-2  p-2 rounded shadow bg-[#F5FAFF] group-hover:bg-[#FFF7F5]">
											<div className="">
												<Image src="/navbar/conversion_rate.svg" alt="" height={60} width={80} className="" />
											</div>
											<div className="">
												<p className="group-hover:text-[#ff5056] text-base font-semibold flex items-center whitespace-nowrap">
													Conversion Rate Optimization
													<BiChevronRight className="pt-[2px] text-xl" />{" "}
												</p>
												<p className="text-[14px] text-[#515E6F]">Increase your conversion rates to lower your cost per conversion</p>
											</div>
										</div>
									</Link>
								</li>
								<li>
									<Link href={"/service/landingPageAgency"} id="9" className="serveice_list group">
										<div className="flex items-center gap-2  p-2 rounded shadow bg-[#F5FAFF] group-hover:bg-[#FFF7F5]">
											<div className="">
												<Image src="/navbar/landing_page_agency.svg" alt="" height={60} width={80} className="" />
											</div>
											<div className="">
												<p className="group-hover:text-[#ff5056] font-semibold flex items-center gap-1">
													Landing Page Agency
													<BiChevronRight className="pt-[2px] text-xl" />{" "}
												</p>
												<p className="text-[14px] text-[#515E6F]">Increase your conversion rates to lower your cost per conversion</p>
											</div>
										</div>
									</Link>
								</li>
								<li>
									<Link href={"/service/landingPageDesign"} id="10" className="serveice_list group">
										<div className="flex items-center gap-2  p-2 rounded shadow bg-[#F5FAFF] group-hover:bg-[#FFF7F5]">
											<div className="">
												<Image src="/navbar/landing_page_design.svg" alt="" height={60} width={80} className="" />
											</div>
											<div className="">
												<p className="group-hover:text-[#ff5056] font-semibold flex items-center gap-1">
													Landing Page Design
													<BiChevronRight className="pt-[2px] text-xl" />{" "}
												</p>
												<p className="text-[14px] text-[#515E6F]">Increase your conversion rates to lower your cost per conversion</p>
											</div>
										</div>
									</Link>
								</li>
							</ul>
							<ul className="col-start-2 row-start-4">
								<h3 className=" text-[16px] font-semibold  pb-2">EMAIL MARKETING</h3>
								<Link href={"/service/emailMarketingAgency"} id="11" className="serveice_list group">
									<div className="flex items-center gap-2  p-2 rounded shadow bg-[#F5FAFF] group-hover:bg-[#FFF7F5]">
										<div className="">
											<Image src="/navbar/email_marketing.svg" alt="" height={60} width={80} className="" />
										</div>
										<div className="">
											<p className="group-hover:text-[#ff5056] font-semibold flex items-center gap-1">
												Email Marketing Agency
												<BiChevronRight className="pt-[2px] text-xl" />{" "}
											</p>
											<p className="text-[14px] text-[#515E6F]">Increase your conversion rates to lower your cost per conversion</p>
										</div>
									</div>
								</Link>
							</ul>
						</div>
					</div>
				</div>

				<div
					ref={sidebarMainref}
					id="sidebar"
					className={`sidebar_shadow sm:drop-shadow lg:hidden bg-white  w-full sm:w-[60%]  absolute  top-0 right-0   z-10 ${sidebarOpen ? "block sidebar_menu_open" : "hidden"}
					`}
				>
					<div className={`overflow-scroll h-screen pb-14 pt-24 pl-6 md:pl-14  `}>
						<div
							onClick={closeSidebar}
							className="rounded-[100%] text-4xl flex justify-center items-center  border-2 border-black w-12 h-12 absolute top-6 right-4"
						>
							<RxCross2 className=" stroke-[0.5]" />
						</div>
						<ul className="font-[600] flex flex-col gap-3  ">
							<li className="text-[18px] pt-3">PRICING</li>
							<li onClick={handleSidebarService} className="group cursor-pointer flex items-center gap-2 text-[18px] pt-3 text-red-500">
								SERVICES <MdKeyboardArrowDown className={`arrow_rotate text-2xl transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
							</li>
							<div className="border-b-[3px] border-red-500 w-[80px] -mt-2"></div>
							<div ref={sidebarServiceref} className={`pl-14 ${open ? "block" : "hidden"}`}>
								<ul className="flex-1">
									<h3 className=" text-[18px] font-bold pt-2 pb-1 ">PAID ADVERTISING</h3>
									<div className="pl-3 flex flex-col gap-1 text-[18px]">
										<li>
											<Link href={"/service/ppcAgency"} id="012" className="serveice_list whitespace-nowrap">
												PPC Agency
											</Link>
										</li>
										<li>
											<Link href={"/service/facebookAdsAgency"} id="013" className="serveice_list whitespace-nowrap ">
												Facebook Ads Agency
											</Link>
										</li>
										<li>
											<Link href={"/service/googleAdsAgency"} id="014" className="serveice_list whitespace-nowrap">
												Google Ads Agency
											</Link>{" "}
										</li>
										<li>
											<Link href={"/service/semAgency"} id="015" className="serveice_list">
												SEM Agency
											</Link>{" "}
										</li>
										<li>
											<Link href={"/service/ppcManagement"} id="016" className="serveice_list">
												PPC Management
											</Link>
										</li>
									</div>
								</ul>
								<ul className="flex-1">
									<h3 className=" text-[18px] font-bold pb-1 pt-4 ">SEO</h3>
									<div className="pl-3 flex flex-col gap-1 text-[18px]">
										<li>
											<Link href={"/service/contentMarketingAgency"} id="017" className="serveice_list  whitespace-nowrap">
												Content Marketing Agency
											</Link>
										</li>
										<li>
											<Link href={"/service/seoAgency"} id="018" className="serveice_list">
												SEO Agency
											</Link>
										</li>
										<li>
											<Link href={"/service/linkBuildingService"} id="019" className="serveice_list">
												Link Building Services
											</Link>
										</li>
									</div>
								</ul>
								<ul className="flex-1">
									<h3 className=" text-[18px] font-bold pb-1 pt-4">CONVERSION</h3>
									<div className="pl-3 flex flex-col gap-1 text-[18px]">
										<li>
											<Link href={"/service/conversionRateOptimization"} id="020" className="serveice_list whitespace-nowrap">
												Conversion Rate Optimization
											</Link>
										</li>
										<li>
											<Link href={"/service/landingPageAgency"} id="021" className="serveice_list whitespace-nowrap">
												Landing Page Agency
											</Link>
										</li>
										<li>
											<Link href={"/service/landingPageDesign"} id="022" className="serveice_list">
												Landing Page Design
											</Link>
										</li>
									</div>
								</ul>
								<ul className="flex-1">
									<h3 className=" text-[18px] font-bold pb-1 pt-4">EMAIL MARKETING</h3>
									<li>
										<Link href={"/service/emailMarketingAgency"} id="023" className="serveice_list pl-3 pb-4 text-[18px]">
											Email Marketing Agency
										</Link>
									</li>
								</ul>
							</div>
							<li className="text-[18px] pt-3">RESULTS</li>
							<li className="text-[18px] pt-3">TEAM</li>
							<li className="text-[18px] pt-3">BLOG</li>
							<li id="elementID" className="text-[18px] pt-3">
								RESOURCES
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
