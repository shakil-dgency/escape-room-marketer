import React from "react";
import styles from "../styles/contactus.module.css";
import FooterTopCta from "@/components/FooterTopCta";
import Image from "next/image";

function ContactUs() {
	return (
		<div className="pt-[4rem]  ">
			<div className="break_line image bg-[url('/navbar_breakline.svg')] h-[90px]  bg-[length:3200px_90px]   bg-center"></div>
			<div className={` ${styles.contactus_main} g-page_structure bg-[#FFF7F5] `}>
				<div className="text-container  m-auto pb-20">
					<h1 className=" text-center md:px-16 pt-4 md:pt-10 text-2xl md:text-3xl xl:text-5xl font-bold ">
						Get in Touch, Unless You're a Robot - We've Already Got Enough of Those
					</h1>
					<p className="md:text-lg xl:text-xl 2xl:text-2xl text-center md:px-36 m-auto pt-4">
						Anything missing? Include your question when <br /> getting your custom marketing plan.
					</p>
				</div>
			</div>
			<div className="break_line image bg-[url('/section_break.svg')] h-[80px] bg-[length:3200px_90px] -mt-10  bg-center"></div>
			<div className="g-page_structure bg-[#F9FCFF]">
				<div className="pt-16 pb-12">
					<div className="mx-auto  bg-white md:w-[680px] lg:w-[780px] px-5 md:px-12 lg:px-20 py-14 relative">
						<Image src='/contactus/search.svg' alt="" height={100} width={130} className=" w-[80px] md:w-[130px] absolute -top-4 md:-top-10 -right-3 md:-right-12" />
						<Image src='/contactus/key.svg' alt="" height={100} width={100} className="w-[80px] md:w-[130px] absolute -bottom-10 -left-3 md:-left-12" />
						<h2 className="text-center text-xl md:text-3xl font-bold">
							Let's Connect: Unlock Your Digital Potentials <br className="md:hidden" /> with Our Marketing Experts
						</h2>
						<div className="pt-8 ">
							<form action="">
								<div className="md:flex gap-8 w-full">
									<div className="w-full">
										<label htmlFor="">Your Name*</label> <br />
										<input type="text" required className="border bg-[#F5F5F5] w-full text-base px-2 py-1 mt-2 mb-4" />
									</div>
									<div className="w-full">
										<label htmlFor="">Your Email*</label> <br />
										<input type="email" required className="border bg-[#F5F5F5] w-full text-base px-2 py-1 mt-2 mb-4" />
									</div>
								</div>
								<div className="md:flex gap-8">
									<div className="w-full">
										<label htmlFor="">Your Phone Number*</label> <br />
										<input type="number" required className="border bg-[#F5F5F5] w-full text-base px-2 py-1 mt-2 mb-4" />
									</div>
									<div className="w-full">
										<label htmlFor="">Company Name</label> <br />
										<input type="email" className="border bg-[#F5F5F5] w-full text-base px-2 py-1 mt-2 mb-4" />
									</div>
								</div>
								<label htmlFor="">Company Website</label> <br />
								<input type="text" className="border bg-[#F5F5F5] w-full text-base px-2 py-1 mt-2 mb-4" /> <br />
								<label htmlFor="">Any Comments?</label> <br />
								<textarea name="" id="" cols="30" rows="5" className="border w-full bg-[#F5F5F5] w-full text-base px-2 py-1 mt-2 mb-4"></textarea>
								<div className=" flex justify-center">
									<input type="submit" value="SEND MY MESSAGE" className="shadow px-12 py-2 rounded bg-[#FF492C] text-white font-semibold mt-3 " />
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			<FooterTopCta />
		</div>
	);
}

export default ContactUs;
