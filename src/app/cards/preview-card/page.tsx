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
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="flex min-w-md border rounded">
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
    <div className={`bg-[${card.bgColor}] w-60 p-10 text-white flex flex-col gap-6`}>
      <div>
        <Image src={card.imageUrl} width={50} height={50} alt="car icon"></Image>
      </div> 
      <h1 className="font-bold text-xl">{card.title}</h1>
      <p>{card.description}</p>
      <button>Learn More</button>
    </div>
  );
}
