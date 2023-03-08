import MyAccordion from "../MyAccordion";
import { useContext } from "react";
import PreviewCard from "../PreviewCard";
import CollectionContext from "@/util/CollectionContext";

export default function ShopPreview({ setShopHovered }) {
  const { collections } = useContext(CollectionContext);
  return (
    <div
      onMouseEnter={() => setShopHovered(true)}
      onMouseLeave={() => setShopHovered(false)}
      className="bg-black absolute top-8 w-2/6 h-24"
    >
      {collections.map((collection, i) => (
        <MyAccordion key={i} item={collection}>
          {collection.products.map((product, j) => (
            <PreviewCard key={j} product={product} />
          ))}
        </MyAccordion>
      ))}
    </div>
  );
}
