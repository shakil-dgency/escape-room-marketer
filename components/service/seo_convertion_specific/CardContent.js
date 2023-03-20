import Image from "next/image";
import React from "react";

function CardContent({cardContentData}) {
	return (
		<div>
			<div className="g-page_structure pt-10">
				<h1 className="text-[20px] md:text-4xl 2xl:text-[39px]  text-center mx-auto font-extrabold lg:w-[75%] xl:w-[70%] 2xl:w-[80%]">
                {cardContentData.head_message && cardContentData.head_message.heading}
				</h1>
				<p className="md:text-lg xl:text-xl 2xl:text-2xl text-center md:w-[60%] m-auto py-4">
                {cardContentData.head_message && cardContentData.head_message.text_line}
				</p>

                <div className=" grid  md:grid-cols-3 gap-x-6 gap-y-7 md:gap-y-4 my-12">

                    {cardContentData &&
                      cardContentData.cards.map((data)=>{
                        return(
                            <div className="card  flex flex-col items-center shadow rounded py-10 bg-[#fafafa]" key={data.id}>
                            <h3 className="text-xl font-bold mb-10">{data.title}</h3>
                            <Image src= {`/serveice/${data.image}`} alt="" height={100} width={230} />
                        </div>
                        )
                      })
                    }
                </div>
			</div>
		</div>
	);
}

export default CardContent;
