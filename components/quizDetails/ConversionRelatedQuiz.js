import React from "react";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import {BiChevronLeft} from "react-icons/bi";

function ConversionRelatedQuiz() {
	return (
		<div>
			<div className="break_line image bg-[url('/navbar_breakline.svg')] h-[90px]  bg-[length:3200px_90px]   bg-center"></div>
			<div className="quizzes_hero g-page_structure  bg-[#FFF7F5]">
			<Link href={'/resources/quizzes'} className="text-[#FF492C] font-bold text-base flex items-center"><BiChevronLeft className="text-2xl" /> Go Back To All Quiz </Link>
				<h1 className="text-5xl leading-[1.2] text-center font-bold pt-8 pb-16">
					Know Your Escape Room <br /> Website Conversion Score
				</h1>
			</div>
			<div className="break_line image bg-[url('/section_break.svg')] h-[80px] bg-[length:3200px_90px]  bg-center"></div>

			<div className="bg-[#F9FCFF] flex">
				<Image src="/resources/quiz_details/details_hero.svg" alt="" height={100} width={100} className="flex-1 opacity-50" />
				<div className="flex-[2] text-center mt-16">
					{/* <p className="text-lg text-[#FF492C] font-semibold ">ESCAPE ROOM WEBSITE</p>
					<h3 className="text-4xl font-bold pb-3">SEO Quiz</h3>
					<p className="text-lg">
						Could your organic engine be stronger than it is today? Could you drive <br /> more direct revenue with a different SEO focus?
					</p>
					<p className="text-[22px] font-semibold py-6">
						Answer up to 19 questions and we'll tell you how <br /> you measure up.
					</p>
					<p className="text-2xl font-semibold pb-6">No email required to get your results</p>
					<button className="bg-[#FF492C] px-20 py-2 text-white font-semibold rounded">Take The Quiz</button> */}

					<div
						id="zf-widget"
						data-zf-id="uPiMvCNgOF0sN1N6s2DM"
						data-zf-d_id="ZLXBivsWppYpIA8zF"
						data-zf-type="standard"
						style={{ height: "40vh", width: "700px", margin: "auto" }}
					></div>

					<Script src="https://form-assets.forms.gozen.io/cdn/scripts/embed.js"></Script>
				</div>
				<Image src="/resources/quiz_details/details_hero_r.svg" alt="" height={100} width={100} className="flex-1 opacity-50" />
			</div>
		</div>
	);
}

export default ConversionRelatedQuiz;
