import Image from "next/image";

export default function StatsPreview() {
  return (
    <div className="bg-[#0a0b1b] w-screen h-screen flex justify-center items-center">
      <div className="max-w-6xl m-5 min-h-2/5 bg-[#1b1938] flex">
        <div>
          <h1>
            Get <span>insights</span> that help your business grow.
          </h1>
          <p>
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </p>
          <div>
            <div>
              <h3>10k+</h3>
              <p>COMPANIES</p>
            </div>
            <div>
              <h3>314</h3>
              <p>TEMPLATES</p>
            </div>
            <div>
              <h3>12M+</h3>
              <p>QUERIES</p>
            </div>
          </div>
        </div>
        <Image
          src="/image-header-desktop.jpg"
          width={200}
          height={200}
          alt="people working at their laptops"
          className="object-cover w-[50%]"
        />
      </div>
    </div>
  );
}
