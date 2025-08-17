import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-center text-6xl mt-5">Styling Practice</h1>
      <div className="flex justify-center text-2xl mt-10">
        <Link href="/cards">Cards</Link>
        <Link href="/javascript">Designs with Javascript</Link>
      </div>
    </div>
  );
}
