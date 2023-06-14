"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import { HiMenu } from "react-icons/hi";
import { BiChevronRight } from "react-icons/bi";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

function Navbar() {
	const [open, setOpen] = useState(false);
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const [serviceMenubar, setServiceMenubar] = useState(false);

	const [resourcesOpen, setResourcesOpen] = useState(false);
	const [mobileOpen, setMobileOpen] = useState(false);
	const serveiceRef = useRef();
	const serviceBtnRef = useRef();
	const sidebarMainref = useRef();
	const sidebarServiceref = useRef();
	const hamburgRef = useRef();
	const resourceRef = useRef();
	const resourceBtnRef = useRef();
	// const allserviceRef = useRef();

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

			if (resourceRef.current) {
				if (!resourceRef.current.contains(e.target) && !resourceBtnRef.current.contains(e.target)) {
					setResourcesOpen(false);
				}
			}
		});

		let lastScrollTop = 0;
		const navbar = document.getElementById("navbar");
		window.addEventListener("scroll", function () {
			let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			if (scrollTop > lastScrollTop) {
				navbar.style.top = "-100px";
				setServiceMenubar(false);
				setResourcesOpen(false);
			} else if (lastScrollTop > scrollTop + 20) {
				navbar.style.top = "0";
			} else if (scrollTop === 0) {
				navbar.style.top = "0";
			}
			lastScrollTop = scrollTop;
		});
	});

	//for mobile sidebar sub menu list

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

	//for mobile sidebar menu common function
	const handleMainSingleMenu = () => {
		setSidebarOpen(false);
		document.body.classList.remove("overflow-hidden");
	};

	const handleResourcePopup = () => {
		let screen = window.screen;
		if (screen.width < 1024) {
			setMobileOpen(!mobileOpen);
		} else {
			setResourcesOpen(!resourcesOpen);
		}
		let _id;
		let resourcesClick = document.getElementsByClassName("resources_content");

		for (let i = 0; i < resourcesClick.length; i++) {
			resourcesClick[i].addEventListener("click", function () {
				if (screen.width < 1024) {
					setMobileOpen(false);

					if (_id) {
						resourcesClick[_id].classList.remove("text-red-500");
					}
					_id = this.id;
					this.classList.add("text-red-500");
					console.log(_id);
				} else {
					setResourcesOpen(false);

					if (_id) {
						resourcesClick[_id].classList.remove("text-red-500");
					}
					_id = this.id;
					this.classList.add("text-red-500");
				}
			});
		}
	};

	return (
		<div id="navbar" className="bg-white fixed top-0 w-full py-5 z-30 duration-500">
			<div className="nav_container g-page_structure font-circularLight ">
				<div className="flex gap-1 md:gap-0 md:justify-between items-center  relative ">
					<Link href={"/"} className="logomain flex-1 cursor-pointer">
						<Image src="/logo.svg" alt="logo" height={100} width={170} className="w-[120px] sm:w-[150px] lg:w-[170px]" />
					</Link>
					<div className="nav_elements flex gap-4 md:gap-10 items-center ">
						<ul className="hidden lg:flex gap-5 font-[600] transform transition-transform translate-x-full absolute top-0 right-0 md:transform-none md:static ">
							<li>
								<Link href={"/pricing"}>PRICING</Link>
							</li>
							<li ref={serviceBtnRef} onClick={handlePopup} className="group cursor-pointer flex items-center gap-1">
								SERVICES{" "}
								<MdKeyboardArrowDown className={`arrow_rotate text-xl transition-transform duration-300 ${serviceMenubar ? "rotate-180" : ""}`} />
							</li>
							<li>
								<Link href={"/quizzes"}>QUIZZES</Link>
							</li>
							<li>
								<Link href={"/team"}>TEAM</Link>
							</li>
							<li>BLOG</li>
							<div className="relative">
								<li ref={resourceBtnRef} onClick={handleResourcePopup} className="cursor-pointer flex items-center gap-1">
									RESULTS <MdKeyboardArrowDown className={`text-xl transition-transform duration-300 ${resourcesOpen ? "rotate-180" : ""}`} />
								</li>

								<div
									ref={resourceRef}
									className={`serveice_popup w-[250px] absolute top-14 -left-12 bg-white px-3 py-10 shadow ${resourcesOpen ? "block" : "hidden"}`}
								>
									<ul>
										<li id="q1" className="resources_content group mb-3">
											<Link href={"/results/testimonial"}>
												<div className="shadow flex items-center gap-1  bg-[#F5FAFF] group-hover:bg-[#FFF7F5]">
													<Image src="/navbar/ppc_agency.png" alt="" height={60} width={60} className="" />
													<div>
														<p className="group-hover:text-[#ff5056] font-semibold flex items-center gap-1">
															Testimonial <BiChevronRight className="pt-[2px] text-xl" />{" "}
														</p>
														<p className="text-[12px] text-[#515E6F]">Increase your conversion rates </p>
													</div>
												</div>
											</Link>
										</li>
										<li id="q2" className="resources_content group mb-3">
											<Link href={"/"}>
												<div className="shadow flex items-center gap-1  bg-[#F5FAFF] group-hover:bg-[#FFF7F5]">
													<Image src="/navbar/ppc_agency.png" alt="" height={60} width={60} className="" />
													<div>
														<p className="group-hover:text-[#ff5056] font-semibold flex items-center gap-1">
															????? <BiChevronRight className="pt-[2px] text-xl" />{" "}
														</p>
														<p className="text-[12px] text-[#515E6F]">Increase your conversion rates </p>
													</div>
												</div>
											</Link>
										</li>
										<li id="q3" className="resources_content group mb-3">
											<Link href={"/"}>
												<div className="shadow flex items-center gap-1  bg-[#F5FAFF] group-hover:bg-[#FFF7F5]">
													<Image src="/navbar/ppc_agency.png" alt="" height={60} width={60} className="" />
													<div>
														<p className="group-hover:text-[#ff5056] font-semibold flex items-center gap-1">
															????? <BiChevronRight className="pt-[2px] text-xl" />{" "}
														</p>
														<p className="text-[12px] text-[#515E6F]">Increase your conversion rates </p>
													</div>
												</div>
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</ul>
						<Link
							href={"/freemarketing"}
							className="flex-[2] rounded-xl border-2 border-red-500 px-2 py-1 md:px-6  md:py-3 lg:px-3 lg:py-2 xl:px-6 xl:py-3 text-red-500 font-semibold text-[12px] md:text-[18px]"
						>
							FREE MARKETING PLAN
						</Link>
						<div ref={hamburgRef} className="lg:hidden">
							<HiMenu id="hamburg" onClick={handleHamburg} className="text-2xl " />
						</div>
					</div>
					<div
						ref={serveiceRef}
						className={`serveice_popup shadow md:px-6 md:py-4 rounded  absolute left-0 top-20 right-0  z-30 bg-white ${
							serviceMenubar ? "block" : "hidden"
						} `}
					>
						<Link onClick={() => setServiceMenubar(!serviceMenubar)} href={"/services"} className="pb-2 text-[#ff5056] font-semibold">
							ALL OF OUR SERVICES
						</Link>
						<div className=" grid grid-cols-3 grid-rows-8 gap-5 border-t-[1px] pt-2">
							<ul className="flex flex-col gap-4 row-start-1 row-end-7">
								<h3 className=" text-[16px] font-semibold pb-2">PAID ADVERTISING</h3>
								<li>
									<Link href={"/service/ppc-agency"} id="0" className="serveice_list group">
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
									<Link href={"/service/facebook-ads-agency"} id="1" className="serveice_list group ">
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
									<Link href={"/service/google-ads-agency"} id="2" className="serveice_list group">
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
									<Link href={"/service/sem-agency"} id="3" className="serveice_list group">
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
									<Link href={"/service/ppc-management"} id="4" className="serveice_list group">
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
									<Link href={"/service/content-marketing-agency"} id="5" className="serveice_list group">
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
									<Link href={"/service/seo-agency"} id="6" className="serveice_list group">
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
									<Link href={"/service/link-building-service"} id="7" className="serveice_list group">
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
									<Link href={"/service/conversion-rate-optimization"} id="8" className="serveice_list group">
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
									<Link href={"/service/landing-page-agency"} id="9" className="serveice_list group">
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
									<Link href={"/service/landing-page-design"} id="10" className="serveice_list group">
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
								<Link href={"/service/email-marketing-agency"} id="11" className="serveice_list group">
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
					className={`sidebar_shadow sm:drop-shadow lg:hidden bg-white  w-full sm:w-[60%]  absolute  top-0 right-0   z-10 ${
						sidebarOpen ? "block sidebar_menu_open" : "hidden"
					}
					`}
				>
					<div className={`overflow-scroll h-screen  pt-24 pb-12 pl-6 md:pl-14  relative`}>
						<div
							onClick={closeSidebar}
							className="rounded-[100%] text-3xl flex justify-center items-center  border-2 border-black w-10 h-10 absolute top-6 right-4"
						>
							<RxCross2 className=" stroke-[0.5]" />
						</div>
						<ul className="font-[600] flex flex-col gap-3  mb-12">
							<li className="text-[18px] pt-3">
								<Link href={"/pricing"} onClick={handleMainSingleMenu}>
									PRICING
								</Link>
							</li>
							<li onClick={handleSidebarService} className="group cursor-pointer flex items-center gap-2 text-[18px] pt-3 text-red-500">
								SERVICES <MdKeyboardArrowDown className={`arrow_rotate text-2xl transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
							</li>
							<div className="border-b-[3px] border-red-500 w-[80px] -mt-2"></div>
							<div ref={sidebarServiceref} className={`pb-4 ${open ? "block" : "hidden"}`}>
								<ul className="flex-1">
									<div className="pl-[11px] pb-3 flex gap-2 items-center">
										<div className="">
											<Image src="/navbar/ppc_agency.png" alt="" height={40} width={40} className="" />
										</div>
										<div>
											<h3 className=" text-[18px] font-bold pt-2  ">PAID ADVERTISING</h3>
											<p className="text-[12px] w-[250px] text-[#515E6F]">Increase your conversion rates to lower your cost per conversion</p>
										</div>
									</div>
									<div className="pl-14 flex flex-col gap-1 text-[16px]">
										<li>
											<Link href={"/service/ppc-agency"} id="012" className="serveice_list whitespace-nowrap flex items-center gap-1">
												PPC Agency <MdKeyboardArrowRight className="text-xl mt-[3px]" />
											</Link>
										</li>
										<li>
											<Link href={"/service/facebook-ads-agency"} id="013" className="serveice_list whitespace-nowrap flex items-center gap-1">
												Facebook Ads Agency <MdKeyboardArrowRight className="text-xl mt-[3px]" />
											</Link>
										</li>
										<li>
											<Link href={"/service/google-ads-agency"} id="014" className="serveice_list whitespace-nowrap flex items-center gap-1">
												Google Ads Agency <MdKeyboardArrowRight className="text-xl mt-[3px]" />
											</Link>{" "}
										</li>
										<li>
											<Link href={"/service/sem-agency"} id="015" className="serveice_list flex items-center gap-1">
												SEM Agency <MdKeyboardArrowRight className="text-xl mt-[3px]" />
											</Link>{" "}
										</li>
										<li>
											<Link href={"/service/ppc-management"} id="016" className="serveice_list flex items-center gap-1">
												PPC Management <MdKeyboardArrowRight className="text-xl mt-[3px]" />
											</Link>
										</li>
									</div>
								</ul>
								<ul className="flex-1">
									<div className="pl-[11px] pb-3 pt-6 flex gap-2 items-center">
										<div className="">
											<Image src="/navbar/seo_agency.svg" alt="" height={40} width={40} className="" />
										</div>
										<div>
											<h3 className=" text-[18px] font-bold  ">SEO</h3>
											<p className="text-[12px] w-[250px] text-[#515E6F]">Increase your conversion rates to lower your cost per conversion</p>
										</div>
									</div>
									<div className="pl-14 flex flex-col gap-1 text-[16px]">
										<li>
											<Link href={"/service/content-marketing-agency"} id="017" className="serveice_list  whitespace-nowrap flex items-center gap-1">
												Content Marketing Agency <MdKeyboardArrowRight className="text-xl mt-[3px]" />
											</Link>
										</li>
										<li>
											<Link href={"/service/seo-agency"} id="018" className="serveice_list flex items-center gap-1">
												SEO Agency <MdKeyboardArrowRight className="text-xl mt-[3px]" />
											</Link>
										</li>
										<li>
											<Link href={"/service/link-building-service"} id="019" className="serveice_list flex items-center gap-1">
												Link Building Services <MdKeyboardArrowRight className="text-xl mt-[3px]" />
											</Link>
										</li>
									</div>
								</ul>
								<ul className="flex-1">
									<div className="pl-[11px] pb-3 pt-6 flex gap-2 items-center">
										<div className="">
											<Image src="/navbar/conversion_rate.svg" alt="" height={40} width={40} className="" />
										</div>
										<div>
											<h3 className=" text-[18px] font-bold  ">CONVERSION</h3>
											<p className="text-[12px] w-[250px] text-[#515E6F]">Increase your conversion rates to lower your cost per conversion</p>
										</div>
									</div>
									<div className="pl-14 flex flex-col gap-1 text-[16px]">
										<li>
											<Link
												href={"/service/conversion-rate-optimization"}
												id="020"
												className="serveice_list whitespace-nowrap flex items-center gap-1"
											>
												Conversion Rate Optimization <MdKeyboardArrowRight className="text-xl mt-[3px]" />
											</Link>
										</li>
										<li>
											<Link href={"/service/landing-page-agency"} id="021" className="serveice_list whitespace-nowrap flex items-center gap-1">
												Landing Page Agency <MdKeyboardArrowRight className="text-xl mt-[3px]" />
											</Link>
										</li>
										<li>
											<Link href={"/service/landing-page-design"} id="022" className="serveice_list flex items-center gap-1">
												Landing Page Design <MdKeyboardArrowRight className="text-xl mt-[3px]" />
											</Link>
										</li>
									</div>
								</ul>
								<ul className="flex-1 ">
									<div className="pl-[11px] pb-3 pt-6 flex gap-2 items-center">
										<div className="">
											<Image src="/navbar/email_marketing.svg" alt="" height={40} width={40} className="" />
										</div>
										<div>
											<h3 className=" text-[18px] font-bold  ">EMAIL MARKETING</h3>
											<p className="text-[12px] w-[250px] text-[#515E6F]">Increase your conversion rates to lower your cost per conversion</p>
										</div>
									</div>

									<li>
										<Link href={"/service/email-marketing-agency"} id="023" className="serveice_list pl-14 text-[16px] flex items-center gap-1">
											Email Marketing Agency <MdKeyboardArrowRight className="text-xl mt-[3px]" />
										</Link>
									</li>
								</ul>
							</div>
							<li className="text-[18px] pt-3">
								<Link href={"/quizzes"} onClick={handleMainSingleMenu}>
									QUIZZES
								</Link>
							</li>
							<li className="text-[18px] pt-3">
								<Link href={"/team"} onClick={handleMainSingleMenu}>
									TEAM
								</Link>
							</li>
							<li className="text-[18px] pt-3">BLOG</li>
							<li onClick={handleResourcePopup} id="elementID" className="text-[18px] pt-3 flex items-center gap-2 text-red-500 ">
								RESULTS <MdKeyboardArrowDown className={`text-2xl  transition-transform duration-300 ${mobileOpen ? "rotate-180" : ""}`} />
							</li>
							<div className="border-b-[3px] border-red-500 w-[100px] -mt-2"></div>
							<div className={`pl-6  ${mobileOpen ? "block" : "hidden"}`}>
								<ul>
									<li id="mQ1">
										<Link
											href={"/results/testimonial"}
											onClick={handleMainSingleMenu}
											className="serveice_list whitespace-nowrap flex items-center gap-1 mb-3"
										>
											TESTIMONIAL <MdKeyboardArrowRight className="text-xl mt-[3px]" />
										</Link>
									</li>
									<li id="mQ2">
										<Link href={"/"} className="serveice_list whitespace-nowrap flex items-center gap-1 mb-3">
											Quizzes <MdKeyboardArrowRight className="text-xl mt-[3px]" />
										</Link>
									</li>
								</ul>
							</div>
						</ul>
						<div onClick={closeSidebar}>
							<Link href={"/freemarketing"} className=" rounded-md border-2 border-red-500 px-6 py-2 text-red-500 font-semibold text-[14px] ">
								FREE MARKETING PLAN
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
