import Image from "next/image";
import React from "react";

function CardContent({ cardContentData, bodyColor, cardColor }) {
	return (
		<div>
			<div className={`g-page_structure  ${bodyColor}`}>
				<h1 className="g__section-heading pt-10  text-center mx-auto font-extrabold lg:w-[75%] xl:w-[70%] 2xl:w-[80%]">
					{cardContentData.head_message && cardContentData.head_message.heading}
				</h1>
				<p className="font-graphik md:text-lg xl:text-xl 2xl:text-2xl text-center md:w-[60%] m-auto py-4">
					{cardContentData.head_message && cardContentData.head_message.text_line}
				</p>

				<div className=" grid  md:grid-cols-3 gap-x-6 gap-y-7 md:gap-y-4 py-12">
					{cardContentData &&
						cardContentData.cards.map((data) => {
							return (
								<div className={`card  flex flex-col items-center shadow rounded py-10 ${cardColor} `} key={data.id}>
									<h3 className="font-graphik text-[22px] font-bold mb-10">{data.title}</h3>
									<Image src={`/serveice/${data.image}`} alt="" height={100} width={230} className="mx-auto w-[200px] h-[200px] object-contain" />
								</div>
							);
						})}
				</div>
			</div>
		</div>
	);
}

export default CardContent;
