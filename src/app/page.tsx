import Iridescence from "@/components/Iridescence";
import { Button } from "@/components/ui/button";
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
        <h1 className="text-center text-7xl mt-5 text-white font-black [text-shadow:_0_2px_10px_rgb(0_0_0_/_40%)]">
          Styling Practice
        </h1>
        <h2 className="mt-10 text-white font-semibold text-4xl [text-shadow:_0_2px_8px_rgb(0_0_0_/_50%)]">
          Spencer Attick
        </h2>
        <div className="mt-10 flex gap-4 justify-center items-center">
          <Button variant="outline" size="lg">
            <Link href="/cards">Cards</Link>
          </Button>
          <Button variant="outline" size="lg">
            <Link href="/javascript">Designs with JavaScript</Link>
          </Button>
        </div>
      </div>
    </>
  );
}
