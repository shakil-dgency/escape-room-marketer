import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import Casehero from "@/components/caseStudies/Casehero";

function CaseStudy() {
	const router = useRouter();
	const dynamicpage = router.query.caseStudy;

	return (
		<div className="pt-[8rem]">
			<Casehero />
		</div>
	);
}

export default CaseStudy;
