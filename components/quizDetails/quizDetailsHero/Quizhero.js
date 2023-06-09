import Link from "next/link";
import React from "react";
import { BiChevronLeft } from "react-icons/bi";

function Quizhero({ heading }) {
	return (
		<div>
			<div className="break_line image bg-[url('/navbar_breakline.svg')] h-[90px]  bg-[length:3200px_90px]   bg-center"></div>
			<div className="quizzes_hero g-page_structure bg-[#FFF7F5]  relative before:content-[''] before:absolute before:top-[-20px] before:right-0 before:bottom-[-40px] before:left-0 z-10 before:bg-[url('/resources/quiz_hero_background.png')] before:bg-[length:300px_300px] before:bg-center before:opacity-10">
				<Link href={"/quizzes"} className="text-[#FF492C] font-bold text-base flex items-center absolute ">
					<BiChevronLeft className="text-2xl" /> Go Back To All Quiz
				</Link>
				<h1 className="text-5xl leading-[1.2] text-center font-bold pt-8 pb-16">
					Know Your Escape Room <br /> {heading}
				</h1>
			</div>
			<div className="break_line image bg-[url('/section_break.svg')] h-[80px] bg-[length:3200px_90px]  bg-center"></div>
		</div>
	);
}

export default Quizhero;
