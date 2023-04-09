"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { RiErrorWarningFill } from "react-icons/ri";
import { sendContactForm } from "@/lib/api";
// import "bootstrap/dist/css/bootstrap.min.css";
// import styles from "@/styles/Freemarketing.module.css";

const initValues = {
	serveice1: "",
	serveice2: "",
	serveice3: "",
	serveice4: "",
	serveice5: "",
	serveice6: "",
	serveice7: "",
	goal1: "",
	goal2: "",
	goal3: "",
	goal4: "",
	goal5: "",
	name: "",
	email: "",
};

const initState = { values: initValues };

function Freemarketing() {
	const [state, setState] = useState(initState);
	const [count, setCount] = useState(0);
	const [load, setLoad] = useState(false);

	const { values } = state;

	const handleClick = (e) => {
		event.preventDefault();
		//  setBgcolor(!bgcolor)

		setState((prev) => ({
			...prev,
			values: {
				...prev.values,
				[e.target.name]: e.target.value,
			},
		}));

		if (e.target.classList.contains("bg-white")) {
			e.target.classList.remove("bg-white");
			e.target.classList.add("bg-red-100", "text-red-500", "border-red-500");
			setCount(count + 1);
			alartRef.current.classList.add("hidden");
			alartRef2.current.classList.add("hidden");
		} else if (e.target.classList.contains("bg-red-100")) {
			e.target.classList.remove("bg-red-100", "text-red-500", "border-red-500");
			e.target.classList.add("bg-white");
			// console.log(e.target.classList);
			setCount(count - 1);
		}
	};

	const myref = useRef();
	const secondRef = useRef();
	const thirdRef = useRef();
	const alartRef = useRef();
	const alartRef2 = useRef();

	const onSubmit = async () => {
		setState((prev) => ({
			...prev,
		}));
		await sendContactForm(values);
	};

	const changeHandler = (a, e) => {
		if (count !== 0) {
			setLoad(true);
			e.target.classList.add("bg-[#f9868a]");
			setCount(0);
			if (a == 1) {
				// e.target.classList.add("hidden");
				// chakraRef.current.classList.remove("hidden");
				// chakraRef1.current.classList.remove("hidden");
				setTimeout(() => {
					myref.current.classList.remove("block");
					myref.current.classList.add("hidden");
					secondRef.current.classList.remove("hidden");
					// chakraRef.current.classList.add("hidden");
					setLoad(false);
				}, 1000);
			} else if (a == 2) {
				// e.target.classList.add("hidden");
				// chakraRef1.current.classList.remove("hidden");
				setTimeout(() => {
					secondRef.current.classList.add("hidden");
					thirdRef.current.classList.remove("hidden");
					setLoad(false);
				}, 1000);
			}
		} else {
			if (a == 1) {
				alartRef.current.classList.remove("hidden");
				alartRef.current.classList.add("flex");
			} else if (a == 2) {
				alartRef2.current.classList.remove("hidden");
				alartRef2.current.classList.add("flex");
			}
			console.log(alartRef);
		}
	};
	return (
		<div className=" pt-[4rem] md:pt-[6rem] ">
			<div className="break_line image bg-[url('/page_broke.png')] h-[75px] bg-[length:1600px_90px] bg-center -mt-8 bg-[#FAFAFA]"></div>
			<div className="hero_section  bg-[#FAFAFA] lg:relative lg:h-[800px] 2xl:h-[inherit]">
				<div className="hero_text md:px-[10%] xl:px-[20%] ">
					<h1 className=" text-center md:px-16 pt-4 md:pt-10 text-2xl md:text-3xl 2xl:text-5xl font-extrabold ">
						The Performance Marketing Agency That Moves Fast & Breaks Things
					</h1>
					<p className="md:text-lg xl:text-xl 2xl:text-2xl text-center md:px-40 m-auto pt-4 pb-6 lg:pb-0">
						Like sales records, plateaus, and your competitors hearts. The only things we don`t break? Our promises and the bank.
					</p>
				</div>
				<div className="hero_img px-[10%]">
					<Image src="/freemarketing/proposal-form-illustration-brains.svg" alt="" width={100} height={100} className="h-[100%] w-full hidden lg:block " />
				</div>
				<div
					ref={myref}
					className="form_card block lg:absolute shadow-2xl top-[50%] left-[50%] lg:translate-x-[-50%] lg:translate-y-[-20%] bg-white w-[100%] lg:w-[1000px] px-8 md:px-20 py-8"
				>
					<h1 className="text-center text-xl md:text-3xl font-semibold">What do you need help with?</h1>
					<p className="text-lg md:text-2xl text-center pb-6">Select all that apply</p>
					<form action="" className=" flex flex-col lg:grid lg:grid-cols-6 items-center gap-3 lg:gap-6">
						<button
							onClick={handleClick}
							name="serveice1"
							value="Paid Advertising"
							className={`border-2 w-full hover:bg-red-50 rounded shadow-lg px-4 py-3 md:text-lg xl:text-2xl col-start-[1] col-end-[3] bg-white `}
						>
							Paid Advertising
						</button>
						<button
							onClick={handleClick}
							name="serveice2"
							value="Content Marketing"
							className={`border-2 w-full hover:bg-red-50 rounded shadow-lg px-4 py-3 md:text-lg xl:text-2xl col-start-[3] col-end-[5] bg-white`}
						>
							Content Marketing
						</button>
						<button
							onClick={handleClick}
							name="serveice3"
							value="Email Marketing"
							className="border-2 w-full  hover:bg-red-50 rounded shadow-lg px-4 py-3 md:text-lg xl:text-2xl col-start-[5] col-end-[7] bg-white"
						>
							Email Marketing
						</button>
						<button
							onClick={handleClick}
							name="serveice4"
							value="Creative Work"
							className="border-2 w-full  hover:bg-red-50 rounded shadow-lg px-4 py-3 md:text-lg xl:text-2xl col-start-[1] col-end-[3] bg-white"
						>
							Creative Work
						</button>
						<button
							onClick={handleClick}
							name="serveice5"
							value="SEO"
							className="border-2 w-full hover:bg-red-50 rounded shadow-lg px-4 py-3 md:text-lg xl:text-2xl col-start-[3] col-end-[4] bg-white"
						>
							SEO
						</button>
						<button
							onClick={handleClick}
							name="serveice6"
							value="Conversion Rate Optimization"
							className="border-2 w-full  hover:bg-red-50 rounded shadow-lg px-4 py-3 md:text-lg xl:text-2xl col-start-[4] col-end-[7] bg-white"
						>
							Conversion Rate Optimization
						</button>
						<button
							onClick={handleClick}
							name="serveice7"
							value="Other"
							className="border-2 w-full  hover:bg-red-50 rounded shadow-lg px-4 py-3 md:text-lg xl:text-2xl col-start-[3] col-end-[5] bg-white"
						>
							Other
						</button>
					</form>
					<div className="flex justify-center mt-6">
						<button
							onClick={(e) => changeHandler(1, e)}
							className="bg-[#ff5056] w-[450px] py-3 px-3 md:px-0 text-white  md:text-lg 2xl:text-2xl rounded font-semibold"
						>
							{load === true ? "Please Wait..." : "START MY FREE MARKETING PLAN"}
						</button>
					</div>
					{/* <div ref={chakraRef} className="chakra_loading  hidden">
						<Skeleton startColor="pink.500" endColor="green.500" height="25px" />
					</div> */}

					<div ref={alartRef} className="alart hidden items-center gap-6 mt-4 bg-orange-100 py-2 pl-6 rounded">
						<RiErrorWarningFill className="text-2xl text-orange-400 font-bold " />
						<p className="text-xl font-semibold">You must choose at least one service to continue</p>
					</div>
				</div>
				<div
					ref={secondRef}
					className="second_card hidden lg:absolute shadow-2xl top-[50%] left-[50%] lg:translate-x-[-50%] lg:translate-y-[-20%] bg-white w-[100%] lg:w-[1000px] px-8 md:px-20 py-8"
				>
					<h1 className="text-center text-xl md:text-3xl font-semibold">What are your goals?</h1>
					<p className="text-lg md:text-2xl text-center pb-6">Select all that apply</p>
					<form action="" className=" flex flex-col lg:grid lg:grid-cols-6 items-center gap-3 lg:gap-6">
						<button
							onClick={handleClick}
							name="goal1"
							value="Get more conversions"
							className={`border-2 w-full hover:bg-red-50 rounded shadow-lg px-4 py-3 md:text-lg xl:text-2xl col-start-[1] col-end-[4] bg-white `}
						>
							Get more conversions
						</button>
						<button
							onClick={handleClick}
							name="goal2"
							value="Lower my acquisition cost"
							className={`border-2 w-full hover:bg-red-50 rounded shadow-lg px-4 py-3 md:text-lg xl:text-2xl col-start-[4] col-end-[7] bg-white`}
						>
							Lower my acquisition cost
						</button>
						<button
							onClick={handleClick}
							name="goal3"
							value="Improve my ROI"
							className="border-2 w-full  hover:bg-red-50 rounded shadow-lg px-4 py-3 md:text-lg xl:text-2xl col-start-[1] col-end-[3] bg-white"
						>
							Improve my ROI
						</button>
						<button
							onClick={handleClick}
							name="goal4"
							value="All of the above"
							className="border-2 w-full  hover:bg-red-50 rounded shadow-lg px-4 py-3 md:text-lg xl:text-2xl col-start-[3] col-end-[5] bg-white"
						>
							All of the above
						</button>
						<button
							onClick={handleClick}
							name="goal5"
							value="Other"
							className="border-2 w-full hover:bg-red-50 rounded shadow-lg px-4 py-3 md:text-lg xl:text-2xl col-start-[5] col-end-[6] bg-white"
						>
							Other
						</button>
					</form>
					<div className="flex justify-center mt-6">
						<button
							onClick={(e) => changeHandler(2, e)}
							className="bg-[#ff5056] w-[450px] py-3 px-3 md:px-5 text-white  md:text-lg 2xl:text-2xl rounded font-semibold"
						>
							{load === true ? "Please Wait..." : "ALMOST THERE"}
						</button>
					</div>
					<div ref={alartRef2} className="alart2 hidden items-center gap-6 mt-4 bg-orange-100 py-2 pl-6 rounded">
						<RiErrorWarningFill className="text-2xl text-orange-400 font-bold " />
						<p className="text-xl font-semibold">You must choose at least one service to continue</p>
					</div>
				</div>
				<div
					ref={thirdRef}
					className="third-form hidden lg:absolute shadow-2xl top-[50%] left-[50%] lg:translate-x-[-50%] lg:translate-y-[-20%] bg-white w-[100%] lg:w-[1000px] "
				>
					<div className="flex gap-5">
						<div className="flex-[4] px-8 md:px-14 py-12">
							<h1 className="text-center md:px-8 text-lg md:text-xl font-semibold">
								We’re putting your marketing plan & pricing options together. Who can we send them to?
							</h1>
							<form action="" className="flex gap-6 text-xl mt-8">
								<div>
									<label htmlFor="name">Your Name*</label> <br />
									<input
										type="text"
										id="name"
										name="name"
										onChange={handleClick}
										className="p-2 border-2 border-gray-400 outline-none w-[270px]  mt-1"
									/>
								</div>
								<div>
									<label htmlFor="email">Your Business Email*</label>
									<br />
									<input
										type="email"
										id="email"
										name="email"
										onChange={handleClick}
										className="p-2 border-2 border-gray-400 outline-none w-[270px] mt-1"
									/>
								</div>
							</form>
							<div className="flex justify-center mt-8">
								<button onClick={onSubmit} className="bg-[#ff5056]  py-3 px-3 md:px-5 text-white  md:text-lg 2xl:text-2xl rounded font-semibold">
									START MY FREE MARKETING PLAN
								</button>
							</div>
						</div>
						<div className="flex-[2] bg-[#f9f9f9] border-[8px] border-[#f2f2f2] p-4 ">
							<div className="img-text flex flex-col items-center border-b-[3px] border-gray-300 pb-6">
								<Image src={"/freemarketing/prefer_call.svg"} alt="" width={140} height={200} />
								<h1 className=" font-semibold text-xl">Prefer to call?</h1>
								<p className=" text-xl text-center">Call us directly and we can get the ball rolling.</p>
							</div>
							<div className="text-center mt-4">
								<h1 className="text-xl font-bold">CALL NOW</h1>
								<p className="text-xl pt-2 text-red-500 font-semibold">+8801722510266</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="break_line image bg-[url('/page_broke.png')] h-[75px] bg-[length:1600px_90px] bg-center -mt-6 rotate-180"></div>
			<div className=" g-page_structure">
				<div className="main-content  m-auto">
					<h1 className="text-center md:px-16 xl:px-28 md:pt-14 pt-4 text-xl md:text-3xl xl:text-5xl font-bold">
						Take A Sneak Peek Into What A Marketing Plan Looks Like
					</h1>
					<p className="md:text-lg xl:text-xl 2xl:text-2xl text-center md:px-36 m-auto py-6">
						Juicy huh? You should get one for yourself so you can have the best marketing plan possible.
					</p>
				</div>
				<div className="flex justify-center my-10 w-[60%] mx-auto ">
					{/* <Image src="/TeamInABox.webp" width={400} height={400} className="" /> */}
					<div className="">
						<iframe className="w-[330px] h-[200px] md:w-[500px] md:h-[300px] lg:w-[700px] lg:h-[300px]" src="https://www.youtube.com/embed/SMKPKGW083c" title="YouTube video" allowFullScreen></iframe>
					</div>
				</div>
			</div>
			<div className="break_line image bg-[url('/page_broke.png')] h-[75px] bg-[length:1600px_90px] bg-center bg-[#FAFAFA]"></div>
			<div className="g-page_structure bg-[#FAFAFA]">
				<div className="main-content  m-auto">
					<h1 className="text-center md:px-16 pt-10 md:pt-24 text-xl md:text-3xl xl:text-5xl font-bold">
						What’s In Your Marketing Plan? Everything It Takes To Hit Your Goals
					</h1>
					<p className="md:text-lg xl:text-xl 2xl:text-2xl text-center md:px-36 m-auto py-4">
						If marketing plans were Halloween candy, other agencies give out toothbrushes while we give out full-sized chocolate bars.
					</p>
				</div>
				<div className="q-card mt-20 flex flex-col gap-8 md:grid gap-x-8 gap-y-12 md:grid-cols-6 pb-16">
					<div className="px-10 pt-10 pb-4  rounded bg-white shadow-md col-start-2 col-end-4">
						<div className=" text-center ">
							<p className="font-bold text-xl">Custom Strategies & Tactics</p>
							<p className="text-lg mt-2">Backed by thousands of experiments, we know what’ll work.</p>
						</div>
						<img src="/game-plan.svg" alt="" className="mt-6 w-" />
					</div>
					<div className="px-10 pt-10 pb-4  rounded bg-white shadow-md col-start-4 col-end-6">
						<div className=" text-center ">
							<p className="font-bold text-xl">Road Map & Goal Timeline</p>
							<p className="text-lg mt-2">See the execution and the milestones we’ll commit to.</p>
						</div>
						<img src="/freemarketing/happy-map-new.svg" alt="" className="mt-6 w-" />
					</div>
					<div className="px-10 pt-10 pb-4  rounded bg-white shadow-md col-start-1 col-end-3">
						<div className=" text-center ">
							<p className="font-bold text-xl">Expansion Opportunities</p>
							<p className="text-lg mt-2">Once goals are hit, we’ll show you how to keep growing.</p>
						</div>
						<img src="/WateringCan.svg" alt="" className="mt-6 w-" />
					</div>
					<div className="px-10 pt-10 pb-4  rounded bg-white shadow-md col-start-3 col-end-5">
						<div className=" text-center ">
							<p className="font-bold text-xl">Competitor Intelligence</p>
							<p className="text-lg mt-2">See the mistakes they’re making and the gaps they’re leaving wide open.</p>
						</div>
						<img src="/brain.svg" alt="" className="mt-6 w-" />
					</div>
					<div className="px-10 pt-10 pb-4  rounded bg-white shadow-md col-start-5 col-end-7">
						<div className=" text-center ">
							<p className="font-bold text-xl">Pricing Options</p>
							<p className="text-lg mt-2">See the multiple ways we can work together that fit your budget.</p>
						</div>
						<img src="/DollarBills.svg" alt="" className="mt-6 w-" />
					</div>
				</div>
			</div>
			<div className="break_line image bg-[url('/page_broke.png')] h-[75px] bg-[length:1600px_90px] bg-center bg-[#FAFAFA] rotate-180"></div>
			<div className="comment g-page_structure mb-8">
				<div className="shadow px-8 py-4 rounded-md relative mt-10 md:mx-20">
					<p className="text-9xl absolute top-0 -left-6 rotate-180 text-[#6adaf7]">,,</p>
					<p className="text-2xl">
						KlientBoost catered their marketing plan to different types of decision makers on our side. They went very <b> deep and technical </b> for
						some while keeping it <b> easy to understand </b> for others. Very impressed with how they could <b> answer every question </b> we threw
						at them.
					</p>
					<div className="flex items-center gap-4 mt-6">
						<Image src="/freemarketing/Roni-Raulwing.webp" alt="" height={80} width={70} className="rounded-full" />
						<div className="">
							<h1 className="font-semibold text-xl">Roni Raulwing</h1>
							<p className="text-xl">Associate Director of Marketing – Stanford University</p>
						</div>
					</div>
				</div>
				<div className="shadow px-8 py-4 rounded-md relative mt-10 md:mx-20">
					<p className="text-9xl absolute top-0 -left-6 rotate-180 text-[#6adaf7]">,,</p>
					<p className="text-2xl">
						KlientBoost catered their marketing plan to different types of decision makers on our side. They went very <b> deep and technical </b> for
						some while keeping it <b> easy to understand </b> for others. Very impressed with how they could <b> answer every question </b> we threw
						at them.
					</p>
					<div className="flex items-center gap-4 mt-6">
						<Image src="/freemarketing/Roni-Raulwing.webp" alt="" height={80} width={70} className="rounded-full" />
						<div className="">
							<h1 className="font-semibold text-xl">Roni Raulwing</h1>
							<p className="text-xl">Associate Director of Marketing – Stanford University</p>
						</div>
					</div>
				</div>
				<div className="shadow px-8 py-4 rounded-md relative mt-10 md:mx-20">
					<p className="text-9xl absolute top-0 -left-6 rotate-180 text-[#6adaf7]">,,</p>
					<p className="text-2xl">
						KlientBoost catered their marketing plan to different types of decision makers on our side. They went very <b> deep and technical </b> for
						some while keeping it <b> easy to understand </b> for others. Very impressed with how they could <b> answer every question </b> we threw
						at them.
					</p>
					<div className="flex items-center gap-4 mt-6">
						<Image src="/freemarketing/Roni-Raulwing.webp" alt="" height={80} width={70} className="rounded-full" />
						<div className="">
							<h1 className="font-semibold text-xl">Roni Raulwing</h1>
							<p className="text-xl">Associate Director of Marketing – Stanford University</p>
						</div>
					</div>
				</div>
				<div className="shadow px-8 py-4 rounded-md relative mt-10 md:mx-20">
					<p className="text-9xl absolute top-0 -left-6 rotate-180 text-[#6adaf7]">,,</p>
					<p className="text-2xl">
						KlientBoost catered their marketing plan to different types of decision makers on our side. They went very <b> deep and technical </b> for
						some while keeping it <b> easy to understand </b> for others. Very impressed with how they could <b> answer every question </b> we threw
						at them.
					</p>
					<div className="flex items-center gap-4 mt-6">
						<Image src="/freemarketing/Roni-Raulwing.webp" alt="" height={80} width={70} className="rounded-full" />
						<div className="">
							<h1 className="font-semibold text-xl">Roni Raulwing</h1>
							<p className="text-xl">Associate Director of Marketing – Stanford University</p>
						</div>
					</div>
				</div>
				<div className="shadow px-8 py-4 rounded-md relative mt-10 md:mx-20">
					<p className="text-9xl absolute top-0 -left-6 rotate-180 text-[#6adaf7]">,,</p>
					<p className="text-2xl">
						KlientBoost catered their marketing plan to different types of decision makers on our side. They went very <b> deep and technical </b> for
						some while keeping it <b> easy to understand </b> for others. Very impressed with how they could <b> answer every question </b> we threw
						at them.
					</p>
					<div className="flex items-center gap-4 mt-6">
						<Image src="/freemarketing/Roni-Raulwing.webp" alt="" height={80} width={70} className="rounded-full" />
						<div className="">
							<h1 className="font-semibold text-xl">Roni Raulwing</h1>
							<p className="text-xl">Associate Director of Marketing – Stanford University</p>
						</div>
					</div>
				</div>
			</div>
			<div className="break_line image bg-[url('/page_broke.png')] h-[75px] bg-[length:1600px_90px] bg-center bg-[#FAFAFA]"></div>
			<div className="dedicated_marketing_team g-page_structure bg-[#FAFAFA] ">
				<div className="main-content  mx-auto">
					<h1 className="text-center md:px-16 pt-6 md:pt-20 text-xl md:text-3xl xl:text-5xl font-bold">
						Meet Your Dedicated Marketing Team Before You Start Working With Us
					</h1>
					<p className="md:text-lg xl:text-xl 2xl:text-2xl text-center md:px-36 m-auto py-6">
						Grill us on our approach and make sure you`ve got the right people working with you before you pay us a penny.
					</p>
				</div>
				<div className="flex justify-center mt-10 pb-8">
					<Image src="/freemarketing/logo-insert-illustration.svg" width={600} height={400} className="" alt="" />
				</div>
			</div>
			<div className="break_line image bg-[url('/page_broke.png')] h-[75px] bg-[length:1600px_90px] bg-center bg-[#FAFAFA] rotate-180"></div>
		</div>
	);
}

export default Freemarketing;
