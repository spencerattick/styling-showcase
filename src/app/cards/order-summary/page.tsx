import Image from "next/image";

export default function OrderSummary() {
  return (
    <div className="min-h-screen bg-[#d6e1ff] flex justify-center items-center">
      <div className="bg-white rounded-xl shadow mx-60">
        <Image
          src="/illustration-hero.svg"
          width={400}
          height={100}
          alt="illustration of a person listening to music and dancing"
          className="rounded-t-xl"
        />
        <div className="flex flex-col items-center text-center p-5">
          <h1 className="font-black text-2xl pb-3">Order Summary</h1>
          <p className="text-[#7e849d] text-sm px-10">
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </p>
          <div className="bg-[#f8f9fe] flex gap-4 p-3 my-3 rounded-xl">
            <Image src='/icon-music.svg' width={30} height={40} alt="music note icon"/>
            <div>
              <h2>Annual Plan</h2>
              <p>$59.99/year</p>
            </div>
            <p>Change</p>
          </div>
          <button>Proceed to Payment</button>
          <p>Cancel Order</p>
        </div>
      </div>
    </div>
  );
}
