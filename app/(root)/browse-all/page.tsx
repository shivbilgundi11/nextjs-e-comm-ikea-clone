import ProductsListing from "@/app/_components/category-page/products-listing";
import { productDetails } from "@/app/api/db/productDetails";

export default function BrowseAll() {
  return (
    <>
      <main className="container flex h-auto w-full flex-col gap-y-7 py-6 md:gap-y-10 md:py-10 lg:py-12">
        <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">
          Browse all products
        </h2>

        <ProductsListing products={productDetails} />
      </main>
    </>
  );
}
