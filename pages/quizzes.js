import FooterTopCta from "@/components/FooterTopCta";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

function Quizzes() {
	return (
		<div className=" pt-[1.2rem] md:pt-[4rem]">
			<div className="break_line image bg-[url('/navbar_breakline.svg')] h-[110px] bg-[length:2500px_100px]  -mb-4    bg-center  "></div>
			<div className="quizzes_hero g-page_structure relative before:content-[''] before:absolute before:top-[-20px] before:right-0 before:bottom-[-40px] before:left-0 z-10 before:bg-[url('/resources/quiz_hero_background.png')] before:bg-[length:300px_300px] before:bg-center before:opacity-10 bg-[#FFF7F5]">
				<h1 className="hero_heading text-center font-semibold pt-10">
					Quiz For Escape Room <br /> Business Growth
				</h1>
				<p className="font-graphik text-center text-xl pt-3 pb-10">
					Yes, your parents lied to you. We also have better performing <br /> PPC campaigns & PPC ads.
				</p>
			</div>
			<div className="break_line image bg-[url('/section_break.svg')] h-[80px] bg-[length:3200px_90px]  bg-center"></div>
			<div className="g-page_structure bg-[#F9FCFF]">
				<div className="flex flex-col gap-14 py-16">
					<div className="quiz-card flex gap-4  md:w-[750px] lg:w-[980px]  mx-auto  bg-[url('/resources/quizzes/quiz_background.svg')] bg-[#FFF7F5] px-6 py-6 shadow rounded">
						<div className="">
							<Image src="/resources/quizzes/seo_quiz.svg" alt="" width={100} height={200} className=" w-[450px]" />
						</div>
						<div className="lg:mt-4">
							<p className="text-lg text-[#FF492C] font-semibold">ESCAPE ROOM WEBSITE</p>
							<h3 className="text-3xl font-bold pb-2">SEO Quiz</h3>
							<p className="text-lg">Stop trying to guess what metrics mean and trying to figure out why your PPC ads aren't performing as well.</p>
							<Link
								href={"/quizDetailsPage/quizDetailsSeo"}
								className="bg-[#FF492C]  w-full py-2 text-white rounded mt-3 flex items-center justify-center gap-2"
							>
								Start Here Know Your Score <BsArrowRight className="text-xl mt-1" />
							</Link>
						</div>
					</div>
					<div className="quiz-card flex gap-4  md:w-[750px] lg:w-[980px] mx-auto  bg-[url('/resources/quizzes/quiz_background.svg')] bg-[#FFF7F5] px-6 py-6 shadow rounded">
						<div className="">
							<Image src="/resources/quizzes/conversion_quiz.svg" alt="" width={100} height={200} className=" w-[450px]" />
						</div>
						<div className="lg:mt-4">
							<p className="text-lg text-[#FF492C] font-semibold">ESCAPE ROOM WEBSITE</p>
							<h3 className="text-3xl font-bold pb-2">Conversion Quiz</h3>
							<p className="text-lg">Stop trying to guess what metrics mean and trying to figure out why your PPC ads aren't performing as well.</p>
							<Link
								href={"/quizDetailsPage/quizDetailsConversion"}
								className="bg-[#FF492C]  w-full py-2 text-white rounded mt-3 flex items-center justify-center gap-2"
							>
								Start Here Know Your Score <BsArrowRight className="text-xl mt-1" />
							</Link>
						</div>
					</div>
					<div className="quiz-card flex gap-4  md:w-[750px] lg:w-[980px] mx-auto  bg-[url('/resources/quizzes/quiz_background.svg')] bg-[#FFF7F5] px-6 py-6 shadow rounded">
						<div className="">
							<Image src="/resources/quizzes/email_marketing_quiz.svg" alt="" width={100} height={200} className=" w-[450px]" />
						</div>
						<div className="lg:mt-4">
							<p className="text-lg text-[#FF492C] font-semibold">ESCAPE ROOM WEBSITE</p>
							<h3 className="text-3xl font-bold pb-2">Email Marketing Quiz</h3>
							<p className="text-lg">Stop trying to guess what metrics mean and trying to figure out why your PPC ads aren't performing as well.</p>
							<Link
								href={"/quizDetailsPage/quizDetailsEmailMarketing"}
								className="bg-[#FF492C]  w-full py-2 text-white rounded mt-3 flex items-center justify-center gap-2"
							>
								Start Here Know Your Score <BsArrowRight className="text-xl mt-1" />
							</Link>
						</div>
					</div>
					<div className="quiz-card flex gap-4  md:w-[750px] lg:w-[980px] mx-auto  bg-[url('/resources/quizzes/quiz_background.svg')] bg-[#FFF7F5] px-6 py-6 shadow rounded">
						<div className="">
							<Image src="/resources/quizzes/google_ads_quiz.svg" alt="" width={100} height={200} className=" w-[450px]" />
						</div>
						<div className="lg:mt-4">
							<p className="text-lg text-[#FF492C] font-semibold">ESCAPE ROOM WEBSITE</p>
							<h3 className="text-3xl font-bold pb-2">Google Ads Quiz</h3>
							<p className="text-lg">Stop trying to guess what metrics mean and trying to figure out why your PPC ads aren't performing as well.</p>
							<Link
								href={"/quizDetailsPage/quizDetailsgoogle"}
								className="bg-[#FF492C]  w-full py-2 text-white rounded mt-3 flex items-center justify-center gap-2"
							>
								Start Here Know Your Score <BsArrowRight className="text-xl mt-1" />
							</Link>
						</div>
					</div>
					<div className="quiz-card flex gap-4  md:w-[750px] lg:w-[980px] mx-auto  bg-[url('/resources/quizzes/quiz_background.svg')] bg-[#FFF7F5] px-6 py-6 shadow rounded">
						<div className="">
							<Image src="/resources/quizzes/facebook_ads_quiz.svg" alt="" width={100} height={200} className=" w-[450px]" />
						</div>
						<div className="lg:mt-4">
							<p className="text-lg text-[#FF492C] font-semibold">ESCAPE ROOM WEBSITE</p>
							<h3 className="text-3xl font-bold pb-2">Facebook Ads Quiz</h3>
							<p className="text-lg">Stop trying to guess what metrics mean and trying to figure out why your PPC ads aren't performing as well.</p>
							<Link
								href={"/quizDetailsPage/quizDetailsfacebook"}
								className="bg-[#FF492C]  w-full py-2 text-white rounded mt-3 flex items-center justify-center gap-2"
							>
								Start Here Know Your Score <BsArrowRight className="text-xl mt-1" />
							</Link>
						</div>
					</div>
					<div className="quiz-card flex gap-4  md:w-[750px] lg:w-[980px] mx-auto  bg-[url('/resources/quizzes/quiz_background.svg')] bg-[#FFF7F5] px-6 py-6 shadow rounded">
						<div className="">
							<Image src="/resources/quizzes/creative_asset_quiz.svg" alt="" width={100} height={200} className=" w-[450px]" />
						</div>
						<div className="lg:mt-4">
							<p className="text-lg text-[#FF492C] font-semibold">ESCAPE ROOM WEBSITE</p>
							<h3 className="text-3xl font-bold pb-2">Creative Asset Quiz</h3>
							<p className="text-lg">Stop trying to guess what metrics mean and trying to figure out why your PPC ads aren't performing as well.</p>
							<Link
								href={"/quizDetailsPage/quizDetailsCreativeAsset"}
								className="bg-[#FF492C]  w-full py-2 text-white rounded mt-3 flex items-center justify-center gap-2"
							>
								Start Here Know Your Score <BsArrowRight className="text-xl mt-1" />
							</Link>
						</div>
					</div>
				</div>
			</div>
			<FooterTopCta />
		</div>
	);
}

export default Quizzes;
