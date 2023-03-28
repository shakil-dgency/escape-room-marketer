import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillTwitterCircle,AiFillDribbbleCircle } from "react-icons/ai";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { SiYoutubemusic } from "react-icons/si";
import { FaInstagramSquare } from "react-icons/fa";


function Footer() {
	return (
		<div className="g-page_structure  bg-[var(--section-bg-lightblue)]">
			{/* <h1 className="pt-14 text-3xl md:text-3xl font-logoFont text-[#6adaf7] hover:text-[#93e0f5] cursor-pointer text-center">
				Escaperoom Marketer
			</h1> */}
			<div className="flex justify-center pt-24">
				<Image src="/logo.png" alt="logo" height={100} width={200} />
			</div>
			<div className="flex justify-center flex-wrap gap-10 py-14 border-b-2">
				<div className="location flex flex-col items-center">
					<Image src="/navbar/uk.png" alt="" height={90} width={90} />
					<div className="text-center">
						<h1 className="text-xl md:text-lg xl:text-xl font-semibold">United States</h1>
						<p>Metairie, 3900 N Causeway</p>
						<p> +8801722510266</p>
					</div>
				</div>
				<div className="location flex flex-col items-center">
					<Image src="/navbar/bd.png" alt="" height={90} width={90} />
					<div className="text-center">
						<h1 className="text-xl md:text-lg xl:text-xl font-semibold">BANGLADESH</h1>
						<p>House 335,Mohakhali DOHS</p>
						<p> +8801722510266</p>
					</div>
				</div>
				<div className="location flex flex-col items-center">
					<Image src="/navbar/usa.png" alt="" height={90} width={90} />
					<div className="text-center">
						<h1 className="text-xl md:text-lg xl:text-xl font-semibold">CALIFORNIA</h1>
						<p>Metairie, 3900 N Causeway</p>
						<p> +8801722510266</p>
					</div>
				</div>
			</div>
			<div className="border-b-2 pb-16 flex-content flex md:justify-between md:flex-wrap flex-col md:flex-row gap-6 md:gap-0 pl-12 md:pl-0 pt-12">
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
			<div className="flex justify-between items-center">
				<div className="flex gap-10 py-8">
					<Image src="/navbar/google-partner.png" alt="logo" height={50} width={100} />
					<Image src="/navbar/MSA-Partner.png" alt="logo" height={50} width={100} />
					<Image src="/navbar/Facebook-Partner.png" alt="logo" height={50} width={100} />
				</div>
				{/* <div className="social_media">
					<h1 className="font-semibold text-lg  text-center">CURRENTLY ACCEPTING FOLLOWERS</h1>
					<div className="flex justify-center gap-3">
						<AiFillTwitterCircle className=" fill-[#FF8080] text-4xl  hover:fill-[#fd4646]" />
						<BsFacebook className="text-4xl fill-[#FF8080] hover:fill-[#fd4646]" />
						<BsLinkedin className="rounded-full text-4xl fill-[#FF8080] hover:fill-[#fd4646]" />
						<SiYoutubemusic className="rounded-full text-4xl fill-[#FF8080] hover:fill-[#fd4646]" />
						<AiFillDribbbleCircle className="rounded-full text-4xl fill-[#FF8080] hover:fill-[#fd4646]" />
						<FaInstagramSquare className="rounded-[100%] text-4xl fill-[#FF8080] hover:fill-[#fd4646] " />
					
					</div>
				</div> */}
			</div>
		</div>
	);
}

export default Footer;
