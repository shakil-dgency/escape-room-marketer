import Image from "next/image";
import React from "react";

function ListOfServeice({ listOfServeiceData, bodyColor }) {
	return (
		<div>
			<div className={`giant_list g-page_structure ${bodyColor} `}>
				{/* <h1 className=" pt-10 md:pt-20 md:px-10 text-center text-xl md:text-3xl xl:text-5xl font-bold"> */}
				<h1 className=" pt-10 md:pt-20 text-[20px] md:text-4xl 2xl:text-[39px]  text-center mx-auto font-extrabold lg:w-[75%] xl:w-[70%] 2xl:w-[80%]">
					{listOfServeiceData.head_message && listOfServeiceData.head_message.heading}
				</h1>
				<p className="md:text-lg xl:text-xl 2xl:text-2xl text-center md:w-[60%] m-auto py-4">
					{listOfServeiceData.head_message && listOfServeiceData.head_message.text_line}
				</p>

				<div className="block md:flex justify-between items-center py-14 ">
					{listOfServeiceData.side_img && (
						<Image src={`/serveice/${listOfServeiceData.side_img.left_img}`} alt="" height={100} width={150} className="hidden md:block" />
					)}
					<ul className=" ml-4 md:ml-0 list-inside md:list-outside list-disc marker:text-[#6adaf7] marker:text-xl text-base md:text-lg leading-loose ">
						{listOfServeiceData &&
							listOfServeiceData.list_one.map((data) => {
								return (
									<li className="leading-[2.4] group relative" key={data.id}>
										{data.list}
										<div className="hidden group-hover:block absolute -top-[95px] bg-blue-300 leading-[1.5] p-2 ">
											<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, sint?</p>
										</div>
									</li>
								);
							})}
					</ul>
					<ul className=" ml-4 md:ml-0 list-inside md:list-outside list-disc marker:text-[#6adaf7] marker:text-xl text-base md:text-lg leading-loose">
						{listOfServeiceData &&
							listOfServeiceData.list_two.map((data) => {
								return (
									<li className="leading-[2.4]" key={data.id}>
										{data.list}
									</li>
								);
							})}
					</ul>
					{listOfServeiceData.side_img && (
						<Image src={`/serveice/${listOfServeiceData.side_img.right_img}`} alt="" height={100} width={150} className="hidden md:block" />
					)}
					<Image src="/serveice/list_serveice.svg" alt="" width={100} height={100} className="mt-10 mx-auto block md:hidden" />
				</div>
			</div>
		</div>
	);
}

export default ListOfServeice;
