import Image from "next/image";
import React from "react";

function Testimonial() {
	return (
		<div className="pt-[4.5rem] md:pt-[6rem] ">
			<div className="break_line image bg-[url('/page_broke.png')] h-[75px] bg-[length:1600px_90px] bg-center -mt-10 bg-[var(--section-bg-lightblue)]"></div>
			<div className="bg-[var(--section-bg-lightblue)] pb-10">
				<div className=" px-2 md:px-0 m-auto">
					<h1 className="hero_heading text-center  md:px-[10%] lg:px-[20%] pt-14 pb-8">
						We Put the 'Testi' in Testimonials - Don't Just Take Our Word for It...Listen to These Crazy Stories
					</h1>
				</div>
				<div className="flex justify-between  md:px-[5%]">
					<Image src="/results/testimonial/left.svg" alt="" height={100} width={100} className="" />
					<Image src="/results/testimonial/middle.svg" alt="" height={100} width={150} className="" />
					<Image src="/results/testimonial/right.svg" alt="" height={100} width={100} className="" />
				</div>
			</div>
			<div className="break_line image bg-[url('/section_break.svg')] h-[80px] bg-[length:2500px_90px]  bg-center rotate-180"></div>
			<div className="g-page_structure bg-[var(--section-bg-lightred)]">
				<div className="testimonial-card flex gap-4 items-center bg-[#00B67A0D] relative rounded-xl">
					<Image src="/results/testimonial/client-corner.svg" alt="" height={100} width={100} className="absolute -top-4 -left-6 -rotate-6" />
					<Image src="/results/testimonial/client.svg" alt="" height={100} width={400} className="" />
					<div className="font-graphik px-8 ">
						<p className="text-xl">
							"Escape Room Marketer - Agency is simply amazing! Their team designed our website, created eye-catching promotional materials, and
							helped us boost our online presence. Since working with them, our bookings have increased significantly, and our customers frequently
							compliment us on our impressive marketing materials. Highly recommend!"
						</p>
						<div className="flex gap-6 items-center px-2 mt-6 bg-[#00B67A1A] md:w-[400px] rounded-md">
							<Image src="/results/testimonial/client-logo.svg" alt="" height={100} width={90} className="" />
							<div className="">
								<Image src="/results/testimonial/stars.svg" alt="" height={100} width={70} className="mb-3" />
								<p className="text-base leading-3">Chetan Patel</p>
								<p className="text-base">President, All In Adventures</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="break_line image bg-[url('/section_break.svg')] h-[80px] bg-[length:2500px_90px]  bg-center"></div>
		</div>
	);
}

export default Testimonial;
