import Link from "next/link";
import React from "react";
import { BiChevronLeft } from "react-icons/bi";

function Casehero({ heading }) {
	return (
		<div>
			<div className="break_line image bg-[url('/navbar_breakline.svg')] h-[90px]  bg-[length:3200px_90px]   bg-center"></div>
			<div className=" bg-[url('/team/marketing_team.svg')] bg-center px-10 py-5 text-center ">
				<Link href={"/quizzes"} className="text-[#FF492C] font-bold text-base flex items-center absolute ">
					<BiChevronLeft className="text-2xl" /> Go Back To All Quiz
				</Link>
				<h1 className="text-5xl leading-[1.2] text-center font-bold pt-8 pb-16">
					Know Your Escape Room <br /> {heading}
				</h1>
			</div>
		</div>
	);
}

export default Casehero;
