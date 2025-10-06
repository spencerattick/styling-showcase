import Image from "next/image";
import React from "react";

export default function NFTPreviewCard() {
  return (
    <div className="bg-[#0c192d] min-h-screen flex justify-center items-center">
      <div className="bg-[#15263f] rounded-2xl p-5 flex flex-col items-center">
        <div className="relative rounded-xl overflow-hidden mb-6 cursor-pointer group">
          <Image
            src="/image-equilibrium.jpg"
            alt="clear glass cube balancing on one corner"
            height={300}
            width={300}
            className="transition-all duration-200 group-hover:opacity-80"
          />
          {/* <div className="bg-[#1edcdc]/50 hidden inset-0 group-hover:flex absolute justify-center items-center transition-all duration-300"> */}
          <div className="bg-[#1edcdc]/50 flex inset-0 absolute justify-center items-center transition-all duration-300 opacity-0 group-hover:opacity-100">
            <Image
              // className="group-hover:opacity-100"
              src="/icon-view.svg"
              alt="eye icon"
              width={40}
              height={40}
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 mt-5 w-full">
          <h1 className="text-white text-xl font-semibold hover:text-[#1edcdc] cursor-pointer">
            Equilibrium #3429
          </h1>
          <p className="text-[#6e85a7]">
            Our Equilibrium collection promotes balance and calm.
          </p>
          <div className="flex justify-between items-center border-b border-[#2f415b] pb-4">
            <span className="text-[#1edcdc] font-semibold flex items-center gap-2">
              <Image
                src="/icon-ethereum.svg"
                alt="ethereum icon"
                height={10}
                width={10}
              />
              0.014 ETH
            </span>
            <span className="text-[#6e85a7] flex items-center gap-2">
              <Image
                src="/icon-clock.svg"
                alt="clock icon"
                width={20}
                height={20}
              />
              3 days left
            </span>
          </div>
          <div>
            <p className="text-[#6e85a7] flex items-center">
              <Image
                src="/image-avatar.png"
                alt="sample avatar"
                height={30}
                width={30}
                className="border border-white rounded-full inline-block mr-4"
              />
              Creation of
              <span className="text-[#c0cada] ml-1 hover:text-[#1edcdc] cursor-pointer">
                {" "}
                Jules Wyvern
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
