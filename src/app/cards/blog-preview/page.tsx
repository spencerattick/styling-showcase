import Image from "next/image";
import illustration from "../../../../public/illustration-article.svg";
import avatar from "../../../../public/image-avatar.webp";

export default function BlogPreview() {
  return (
    <div className="bg-[#f5cf4e] w-full h-screen flex items-center justify-center text-black">
      <div className="lg:w-1/4 sm:w-2/5 w-3/4 h-1/2 bg-[#ffffff] rounded-lg border border-black p-5 flex flex-col shadow-[10px_10px_0_rgba(0,0,0,1)]">
        <Image
          src={illustration}
          width={400}
          height={400}
          alt="illustration"
          className="mb-5"
        ></Image>
        <span className="bg-[#f5cf4e] p-2 rounded font-bold w-1/3 text-center">
          Learning
        </span>
        <p className="text-xs my-4">Published 21 Dec 2023</p>
        <h1 className="text-lg font-[1000] mb-1 hover:text-[#f5cf4e] cursor-pointer transition duration-200">HTML & CSS Foundations</h1>
        <p className="text-[#909090] text-xs">
          These languages are the backbone fo every website, defining structure,
          content, and presentation.
        </p>
        <div className="mt-auto flex items-center justify-start gap-2">
          <Image src={avatar} width={30} height={30} alt="avatar"></Image>
          <h3 className="text-sm font-bold">Greg Hooper</h3>
        </div>
      </div>
    </div>
  );
}
