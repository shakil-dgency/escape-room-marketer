import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useRef } from "react";
import { FaLinkedin } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

function CaseStudy() {
	const caseRef = useRef();
	return (
		<div>
			<div ref={caseRef} id="case" className="g-page_structure  bg-[var(--section-bg-lightblue)]">
				<h1 className="g__section-heading pt-14   text-center mx-auto font-extrabold lg:w-[75%] xl:w-[70%] 2xl:w-[80%]">
					You Could Choose a Marketing Team With Zero Years of Experience. But Why Would You?
				</h1>
				<p className="font-graphik text-center text-[16px] mx-auto md:text-xl 2xl:text-[22px] pt-4 md:w-[70%]  ">
					Everything that costs a buck to get a click. Our management services include all paid advertising platforms, from Google ads to LinkedIn ads
					to Bing ads, and everything in between.
				</p>

				<div className="mt-14 font-graphik">
					<div className="flex justify-center gap-4 flex-wrap md:flex-nowrap">
						<div className=" case_study-card rounded-lg  px-10 py-5 text-center ">
							<div className="">
								<Image src="/results/testimonial/client-logo.svg" alt="" height={100} width={80} className="mx-auto pb-6" />
								<button className="bg-red-500 text-white mb-2 mx-5 py-1 px-3 font-medium ">PAID SEARCH AND SOCIAL</button>
								<p className="text-lg md:text-xl 2xl:text-[28px] text-white ">
									Le Tote Scales Search & Display <br /> To Profitable Heights
								</p>
								<Link href={"/team/caseStudy1"}>
									<button className="text-lg bg-white px-2 py-1 rounded-md font-medium mt-4 mb-4">Read Case Study</button>
								</Link>
							</div>
						</div>
						<div className=" case_study-card rounded-lg   px-10 py-5 text-center ">
							<div className="">
								<Image src="/results/testimonial/client-logo.svg" alt="" height={100} width={80} className="mx-auto pb-6" />
								<button className="bg-red-500 text-white mb-2 mx-5 py-1 px-3 font-medium ">PAID SEARCH AND SOCIAL</button>
								<p className="text-lg md:text-xl 2xl:text-[28px] text-white">
									Le Tote Scales Search & Display <br /> To Profitable Heights
								</p>
								<Link href={"/team/caseStudy2"}>
									<button className=" text-lg bg-white px-2 py-1 rounded-md font-medium mt-4 mb-4">Read Case Study</button>
								</Link>
							</div>
						</div>
					</div>
					<div className="flex justify-center gap-4 mt-4 flex-wrap">
						<div className=" case_study-card rounded-lg px-10 py-5 text-center ">
							<div className="">
								<Image src="/results/testimonial/client-logo.svg" alt="" height={100} width={80} className="mx-auto pb-6" />
								<button className="bg-red-500 text-white mb-2 mx-5 py-1 px-3 font-medium ">PAID SEARCH AND SOCIAL</button>
								<p className="text-lg md:text-xl 2xl:text-[28px] text-white">
									Le Tote Scales Search & Display <br /> To Profitable Heights
								</p>
								<Link href={"/team/caseStudy3"}>
									<button className="text-lg bg-white px-2 py-1 rounded-md font-medium mt-4 mb-4">Read Case Study</button>
								</Link>
							</div>
						</div>
						<div className=" case_study-card rounded-lg  px-10 py-5 text-center ">
							<div className="">
								<Image src="/results/testimonial/client-logo.svg" alt="" height={100} width={80} className="mx-auto pb-6" />
								<button className="bg-red-500 text-white mb-2 mx-5 py-1 px-3 font-medium ">PAID SEARCH AND SOCIAL</button>
								<p className="text-lg md:text-xl 2xl:text-[28px] text-white">
									Le Tote Scales Search & Display <br /> To Profitable Heights
								</p>
								<Link href={"/team/caseStudy4"}>
									<button className="text-lg bg-white px-2 py-1 rounded-md font-medium mt-4 mb-4">Read Case Study</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
				{/* <Link href={"/"} className="group  text-lg md:text-2xl list-none text-red-500">
					<p className="font-medium pb-8 text-center leading-[0px] px-4">See All Case Stusies</p>
					
				</Link> */}
				<div className=" flex justify-center pb-8">
					<button className="text-red-500 text-xl font-semibold mt-6 flex items-center">
						See All Case Studies <MdKeyboardArrowDown className=" text-2xl mt-2 -rotate-90" />
					</button>
				</div>
			</div>
		</div>
	);
}

export default CaseStudy;
