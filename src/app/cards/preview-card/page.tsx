import Image from "next/image";

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
      imageUrl: "/images/icon-sedans.svg",
      bgColor: "#e28525",
    },
    {
      title: "SUVs",
      description:
        "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
      imageUrl: "/images/icon-suvs.svg",
      bgColor: "#006971",
    },
    {
      title: "Luxury",
      description:
        "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
      imageUrl: "/images/icon-luxury.svg",
      bgColor: "#00403f",
    },
  ];
  return (
    <div className="min-w-sm flex justify-center items-center border h-screen w-screen rounded">
      {cardData.map((card, index) => (
        <SinglePreview key={index} card={card}/>
      ))}
    </div>
  );
}

type SinglePreviewProps = {
    card: CardData;
  };

function SinglePreview({ card }: SinglePreviewProps) {
  return (
    <div className={`bg-[${card.bgColor}]} bg-blue-300 h-90 w-20`}>
      <div>
        <div>{card.title}</div>
        <Image></Image>
      </div>
      <h1></h1>
      <p></p>
      <button>Learn More</button>
    </div>
  );
}
