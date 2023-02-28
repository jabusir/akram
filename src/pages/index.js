import Head from "next/head";
import HeroSection from "@/components/HeroSection";
import SecondHomeSection from "@/components/SecondHomeSection";
import Navbar from "@/components/Navbar";
import { useEffect } from "react";


export default function Home(props) {
console.log(props)
  useEffect(() => {
  } , [])

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
  // Fetch data from external API
  // const res = await getAllProducts()
  // console.log(res)
  async function shopifyFetch({ query, variables }) {
    const endpoint = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
    const key = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN;
    try {
      const result = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Storefront-Access-Token': key
        },
        body: { query, variables } && JSON.stringify({ query, variables })
      });
      return {
        status: result.status,
        body: await result.json()
      };
    } catch (error) {
      // console.error('Error:', error);
      return {
        status: 500,
        error: 'Error receiving data'
      };
    }
  }

  async function getAllProducts() {
    return shopifyFetch({
      query: `{
          products(sortKey: TITLE, first: 100) {
            edges{
              node {
                id
                title
                description
              }
            }
          }
        }`
    });
  }

  const products = await getAllProducts()
  // Pass data to the page via props
  return { props: { products: products.body.data.products.edges.map(({ node }) => node) } }
}
