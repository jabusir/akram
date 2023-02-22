import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import AnimatedLogo from "@/components/AnimatedLogo";
import HeroSection from "@/components/HeroSection";
import SecondHomeSection from "@/components/SecondHomeSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>AKRAM</title>
        <meta name="description" content="Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="text-white">
        <div>
          <AnimatedLogo />
        </div>
        <div className="flex justify-center items-center h-screen">
          <HeroSection />
        </div>
        <div>
          <SecondHomeSection />
        </div>
      </main>
    </>
  );
}
