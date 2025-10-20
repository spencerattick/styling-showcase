import Image from "next/image";

export default function ProductPreview() {
  return (
    <div className="flex justify-center items-center w-screen h-screen bg-[#f3ebe3]">
      <div className="max-w-md lg:max-w-lg bg-white rounded-lg flex justify-center items-center gap-y-5">
        <Image
          src="/image-product-desktop.jpg"
          alt="perfume bottle"
          width={200}
          height={200}
          className="rounded-l-lg w-[50%]"
        />
        <div className="mx-5 flex flex-col gap-2">
          <h2 className="text-[0.5rem] tracking-widest text-[#979a9f]">PERFUME</h2>
          <h1 className="font-bold text-xl/5 tracking-tight">Gabrielle Essence Eau De Parfum</h1>
          <p>
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className="flex gap-5 items-center">
            <h1 className="text-[#3f8169] text-2xl font-bold">$149.99</h1>
            <p className="line-through">$169.99</p>
          </div>
          <button className="bg-[#3f8169] text-white flex justify-center items-center gap-3 py-2 rounded-md">
            <Image src='/icon-cart.svg' alt='cart icon' width={20} height={20}/>
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}
