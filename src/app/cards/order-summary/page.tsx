import Image from "next/image";

export default function OrderSummary() {
  return (
    <div className="min-h-screen bg-[url(/pattern-background-desktop.svg)] bg-no-repeat flex justify-center items-center bg-[#dfe8ff]">
      <div className="bg-white rounded-xl shadow-xl mx-60">
        <Image
          src="/illustration-hero.svg"
          width={400}
          height={100}
          alt="illustration of a person listening to music and dancing"
          className="rounded-t-xl"
        />
        <div className="flex flex-col gap-4 items-center text-center p-5">
          <h1 className="font-black text-2xl">Order Summary</h1>
          <p className="text-[#7e849d] text-sm px-10">
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </p>
          <div className="bg-[#f8f9fe] flex gap-4 p-3 my-3 rounded-xl items-center">
            <Image
              src="/icon-music.svg"
              width={35}
              height={35}
              alt="music note icon"
              className="object-contain"
            />
            <div>
              <h2 className="font-bold">Annual Plan</h2>
              <p className="text-[#7e849d]">$59.99/year</p>
            </div>
            <p className="ml-9 underline text-sm cursor-pointer text-[#382ae1] font-semibold">
              Change
            </p>
          </div>
          <button className="bg-[#382ae1] text-white rounded-xl font-semibold px-16 py-3 shadow-xl text-sm">
            Proceed to Payment
          </button>
          <p className="text-sm text-[#7e849d] font-semibold">Cancel Order</p>
        </div>
      </div>
    </div>
  );
}
