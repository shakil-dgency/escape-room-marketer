import Image from "next/image";
import Link from "next/link";
import React from "react";

function DedicatedTeam({bodyColor, title ,pera}) {
	return (
		<div>
			<div className={`dedicated_marketing_team g-page_structure bg-[#FAFAFA] ${bodyColor}`}>
				<div className="main-content  m-auto">
					<h1 className=" pt-10 md:pt-20 text-[20px] md:text-4xl 2xl:text-[39px]  text-center mx-auto font-extrabold lg:w-[75%] xl:w-[70%] 2xl:w-[80%]">
						{title}
					</h1>
					<p className="md:text-lg xl:text-xl 2xl:text-2xl text-center md:px-36 m-auto py-6">
						{pera}
					</p>
				</div>
				<div className="flex justify-center my-10 ">
					<Image src="/TeamInABox.webp" alt="" width={400} height={400} className="" />
				</div>
			</div>
		</div>
	);
}

export default DedicatedTeam;
