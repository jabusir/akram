import Head from "next/head";
import HeroSection from "@/components/HeroSection";
import SecondHomeSection from "@/components/SecondHomeSection";
import Navbar from "@/components/Navbar";
import { getAllProducts } from "@/util/api";


export default function Home(props) {

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
          {/* <AnimatedLogo /> */}
          <Navbar />
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

export async function getServerSideProps() {
  const products = await getAllProducts()
  return { props: { products: products.body.data.products.edges.map(({ node }) => node) } }
}
