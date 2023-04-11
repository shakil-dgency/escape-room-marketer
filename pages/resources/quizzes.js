import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

function Quizzes() {
	return (
		<div className="pt-[4rem]">
			<div className="break_line image bg-[url('/navbar_breakline.svg')] h-[90px]  bg-[length:3200px_90px]   bg-center"></div>
			<div className="quizzes_hero g-page_structure  bg-[#FFF7F5]">
				<h1 className="text-5xl text-center font-semibold pt-10">
					Quiz For Escape Room <br /> Business Growth
				</h1>
				<p className="text-center text-xl pt-3 pb-10">
					Yes, your parents lied to you. We also have better performing <br /> PPC campaigns & PPC ads.
				</p>
			</div>
			<div className="break_line image bg-[url('/section_break.svg')] h-[80px] bg-[length:3200px_90px]  bg-center"></div>
			<div className="g-page_structure bg-[#F9FCFF]">
				<div className="flex flex-col gap-14 py-16">
					<div className="flex gap-4  w-[850px] mx-auto  bg-[url('/resources/quizzes/quiz_background.svg')] bg-[#FFF7F5] px-6 py-6 shadow rounded">
						<div className="">
							<Image src="/resources/quizzes/seo_quiz.svg" alt="" width={100} height={200} className=" w-[450px]" />
						</div>
						<div className="mt-1">
							<p className="text-lg text-[#FF492C] font-semibold">ESCAPE ROOM WEBSITE</p>
							<h3 className="text-3xl font-bold pb-2">SEO Quiz</h3>
							<p className="text-lg">Stop trying to guess what metrics mean and trying to figure out why your PPC ads aren't performing as well.</p>
							<Link href={'/resources/quizDetailsPage/quizDetails'} className="bg-[#FF492C]  w-full py-2 text-white rounded mt-3 flex items-center justify-center gap-2">
								Start Here Know Your Score <BsArrowRight className="text-xl mt-1" />
							</Link>
						</div>
					</div>
					<div className="flex gap-4  w-[850px] mx-auto  bg-[url('/resources/quizzes/quiz_background.svg')] bg-[#FFF7F5] px-6 py-6 shadow rounded">
						<div className="">
							<Image src="/resources/quizzes/conversion_quiz.svg" alt="" width={100} height={200} className=" w-[450px]" />
						</div>
						<div className="mt-1">
							<p className="text-lg text-[#FF492C] font-semibold">ESCAPE ROOM WEBSITE</p>
							<h3 className="text-3xl font-bold pb-2">Conversion Quiz</h3>
							<p className="text-lg">Stop trying to guess what metrics mean and trying to figure out why your PPC ads aren't performing as well.</p>
							<button className="bg-[#FF492C]  w-full py-2 text-white rounded mt-3 flex items-center justify-center gap-2">
								Start Here Know Your Score <BsArrowRight className="text-xl mt-1" />
							</button>
						</div>
					</div>
					<div className="flex gap-4  w-[850px] mx-auto  bg-[url('/resources/quizzes/quiz_background.svg')] bg-[#FFF7F5] px-6 py-6 shadow rounded">
						<div className="">
							<Image src="/resources/quizzes/email_marketing_quiz.svg" alt="" width={100} height={200} className=" w-[450px]" />
						</div>
						<div className="mt-1">
							<p className="text-lg text-[#FF492C] font-semibold">ESCAPE ROOM WEBSITE</p>
							<h3 className="text-3xl font-bold pb-2">Email Marketing Quiz</h3>
							<p className="text-lg">Stop trying to guess what metrics mean and trying to figure out why your PPC ads aren't performing as well.</p>
							<button className="bg-[#FF492C]  w-full py-2 text-white rounded mt-3 flex items-center justify-center gap-2">
								Start Here Know Your Score <BsArrowRight className="text-xl mt-1" />
							</button>
						</div>
					</div>
					<div className="flex gap-4  w-[850px] mx-auto  bg-[url('/resources/quizzes/quiz_background.svg')] bg-[#FFF7F5] px-6 py-6 shadow rounded">
						<div className="">
							<Image src="/resources/quizzes/google_ads_quiz.svg" alt="" width={100} height={200} className=" w-[450px]" />
						</div>
						<div className="mt-1">
							<p className="text-lg text-[#FF492C] font-semibold">ESCAPE ROOM WEBSITE</p>
							<h3 className="text-3xl font-bold pb-2">Google Ads Quiz</h3>
							<p className="text-lg">Stop trying to guess what metrics mean and trying to figure out why your PPC ads aren't performing as well.</p>
							<button className="bg-[#FF492C]  w-full py-2 text-white rounded mt-3 flex items-center justify-center gap-2">
								Start Here Know Your Score <BsArrowRight className="text-xl mt-1" />
							</button>
						</div>
					</div>
					<div className="flex gap-4  w-[850px] mx-auto  bg-[url('/resources/quizzes/quiz_background.svg')] bg-[#FFF7F5] px-6 py-6 shadow rounded">
						<div className="">
							<Image src="/resources/quizzes/facebook_ads_quiz.svg" alt="" width={100} height={200} className=" w-[450px]" />
						</div>
						<div className="mt-1">
							<p className="text-lg text-[#FF492C] font-semibold">ESCAPE ROOM WEBSITE</p>
							<h3 className="text-3xl font-bold pb-2">Facebook Ads Quiz</h3>
							<p className="text-lg">Stop trying to guess what metrics mean and trying to figure out why your PPC ads aren't performing as well.</p>
							<button className="bg-[#FF492C]  w-full py-2 text-white rounded mt-3 flex items-center justify-center gap-2">
								Start Here Know Your Score <BsArrowRight className="text-xl mt-1" />
							</button>
						</div>
					</div>
					<div className="flex gap-4  w-[850px] mx-auto  bg-[url('/resources/quizzes/quiz_background.svg')] bg-[#FFF7F5] px-6 py-6 shadow rounded">
						<div className="">
							<Image src="/resources/quizzes/creative_asset_quiz.svg" alt="" width={100} height={200} className=" w-[450px]" />
						</div>
						<div className="mt-1">
							<p className="text-lg text-[#FF492C] font-semibold">ESCAPE ROOM WEBSITE</p>
							<h3 className="text-3xl font-bold pb-2">Creative Asset Quiz</h3>
							<p className="text-lg">Stop trying to guess what metrics mean and trying to figure out why your PPC ads aren't performing as well.</p>
							<button className="bg-[#FF492C]  w-full py-2 text-white rounded mt-3 flex items-center justify-center gap-2">
								Start Here Know Your Score <BsArrowRight className="text-xl mt-1" />
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="break_line image bg-[url('/section_break.svg')] h-[80px] bg-[length:3200px_90px]   bg-center rotate-180 "></div>
			<div className=" bg-[#FFF7F5] pt-16 pb-20 bg-[url('/resources/quizzes/quiz-key-background.svg')] bg-center w-full absolute z-20 -mt-9">
				<div className="g-page_structure flex flex-col items-center">
					<h2 className="text-3xl text-center font-bold pb-8">
						Like Your Big Goals, Your Team Will Be <br /> Surprisingly Easy To Reach
					</h2>
					<Link href={"/freemarketing"} className="px-6 py-2 bg-[#FF492C] text-white rounded">
						GET YOUR FREE MARKETING PLAN
					</Link>
				</div>
			</div>
			<div className="break_line image bg-[url('/section_break.svg')] h-[80px] bg-[length:3200px_90px] mt-[215px]   bg-center"></div>
		</div>
	);
}

export default Quizzes;
