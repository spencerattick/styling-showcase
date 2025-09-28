"use client";

import { useState } from "react";
import RatingCard from "../../../components/rating-card";
import ThankYouCard from "../../../components/thank-you-card";

export default function Rating() {
  const [rating, setRating] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleRating = (num: number) => {
    setRating(num);
    console.log("Selected rating:", rating);
  };

  const handleSubmit = () => {
    if (rating) {
      setSubmitted(true);
    }
  };

  return (
    <div className="flex items-center justify-center h-[100vh] w-[100vw] bg-black">
      {submitted ? (
        <ThankYouCard rating={rating}/>
      ) : (
        <RatingCard
          handleRating={handleRating}
          rating={rating}
          handleSumbit={handleSubmit}
        />
      )}
    </div>
  );
}
