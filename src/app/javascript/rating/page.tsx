"use client";

import { useState } from "react";
import RatingCard from "../../../components/rating-card";

export default function Rating() {
  const [rating, setRating] = useState<number | null>(null);

  const handleRating = (num: number) => {
    setRating(num);
    console.log("Selected rating:", rating);
  };

  return (
    <div className="flex items-center justify-center h-[100vh] w-[100vw]">
      <RatingCard handleRating={handleRating} rating={rating} />
    </div>
  );
}
