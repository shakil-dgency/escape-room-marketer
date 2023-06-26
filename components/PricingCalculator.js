import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsInfoCircle } from "react-icons/bs";
import { HiOutlineInformationCircle } from "react-icons/hi";

let obj = {};
let finalobj = {};
let prevObjectLength;
let serviceItemIndex = [];

function PricingCalculator({ pricingData }) {
	const [category, setCategory] = useState(null);
	const [firstItemOpen, setFirstItemOpen] = useState(true);
	const [itemCategory, setItemCategory] = useState(null);
	const [toggle, setToggle] = useState(true);
	let [sum, setSum] = useState(0);
	let [discountPrice, setDiscountPrice] = useState(0);
	let [totalDiscountSum, setTotalDiscountSum] = useState(0);

	const [nameField, setNameField] = useState();

	let itemRef = useRef();

	const marketingCategoryHandler = (index) => {
		if (category === index) {
			setCategory(null);
		} else if (index === 0) {
			setFirstItemOpen(!firstItemOpen);
		} else {
			setCategory(index);
			setFirstItemOpen(false);
		}

		setToggle(!toggle);

		console.log(category);
	};

	const serveiceSelectHandler = (itemIndex, itemId, name, price) => {
		setItemCategory(itemIndex);
		const x = document.getElementById(itemId);
		const itemCheck = document.getElementById(itemIndex + 100);
		// to render this Component, have to change state
		setToggle(!toggle);

		if (x.classList.contains("text-red-500")) {
			Object.entries(obj).map(([key, value]) => {
				if (name === key) {
					delete obj[key];
					x.classList.remove("text-red-500");
					x.classList.remove("bg-[var(--section-bg-lightred)]");
					itemCheck.classList.remove("border-red-500");
					itemCheck.firstChild.classList.remove("bg-red-500");
				}
			});
		} else {
			x.classList.add("text-red-500");
			x.classList.add("bg-[var(--section-bg-lightred)]");
			obj[name] = price;
			prevObjectLength = Object.keys(obj).length;
			itemCheck.classList.remove("border-gray-500");
			itemCheck.classList.add("border-red-500");
			itemCheck.firstChild.classList.add("bg-red-500");
		}

		if (prevObjectLength > Object.keys(obj).length) {
			setSum(sum - price);

			if (Object.keys(obj).length < 2) {
				setDiscountPrice(0);
			} else if (Object.keys(obj).length > 1) {
				let substractTotal = sum - price;
				let discountedTotal = (substractTotal * 10) / 100;
				setDiscountPrice(substractTotal - discountedTotal);
				setTotalDiscountSum(discountedTotal);
			}
		} else {
			Object.entries(obj).map(([key, value], i) => {
				let objLength = Object.keys(obj).length;
				if (i === objLength - 1) {
					setSum((sum += value));

					if (objLength >= 2) {
						let getDiscount = (sum * 10) / 100;
						let discountPrice = sum - getDiscount;
						setDiscountPrice(discountPrice);
						setTotalDiscountSum(sum - discountPrice);
					}
				}
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
	// const handlecalculate = () => {
	// 	let x = Object.entries(obj).map(([key, value]) => {
	// 		return value;
	// 	});
	// 	return x;
	// };

	const mailSendHandler = () => {
		console.log(nameField);
		finalobj = { ...obj, nameField };

		console.log(finalobj);
	};

	return (
		<div className="ml-2 md:ml-16 mt-6 md:mt-10 flex flex-col md:flex-row">
			{/* left side button section */}

			<div className="flex-1 md:border-r-[#D9D9D9] md:border-r-[2px]">
				<div className="">
					{pricingData.main_categories &&
						pricingData.main_categories.map((data, i) => {
							return (
								<div className="mr-2 md:mr-6 lg:mr-14" key={data.id}>
									<div
										onClick={() => marketingCategoryHandler(i)}
										id={data.id}
										className={`${
											firstItemOpen == true && i === 0 ? "text-red-500" : category === i ? "text-red-500" : ""
										} price_category font-circularLight font-semibold rounded-md border-[#6B7280] border-[1.5px] text-lg md:text-xl px-2 py-1 md:px-8  md:py-4 mb-2 md:mb-5 bg-[#F5F5F5] flex justify-between items-center`}
									>
										{data.title}{" "}
										<MdKeyboardArrowDown
											className={`text-2xl transition-transform duration-300 ${
												category === null && category === 0 ? "rotate-180" : category === i ? "rotate-180" : ""
											}`}
										/>
									</div>
									<div
										className={` ml-7 transition-transform duration-500 ${
											firstItemOpen === true && i === 0 ? "block" : category === i && category !== null ? "block" : "hidden"
										} `}
									>
										<p className="mb-3 md:mb-6 ">You can choose multiple option</p>
										{data.main_item &&
											data.main_item.map((item, a) => {
												return (
													<div className="" key={item.id}>
														<div
															onClick={() => serveiceSelectHandler(a, item.id, item.item_title, item.price)}
															className={`${
																itemCategory === a ? "" : ""
															} flex items-center bg-[var(--section-bg-lightblue)] md:hover:bg-[var(--section-bg-lightred)] rounded-md shadow hover:drop-shadow-md mb-2 md:mb-5 px-1 md:px-4 md:py-1`}
															id={item.id}
														>
															<div
																id={a + 100}
																className={`
																	
																w-5 h-5 border-gray-500  border-2 -ml-10 mr-2 rounded-full flex justify-center items-center`}
															>
																<div className="w-3 h-3   rounded-full"></div>
															</div>
															<div className="group flex items-center gap-2 md:gap-4 w-full">
																<Image src="/navbar/ppc_agency.png" alt="" height={60} width={60} className="" />
																<p className="font-graphik md:text-lg font-medium md:group-hover:text-red-500 ">{item.item_title}</p>
															</div>
															{/* <Image src="/pricing/tooltip.svg" alt="" height={60} width={20} className="absolute right-4 bg-red-500" /> */}
															<div className="group ">
																<HiOutlineInformationCircle className=" text-center  text-[#6B7280] text-[20px] md:hover:text-red-500" />
																<div className="hidden group-hover:block absolute ml-2 bottom-[80px] left-[-20px] md:bottom-3 md:top-[-50%] md:left-[100%] md:-right-[100%] md:translate-y-[25%] bg-[var(--section-bg-lightred)] px-4 py-2">
																	<p className="">{item.description}</p>
																</div>
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
				<div className="ml-0 lg:ml-14 mr-2 lg:mr-16">
					<h4 className="bg-[#F5F5F5] text-center px-2 py-1 mt-3 md:mt-0 font-graphik text-base lg:text-[17px] rounded-md">
						Choose multiple service and get <span className="text-red-500 ">10-25% discount</span>{" "}
					</h4>

					<div className=" mt-3 md:mt-[30px] w-full h-[320px]  resize-none border-none outline-none bg-[#F8F8F8] px-8 py-3 overflow-y-scroll ">
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
					<div className="bg-[#EFFFE3] rounded-md px-3 md:px-8 py-4 mt-5 md:mt-[35px]">
						<div className="flex justify-between items-center font-graphik">
							<p className="md:text-xl">Total Estimate Price</p>
							<div className="relative md:text-[20px] lg:text-[28px] text-[#5E9733] font-bold">
								${sum}.00
								<div
									className={`${
										sum === 0 || Object.keys(obj).length < 2 ? "" : sum >= 1000 ? "w-[135px]" : "w-[70px] md:w-[90px] lg:w-[120px]"
									} absolute z-10 -left-1 top-3 lg:top-5 border-t-2 border-[#FF492C]  rotate-[9deg]`}
								></div>
							</div>
						</div>
						{discountPrice !== 0 && (
							<div className="flex justify-between items-center mt-1 font-graphik">
								<div className="">
									<button className="bg-[#FF492C] rounded-md md:px-3 md:py-1 text-white font-semibold ">SAVE 10% </button>
									<span className="ml-2 font-semibold">(${totalDiscountSum})</span>
								</div>
								<p className="lg:text-[28px] text-[#FF492C] font-bold">${discountPrice}.00</p>
							</div>
						)}
						{discountPrice === 0 && (
							<div className="clip-path text-center mt-2 bg-[#FF492C] text-white px-2 py-1">
								<p className=" font-graphik ">To get a discount choose Multiple serveice</p>
							</div>
						)}
					</div>
					<div className="mt-[20px]">
						<div className="md:flex justify-between gap-2 ">
							<input
								onChange={(e) => setNameField(e.target.value)}
								type="text"
								placeholder="Your Name"
								className="flex-1 w-full md:w-0 mb-2 md:mb-0 bg-[#F5F5F5] outline-0 rounded-md border-[1px] px-2 py-1"
							/>
							<input
								type="text"
								placeholder="Company Name"
								className="flex-1 w-full md:w-0 mb-2 md:mb-0 bg-[#F5F5F5] outline-0 rounded-md border-[1px] px-2 py-1"
							/>
						</div>
						<div className="md:flex justify-between gap-2 md:mt-3">
							<input
								type="text"
								placeholder="Write your email"
								className="flex-1 w-full md:w-0 mb-2 md:mb-0 bg-[#F5F5F5] outline-0 rounded-md border-[1px] px-2 py-1"
							/>
							<input
								type="number"
								placeholder="Your Phone Number"
								className="flex-1 w-full md:w-0 mb-2 md:mb-0 bg-[#F5F5F5] outline-0 rounded-md border-[1px] px-2 py-1"
							/>
						</div>
						<button onClick={mailSendHandler} className=" w-full bg-[#6B7280] px-3 py-1 text-white rounded-md mt-3">
							GET QUOTE
						</button>
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
