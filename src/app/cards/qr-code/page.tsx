import Image from "next/image";
import qrImage from "../../../../public/image-qr-code.png";

export default function QRCode() {
  return (
    <div className="flex flex-col items-center justify-center mt-10 h-screen w-full">
      <div className="flex flex-col space-y-3 items-center justify-center bg-white rounded-[1.25rem] h-1/2 w-80 p-4">
        <div className="rounded-[1.25rem] overflow-hidden">
          <Image src={qrImage} width={280} height={280} alt="qr code" />
        </div>
        <h2 className="text-lg font-bold text-slate-900 p-2 text-center">
          Improve your frontend skills by building projects
        </h2>
        <p className="text-slate-500 p-2 text-center font-light">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level.
        </p>
      </div>
    </div>
  );
}
