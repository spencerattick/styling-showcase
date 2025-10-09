import { div } from "motion/react-client";
import Image from "next/image";

export default function ResultsSummary() {
  const results = [
    {
      category: "Reaction",
      icon: "",
      alt: "reaction icon",
      score: 80,
      color: "bg-red-100 text-red-500",
    },
    {
      category: "Memory",
      icon: "",
      alt: "memory icon",
      score: 92,
      color: "bg-yellow-100 text-yellow-500",
    },
    {
      category: "Verbal",
      icon: "",
      alt: "verbal icon",
      score: 61,
      color: "bg-green-100 text-green-500",
    },
    {
      category: "Visual",
      icon: "",
      alt: "visual icon",
      score: 72,
      color: "bg-blue-100 text-blue-500",
    },
  ];
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex w-full max-w-sm items-center justify-center rounded-xl border border-green-600">
        <div className="border border-amber-600 rounded-xl flex flex-col items-center text-center">
          <h3>Your Result</h3>
          <div>
            <h1>76</h1>
            <p>of 100</p>
          </div>
          <h2>Great</h2>
          <p>
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
        <div>
          <h2>Summary</h2>
          <ul>
            {results.map((result) => (
              <li key={result.category}>
                <Image
                  src={result.icon}
                  height={20}
                  width={20}
                  alt={result.alt}
                />
              </li>
            ))}
          </ul>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
}
