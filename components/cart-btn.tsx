import Link from "next/link";
import { useEffect } from "react";
import { TbShoppingBag } from "react-icons/tb";

import { setCart } from "@/lib/store/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";

import CartItemsBadge from "./cartBadge";
import { Button } from "./ui/button";

export default function CartBtn() {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state?.cart?.items);

  useEffect(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    if (savedCartItems) {
      const parsedCartItems = JSON.parse(savedCartItems);
      dispatch(setCart(parsedCartItems)); // Set the cart items in the Redux store
    }
  }, [dispatch]);

  // Save cart items whenever cartItems change
  useEffect(() => {
    // Function to save cart items to localStorage
    const saveCartToLocalStorage = (items: typeof cartItems) => {
      if (typeof window !== "undefined") {
        if (items.length === 0) {
          localStorage.removeItem("cartItems"); // Remove cartItems from localStorage if empty
        } else {
          localStorage.setItem("cartItems", JSON.stringify(items));
        }
      }
    };

    saveCartToLocalStorage(cartItems);
  }, [cartItems]);

  return (
    <>
      <Link href={"/shoppingcart"}>
        <Button
          variant={"ghost"}
          className="relative rounded-full p-3 px-2 text-2xl font-bold hover:bg-[#dfdfdf]"
        >
          <TbShoppingBag />
          <CartItemsBadge />
        </Button>
      </Link>
    </>
  );
}
