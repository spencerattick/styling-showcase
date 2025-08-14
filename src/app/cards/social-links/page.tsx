import Image from "next/image";
import avatarImg from "../../../../public/avatar-jessica.jpeg";

export default function SocialLinks() {
  const socialLinks = [
    "Github",
    "Frontend Mentor",
    "LinkedIn",
    "Twitter",
    "Instagram",
  ];
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-[#1f1f1f] p-8 rounded-lg flex flex-col items-center">
        <Image
          src={avatarImg}
          width={80}
          height={80}
          alt="avatar image"
          className="rounded-full mb-5"
        ></Image>
        <h1 className="font-bold text-2xl">Jessica Randall</h1>
        <p className="text-[#a6c93c] font-semibold text-xs">
          London, United Kingdom
        </p>
        <p className="mt-8 text-sm">
          &quot;Front-end developer and avid reader.&quot;
        </p>
        <div className="flex flex-col w-full mt-4 ">
          {socialLinks.map((link, index) => (
            <div
              key={index}
              className="m-1.5 p-2 rounded-lg bg-[#333333] text-center font-semibold text-xs hover:bg-[#a6c93c] hover:text-[#1f1f1f] hover:cursor-pointer transition-all duration-200"
            >
              {link}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
