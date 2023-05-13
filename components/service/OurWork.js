import Image from "next/image";
import React from "react";

function OurWork({ ourWorkData }) {
	return (
		<div className="bg-[#f9fcff]">
			<div className="g-page_structure pt-10">
				<h1 className="g__section-heading pt-14   text-center mx-auto font-extrabold lg:w-[75%] xl:w-[70%] 2xl:w-[80%]">
					{ourWorkData.head_message && ourWorkData.head_message.heading}
				</h1>
				<p className="font-graphik text-center text-[16px] md:text-2xl pt-4">{ourWorkData.head_message && ourWorkData.head_message.text_line}</p>
				<div className="flex flex-col md:flex-row gap-5 py-20">
					{ourWorkData.card_content &&
						ourWorkData.card_content.map((data) => {
							return (
								<div className="flex-1 shadow-md px-6 py-8 rounded bg-[#fafafa]" key={data.heading}>
									<div className="">
										<Image src={`/serveice/${data.image}`} alt="" width={200} height={300} className="mx-auto w-[200px] h-[200px] object-contain" />
									</div>
									<h1 className="font-circular text-2xl font-bold text-center pt-5">{data.heading}</h1>
									<p className="font-graphik text-lg md:text-xl text-center pt-2">{data.pera}</p>
								</div>
							);
						})}
				</div>
			</div>
		</div>
	);
}

export default OurWork;
