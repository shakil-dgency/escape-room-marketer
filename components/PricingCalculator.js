import Image from "next/image";
import React, { useEffect, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsInfoCircle } from "react-icons/bs";
import { HiOutlineInformationCircle } from "react-icons/hi";

let obj = {};

function PricingCalculator({ pricingData }) {
	const [category, setCategory] = useState(null);
	const [itemCategory, setItemCategory] = useState(null);

	const marketingCategoryHandler = (index) => {
		setCategory(index);
	};

	// const abc = (name) => {
	// 	obj.push({ name: name });
	// 	console.log(obj);
	// };

	const serveiceSelectHandler = (itemIndex, itemId, name) => {
		setItemCategory(itemIndex);
		const x = document.getElementById(itemId);

		if (x.classList.contains("text-red-500")) {
			x.classList.remove("text-red-500");
			x.classList.remove("bg-[var(--section-bg-lightred)]");
		} else {
			x.classList.add("text-red-500");
			x.classList.add("bg-[var(--section-bg-lightred)]");

			obj[name] = itemId;
		}
	};
	console.log(obj);

	// useEffect(() => {
	// 	let id;
	// 	let priceCategory = document.getElementsByClassName("price_category");
	// 	for (let i = 0; i < priceCategory.length; i++) {
	// 		priceCategory[i].addEventListener("click", function () {
	// 			if (id) {
	// 				priceCategory[id].classList.remove("text-red-500");
	// 			}

	// 			id = this.id;
	// 			this.classList.add("text-red-500");
	// 		});
	// 	}
	// }, []);

	return (
		<div className="ml-16 mt-10 flex">
			{/* left side button section */}

			<div className="flex-1">
				<div className="">
					{pricingData.main_categories &&
						pricingData.main_categories.map((data, i) => {
							return (
								<div className="lg:mr-20" key={data.id}>
									<div
										onClick={() => marketingCategoryHandler(i)}
										id={data.id}
										className={`${
											category === null && i === 0 ? "text-red-500" : category === i ? "text-red-500" : ""
										} price_category font-circularLight font-semibold rounded-md border-[#6B7280] border-[1.5px] text-xl px-8 py-4  mb-5 bg-[#F5F5F5] flex justify-between items-center`}
									>
										{data.title}{" "}
										<MdKeyboardArrowDown
											className={`text-2xl transition-transform duration-300 ${
												category === null && i === 0 ? "rotate-180" : category === i ? "rotate-180" : ""
											}`}
										/>
									</div>
									<div
										className={` ml-10 transition-transform duration-500 ${
											category === null && i === 0 ? "block" : category === i ? "block" : "hidden"
										} `}
									>
										<p className=" mb-6">You can choose multiple option</p>
										{data.main_item &&
											data.main_item.map((item, a) => {
												return (
													<div
														onClick={() => serveiceSelectHandler(a, item.id, item.item_title)}
														className={`${
															itemCategory === a ? "" : ""
														} flex items-center bg-[var(--section-bg-lightblue)] hover:bg-[var(--section-bg-lightred)] rounded-md shadow hover:drop-shadow-md mb-5 px-4 py-1`}
														key={item.id}
														id={item.id}
													>
														<div className="group flex items-center gap-4 w-full">
															<Image src="/navbar/ppc_agency.png" alt="" height={60} width={60} className="" />
															<p className="text-lg font-semibold group-hover:text-red-500 ">{item.item_title}</p>
														</div>
														{/* <Image src="/pricing/tooltip.svg" alt="" height={60} width={20} className="absolute right-4 bg-red-500" /> */}
														<div className="group ">
															<HiOutlineInformationCircle className=" text-center  text-[#6B7280] text-[20px] hover:text-red-500" />
															<div className="hidden group-hover:block absolute top-0 left-[100%] -right-[100%] bg-[var(--section-bg-lightred)] px-4 py-2">
																<p className="">{item.description}</p>
															</div>
														</div>
													</div>
												);
											})}
									</div>
								</div>
							);
						})}
				</div>
			</div>

			<div className="flex-1"></div>
		</div>
	);
}

export default PricingCalculator;
