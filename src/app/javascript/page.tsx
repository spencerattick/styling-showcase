import Link from "next/link";

export default function JavascriptPage() {
  return (
    <div>
    <h1 className="text-center text-6xl mt-5">Designs with Javascript</h1>
    <div className="flex flex-col items-center text-2xl mt-10">
      <Link href="/javascript/faq">FAQ Accordion</Link>
    </div>
  </div>
  )
}


