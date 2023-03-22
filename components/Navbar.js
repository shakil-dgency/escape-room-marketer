'use client';

import Link from "next/link";
import React, { useRef ,useState } from "react";
import { HiMenu } from "react-icons/hi";
import { MdKeyboardArrowDown } from "react-icons/md";

function Navbar() {
	const [toggle, setToggle] = useState(false)
	const serveiceRef = useRef()
    const handlePopup = (e)=>{
		let _id 
		//  console.log(document.getElementsByClassName('serveice_list'));
		 let serveiceClick = document.getElementsByClassName('serveice_list')
		 for (var i = 0 ; i < serveiceClick.length; i++) {
			
			 serveiceClick[i].addEventListener('click', function(E){
				serveiceRef.current.classList.add('hidden');
				e.target.children[0].classList.remove('rotate-180');
				if(_id){
					serveiceClick[_id].classList.remove('text-red-500')
				}
				_id = E.target.id
				this.classList.add('text-red-500')
			});
			// if(i==_id){
			// 	serveiceClick[i].classList.remove('text-red-500')
			// }
			
			
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

						<div ref={serveiceRef} className="serveice_popup hidden gap-5  shadow md:px-6 md:py-4 rounded absolute -left-8 -bottom-48 z-30 bg-white ">
							<ul className="flex-1">
								<h3 className=" text-[16px] font-semibold pb-2">PAID ADVERTISING</h3>
								<li><Link href={"/service/ppcAgency"} id="0" className="serveice_list whitespace-nowrap">PPC Agency</Link></li>
								<li><Link href={"/service/facebookAdsAgency"} id="1" className="serveice_list whitespace-nowrap ">Facebook Ads Agency</Link></li>
								<li><Link href={"/service/googleAdsAgency"} id="2" className="serveice_list whitespace-nowrap">Google Ads Agency</Link> </li>
								<li><Link href={'/service/semAgency'} id="3" className="serveice_list">SEM Agency</Link> </li>
								<li><Link href={'/service/ppcManagement'} id="4" className="serveice_list">PPC Management</Link></li>
							</ul>
							<ul className="flex-1">
								<h3 className=" text-[16px] font-semibold pb-2 ">SEO</h3>
								<li><Link href={"/service/contentMarketingAgency"} id="5" className="serveice_list  whitespace-nowrap">Content Marketing Agency</Link></li>
								<li><Link href={"/service/seoAgency"} id="6" className="serveice_list">SEO Agency</Link></li>
								<li><Link href={"/service/linkBuildingService"} id="7" className="serveice_list">Link Building Services</Link></li>
							</ul>
							<ul className="flex-1">
								<h3 className=" text-[16px] font-semibold  pb-2">CONVERSION</h3>
								<li><Link href={"/service/conversionRateOptimization"} id="8" className="serveice_list whitespace-nowrap">Conversion Rate Optimization</Link></li>
								<li><Link href={'/service/landingPageAgency'} id="9" className="serveice_list whitespace-nowrap">Landing Page Agency</Link></li>
								<li><Link href={'/service/landingPageDesign'} id="10" className="serveice_list">Landing Page Design</Link></li>
							</ul>
							<ul className="flex-1">
								<h3 className=" text-[16px] font-semibold ">EMAIL MARKETING</h3>
								<li id="11" className="serveice_list pt-2">Email Marketing Agency</li>
								
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
