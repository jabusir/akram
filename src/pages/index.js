import Head from "next/head";
import HeroSection from "@/components/HeroSection";
import SecondHomeSection from "@/components/SecondHomeSection";
import Navbar from "@/components/Navbar";
import { getAllCollections } from "@/util/api";

export default function Home(props) {
  console.log(props);
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
  const collections = await getAllCollections();
  return {
    props: {
      collections: collections.body.data.collections.edges.map(({ node }) => {
        node.products = node.products.edges.map(({ node }) => node);
        return node;
      }),
    },
  };
}
