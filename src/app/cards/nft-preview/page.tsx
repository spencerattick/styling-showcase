import Image from "next/image";
import React from "react";

export default function NFTPreviewCard() {
  return (
    <div className="bg-[#0c192d] w-[100vw] h-[100vh] flex justify-center items-center">
      <div className="bg-[#15263f] w-[20%] h-[65%] rounded-2xl p-5 flex flex-col items-center">
        <Image
          src="/image-equilibrium.jpg"
          alt="glass cube balancing on one corner"
          height={300}
          width={300}
          className="rounded-2xl"
        />
        <h1 className="text-white text-xl font-semibold">Equilibrium #3429</h1>
        <p>Our Equilibrium collection promotes balance and calm.</p>
        <div>
          <span>0.014 ETH</span>
          <span>3 days left</span>
        </div>
        <div>
          <p>
            Creation of
            <span>Jules Wyvern</span>
          </p>
        </div>
      </div>
    </div>
  );
}
