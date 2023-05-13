"use client";

import Image from "next/image";
import React from "react";

function Hero({ firstPic, secondPic, thirdPic, title, pera }) {
	return (
		<div className="pt-[1.2rem] md:pt-[4rem] ">
			<div className="break_line image bg-[url('/navbar_breakline.svg')] h-[110px] bg-[length:2500px_100px]  -mb-4    bg-center  "></div>
			<div
				className={
					thirdPic
						? `hero_cover  pb-[250px] md:pb-[300px] lg:pb-[400px]  w-full   bg-[#FFF7F5]  md:pt-12 relative`
						: `hero_cover w-full bg-[#FFF7F5]  md:pt-12 relative`
				}
			>
				{/* {firstPic && (
					<div>
						<img
							src={`${firstPic}`}
							className="absolute left-2 md:left-4 -bottom-6 md:bottom-0  h-[250px] w-[172px] md:h-[280px] md:w-[300px] lg:h-[430px] lg:w-[391px]  xl:h-[430px] xl:w-[391px] "
							alt=""
						/>
					</div>
				)} */}
				{/* {secondPic && (
					<div>
						<img
							src={`${secondPic}`}
							className="absolute right-2 md:right-4 -bottom-7 md:bottom-0  h-[250px] w-[172px]  md:h-[280px]  md:w-[300px] lg:h-[430px] lg:w-[391px]  xl:h-[430px] xl:w-[391px]"
							alt=""
						/>
					</div>
				)} */}
				{thirdPic && (
					<div className="">
						<img
							src={`${thirdPic}`}
							className="px-10  absolute right-[50%] translate-x-[50%] bottom-[0] md:-bottom-[13%] translate-y-[-40%] "
							alt=""
						/>
					</div>
				)}
				<div className="text-container px-2 md:px-0 pb-[250px] md:pb-0 m-auto">
					<h1 className="hero_heading text-center md:px-[10%] lg:px-[20%] pt-4 md:pt-10   font-extrabold ">{title} </h1>
					<p className=" font-graphik md:text-lg xl:text-xl 2xl:text-2xl text-center md:px-[25%] m-auto pt-4">{pera}</p>
					{/* <div className={thirdPic ? `flex justify-center mt-6` : `flex justify-center mt-6 md:mt-10 md:mb-4`}>
						<button className="bg-[#ff5056] py-3 px-8 text-white lg:text-lg 2xl:text-2xl rounded font-semibold">Get Your Free Marketing Plan</button>
					</div> */}
					<div className="block md:hidden pt-4">
						<div className="flex justify-center">
							<button className="font-circular bg-[#ff5056] py-3 px-8 text-white lg:text-lg 2xl:text-2xl rounded font-semibold">
								Get Your Free Marketing Plan
							</button>
						</div>
						<p className="font-graphik text-center pt-2 text-lg">
							Get 17+ new marketing ideas <br /> that are better than what you have
						</p>
					</div>
				</div>
				<div className="flex w-full justify-between gap-2 pt-8 ">
					{firstPic && (
						<Image
							src={`${firstPic}`}
							alt=""
							height={100}
							width={200}
							className="h-[250px] w-[172px] md:h-[280px] md:w-[300px]   xl:h-[430px] xl:w-[391px] absolute md:static -bottom-6 left-0 "
						/>
					)}
					<div className="hidden md:block">
						<button className="bg-[#ff5056] py-3 px-8 text-white lg:text-lg 2xl:text-2xl rounded font-semibold">Get Your Free Marketing Plan</button>
						<p className="font-graphik text-center pt-4 text-lg">
							Get 17+ new marketing ideas <br /> that are better than what you have
						</p>
					</div>
					{secondPic && (
						<Image
							src={`${secondPic}`}
							alt=""
							height={100}
							width={200}
							className="h-[250px] w-[172px] md:h-[280px] md:w-[300px]   xl:h-[430px] xl:w-[391px] absolute md:static -bottom-6 right-0 "
						/>
					)}
				</div>
			</div>
			<div className="break_line image bg-[url('/test_break.svg')] h-[90px] w-full bg-[length:2500px_90px] absolute z-10 -mt-[85px]  bg-center "></div>
			{/* <div className="break_line image bg-[url('/page_broke.png')] h-[90px] w-full  bg-[length:2500px_90px] bg-[#c7e1fb] -mt-[70px]  bg-center"></div> */}
			{/* <Image src="/test_break.svg" alt="" height={100} width={100} className="w-full h-[150px] absolute z-10 -mt-32" /> */}
		</div>
	);
}

export default Hero;
