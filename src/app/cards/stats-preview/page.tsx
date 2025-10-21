import Image from "next/image";

export default function StatsPreview() {
  return (
    <div className="bg-[#0a0b1b] w-screen h-screen flex justify-center items-center">
      <div>
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
        <Image />
      </div>
    </div>
  );
}
