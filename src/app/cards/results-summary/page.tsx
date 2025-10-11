import Image from "next/image";

export default function ResultsSummary() {
  const results = [
    {
      category: "Reaction",
      icon: "/icon-reaction.svg",
      alt: "reaction icon",
      score: 80,
      color: "bg-red-100/40 text-red-500",
    },
    {
      category: "Memory",
      icon: "/icon-memory.svg",
      alt: "memory icon",
      score: 92,
      color: "bg-yellow-100/40 text-yellow-500",
    },
    {
      category: "Verbal",
      icon: "/icon-verbal.svg",
      alt: "verbal icon",
      score: 61,
      color: "bg-green-100/40 text-green-500",
    },
    {
      category: "Visual",
      icon: "/icon-visual.svg",
      alt: "visual icon",
      score: 72,
      color: "bg-blue-100/40 text-blue-500",
    },
  ];
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-[#edf2ff]">
      <div className="flex w-full max-w-lg rounded-2xl  bg-white shadow-lg">
        <div className="min-h-full max-w-[50%] rounded-2xl flex flex-col gap-4 items-center text-center bg-linear-to-tr from-[#322deb] to-[#6742ff] p-2 text-white">
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
        <div className="p-6 flex flex-col gap-4 w-full">
          <h2 className="font-bold">Summary</h2>
          <ul className="flex flex-col w-full">
            {results.map((result) => (
              <li
                key={result.category}
                className={`flex my-2 rounded-xl p-3 text-sm ${result.color}`}
              >
                <Image
                  src={result.icon}
                  height={20}
                  width={20}
                  alt={result.alt}
                  className="mr-2"
                />
                <span className="font-semibold">{result.category}</span>
                <span className="ml-auto font-bold text-black">
                  {result.score} <span className="text-black/40">/ 100</span>
                </span>
              </li>
            ))}
          </ul>
          <button className="bg-[#313a55] p-3 rounded-full text-white text-sm font-semibold">Continue</button>
        </div>
      </div>
    </div>
  );
}
