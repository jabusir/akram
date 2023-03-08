import Image from "next/image";
import GlowingText from "../GlowingText";
import braceletPic from "public/bracelet.png";
import Link from "next/link";

export default function HeroSection() {
  return (
    <>
      <div>
        <Link href="/about">
          <GlowingText text={"About"} />
        </Link>
        <GlowingText text={"Shop"} />
        <GlowingText text={"Contact"} />
      </div>
      <div className="ml-3">
        <Image src={braceletPic} />
      </div>
    </>
  );
}
