import Link from "next/link";
import { useState } from "react";
import ShopPreview from "../ShopPreview";

export default function Navbar() {
  const [shopHovered, setShopHovered] = useState(false);

  return (
    <nav className="w-full absolute z-20 flex flex-col bg-[#9395A4] md:flex-row md:items-center">
      <div className="py-2 px-4 flex gap-4">
        <Link href="/shop">
          <div
            className="text-black"
            onMouseEnter={() => setShopHovered(true)}
            onMouseLeave={() => setShopHovered(false)}
          >
            Shop
          </div>
          {shopHovered ? <ShopPreview setShopHovered={setShopHovered} /> : null}
        </Link>
        <Link href="/about-us" className="text-black">
          About
        </Link>
      </div>
      <div className="flex justify-center md:justify-end items-center h-full flex-grow">
        <div className="w-full max-w-[480px] mx-auto">
          <Link href="/">
            <img
              src="./a_logo_white.png"
              alt="a"
              className="h-6 mx-auto pr-[4rem]"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
}
