import GradientText from "@/components/GradientText";
import ShinyText from "@/components/ShinyText";
import Image from "next/image";
import Link from "next/link";

export default function CardsPage() {
  const cards = [
    {
      name: "QR Code",
      link: "/cards/qr-code",
      previewImage: "/preview/qr.png",
    },
    {
      name: "Social Links",
      link: "/cards/social-links",
      previewImage: "/preview/social.png",
    },
    {
      name: "Blog",
      link: "/cards/blog-preview",
      previewImage: "/preview/blog.png",
    },
    {
      name: "NFT",
      link: "/cards/nft-preview",
      previewImage: "/preview/equilibrium.png",
    },
    {
      name: "Order Summary",
      link: "/cards/order-summary",
      previewImage: "/preview/order.png",
    },
  ];
  return (
    <div className="min-h-screen bg-black pb-20 text-center">
      {/* <ShinyText
        text="Cards"
        disabled={false}
        speed={13}
        className="custom-class text-6xl pt-10"
      /> */}
      <GradientText
        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
        animationSpeed={5}
        showBorder={false}
        className="custom-class text-6xl pt-10 font-extrabold cursor-default"
      >
        Cards
      </GradientText>

      {/* <h1 className="text-center text-6xl pt-5">Cards</h1> */}
      <div className="flex flex-wrap justify-center p-10 min-h-screen text-2xl mt-10 gap-10">
        {cards.map((card) => (
          <Link
            key={card.name}
            href={card.link}
            className="flex flex-col items-center gap-2 font-semibold "
          >
            {card.name}
            <div className="shadow-xl shadow-white/20 rounded-lg">
              <Image
                src={card.previewImage}
                width={200}
                height={200}
                alt={`${card.name} preview card`}
                className="rounded-xl hover:opacity-50 hover:w-62 object-cover transition-all duration-300 w-60 h-90"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
