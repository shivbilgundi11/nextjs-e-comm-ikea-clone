"use client";

import Link from "next/link";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { addToBag } from "@/lib/store/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { ProductDetailType, SingleProductType } from "@/lib/types";

interface AddToCartProps {
  prodInfo: ProductDetailType | SingleProductType;
}

export default function AddToBag({ prodInfo }: AddToCartProps) {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.cart.items);

  const existingItem = state.find(
    (item) => prodInfo?.id === item?.prodData?.id,
  );

  const handleAddToCart = () => {
    dispatch(addToBag({ prodData: prodInfo, quantity: 1 }));
    toast(`${prodInfo.prodName} added to cart!`);
  };

  return (
    <>
      {existingItem ? (
        <Link href="/shoppingcart">
          <Button
            variant="ghost"
            className="mt-5 w-full rounded-full bg-[#004F93] py-7 text-base text-white hover:bg-[#0f4778] hover:text-white"
          >
            Go to cart
          </Button>
        </Link>
      ) : (
        <Button
          variant="ghost"
          className="mt-5 w-full rounded-full bg-[#004F93] py-7 text-base text-white hover:bg-[#0f4778] hover:text-white"
          onClick={handleAddToCart}
        >
          Add to bag
        </Button>
      )}
    </>
  );
}
