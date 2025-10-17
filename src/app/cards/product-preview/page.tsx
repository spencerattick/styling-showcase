import Image from "next/image";

export default function ProductPreview() {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="max-w-sm lg:max-w-lg">
        <Image
          src="/image-product-desktop.jpg"
          alt="perfume bottle"
          width={50}
          height={50}
        />
        <div>
          <h2>PERFUME</h2>
          <h1>Gabrielle Essence Eau De Parfum</h1>
          <p>
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div>
            <h1>$149.99</h1>
            <p>$169.99</p>
          </div>
          <button>
            <Image src='/icon-cart.svg' alt='cart icon' width={20} height={20}/>
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}
