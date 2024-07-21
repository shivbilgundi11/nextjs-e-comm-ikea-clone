import ProductCard from '@/components/product-card';
import { SingleProductType } from '@/lib/types';

export default function ProductsListing({
  products,
}: {
  products: SingleProductType[] | undefined;
}) {
  return (
    <>
      <section className='mt-6 grid h-full w-full grid-cols-2 items-center justify-center gap-3 md:mt-8 md:grid-cols-3 md:gap-5 lg:mt-10 lg:grid-cols-4 lg:gap-7'>
        {products &&
          products.map((prod) => {
            return <ProductCard cardData={prod} key={prod.id} />;
          })}
      </section>
    </>
  );
}
