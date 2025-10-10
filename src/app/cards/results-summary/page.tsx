import Image from "next/image";

export default function ResultsSummary() {
  const results = [
    {
      category: "Reaction",
      icon: "/icon-reaction.svg",
      alt: "reaction icon",
      score: 80,
      color: "bg-red-100 text-red-500",
    },
    {
      category: "Memory",
      icon: "/icon-memory.svg",
      alt: "memory icon",
      score: 92,
      color: "bg-yellow-100 text-yellow-500",
    },
    {
      category: "Verbal",
      icon: "/icon-verbal.svg",
      alt: "verbal icon",
      score: 61,
      color: "bg-green-100 text-green-500",
    },
    {
      category: "Visual",
      icon: "/icon-visual.svg",
      alt: "visual icon",
      score: 72,
      color: "bg-blue-100 text-blue-500",
    },
  ];
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-[#edf2ff]">
      <div className="flex w-full max-w-md rounded-xl  bg-white shadow-lg">
        <div className="min-h-full max-w-[50%] rounded-xl flex flex-col gap-4 items-center text-center bg-linear-to-tr from-indigo-500 to-violet-500 p-2 text-white">
          <h3 className="mb-3 text-[#ccc6ff]">Your Result</h3>
          <div className="bg-[#4a26d0] p-8 rounded-full">
            <h1 className=" text-4xl font-bold">76</h1>
            <p className="text-xs text-[#ccc6ff]">of 100</p>
          </div>
          <h2 className="font-bold text-2xl">Great</h2>
          <p className="text-sm text-[#ccc6ff] px-6 pb-3">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
        <div className="p-6 flex flex-col gap-4">
          <h2 className="font-bold">Summary</h2>
          <ul>
            {results.map((result) => (
              <li
                key={result.category}
                className="flex items-center gap-1 bg-amber-600/20 m-2 rounded-md p-2 text-sm"
              >
                <Image
                  src={result.icon}
                  height={20}
                  width={20}
                  alt={result.alt}
                />
                <span>{result.category}</span>
                <span>
                  {result.score} <span>/ 100</span>
                </span>
              </li>
            ))}
          </ul>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
}
