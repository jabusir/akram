import { CollectionProvider } from "../util/CollectionContext";
import { Cinzel } from "@next/font/google";

import "@/styles/globals.css";

const cinzel = Cinzel({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <CollectionProvider>
      <main className={cinzel.className}>
        <Component {...pageProps} />
      </main>
    </CollectionProvider>
  );
}
