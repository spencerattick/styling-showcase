import Image from "next/image";
import { Big_Shoulders } from "next/font/google";

const bigShoulders = Big_Shoulders({
  subsets: ["latin"],
  weight: ["700"],
});

type CardData = {
  title: string;
  description: string;
  imageUrl: string;
  bgColor: string;
};

export default function PreviewCard() {
  const cardData = [
    {
      title: "Sedans",
      description:
        "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
      imageUrl: "/icon-sedans.svg",
      bgColor: "#e28525",
    },
    {
      title: "SUVs",
      description:
        "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
      imageUrl: "/icon-suvs.svg",
      bgColor: "#006971",
    },
    {
      title: "Luxury",
      description:
        "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
      imageUrl: "/icon-luxury.svg",
      bgColor: "#00403f",
    },
  ];
  return (
    <div className="flex justify-center items-center min-h-screen w-screen">
      <div className="flex sm:flex-row flex-col justify-center items-center sm:min-w-md w-screen my-8">
        {cardData.map((card, index) => (
          <SinglePreview key={index} card={card} />
        ))}
      </div>
    </div>
  );
}

type SinglePreviewProps = {
  card: CardData;
};

function SinglePreview({ card }: SinglePreviewProps) {
  return (
    <div
      className="sm:w-60 w-[80%] p-10 text-white flex flex-col gap-9 
      sm:first:rounded-tr-none
      sm:first:rounded-tl-md sm:first:rounded-bl-md sm:last:rounded-tr-md sm:last:rounded-br-md 
      sm:last:rounded-bl-none
      first:rounded-t-md last:rounded-b-md"
      style={{ background: card.bgColor }}
    >
      <div>
        <Image
          src={card.imageUrl}
          width={60}
          height={60}
          alt="car icon"
        ></Image>
      </div>
      <h1 className={`${bigShoulders.className} font-bold text-3xl uppercase`}>
        {card.title}
      </h1>
      <p className="text-sm">{card.description}</p>
      <button
        className=" bg-white py-3 rounded-full mt-10 text-xs sm:w-2/3 w-1/2"
        style={{ color: card.bgColor }}
      >
        Learn More
      </button>
    </div>
  );
}
