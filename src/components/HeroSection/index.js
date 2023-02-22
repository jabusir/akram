import Image from "next/image";
import GlowingText from "../GlowingText";
import braceletPic from "public/bracelet.png";

export default function HeroSection() {
  return (
    <>
      <div>
        <GlowingText text={"About"} />
        <GlowingText text={"Shop"} />
        <GlowingText text={"Contact"} />
      </div>
      <div className="ml-3">
        <Image src={braceletPic} />
      </div>
    </>
  );
}
