import Image from "next/image";
import React from "react";

function ListOfServeice({ listOfServeiceData, bodyColor }) {
	return (
		<div>
			<div className={`giant_list g-page_structure ${bodyColor} `}>
				{/* <h1 className=" pt-10 md:pt-20 md:px-10 text-center text-xl md:text-3xl xl:text-5xl font-bold"> */}
				<h1 className="g__section-heading pt-10 md:pt-20   text-center mx-auto font-extrabold lg:w-[75%] xl:w-[70%] 2xl:w-[80%]">
					{listOfServeiceData.head_message && listOfServeiceData.head_message.heading}
				</h1>
				<p className="font-graphik md:text-lg xl:text-xl 2xl:text-2xl text-center md:w-[60%] m-auto py-4">
					{listOfServeiceData.head_message && listOfServeiceData.head_message.text_line}
				</p>

				<div className="font-graphik block md:flex md:justify-center md:gap-8 lg:gap-0 lg:justify-between items-center py-14 ">
					{listOfServeiceData.side_img && (
						<Image
							src={`/serveice/${listOfServeiceData.side_img.left_img}`}
							alt=""
							height={100}
							width={150}
							className="hidden md:block w-[130px] h-full"
						/>
					)}
					<ul className=" ml-4 md:ml-0 list-inside md:list-outside list-disc marker:text-[#FF492C] marker:text-xl text-base md:text-[14px] lg:text-lg leading-loose ">
						{listOfServeiceData &&
							listOfServeiceData.list_one.map((data) => {
								return (
									<li className="leading-[2.4] cursor-pointer group relative hover:text-[#FF492C]" key={data.id}>
										{data.list}
										<div className="hidden group-hover:block drop-shadow text-black text-[14px] absolute bottom-12 bg-[var(--section-bg-lightred)] leading-[1.5] p-4 md:w-[200%] lg:w-[230%] z-10 rounded-md before:content-[''] before:absolute before:left-[15%] before:top-[100%]  before:border-[15px] before:border-solid before:border-[var(--section-bg-lightred)] before:border-r-[#0000] before:border-b-[#0000] before:border-l-[#0000]">
											<p>{data.tooltip}</p>
										</div>
										<div className="h-[1.2px]">
											<div
												className={`hidden group-hover:block  border-[1px] border-[#FF492C] ${
													data.list.length <= 22 ? "w-[65%]" : data.list.length <= 28 ? "w-[80%]" : "w-[100%]"
												}`}
											></div>
										</div>
									</li>
								);
							})}
					</ul>
					<ul className=" ml-4 md:ml-0 list-inside md:list-outside list-disc marker:text-[#FF492C] marker:text-xl text-base md:text-[14px] lg:text-lg leading-loose">
						{listOfServeiceData &&
							listOfServeiceData.list_two.map((data) => {
								return (
									<li className="leading-[2.4] cursor-pointer  group relative hover:text-[#FF492C]" key={data.id}>
										{data.list}
										{
											<div className="hidden group-hover:block drop-shadow text-black text-[14px] absolute bottom-12 -left-[135%] right-0 bg-[var(--section-bg-lightred)] leading-[1.5] p-4 md:w-[200%] lg:w-[240%]  rounded-md before:content-[''] before:absolute before:right-[20%] before:top-[100%]  before:border-[15px] before:border-solid before:border-[var(--section-bg-lightred)] before:border-r-[#0000] before:border-b-[#0000] before:border-l-[#0000]">
												<p>{data.tooltip}</p>
											</div>
										}
										<div className="h-[1.2px]">
											<div
												className={`hidden group-hover:block  border-[1px] border-[#FF492C] ${
													data.list.length <= 22 ? "w-[65%]" : data.list.length <= 28 ? "w-[85%]" : "w-[100%]"
												}`}
											></div>
										</div>
									</li>
								);
							})}
					</ul>
					{listOfServeiceData.side_img && (
						<Image
							src={`/serveice/${listOfServeiceData.side_img.right_img}`}
							alt=""
							height={100}
							width={150}
							className="hidden md:block w-[130px] h-full  "
						/>
					)}
					<Image src="/serveice/list_serveice.svg" alt="" width={100} height={100} className="mt-10 mx-auto block md:hidden" />
				</div>
			</div>
		</div>
	);
}

export default ListOfServeice;
