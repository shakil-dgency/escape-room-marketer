import Image from "next/image";
import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

function FaqSection({ bodyColor, faqSectionData }) {
	const [faqOpen, setFaqOpen] = useState(null);
	const [firstFaqOpen, setFirstFaqOpen] = useState(true);

	const handleFaqOpen = (i) => {
		if (i !== 0 && faqOpen === i) {
			return setFaqOpen(null);
		} else if (i === 0) {
			setFirstFaqOpen(!firstFaqOpen);
		} else {
			setFirstFaqOpen(false);
		}
		setFaqOpen(i);
	};

	return (
		<div className={`g-page_structure ${bodyColor}`}>
			<div className="m-auto pt-10 md:pt-20">
				<h1 className="text-center  text-[20px] md:text-3xl xl:text-[39px] md:leading-[47px]  mx-auto font-extrabold lg:w-[75%] xl:w-[70%] 2xl:w-[75%]">
					{faqSectionData.head_message && faqSectionData.head_message.heading}
				</h1>
				<p className="md:text-lg xl:text-xl 2xl:text-2xl text-center md:px-48 m-auto py-4">
					{faqSectionData.head_message && faqSectionData.head_message.text_line}
				</p>
				<div className="flex justify-center mt-5">
					<Image src="/serveice/faq.svg" alt="" width={300} height={100} className="w-[170px] md:w-[300px]" />
				</div>
			</div>
			<ul className="pl-4 md:pl-20 pb-14 mt-10 list-decimal  md:list-outside md:text-xl font-bold">
				{faqSectionData &&
					faqSectionData.question_answer.map((data, i) => {
						return (
							<li className="md:pl-8" key={data.id}>
								<div className=" border-b-[1px] py-5">
									<div onClick={() => handleFaqOpen(i)} className="flex justify-between">
										<h3 className="text-lg md:text-xl font-bold">{data.question}</h3>
										<MdKeyboardArrowDown className={`arrow_rotate mt-2 text-xl transition-transform duration-300 ${i == 0 ? (firstFaqOpen ? "rotate-180" : " ") : (faqOpen === i ?'rotate-180':'')}`} />
									</div>
									<p
										className={`${
											i == 0 ? (firstFaqOpen ? "block" : "hidden") : faqOpen == i ? "block" : "hidden "
										} bg-[#EAF4FF] p-3 mt-2   text-[16px] md:text-[18px] font-normal pt-2 `}
									>
										{data.answer}
									</p>
								</div>
							</li>
						);
					})}
			</ul>
		</div>
	);
}

export default FaqSection;
