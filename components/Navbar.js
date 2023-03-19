'use client';

import Link from "next/link";
import React, { useRef ,useState } from "react";
import { HiMenu } from "react-icons/hi";
import { MdKeyboardArrowDown } from "react-icons/md";

function Navbar() {
	const [toggle, setToggle] = useState(false)
	const serveiceRef = useRef()
    const handlePopup = (e)=>{
		 console.log(document.getElementsByClassName('serveice_list'));
		 let serveiceClick = document.getElementsByClassName('serveice_list')
		 for (var i = 0 ; i < serveiceClick.length; i++) {

			 serveiceClick[i].addEventListener('click', function(){
				console.log("click");
				serveiceRef.current.classList.add('hidden');
				e.target.children[0].classList.remove('rotate-180')
			});
		 }

		if(serveiceRef.current.classList.contains('hidden')){
			serveiceRef.current.classList.remove('hidden');
			serveiceRef.current.classList.add('flex');
			e.target.children[0].classList.add('rotate-180')
		}else{
			serveiceRef.current.classList.add('hidden');
			e.target.children[0].classList.remove('rotate-180')
		}
		// serveiceRef.current.classList.add('flex');
	}

	return (
		<div>
			<div className="nav_container g-page_structure ">
				<div className="flex gap-1 md:gap-0 md:justify-between items-center py-2 md:py-5">
					<Link href={"/"} className="logomain flex-1 text-lg md:text-3xl  text-[#6adaf7] hover:text-[#93e0f5] cursor-pointer">Escaperoom Marketer</Link>
					<div className="nav_elements flex gap-4 md:gap-10 items-center relative">
						<ul className="hidden md:flex gap-5 font-[600] transform transition-transform translate-x-full absolute top-0 right-0 md:transform-none md:static ">
							<li>PRICING</li>
							<li onClick={handlePopup} className="group cursor-pointer flex items-center gap-1">
								SERVICES <MdKeyboardArrowDown className="text-xl transition-transform duration-300" />{" "}
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

						<div ref={serveiceRef} className="serveice_popup hidden  shadow md:px-6 md:py-4 rounded absolute -left-8 -bottom-48 z-30 bg-white ">
							<ul className="flex-1">
								<h3 className=" text-[16px] font-semibold ">PAID ADVERTISING</h3>
								<Link href={"/serveice/ppcAgency"}><li className="serveice_list pt-2">PPC Agency</li></Link>
								<Link href={"/serveice/facebookAdsAgency"} className="serveice_list">Facebook Ads Agency</Link> <br />
								<Link href={"/serveice/googleAdsAgency"} className="serveice_list ">Google Ads Agency</Link> <br />
								<Link href={'/serveice/semAgency'} className="serveice_list">SEM Agency</Link> <br />
								<Link href={'/serveice/ppcManagement'} className="serveice_list">PPC Management</Link>
							</ul>
							<ul className="flex-1">
								<h3 className=" text-[16px] font-semibold ">SEO</h3>
								<li><Link href={"/serveice/contentMarketingAgency"} className="serveice_list pt-2">Content Marketing Agency</Link></li>
								<li><Link href={"/serveice/seoAgency"} className="serveice_list">SEO Agency</Link></li>
								<li><Link href={"/"} className="serveice_list">Link Building Services</Link></li>
							</ul>
							<ul className="flex-1">
								<h3 className=" text-[16px] font-semibold ">CONVERSION</h3>
								<li className="pt-2">Conversion Rate Optimization</li>
								<li className="">Landing Page Agency</li>
								<li className="">Landing Page Design</li>
							</ul>
							<ul className="flex-1">
								<h3 className=" text-[16px] font-semibold ">EMAIL MARKETING</h3>
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
