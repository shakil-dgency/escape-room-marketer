import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import SeoRelatedQuiz from "@/components/quizDetails/SeoRelatedQuiz";
import ConversionRelatedQuiz from "@/components/quizDetails/ConversionRelatedQuiz";
import EmailMarketingRelatedQuiz from "@/components/quizDetails/EmailMarketingRelatedQuiz";
import GoogleAdsRelatedQuiz from "@/components/quizDetails/GoogleAdsRelatedQuiz";
import FacebookRelatedQuiz from "@/components/quizDetails/FacebookRelatedQuiz";
import CreativeAssetRelatedQuiz from "@/components/quizDetails/CreativeAssetRelatedQuiz";

function QuizDetails() {
	const router = useRouter();
	const dynamicpage = router.query.quizDetails;

	return (
		<div>
			<div className="pt-[4rem]">

				 {/* this section is for Seo related quiz */}
				{dynamicpage === "quizDetailsSeo" && <SeoRelatedQuiz />}

				 {/* this section is for conversion related quiz */}
				{dynamicpage === "quizDetailsConversion" && <ConversionRelatedQuiz />}

				 {/* this section is for Email Marketing related quiz */}
                {dynamicpage === "quizDetailsEmailMarketing" && <EmailMarketingRelatedQuiz />}

                {/* this section is for Google Ads related quiz */}
				{dynamicpage === "quizDetailsgoogle" && <GoogleAdsRelatedQuiz />}

				{/* this section is for Facebook Ads related quiz */}
				{dynamicpage === "quizDetailsfacebook" && <FacebookRelatedQuiz />}

				{/* this section is for creative Ads related quiz */}
				{dynamicpage === "quizDetailsCreativeAsset" && <CreativeAssetRelatedQuiz />}
				<div className="break_line image bg-[url('/section_break.svg')] h-[80px] bg-[length:3200px_90px]   bg-center rotate-180 "></div>
				<div className=" bg-[#FFF7F5] pt-16 pb-20 bg-[url('/resources/quizzes/quiz-key-background.svg')] bg-center w-full absolute z-20 -mt-9">
					<div className="g-page_structure flex flex-col items-center">
						<h2 className="text-4xl text-center font-bold pb-8">
							Like Your Big Goals, Your Team Will Be <br /> Surprisingly Easy To Reach
						</h2>
						<Link href={"/freemarketing"} className="px-6 py-2 bg-[#FF492C] text-white rounded">
							GET YOUR FREE MARKETING PLAN
						</Link>
					</div>
				</div>
				<div className="break_line image bg-[url('/section_break.svg')] h-[80px] bg-[length:3200px_90px] mt-[220px]   bg-center"></div>
			</div>
		</div>
	);
}

export default QuizDetails;

{
	/* <div
id="zf-widget"
data-zf-id="uPiMvCNgOF0sN1N6s2DM"
data-zf-d_id=ZLXBivsWppYpIA8zF
data-zf-type="standard"
style="height: 30vh; width: 700px;"
></div> */
}

// <script src="https://form-assets.forms.gozen.io/cdn/scripts/embed.js"></script>
