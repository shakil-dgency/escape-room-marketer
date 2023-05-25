import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillTwitterCircle, AiFillDribbbleCircle } from "react-icons/ai";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { SiYoutubemusic } from "react-icons/si";
import { FaInstagramSquare } from "react-icons/fa";

function Footer() {
	return (
		<div className="g-page_structure font-graphik  bg-[var(--section-bg-lightblue)]">
			{/* <h1 className="pt-14 text-3xl md:text-3xl font-logoFont text-[#6adaf7] hover:text-[#93e0f5] cursor-pointer text-center">
				Escaperoom Marketer
			</h1> */}
			<div className="flex justify-center pt-24">
				<Image src="/logo.svg" alt="logo" height={100} width={200} />
			</div>
			<div className="flex justify-center flex-wrap gap-10 py-14 border-b-2">
				<div className="location flex flex-col items-center">
					<Image src="/footer/location-uk-escape-room-marketer-01.svg" alt="" height={90} width={90} />
					<div className="text-center">
						<h1 className="text-xl md:text-lg xl:text-xl font-semibold py-1">United States</h1>
						<p>Metairie, 3900 N Causeway</p>
						<p> +8801722510266</p>
					</div>
				</div>
				<div className="location flex flex-col items-center">
					<Image src="/footer/location-bangladesh-escape-room-marketer-01.svg" alt="" height={90} width={90} />
					<div className="text-center">
						<h1 className="text-xl md:text-lg xl:text-xl font-semibold py-1">BANGLADESH</h1>
						<p>House 335,Mohakhali DOHS</p>
						<p> +8801722510266</p>
					</div>
				</div>
				<div className="location flex flex-col items-center">
					<Image src="/footer/location-usa-escape-room-marketer-01.svg" alt="" height={90} width={90} />
					<div className="text-center">
						<h1 className="text-xl md:text-lg xl:text-xl font-semibold py-1">CALIFORNIA</h1>
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
						<Link href={"/contactUs"}>
							<li className="cursor-pointer">Contact Us</li>
						</Link>
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
			<div className="flex flex-wrap gap-3 justify-center md:justify-between items-center border-b-[2px] py-3 md:py-8">
				<div className="flex gap-3 md:gap-10">
					<Image
						src="/footer/google-partner-badge-escape-room-marketer.png"
						alt="logo"
						height={50}
						width={100}
						className="grayscale hover:grayscale-0 "
					/>
					<Image
						src="/footer/Microsoft-Partner-badge-escape-room-marketer.png"
						alt="logo"
						height={50}
						width={100}
						className="grayscale hover:grayscale-0 "
					/>
					<Image
						src="/footer/Facebook-Partner-badge-escape-room-marketer.png"
						alt="logo"
						height={50}
						width={100}
						className="grayscale hover:grayscale-0 "
					/>
				</div>
				<div className="social_media">
					<h1 className="font-semibold text-base md:text-lg  text-center pb-2">CURRENTLY ACCEPTING FOLLOWERS</h1>
					<div className="flex justify-center gap-3">
						{/* <AiFillTwitterCircle className=" fill-[#FF8080] text-3xl md:text-4xl  hover:fill-[#fd4646]" />
						<BsFacebook className="text-3xl md:text-4xl fill-[#FF8080] hover:fill-[#fd4646]" />
						<BsLinkedin className="rounded-full text-3xl md:text-4xl fill-[#FF8080] hover:fill-[#fd4646]" />
						<SiYoutubemusic className="rounded-full text-3xl md:text-4xl fill-[#FF8080] hover:fill-[#fd4646]" />
						<AiFillDribbbleCircle className="rounded-full text-3xl md:text-4xl fill-[#FF8080] hover:fill-[#fd4646]" />
						<FaInstagramSquare className="rounded-[100%] text-3xl md:text-4xl fill-[#FF8080] hover:fill-[#fd4646] " /> */}
						<Image src="/footer/social-icon-facebook-escape-room-marketer-01.svg" alt="" height={40} width={40} className="hover:fill-[#FF8081]" />
						<Image src="/footer/social-icon-linkedin-escape-room-marketer-01.svg" alt="" height={40} width={40} className="hover:fill-[#FF8081]" />
						<Image src="/footer/social-icon-instagram-escape-room-marketer-01.svg" alt="" height={40} width={40} className="hover:fill-[#FF8081]" />
						<Image src="/footer/social-icon-dribble-escape-room-marketer-01.svg" alt="" height={40} width={40} className="hover:fill-[#FF8081]" />
						<Image src="/footer/social-icon-twiter-escape-room-marketer-01.svg" alt="" height={40} width={40} className="hover:fill-[#FF8081]" />
						<Image src="/footer/social-icon-youtube-escape-room-marketer-01.svg" alt="" height={40} width={40} className="hover:fill-[#FF8081]" />
					</div>
				</div>
			</div>
			<div className="flex flex-wrap gap-3 justify-center md:justify-between py-4">
				<p>© ESCAPE ROOM MARKETER - 2023</p>
				<div>
					<span className="hover:text-red-500 cursor-pointer">Terms of Service </span> |{" "}
					<span className="hover:text-red-500 cursor-pointer"> Privacy Policy</span>
				</div>
			</div>
		</div>
	);
}

export default Footer;
