import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import CaseStudy1 from "@/components/caseStudies/CaseStudy1";
import CaseStudy2 from "@/components/caseStudies/CaseStudy2";
import CaseStudy3 from "@/components/caseStudies/CaseStudy3";
import CaseStudy4 from "@/components/caseStudies/CaseStudy4";

function CaseStudy() {
	const router = useRouter();
	const dynamicpage = router.query.caseStudy;

	return (
		<div className="pt-[6rem]">
			{dynamicpage === "caseStudy1" && <CaseStudy1 />}
			{dynamicpage === "caseStudy2" && <CaseStudy2 />}
			{dynamicpage === "caseStudy3" && <CaseStudy3 />}
			{dynamicpage === "caseStudy4" && <CaseStudy4 />}
		</div>
	);
}

export default CaseStudy;
