import Link from "next/link";
import React, { useRef ,useState } from "react";
import { HiMenu } from "react-icons/hi";
import { MdKeyboardArrowDown } from "react-icons/md";

function Navbar() {
	const [toggle, setToggle] = useState(false)
	const serveiceRef = useRef()
    const handlePopup = ()=>{
		setToggle(!toggle)
		if(toggle===true){
			console.log('yes');
		}
		// serveiceRef.current.classList.add('flex');
	}

	return (
		<div>
			<div className="nav_container g-page_structure ">
				<div className="flex gap-1 md:gap-0 md:justify-between items-center py-2 md:py-5">
					<h1 className="flex-1 text-lg md:text-3xl font-logoFont text-[#6adaf7] hover:text-[#93e0f5] cursor-pointer">Escaperoom Marketer</h1>
					<div className="nav_elements flex gap-4 md:gap-10 items-center relative">
						<ul className="hidden md:flex gap-5 font-[600] transform transition-transform translate-x-full absolute top-0 right-0 md:transform-none md:static ">
							<li>PRICING</li>
							<li onClick={handlePopup} className="group cursor-pointer flex items-center gap-1">
								SERVICES <MdKeyboardArrowDown className="text-xl group-hover:rotate-180" />{" "}
							</li>
							<li>RESULTS</li>
							<li>TEAM</li>
							<li>BLOG</li>
							<li>RESOURCES</li>
						</ul>
						<Link
							href={"/freemarketing"}
							className="flex-[2] border-2 border-red-500 px-2 py-1 md:px-6 md:py-3 text-red-500 font-semibold text-sm md:text-xl"
						>
							FREE MARKETING PLAN
						</Link>
						<HiMenu className="text-2xl md:hidden" />

						<div ref={serveiceRef} className="hidden gap-5 shadow md:px-6 md:py-4 rounded absolute -left-8 -bottom-56 z-30 bg-white ">
							<ul>
								<li className=" text-base font-semibold ">PAID ADVERTISING</li>
								<li className="pt-2">PPC Agency</li>
								<li className="">Facebook Ads Agency</li>
								<li className="">Google Ads Agency</li>
								<li className="">SEM Agency</li>
								<li className="">PPC Management</li>
							</ul>
							<ul>
								<li className=" text-base font-semibold ">SEO</li>
								<li className="pt-2">Content Marketing Agency</li>
								<li className="">SEO Agency</li>
								<li className="">Link Building Services</li>
							</ul>
							<ul>
								<li className=" text-base font-semibold ">CONVERSION</li>
								<li className="pt-2">Conversion Rate Optimization</li>
								<li className="">Landing Page Agency</li>
								<li className="">Landing Page Design</li>
							</ul>
							<ul>
								<li className=" text-base font-semibold ">EMAIL MARKETING</li>
								<li className="pt-2">Email Marketing Agency</li>
								
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
