import Image from "next/image";
import React from "react";

type ThankYouCardProps = {
  rating: number | null;
};

export default function ThankYouCard({ rating }: ThankYouCardProps) {
  return (
    <div className="bg-[#202630] xl:mx-[650px] lg:mx-96 md:mx-70 sm:mx-30 mx-10 rounded-3xl p-8 flex flex-col items-center justify-center gap-6">
      <Image
        src="/illustration-thank-you.svg"
        height={120}
        width={130}
        alt="thank you image"
      ></Image>
      <div className="bg-[#262e38] p-3 text-[#fd7612] rounded-full text-xs">
        You selected {rating} out of 5.
      </div>
      <h1 className="font-bold text-2xl">Thank you!</h1>
      <p className="text-[#808690] text-center">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don`t hesitate to get in touch!
      </p>
    </div>
  );
}
