"use client";

import { TbShoppingBagPlus } from "react-icons/tb";
import { toast } from "sonner";

import { addToCart } from "@/lib/store/features/cart/cartSlice";
import { useAppDispatch } from "@/lib/store/hooks";
import { ProductDetailType, SingleProductType } from "@/lib/types";

import { Button } from "./ui/button";

interface AddToCartProps {
  prodData: ProductDetailType | SingleProductType;
}

export default function AddToCartBtn({ prodData }: AddToCartProps) {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ prodData, quantity: 1 }));
    toast(`${prodData?.prodName} added to cart!`);
  };

  return (
    <Button
      variant={"ghost"}
      className="rounded-full bg-[#004F93] p-2 text-2xl font-bold text-white hover:bg-[#004F93] hover:text-white"
      onClick={handleAddToCart}
    >
      <TbShoppingBagPlus />
    </Button>
  );
}
