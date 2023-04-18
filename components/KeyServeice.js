import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

function KeyServeice({ bodyColor, cardColor, keyServeiceData }) {
	const [othersCard, setOthersCard] = useState(keyServeiceData.card_content.others_card);
	return (
		<div>
			<div className={`work-together g-page_structure ${bodyColor}  relative`}>
				<div className="main-content  m-auto">
					<h1 className="pt-10 md:pt-20 text-[20px] md:text-4xl 2xl:text-[39px]  text-center mx-auto font-extrabold lg:w-[75%] xl:w-[70%] 2xl:w-[80%]">
						{keyServeiceData.head_message && keyServeiceData.head_message.heading}
					</h1>
					<p className="md:text-lg xl:text-xl 2xl:text-2xl text-center md:w-[60%] m-auto py-4">
						{keyServeiceData.head_message && keyServeiceData.head_message.text_line}
					</p>
				</div>
				<div className="q-card mx-0 md:mx-10 mb-8 mt-10 md:mt-20 grid gap-x-20 gap-y-12 md:grid-cols-1 relative">
					{keyServeiceData.card_content.first_card && (
						<div className={`px-10 py-10 md:col-span-2 rounded ${cardColor} shadow-md  grid md:grid-cols-2 items-center justify-items-center`}>
							<div className=" text-center ">
								<p className="font-bold text-xl">{keyServeiceData.card_content.first_card.heading}</p>
								<p className="text-lg mt-2">{keyServeiceData.card_content.first_card.pera}</p>
							</div>
							<Image src={`${keyServeiceData.card_content.first_card.image}`} alt="" height={100} width={300} className="  " />
						</div>
					)}
					<Image src='/most_populer.svg' alt='' height={100} width={150} className="absolute -top-4 -left-12 -rotate-45"/>
				</div>
				<div className="q-card mx-0 md:mx-10 mb-8 mt-12 md:mt-10 grid gap-x-14 gap-y-12 md:grid-cols-2">
					{othersCard.map((data) => {
						return (
							<div className={`px-10 py-6  rounded ${cardColor} shadow-md`} key={data.heading}>
								<div className=" text-center ">
									<p className="font-bold text-xl">{data.heading}</p>
									<p className="text-lg mt-2">{data.pera}</p>
								</div>
								<Image src={`${data.image}`} alt="" height={100} width={250} className="mt-6 mx-auto" />
							</div>
						);
					})}
				</div>

				<Link href={"/"} className="group flex justify-center items-center gap-2  text-lg md:text-xl list-none text-red-500">
					<p className="font-medium text-center leading-[0px]">
						See all the SEO results we continue to bring
						{/* <span class="material-symbols-outlined translate-y-2 pl-2 text-3xl ">arrow_right_alt</span> */}
					</p>
					<HiArrowNarrowRight className="text-4xl font-bold group-hover:translate-x-1 pt-2  " />
				</Link>
				{/* <HiArrowNarrowRight className="text-3xl font-bold group-hover:translate-x-1 mt-2" /> */}
			</div>
		</div>
	);
}

export default KeyServeice;
