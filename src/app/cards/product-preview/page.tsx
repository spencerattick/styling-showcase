import Image from "next/image";
import { Montserrat, Fraunces } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "700"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["700"],
});

export default function ProductPreview() {
  return (
    <div
      className='flex justify-center items-center w-screen h-screen bg-[#f3ebe3]'
    >
      <div className="max-w-md lg:max-w-lg h-92 bg-white rounded-lg flex justify-center items-center">
        <Image
          src="/image-product-desktop.jpg"
          alt="perfume bottle"
          width={300}
          height={300}
          className="rounded-l-lg w-[50%] h-full"
        />
        <div className="px-5 flex flex-col h-full gap-4 lg:gap-6 justify-center">
          <h2 className="text-[0.6rem] tracking-[0.3rem] text-[#979a9f]">
            PERFUME
          </h2>
          <h1 className={`font-bold text-2xl/6 tracking-tight font-fraunces ${fraunces.className} mr-5`}>
            Gabrielle Essence Eau De Parfum
          </h1>
          <p className={`${montserrat.className} text-sm text-[#6c7289]`}>
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className="flex gap-5 items-center">
            <h1 className={`text-[#3f8169] text-2xl font-bold ${fraunces.className}`}>$149.99</h1>
            <p className="line-through">$169.99</p>
          </div>
          <button className="bg-[#3f8169] text-white flex justify-center items-center gap-3 py-2 rounded-md mb-4">
            <Image
              src="/icon-cart.svg"
              alt="cart icon"
              width={20}
              height={20}
            />
            <span className="text-xs font-semibold">Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}
