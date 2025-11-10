import React from "react";

export default function PriceGrid() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[#e6eff6]">
      <div className="max-w-2xl grid md:grid-cols-2 grid-cols-1 rounded-lg shadow-xl bg-white">
        <div className="md:col-span-2 col-span-1 p-8">
          <h1 className="mb-3 text-[#6abfb9] font-bold text-lg">
            Join our community
          </h1>
          <h2 className="text-[#c0e033] font-semibold mb-2">
            30-day, hassle-free money back gaurantee
          </h2>
          <p className="text-sm text-[#c0c1c6]">
            Gain access to our full library of tutorials along with expert code
            reviews. Perfect for any developers who are serious about honing
            their skills.
          </p>
        </div>
        <div className="p-8 text-white bg-[#2ab3b1] flex-col justify-start sm:rounded-bl-lg">np
          <h2 className="font-semibold mb-3">Monthly Subscription</h2>
          <h1 className="text-3xl font-semibold">
            $29 <span className="text-sm font-thin">per month</span>
          </h1>
          <p>Full access for less than $1 a day</p>
          <div className="flex justify-center mt-6">
            <button className="px-25 py-3 bg-[#c0e033] text-white rounded-md text-sm shadow-xl">
              Sign Up
            </button>
          </div>
        </div>
        <div className="md:col-start-2 md:col-end-3 p-8 bg-[#49bebd] text-white sm:rounded-br-lg sm:rounded-bl-none rounded-b-lg">
          <h2 className="font-semibold mb-3">Why Us</h2>
          <ul className="text-sm font-light">
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
