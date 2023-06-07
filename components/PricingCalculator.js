import Image from "next/image";
import React, { useEffect, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsInfoCircle } from "react-icons/bs";
import { HiOutlineInformationCircle } from "react-icons/hi";

let obj = {};
let prevObjectLength;

function PricingCalculator({ pricingData }) {
	const [category, setCategory] = useState(null);
	const [itemCategory, setItemCategory] = useState(null);
	const [toggle, setToggle] = useState(false);
	let [sum, setSum] = useState(0);

	const marketingCategoryHandler = (index) => {
		setCategory(index);
	};

	// const abc = (name) => {
	// 	obj.push({ name: name });
	// 	console.log(obj);
	// };

	const serveiceSelectHandler = (itemIndex, itemId, name, price) => {
		setItemCategory(itemIndex);
		const x = document.getElementById(itemId);
		// to render this Component, have to change state
		setToggle(!toggle);

		if (x.classList.contains("text-red-500")) {
			Object.entries(obj).map(([key, value]) => {
				if (name === key) {
					delete obj[key];
					x.classList.remove("text-red-500");
					x.classList.remove("bg-[var(--section-bg-lightred)]");
				}
			});
		} else {
			x.classList.add("text-red-500");
			x.classList.add("bg-[var(--section-bg-lightred)]");
			obj[name] = price;
			prevObjectLength = Object.keys(obj).length;
		}
		// console.log(prevObjectLength);

		if (prevObjectLength > Object.keys(obj).length) {
			setSum(sum - price);
		} else {
			console.log("sumition", prevObjectLength, Object.keys(obj));

			Object.entries(obj).map(([key, value], i) => {
				if (i === Object.keys(obj).length - 1) {
					setSum((sum += value));
				}
				console.log();
			});
		}
	};

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
	const handlecalculate = () => {
		let x = Object.entries(obj).map(([key, value]) => {
			return value;
		});
		return x;
	};

	return (
		<div className="ml-16 mt-10 flex">
			{/* left side button section */}

			<div className="flex-1 border-r-[#D9D9D9] border-r-[2px]">
				<div className="">
					{pricingData.main_categories &&
						pricingData.main_categories.map((data, i) => {
							return (
								<div className="mr-6 lg:mr-14" key={data.id}>
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
														onClick={() => serveiceSelectHandler(a, item.id, item.item_title, item.price)}
														className={`${
															itemCategory === a ? "" : ""
														} flex items-center bg-[var(--section-bg-lightblue)] hover:bg-[var(--section-bg-lightred)] rounded-md shadow hover:drop-shadow-md mb-5 px-4 py-1`}
														key={item.id}
														id={item.id}
													>
														<div className="group flex items-center gap-4 w-full">
															<Image src="/navbar/ppc_agency.png" alt="" height={60} width={60} className="" />
															<p className="font-graphik text-lg font-medium group-hover:text-red-500 ">{item.item_title}</p>
														</div>
														{/* <Image src="/pricing/tooltip.svg" alt="" height={60} width={20} className="absolute right-4 bg-red-500" /> */}
														<div className="group ">
															<HiOutlineInformationCircle className=" text-center  text-[#6B7280] text-[20px] hover:text-red-500" />
															<div className="hidden group-hover:block absolute ml-2 top-[-50%] left-[100%] -right-[100%] translate-y-[25%] bg-[var(--section-bg-lightred)] px-4 py-2">
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

			<div className="flex-1">
				<div className="ml-6 lg:ml-14 mr-8 lg:mr-16">
					<h4 className="bg-[#F5F5F5] text-center px-2 py-1 font-graphik text-base lg:text-[17px] rounded-md">
						Choose multiple service and get <span className="text-red-500 ">10-25% discount</span>{" "}
					</h4>

					<div className="mt-[30px] w-full h-[320px]  resize-none border-none outline-none bg-[#F8F8F8] px-8 py-3 overflow-y-scroll ">
						<ul>
							{obj !== null &&
								Object.entries(obj).map(([key, value], i) => {
									return (
										<li key={i} className="flex justify-between">
											{" "}
											<h5 className="text-[16px]">{key}</h5> <p className="text-[22px] text-[#72BD39] font-semibold">${value}</p>{" "}
										</li>
									);
								})}
						</ul>
					</div>
					<div className="bg-[#EFFFE3] rounded-md px-8 py-4 mt-[35px]">
						<div className="flex justify-between items-center font-graphik">
							<p className="md:text-xl">Total Estimate Price</p>
							<div className="relative md:text-[20px] lg:text-[28px] text-[#5E9733] font-bold">
								${sum}.00
								<div
									className={`${
										sum === 0 || prevObjectLength < 2 ? "" : sum >= 1000 ? "w-[135px]" : "w-[70px] md:w-[90px] lg:w-[120px]"
									} absolute z-10 -left-1 top-3 lg:top-5 border-t-2 border-[#FF492C]  rotate-[9deg]`}
								></div>
							</div>
						</div>
						<div className="flex justify-between items-center mt-1 font-graphik">
							<button className="bg-[#FF492C] rounded-md md:px-3 md:py-1 text-white font-semibold ml-[70px]">SAVE 10%</button>
							<p className="lg:text-[28px] text-[#FF492C] font-bold">$100.00</p>
						</div>
					</div>
					<div className="mt-[20px]">
						<div className="md:flex justify-between gap-2">
							<input type="text" placeholder="Your Name" className="w-full bg-[#F5F5F5] outline-none rounded-md border-[1px] px-2 py-1" />
							<input type="text" placeholder="Company Name" className="w-full bg-[#F5F5F5] outline-none rounded-md border-[1px] px-2 py-1" />
						</div>
						<div className="flex mt-3">
							<input type="text" placeholder="Write your email" className="flex-1 bg-[#F5F5F5] outline-none rounded-md border-[1px] px-2 py-1" />
							<button className=" flex-2 bg-[#6B7280] px-3 py-1 text-white rounded-md ml-3">GET QUOTE</button>
						</div>
					</div>
					<p className="text-lg mt-5">
						NB: This price for monthly service fees and its various for requirement. <span className="text-red-500">Contact Us</span> for a consultant
					</p>
				</div>
			</div>
		</div>
	);
}

export default PricingCalculator;
