"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { IoArrowForward } from "react-icons/io5";

import CartItem from "@/components/cart-item";
import { EmptyBagItems } from "@/components/clear-cart";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/lib/store/hooks";
import { formatPrice } from "@/lib/utils";

export default function Cart() {
  const [isCartEmpty, setIsCartEmpty] = useState(true);

  const state = useAppSelector((state) => state.cart.items);

  const subTotal = state.reduce((prevProd, currProd) => {
    return prevProd + currProd.prodData.price * currProd.quantity;
  }, 0);

  useEffect(() => {
    if (state.length !== 0) {
      setIsCartEmpty(false);
    } else {
      setIsCartEmpty(true);
    }
  }, [state]);
  return (
    <>
      <main className="container grid h-auto w-full grid-cols-1 gap-y-12 py-12 md:py-20 lg:grid-cols-8 lg:gap-x-16">
        <div className="h-full w-full lg:col-span-5">
          {/* Cart-Status */}
          <div className="flex h-auto w-full items-center justify-between">
            <h2 className="text-4xl font-bold text-[#111]">
              {!isCartEmpty ? "Shopping bag" : "Your shopping bag is empty"}
            </h2>

            <EmptyBagItems />
          </div>

          {/* Cart Items Displayed Below */}
          {!isCartEmpty && (
            <div className="mt-4 flex h-auto w-full flex-col gap-y-3 lg:mt-6 lg:gap-y-5">
              {state.map((item) => {
                return (
                  <CartItem
                    key={item?.prodData?.id}
                    itemInfo={item.prodData}
                    qt={item.quantity}
                  />
                );
              })}
            </div>
          )}

          {/* If Empty Display Below Content */}
          {isCartEmpty && (
            <>
              <p className="mt-4 text-sm text-gray-700 md:mt-6">
                When you add products to your shopping bag, they will appear
                here.
              </p>
              <div className="mt-4 flex items-center gap-x-3 md:mt-6">
                <Button className="rounded-full">Login</Button>
                <Button className="rounded-full" variant={"outline"}>
                  View your wishlist
                </Button>
              </div>
            </>
          )}
        </div>
        <div className="h-auto w-full lg:col-span-3">
          <div className="flex h-auto w-full items-center justify-center">
            {isCartEmpty && (
              <div className="relative aspect-square h-[260px] w-[260px] md:h-[350px] md:w-[350px] lg:h-[450px] lg:w-[450px]">
                <Image
                  src={"/assets/empty-bag.avif"}
                  alt={"empty-bag-image"}
                  fill
                />
              </div>
            )}
          </div>

          {!isCartEmpty && (
            <div className="h-auto w-full">
              <h2 className="text-[18px] font-bold text-[#111]">
                Order summary
              </h2>
              <div className="flex h-auto w-full items-center justify-between py-3 md:py-5">
                <p className="text-sm text-gray-600">Products</p>
                <p className="text-sm font-semibold text-gray-800">
                  Rs.{formatPrice(subTotal)}
                </p>
              </div>

              <div className="my-1 h-[2px] w-full bg-black"></div>

              <div className="flex h-auto w-full items-center justify-between py-3 md:py-5">
                <p className="text-sm font-bold text-gray-800">Subtotal</p>
                <p className="text-xl font-bold text-gray-900">
                  <small className="align-top text-sm">Rs.</small>
                  {formatPrice(subTotal)}
                </p>
              </div>

              <Button className="inline-flex h-auto w-full items-center justify-between bg-[#0058a3] py-8 text-lg font-bold text-white hover:bg-[#0058a3] md:py-12 lg:py-14">
                Continue to checkout{" "}
                <span className="block rounded-full bg-white p-2 text-xl text-black">
                  <IoArrowForward />
                </span>
              </Button>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
