import React from "react";

export default function PriceGrid() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[#e6eff6]">
      <div className="max-w-xl grid grid-cols-2 rounded-lg shadow-xl bg-white">
        <div className="col-span-2 p-8">
          <h1 className="mb-3 text-[#6abfb9] font-bold text-lg">Join our community</h1>
          <h2 className="text-[#c0e033] font-bold mb-2">30-day, hassle-free money back gaurantee</h2>
          <p className="text-sm text-[#c0c1c6]">
            Gain access to our full library of tutorials along with expert code
            reviews. Perfect for any developers who are serious about honing
            their skills.
          </p>
        </div>
        <div className="p-8 text-white bg-[#2ab3b1]">
          <div>
            <h2>Monthly Subscription</h2>
            <h1>
              $29 <span>per month</span>
            </h1>
            <p>Full access for less than $1 a day</p>
            <button>Sign Up</button>
          </div>
        </div>
        <div className="border col-start-2 col-end-3 p-8">
          <h2>Why Us</h2>
          <ul>
            <li>Tutorials by industry experts</li>
            <li>Peer & expert code review</li>
            <li>Coding exercises</li>
            <li>Access to our GitHub repos</li>
            <li>Community forum</li>
            <li>Flashcard decks</li>
            <li>New videos every week</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
