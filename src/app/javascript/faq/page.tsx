"use client";

import Image from "next/image";
import { useState } from "react";

const content = [
  {
    question: "What is Frontend Mentor, and how will it help me?",
    answer:
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and Javascript. It's suitable for all levels and ideal for portfolios.",
  },
  {
    question: "Is Frontend Mentor free?",
    answer:
      "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
  },
  {
    question: "Can I use Frontend Mentor projects in my portfolio?",
    answer:
      "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
  },
  {
    question:
      "How can I get help if I'm stuck on a Frontend Mentor challenge?",
    answer:
      "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
  },
];

export default function FAQ() {
  const [openStates, setOpenStates] = useState<boolean[]>(Array(content.length).fill(false));


  const handleIconClick = (index: number) => {
    setOpenStates(prev => {
      const newStates = [...prev];
      newStates[index] = !newStates[index];
      return newStates;
    })
  };


  return (
    <div className="relative min-h-screen">
      <div className="h-[35vh] bg-[url('/background-pattern-desktop.svg')]" />

      <div className="h-[60vh] bg-[#f9f0ff]" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl p-6">
        <div className="bg-white rounded-lg shadow-lg p-8 h-[50vh]">
          <div className="flex gap-4 mb-5">
            <Image
              src="/icon-star.svg"
              height={30}
              width={30}
              alt="star icon"
            />
            <h1 className="text-4xl font-[1000] text-[#2f1632]">FAQs</h1>
          </div>
          <div>
            {content.map((item, index) => {
              const isOpen = openStates[index];
              return (
                <div key={index}>
                  <div className="flex items-center gap-2">
                    <h3 className="text-[#2f1632] font-semibold mb-2">
                      {item.question}
                    </h3>
                    {isOpen ? (
                      <Image
                        src="/icon-minus.svg"
                        alt="plus icon"
                        height={30}
                        width={30}
                        className="cursor-pointer"
                        onClick={() => handleIconClick(index)}
                      ></Image>
                    ) : (
                      <Image
                        src="/icon-plus.svg"
                        alt="plus icon"
                        height={30}
                        width={30}
                        className="cursor-pointer"
                        onClick={() => handleIconClick(index)}
                      ></Image>
                    )}
                  </div>

                  <p
                    className={`text-[#b1a6b2] ${
                      isOpen ? "visible" : "hidden"
                    }`}
                  >
                    {item.answer}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
