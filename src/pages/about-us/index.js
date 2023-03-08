import Navbar from "@/components/Navbar";
import Head from "next/head";

export default function Home(props) {
  return (
    <>
      <Head>
        <title>About Us</title>
        <meta name="description" content="Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="text-white">
        <Navbar />
        <div>About us</div>
      </main>
    </>
  );
}
