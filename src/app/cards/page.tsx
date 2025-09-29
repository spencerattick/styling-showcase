import Link from "next/link";

export default function CardsPage() {
  return (
    <div>
      <h1 className="text-center text-6xl mt-5">Cards</h1>
      <div className="flex flex-col items-center text-2xl mt-10">
        <Link href="/cards/qr-code">QR Code</Link>
        <Link href="/cards/social-links">Social Links</Link>
        <Link href="/cards/blog-preview">Blog Preview</Link>
        <Link href="/cards/nft-preview">NFT Preview</Link>
      </div>
    </div>
  );
}
