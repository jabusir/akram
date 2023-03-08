import { useRef } from "react";
import Image from "next/image";
import GlowingText from "../GlowingText";
import braceletPic from "public/bracelet.png";
import Link from "next/link";
import {useRef} from 'react';


export default function HeroSection() {
  const videoEl = useRef(null);

  const handleClick = () => {
    const curr = videoEl.current;
    curr.paused ? curr.play() : curr.pause();
  };

  return (
    <>
      <div className="z-10 flex items-end ">
        {/* <div>
          <img src="./a_logo_white.png" alt="a" className="h-24 w-12" />
        </div>
        <div>
          <img src="./kram_logo.png" alt="kram" className="h-24" />
        </div> */}
      </div>
      <video
        className="absolute h-screen object-cover"
        playsInline
        loop
        muted
        ref={videoEl}
        onClick={handleClick}
        src={require("./ring.mp4")}
      />
    </>
  );
}
