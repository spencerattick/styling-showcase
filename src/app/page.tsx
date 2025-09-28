import Iridescence from "@/components/Iridescence";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="fixed top-0 left-0 w-screen h-screen -z-10 bg-red-500">
    
        <Iridescence
          color={[1, 1, 1]}
          mouseReact={false}
          amplitude={0.1}
          speed={1.0}
        />
      </div>

      <div className="relative z-10 min-h-screen w-full flex flex-col items-center justify-center bg-blue-500/30">
        <h1 className="text-center text-7xl mt-5 text-white font-black">
          Styling Practice
        </h1>
        <h2 className="mt-10 text-white font-semibold text-4xl">Spencer Attick</h2>
      </div>
    </>
  );
}
