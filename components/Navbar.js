import React from "react";
import { HiMenu } from 'react-icons/hi';

function Navbar() {
    
	return (
		<div>
			<div className="nav_container g-page_structure ">
				<div className="flex gap-1 md:gap-0 md:justify-between items-center py-2 md:py-5">
					<h1 className="flex-1 text-lg md:text-3xl font-logoFont text-[#6adaf7] hover:text-[#93e0f5] cursor-pointer">Escaperoom Marketer</h1>
					<div className="nav_elements flex gap-4 md:gap-10 items-center">
						<ul className="hidden md:flex gap-5 font-[600] transform transition-transform translate-x-full absolute top-0 right-0 md:transform-none md:static ">
							<li>PRICING</li>
							<li>SERVICES</li>
							<li>RESULTS</li>
							<li>TEAM</li>
							<li>BLOG</li>
							<li>RESOURCES</li>
						</ul>
						<button className="flex-[2] border-2 border-red-500 px-2 py-1 md:px-6 md:py-3 text-red-500 font-semibold text-sm md:text-xl">FREE MARKETING PLAN</button>
                        <HiMenu className="text-2xl md:hidden"/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
