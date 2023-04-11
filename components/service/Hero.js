"use client";

import React from "react";

function Hero({ firstPic, secondPic, thirdPic, title, pera }) {
	return (
		<div className="pt-[4rem] ">
			<div className="break_line image bg-[url('/navbar_breakline.svg')] h-[90px]  bg-[length:3200px_90px]   bg-center"></div>
			<div className={thirdPic?`hero_cover g-page_structure h-[500px] md:h-[650px] lg:h-[750px] w-full bg-[#FFF7F5]  md:pt-12 relative` :`hero_cover g-page_structure h-[600px] md:h-[550px] lg:h-[670px] w-full bg-[#FFF7F5]  md:pt-12 relative`}>
				{firstPic && (
					<div>
						<img
							src={`${firstPic}`}
							className="absolute left-2 md:left-10 bottom-0  h-[250px] w-[250px] md:h-[280px] lg:h-[400px] lg:w-[400px] md:w-[300px] xl:h-[450px] xl:w-[500px] 2xl:w-[500px] 2xl:h-[500px]"
							alt=""
						/>
					</div>
				)}
				{secondPic && (
					<div>
						<img
							src={`${secondPic}`}
							className="absolute right-2 md:right-10 bottom-0  h-[250px] w-[250px]  md:h-[280px] lg:h-[400px] lg:w-[400px] md:w-[300px] xl:h-[450px] xl:w-[500px] 2xl:w-[500px] 2xl:h-[500px]"
							alt=""
						/>
					</div>
				)}
				{thirdPic && (
					<div className="">
						<img
							src={`${thirdPic}`}
							className="px-10  absolute right-[50%] translate-x-[50%] bottom-[0] md:-bottom-[13%] translate-y-[-40%] "
							alt=""
						/>
					</div>
				)}
				<div className="text-container  m-auto">
					<h1 className=" text-center md:px-16 pt-4 md:pt-10 text-2xl md:text-3xl xl:text-5xl font-extrabold ">{title}</h1>
					<p className="md:text-lg xl:text-xl 2xl:text-2xl text-center md:px-36 m-auto pt-4">{pera}</p>
					<div className={thirdPic ? `flex justify-center mt-6` : `flex justify-center mt-6 md:mt-20`}>
						<button className="bg-[#ff5056] py-3 px-8 text-white lg:text-lg 2xl:text-2xl rounded font-semibold">Get Your Free Marketing Plan</button>
					</div>
				</div>
			</div>
			<div className="break_line image bg-[url('/section_break.svg')] h-[80px] bg-[length:3200px_90px] -mt-10  bg-center"></div>
		</div>
	);
}

export default Hero;
