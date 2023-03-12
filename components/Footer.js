import Link from "next/link";
import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook,BsLinkedin } from "react-icons/bs";
import { TfiYoutube } from "react-icons/tfi";

function Footer() {
	return (
		<div className="g-page_structure mb-10">
			<h1 className="flex-1 text-3xl md:text-3xl font-logoFont text-[#6adaf7] hover:text-[#93e0f5] cursor-pointer text-center">
				Escaperoom Marketer
			</h1>
			<div className="border-b-2 pb-16 flex-content flex md:justify-between md:flex-wrap flex-col md:flex-row gap-6 md:gap-0 pl-12 md:pl-0 pt-12">
				<div className="location">
					<img src="/orange-county-badge.svg" alt="" className="xl:h-28 md:h-20 h-28" />
					<div className="">
						<h1 className="text-xl md:text-lg xl:text-xl font-semibold">CALIFORNIA</h1>
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
							<h1 className=" text-xl md:text-lg xl:text-xl font-semibold">AGENCY</h1>
						</li>
						<li className="cursor-pointer">Services</li>
						<li className="cursor-pointer">Results</li>
						<li className="cursor-pointer">Blog</li>
						<li className="cursor-pointer">
							Careers <span className="bg-[#ff5056] text-white rounded px-1 font-semibold ml-1">HIRING</span>
						</li>
						<li className="cursor-pointer">Partner Program</li>
						<li className="cursor-pointer">Contact Us</li>
					</ul>
				</div>
				<div className="advertising pt-4">
					<ul className="flex flex-col gap-4">
						<li>
							<h1 className="text-xl md:text-lg xl:text-xl font-semibold">PAID ADVERTISING</h1>
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
							<h1 className="text-xl md:text-lg xl:text-xl font-semibold">SEO</h1>
						</li>
						<li className="cursor-pointer">Content Marketing Agency </li>
						<li className="cursor-pointer">SEO Agency </li>
						<li className="cursor-pointer">Link Building Services </li>
					</ul>
				</div>
				<div className="conversion pt-4">
					<ul className="flex flex-col gap-4">
						<li>
							<h1 className="text-xl md:text-lg xl:text-xl font-semibold">CONVERSION</h1>
						</li>
						<li className="cursor-pointer">Conversion Rate Optimization</li>
						<li className="cursor-pointer">Landing Page Agency </li>
						<li className="cursor-pointer">Landing Page Design </li>
					</ul>
				</div>
			</div>
			<div className="have_question border-2 border-black  mt-16 mx-auto md:w-[600px] p-4 md:p-8  flex gap-6 md:gap-0 md:justify-between  items-center flex-col md:flex-row">
				<div className="flex gap-4">
					<p className="text-3xl px-[1.2rem] py-2 text-white font-semibold bg-[#6adaf7] rounded-full">?</p>
					<div className="">
						<p className="font-bold text-lg">Have a question?</p>
						<p>We don`t bite.</p>
					</div>
				</div>
				<div className="button border-2 border-red-500 px-[15%] md:px-12 py-1 md:py-2">
					<p className="text-xl font-semibold text-red-500">hellow@Dgency.com</p>
				</div>
			</div>
			<div className="social_media mt-16">
				<h1 className="font-semibold text-xl mb-8 text-center">CURRENTLY ACCEPTING FOLLOWERS</h1>
				<div className="flex justify-center gap-2">
					<AiFillTwitterCircle className="text-5xl fill-[#6adaf7]" />
					<BsFacebook className="text-5xl fill-[#6adaf7]" />
					<BsLinkedin className="rounded-full text-5xl fill-[#6adaf7]" />
				
				</div>
			</div>
		</div>
	);
}

export default Footer;
