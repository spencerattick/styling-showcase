import Image from "next/image";

export default function Rating() {
  const ratingNums = [1, 2, 3, 4, 5];

  return (
    <div className="flex items-center justify-center h-[100vh] w-[100vw]">
      <div className="bg-[#202630] w-[20vw] h-[40vh] rounded-3xl p-10">
        <Image
          src="/icon-star-rating.svg"
          width={30}
          height={30}
          alt="star icon"
          className="bg-#282e38 p-2 rounded-full"
        />

        <h1 className="font-bold text-2xl mt-5">How did we do?</h1>
        <p className="text-[#6c727c] text-xs">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <div className="flex justify-around  gap-5">
          {ratingNums.map((num) => (
              <button className="bg-[#282e38] rounded-full p-3 h-10 w-10 text-center" key={num}>{num}</button>
          ))}
        </div>
        <button>Submit</button>
      </div>
    </div>
  );
}
