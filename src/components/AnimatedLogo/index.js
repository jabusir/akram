import { useState } from "react";
import Image from "next/image";
import a_logo from "../../../public/a_logo_white.png";
import kram_logo from "public/kram_logo.png";

export default function AnimatedLogo() {
  const [isHovering, setIsHovering] = useState(true);

  return (
    <div className="fixed top-0 left-0">
      <div className="flex flex-row items-end">
        <Image
          src={a_logo}
          alt="First Image"
          className="h-16 w-8 mt-1 ml-1 relative flex"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onClick={() => setIsHovering(true)}
        />
        <Image
          src={kram_logo}
          alt="Second Image"
          className={`h-12 w-16 transition-all duration-500 ${
            isHovering ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
    </div>
  );
}
