import { ProductProvider } from "../util/ProductContext";
import { Cinzel } from "@next/font/google";

import "@/styles/globals.css";

const cinzel = Cinzel({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <ProductProvider>
      <main className={cinzel.className}>
        <Component {...pageProps} />
      </main>
    </ProductProvider>
  );
}
