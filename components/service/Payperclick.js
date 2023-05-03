import React from "react";
import { useInView } from "react-intersection-observer";
import { RiErrorWarningFill } from "react-icons/ri";
import styles from "@/styles/Home.module.css";

function Payperclick() {
	const { ref: myRef, inView: myElementIsVisible } = useInView();
	return (
		<div>
			<div className="multiple_agency g-page_structure bg-[var(--section-bg-lightred)]">
				<div className="m-auto">
					<h1 className="text-center pt-16 md:px-16 text-xl md:text-3xl xl:text-5xl font-bold">
						We Find More Pay-Per-Click Improvements In 5 Minutes Than Others Take Weeks To Do
					</h1>
					<p className="md:text-lg xl:text-xl 2xl:text-2xl text-center md:px-36 m-auto py-4">
						Get a prioritized list of ad improvements from the data of our 250+ active client roster.
					</p>
				</div>
				<div className="section-img pt-16 flex justify-center">
					<div ref={myRef} className=" md:h-[400px] md:w-[600px] relative">
						<img src="/serveice/marketing_agency.avif" className="md:h-[400px] md:w-[600px] mt-4 " alt="" />
						<div className="cta-mobileresponsive flex md:flex-none flex-col gap-4">
							<div className={`${myElementIsVisible ? styles.cta : ""}`}>
								<div className="overflow-hidden rounded  shadow pl-3 pr-8 block md:absolute top-6 left-0 md:translate-x-[-80%] bg-white ">
									<div className="flex items-center gap-3">
										<RiErrorWarningFill className={`${myElementIsVisible ? styles.error_warning : ""}`} />
										<div className={`${myElementIsVisible ? styles.text_wrapper : ""}`}>
											<h5 className="text-lg font-semibold">Email marketing</h5>
											<p className="text-lg">3 opportunities found</p>
										</div>
									</div>
								</div>
							</div>
							<div className={`${myElementIsVisible ? styles.cta : ""}`}>
								<div className="rounded shadow  pl-3 pr-8 md:absolute top-6 right-0  md:translate-x-[80%] bg-white ">
									<div className="flex items-center gap-3">
										<RiErrorWarningFill className={`${myElementIsVisible ? styles.error_warning : ""}`} />
										<div className={`${myElementIsVisible ? styles.text_wrapper : ""}`}>
											<h5 className="text-lg font-semibold">Email marketing</h5>
											<p className="text-lg">3 opportunities found</p>
										</div>
									</div>
								</div>
							</div>
							<div className={`${myElementIsVisible ? styles.cta : ""}`}>
								<div className="rounded shadow  pl-3 pr-8 md:absolute bottom-8 left-0 md:translate-x-[-80%] bg-white ">
									<div className="flex items-center gap-3">
										<RiErrorWarningFill className={`${myElementIsVisible ? styles.error_warning : ""}`} />
										<div className={`${myElementIsVisible ? styles.text_wrapper : ""}`}>
											<h5 className="text-lg font-semibold">Email marketing</h5>
											<p className="text-lg">3 opportunities found</p>
										</div>
									</div>
								</div>
							</div>
							<div className={`${myElementIsVisible ? styles.cta : ""}`}>
								<div className="rounded shadow pl-3 pr-8 md:absolute bottom-8 right-0  md:translate-x-[80%] bg-white ">
									<div className="flex items-center gap-3">
										<RiErrorWarningFill className={`${myElementIsVisible ? styles.error_warning : ""}`} />
										<div className={`${myElementIsVisible ? styles.text_wrapper : ""}`}>
											<h5 className="text-lg font-semibold">Email marketing</h5>
											<p className="text-lg">3 opportunities found</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="flex pt-8 pb-16 justify-center">
					<button className="bg-[#ff5056] mt-8 py-3 px-5 text-white lg:text-lg 2xl:text-2xl rounded font-semibold">
						Get Your Free Marketing Plan
					</button>
				</div>
			</div>
           
		</div>
	);
}

export default Payperclick;
