import { div } from "motion/react-client";
import Image from "next/image";

export default function StatsPreview() {
  const stats = [
    { value: "10k+", label: "COMPANIES" },
    { value: "314", label: "TEMPLATES" },
    { value: "12M+", label: "QUERIES" },
  ];
  return (
    <div className="bg-[#0a0b1b] w-screen h-screen flex justify-center items-center">
      <div className="max-w-6xl m-5 min-h-2/5 bg-[#1b1938] flex rounded-md">
        <div className="p-15 flex flex-col gap-4 text-white">
          <h1 className="font-bold text-3xl">
            Get <span className="text-[#a25dd0]">insights</span> that help your
            business grow.
          </h1>
          <p className="text-[#a4a2bc] text-sm">
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </p>
          <div className="flex gap-10 mt-auto">
            {stats.map((stat, index) => (
              <div key={index}>
                <h2 className="font-semibold text-2xl">{stat.value}</h2>
                <p className="text-[#a4a2bc] text-xs">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#a25dd0] min-w-[50%] rounded-r-md">
          <Image
            src="/image-header-desktop.jpg"
            width={200}
            height={200}
            alt="people working at their laptops"
            className="object-cover mix-blend-multiply h-full w-full"
          />
        </div>
      </div>
    </div>
  );
}
