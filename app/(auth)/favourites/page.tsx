"use client";

import Image from "next/image";

import ProductCard from "@/components/product-card";
import { useAppSelector } from "@/lib/store/hooks";

export default function Favourites() {
  const wishlists = useAppSelector((state) => state.wishlist.wishlists);
  return (
    <>
      <main className="container flex h-auto w-full flex-col gap-y-7 py-6 md:gap-y-10 md:py-10 lg:py-12">
        <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">
          My favourites list
        </h2>

        <section className="mt-6 grid h-full w-full grid-cols-1 items-center justify-center gap-3 md:mt-8 md:grid-cols-3 md:gap-5 lg:mt-10 lg:grid-cols-4 lg:gap-7">
          {wishlists &&
            wishlists.map((prod) => {
              return (
                <ProductCard cardData={prod.podData} key={prod.podData.id} />
              );
            })}
        </section>

        {wishlists.length === 0 && (
          <div className="flex w-full flex-col items-center justify-center gap-y-5 md:gap-y-8">
            <p className="text-gray-600">You have no products wishlisted!</p>
            <div className="relative aspect-square w-52 md:w-96">
              <Image
                src={"/assets/empty-bag.avif"}
                alt="empty-bag-img"
                layout="fill"
              />
            </div>
          </div>
        )}
      </main>
    </>
  );
}
