import Image from "next/image";
import React from "react";
import { FaLinkedin } from "react-icons/fa";

function Team() {
	return (
		<div className="pt-[4.5rem] md:pt-[6rem] ">
			<div className="break_line image bg-[url('/page_broke.png')] h-[75px] bg-[length:1600px_90px] bg-center -mt-10 bg-[var(--section-bg-lightblue)]"></div>
			<div className="bg-[var(--section-bg-lightblue)] pb-10">
				<div className=" px-2 md:px-0 m-auto">
					<h1 className="hero_heading text-center  md:px-[10%] lg:px-[20%] pt-14 pb-8">
						Our Secret Weapon: The Ridiculously Talented and Fun-Loving Escape Room Marketing Team
					</h1>
				</div>
				<div className="flex justify-between  md:px-[5%] 2xl:px-[10%]">
					<Image src="/results/testimonial/left.svg" alt="" height={100} width={100} className="w-[80px] md:w-[100px]" />
					<Image src="/results/testimonial/middle.svg" alt="" height={100} width={150} className="w-[100px] md:w-[150px]" />
					<Image src="/results/testimonial/right.svg" alt="" height={100} width={100} className="w-[80px] md:w-[100px]" />
				</div>
			</div>
			<div className="break_line image bg-[url('/section_break.svg')] h-[80px] bg-[length:2500px_90px]  bg-center rotate-180"></div>
			<div className="g-page_structure  bg-[var(--section-bg-lightred)]">
				<h1 className="g__section-heading pt-14   text-center mx-auto font-extrabold lg:w-[75%] xl:w-[70%] 2xl:w-[80%]">
					From Hustling on Craigslist, To Working With Billion-Dollar Companies
				</h1>
				<p className="font-graphik text-center text-[16px] mx-auto md:text-xl 2xl:text-[22px] pt-4 md:w-[70%] ">
					Everything that costs a buck to get a click. Our management services include all paid advertising platforms, from Google ads to LinkedIn ads
					to Bing ads, and everything in between.
				</p>

				<div className="font-graphik flex flex-col py-14 gap-20">
					<div className="flex  flex-col-reverse md:flex-row h-[500px] md:h-[300px] gap-8 md:gap-16">
						<div className="flex-2 md:flex-1 my-auto ">
							<p className="text-red-500 font-semibold mb-2 xl:text-xl">YEAR 1</p>
							<p className="text-lg xl:text-xl">
								Everything that costs a buck to get a click. Our management services include all paid advertising platforms, from Google ads to
								LinkedIn ads to Bing ads, and everything in between.
							</p>
						</div>
						<div className="flex-1 grid gap-2 grid-cols-12 grid-rows-6 ">
							<div className="bg-[#D9D9D9] my-4 col-span-5 row-start-1 row-span-6"></div>
							<div className="bg-[#D9D9D9] col-start-6 col-span-9 row-span-3"></div>
							<div className="bg-[#D9D9D9] col-start-6 col-span-3 row-span-3"></div>
							<div className="bg-[#D9D9D9] mb-4 col-span-6 row-span-3"></div>
						</div>
					</div>
					<div className="flex  flex-col md:flex-row h-[500px] md:h-[300px] gap-8 md:gap-16">
						<div className="flex-1 grid gap-2 grid-cols-12 grid-rows-6 ">
							<div className="bg-[#D9D9D9] my-4 col-span-5 row-start-1 row-span-6"></div>
							<div className="bg-[#D9D9D9] col-start-6 col-span-9 row-span-3"></div>
							<div className="bg-[#D9D9D9] col-start-6 col-span-3 row-span-3"></div>
							<div className="bg-[#D9D9D9] mb-4 col-span-6 row-span-3"></div>
						</div>
						<div className="flex-2 md:flex-1 my-auto ">
							<p className="text-red-500 font-semibold mb-2 xl:text-xl">YEAR 2</p>
							<p className="text-lg xl:text-xl">
								Everything that costs a buck to get a click. Our management services include all paid advertising platforms, from Google ads to
								LinkedIn ads to Bing ads, and everything in between.
							</p>
						</div>
					</div>
					<div className="flex  flex-col-reverse md:flex-row h-[500px] md:h-[300px] gap-8 md:gap-16">
						<div className="flex-2 md:flex-1 my-auto ">
							<p className="text-red-500 font-semibold mb-2 xl:text-xl">YEAR 3</p>
							<p className="text-lg xl:text-xl">
								Everything that costs a buck to get a click. Our management services include all paid advertising platforms, from Google ads to
								LinkedIn ads to Bing ads, and everything in between.
							</p>
						</div>
						<div className="flex-1 grid gap-2 grid-cols-12 grid-rows-6 ">
							<div className="bg-[#D9D9D9] my-4 col-span-5 row-start-1 row-span-6"></div>
							<div className="bg-[#D9D9D9] col-start-6 col-span-9 row-span-3"></div>
							<div className="bg-[#D9D9D9] col-start-6 col-span-3 row-span-3"></div>
							<div className="bg-[#D9D9D9] mb-4 col-span-6 row-span-3"></div>
						</div>
					</div>
					<div className="flex  flex-col md:flex-row h-[500px] md:h-[300px] gap-8 md:gap-16">
						<div className="flex-1 grid gap-2 grid-cols-12 grid-rows-6 ">
							<div className="bg-[#D9D9D9] my-4 col-span-5 row-start-1 row-span-6"></div>
							<div className="bg-[#D9D9D9] col-start-6 col-span-9 row-span-3"></div>
							<div className="bg-[#D9D9D9] col-start-6 col-span-3 row-span-3"></div>
							<div className="bg-[#D9D9D9] mb-4 col-span-6 row-span-3"></div>
						</div>
						<div className="flex-2 md:flex-1 my-auto ">
							<p className="text-red-500 font-semibold mb-2 xl:text-xl">YEAR 4</p>
							<p className="text-lg xl:text-xl">
								Everything that costs a buck to get a click. Our management services include all paid advertising platforms, from Google ads to
								LinkedIn ads to Bing ads, and everything in between.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="break_line image bg-[url('/section_break.svg')] h-[80px] bg-[length:2500px_90px]  bg-center"></div>
			<div className="g-page_structure bg-[var(--section-bg-lightblue)]">
				<h1 className="g__section-heading text-center mx-auto pt-10 lg:w-[75%] xl:w-[70%] 2xl:w-[80%]">
					If You Know What We’re Made Of, You’ll Know What We’re Capable Of
				</h1>
				<Image src="/team/team_party.svg" alt="" height={100} width={800} className="mx-auto py-16" />

				<div className="font-graphik flex flex-col md:flex-row gap-10 pb-16">
					<div className="text-center rounded-lg shadow-md bg-[#FFF4E5] px-4 py-6">
						<h4 className="font-semibold text-xl mb-3">We’re Transparent</h4>
						<p className="text-lg ">
							We Push Ourselves From better marketing performance to Spartan races, we never stay content. We Push Ourselves From better marketing
							performance to Spartan races, we never stay content.
						</p>
					</div>
					<div className="text-center rounded-lg shadow-md bg-[#F4FFE8] px-4 py-6">
						<h4 className="font-semibold text-xl mb-3">We’re Accountable</h4>
						<p className="text-lg ">
							We Push Ourselves From better marketing performance to Spartan races, we never stay content. We Push Ourselves From better marketing
							performance to Spartan races, we never stay content.
						</p>
					</div>
					<div className="text-center rounded-lg shadow-md bg-[#E8FAFF] px-4 py-6">
						<h4 className="font-semibold text-xl mb-3">We Focus On You</h4>
						<p className="text-lg ">
							We Push Ourselves From better marketing performance to Spartan races, we never stay content. We Push Ourselves From better marketing
							performance to Spartan races, we never stay content.
						</p>
					</div>
				</div>
			</div>
			<div className="break_line image bg-[url('/section_break.svg')] h-[80px] bg-[length:2500px_90px]  bg-center rotate-180"></div>
			<div className="g-page_structure  bg-[var(--section-bg-lightred)]">
				<h1 className="g__section-heading pt-14   text-center mx-auto font-extrabold lg:w-[75%] xl:w-[70%] 2xl:w-[80%]">
					Our Team Moves So Fast, It Was HardTo Get Pictures That Weren’t Blurry
				</h1>
				<p className="font-graphik text-center text-[16px] mx-auto md:text-xl 2xl:text-[22px] pt-4 md:w-[70%] ">
					Everything that costs a buck to get a click. Our management services include all paid advertising platforms, from Google ads to LinkedIn ads
					to Bing ads, and everything in between.
				</p>
				<div className="pt-14">
					<div className="w-[calc(300+20%)] md:w-full pb-6 md:pb-0   ">
						<div className="font-graphik pt-[150px] md:pt-0 relative">
							<Image src="/team/team_member.svg" alt="" height={100} width={400} className="w-[280px] md:w-[350px] lg:w-[350px] absolute  " />
							<div className="ml-[330px]">
								<div className=" pl-10">
									<h4 className="text-red-500 text-xl lg:text-[30px] pb-1">Benjamin Harrison</h4>
									<p className="text-xl pb-1">CEO</p>
									<p className="text-gray-400">"Alexis, play..."</p>
									<div className="flex gap-3 pt-1 pb-3">
										<FaLinkedin className="text-xl" />
										<FaLinkedin className="text-xl" />
									</div>
								</div>
								<div className="shadow-md rounded-md bg-[#FFF4E5] pl-10 flex flex-col justify-between h-[325px] py-2 ">
									<p className="lg:text-xl xl:text-[24px]">
										We Push Ourselves From better marketing performance to Spartan races, we never stay content. We Push Ourselves From better
										marketing performance to Spartan races.
									</p>
									<p className="lg:text-xl xl:text-[24px]">"Meet Jack Sparks, The IT owner who codes digital dreams into marketing realities!"</p>
									<div className="flex gap-4 justify-between pr-6">
										<div className="">
											<h4 className="lg:text-lg font-semibold">STRENGTHS</h4>
											<ul className="text-xs lg:text-base list-disc list-inside">
												<li>Automatic Bid Optimizations</li>
												<li>Keyword Match Type Selections</li>
												<li>Quality Score Improvements</li>
											</ul>
										</div>
										<div className="">
											<h4 className="lg:text-lg font-semibold">WEAKNESSES</h4>
											<ul className="text-xs lg:text-base list-disc list-inside">
												<li>Automatic Bid Optimizations</li>
												<li>Keyword Match Type Selections</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="break_line image bg-[url('/section_break.svg')] h-[80px] bg-[length:2500px_90px]  bg-center "></div>
		</div>
	);
}

export default Team;
