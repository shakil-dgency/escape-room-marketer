import Link from 'next/link'
import React from 'react'

function FooterTopCta() {
  return (
    <div>
        	<div className="break_line image bg-[url('/section_break.svg')] h-[80px] bg-[length:3200px_90px]   bg-center rotate-180 "></div>
			<div className=" bg-[#FFF7F5] pt-16 pb-20 bg-[url('/resources/quizzes/quiz-key-background.svg')] bg-center w-full absolute z-20 -mt-9">
				<div className="g-page_structure flex flex-col items-center">
					<h2 className="text-3xl text-center font-bold pb-8">
						Like Your Big Goals, Your Team Will Be <br /> Surprisingly Easy To Reach
					</h2>
					<Link href={"/freemarketing"} className="px-6 py-2 bg-[#FF492C] text-white rounded">
						GET YOUR FREE MARKETING PLAN
					</Link>
				</div>
			</div>
			<div className="break_line image bg-[url('/section_break.svg')] h-[80px] bg-[length:3200px_90px] mt-[215px]   bg-center"></div>
    </div>
  )
}

export default FooterTopCta