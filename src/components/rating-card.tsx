import Image from "next/image";
import React from "react";

type RatingCardProps = {
  handleRating: (num: number) => void;
  rating: number | null;
  handleSumbit: () => void;
}

export default function RatingCard({
  handleRating,
  rating,
  handleSumbit,
}: RatingCardProps) {
  const ratingNums = [1, 2, 3, 4, 5];
  return (
    <div className="bg-[#202630] xl:mx-[650px] lg:mx-96 md:mx-70 sm:mx-30 rounded-3xl p-8 mx-10">
      <Image
        src="/icon-star-rating.svg"
        width={50}
        height={50}
        alt="star icon"
        className="bg-[#282e38] p-4 rounded-full"
      />

      <h1 className="font-bold text-2xl my-5">How did we do?</h1>
      <p className="text-[#6c727c] text-[15px]">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="flex justify-around gap-5">
        {ratingNums.map((num) => (
          <button
            className={`${
              rating === num ? "bg-white" : "bg-[#282e38] hover:bg-[#fd7612]"
            } rounded-full flex items-center justify-center h-10 w-10 text-center text-[#8b939f] mt-5 mb-5  hover:text-[#1b212b]`}
            key={num}
            onClick={() => handleRating(num)}
          >
            {num}
          </button>
        ))}
      </div>
      <button
        className="bg-[#fd7612] hover:bg-white text-[#1b212b] w-full mt-5 py-3 text-xs font-semibold tracking-[.15em] rounded-full"
        onClick={handleSumbit}
      >
        SUBMIT
      </button>
    </div>
  );
}
