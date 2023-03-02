import React from "react";

function Footer() {
	return (
		<div className="g-page_structure mb-10">
			<h1 className="flex-1 text-lg md:text-3xl font-logoFont text-[#6adaf7] hover:text-[#93e0f5] cursor-pointer text-center">Escaperoom Marketer</h1>
			<div className="flex-content flex justify-between pt-12">
				<div className="location">
					<img src="/orange-county-badge.svg" alt="" className="h-28" />
					<div className="">
						<h1 className="text-xl font-semibold">CALIFORNIA</h1>
						<p>
							2787 Bristol Street,
							<br /> Costa Mesa, CA 92626
						</p>
						<p>(949) 220-1195</p>
					</div>
				</div>
				<div className="agency pt-4">
					<ul className="flex flex-col gap-4">
						<li>
							<h1 className="text-xl font-semibold">Agency</h1>
						</li>
						<li className="cursor-pointer">Services</li>
						<li className="cursor-pointer">Results</li>    
						<li className="cursor-pointer">Blog</li>
						<li className="cursor-pointer">Careers <span className="bg-[#ff5056] text-white rounded px-1 font-semibold ml-1">HIRING</span></li>
						<li className="cursor-pointer">Partner Program</li>
                        <li className="cursor-pointer">Contact Us</li>
					</ul>
				</div>
				<div className="advertising pt-4">
					<ul className="flex flex-col gap-4">
						<li>
							<h1 className="text-xl font-semibold">PAID ADVERTISING</h1>
						</li>
						<li className="cursor-pointer">PPC Agency </li>
						<li className="cursor-pointer">Facebook Ads Agency </li>    
						<li className="cursor-pointer">Google Ads Agency </li>
						<li className="cursor-pointer">SEM Agency </li>
						<li className="cursor-pointer">PPC Management </li>
					</ul>
				</div>
				<div className="seo pt-4">
					<ul className="flex flex-col gap-4">
						<li>
							<h1 className="text-xl font-semibold">SEO</h1>
						</li>
						<li className="cursor-pointer">Content Marketing Agency  </li>
						<li className="cursor-pointer">SEO Agency </li>    
						<li className="cursor-pointer">Link Building Services </li>
					</ul>
				</div>
				<div className="conversion pt-4">
					<ul className="flex flex-col gap-4">
						<li>
							<h1 className="text-xl font-semibold">CONVERSION</h1>
						</li>
						<li className="cursor-pointer">Conversion Rate Optimization</li>
						<li className="cursor-pointer">Landing Page Agency </li>    
						<li className="cursor-pointer">Landing Page Design </li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Footer;
