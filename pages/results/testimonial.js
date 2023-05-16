"use client";
import Image from "next/image";
import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

function Testimonial() {
	const [colleps, setColleps] = useState(false);
	// const handleString = (text, handleTextSpan) => {
	// 	let x = text.substr(0, 200).concat(". ");

	// 	handleTextSpan = (text) => {
	// 		return text.substr(0, text.length);
	// 	};

	// 	return x;
	// };

	return (
		<div className="pt-[4.5rem] md:pt-[6rem] ">
			<div className="break_line image bg-[url('/page_broke.png')] h-[75px] bg-[length:1600px_90px] bg-center -mt-10 bg-[var(--section-bg-lightblue)]"></div>
			<div className="bg-[var(--section-bg-lightblue)] pb-10">
				<div className=" px-2 md:px-0 m-auto">
					<h1 className="hero_heading text-center  md:px-[10%] lg:px-[20%] pt-14 pb-8">
						We Put the 'Testi' in Testimonials - Don't Just Take Our Word for It...Listen to These Crazy Stories
					</h1>
				</div>
				<div className="flex justify-between  md:px-[5%] 2xl:px-[10%]">
					<Image src="/results/testimonial/left.svg" alt="" height={100} width={100} className="w-[80px] md:w-[100px]" />
					<Image src="/results/testimonial/middle.svg" alt="" height={100} width={150} className="w-[100px] md:w-[150px]" />
					<Image src="/results/testimonial/right.svg" alt="" height={100} width={100} className="w-[80px] md:w-[100px]" />
				</div>
			</div>
			<div className="break_line image bg-[url('/section_break.svg')] h-[80px] bg-[length:2500px_90px]  bg-center rotate-180"></div>
			<div className="g-page_structure bg-[var(--section-bg-lightred)] ">
				<div className="flex flex-col items-center gap-[180px] md:gap-16 pt-[200px] md:pt-10 pb-10">
					<div className="testimonial-card w-[calc(300+20%)] md:w-full pb-6 md:pb-0 flex flex-col md:flex-row gap-4 items-center bg-[#00B67A0D] relative rounded-xl ">
						<Image
							src="/results/testimonial/client-corner.svg"
							alt=""
							height={100}
							width={100}
							className="absolute -top-[165px] left-[calc(100%-(300px+(50%-140px)))]  md:-top-4 md:-left-6 -rotate-6 z-10"
						/>
						<Image
							src="/results/testimonial/client.svg"
							alt=""
							height={100}
							width={400}
							className="w-[280px] md:w-[300px] lg:w-[400px] absolute md:static -top-[150px] "
						/>
						<div className="font-graphik px-4 md:px-8 pt-[150px] md:pt-0">
							{
								<p className="text-lg md:text-base lg:text-xl">
									"Escape Room Marketer - Agency is simply amazing! Their team designed and develop our website, created eye-catching promotional
									materials,
									<span className={`${colleps ? "" : "hidden md:inline"}`}>
										and helped us boost our online presence. Since working with them, our bookings have increased significantly, and our customers
										frequently compliment us on our impressive marketing materials. Highly recommend!"
									</span>
									<span onClick={() => setColleps(!colleps)} className="text-red-500 relative md:hidden">
										{" "}
										See {`${colleps ? "less" : "more"}`}
										{/* <MdKeyboardArrowDown className={`absolute -right-5 top-0 ${colleps ? "rotate-180" : "more"}`} /> */}
									</span>
								</p>
							}
							<div className="flex gap-6 items-center px-2 mt-6 bg-[#00B67A1A] md:w-[400px] rounded-md">
								<Image src="/results/testimonial/client-logo.svg" alt="" height={100} width={90} className="" />
								<div className="">
									<Image src="/results/testimonial/stars.svg" alt="" height={100} width={70} className="mb-3" />
									<p className="text-base leading-3 font-semibold">Chetan Patel</p>
									<p className="text-base">President, All In Adventures</p>
								</div>
							</div>
						</div>
					</div>
					<div className="testimonial-card w-[calc(300+20%)] md:w-full pb-6 md:pb-0 flex flex-col md:flex-row gap-4 items-center bg-[#00B67A0D] relative rounded-xl ">
						<Image
							src="/results/testimonial/client-corner.svg"
							alt=""
							height={100}
							width={100}
							className="absolute -top-[165px] left-[calc(100%-(300px+(50%-140px)))]  md:-top-4 md:-left-6 -rotate-6 z-10"
						/>
						<Image
							src="/results/testimonial/client.svg"
							alt=""
							height={100}
							width={400}
							className="w-[280px] md:w-[300px] lg:w-[400px] absolute md:static -top-[150px] "
						/>
						<div className="font-graphik px-4 md:px-8 pt-[150px] md:pt-0">
							{
								<p className="text-lg md:text-base lg:text-xl">
									"Escape Room Marketer - Agency is simply amazing! Their team designed and develop our website, created eye-catching promotional
									materials,
									<span className={`${colleps ? "" : "hidden md:inline"}`}>
										and helped us boost our online presence. Since working with them, our bookings have increased significantly, and our customers
										frequently compliment us on our impressive marketing materials. Highly recommend!"
									</span>
									<span onClick={() => setColleps(!colleps)} className="text-red-500 relative md:hidden">
										{" "}
										See {`${colleps ? "less" : "more"}`}
										{/* <MdKeyboardArrowDown className={`absolute -right-5 top-0 ${colleps ? "rotate-180" : "more"}`} /> */}
									</span>
								</p>
							}
							<div className="flex gap-6 items-center px-2 mt-6 bg-[#00B67A1A] md:w-[400px] rounded-md">
								<Image src="/results/testimonial/client-logo.svg" alt="" height={100} width={90} className="" />
								<div className="">
									<Image src="/results/testimonial/stars.svg" alt="" height={100} width={70} className="mb-3" />
									<p className="text-base leading-3 font-semibold">Chetan Patel</p>
									<p className="text-base">President, All In Adventures</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="break_line image bg-[url('/section_break.svg')] h-[80px] bg-[length:2500px_90px]  bg-center"></div>
		</div>
	);
}

export default Testimonial;
