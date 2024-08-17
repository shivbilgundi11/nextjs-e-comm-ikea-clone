"use client";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import Headroom from "react-headroom";
// import { MdOutlinePersonOutline } from "react-icons/md";
import { PiHeartBold } from "react-icons/pi";
import { TbShoppingBag } from "react-icons/tb";

import CreditsAd from "@/app/_components/credits";
import { MobileNav } from "@/app/_components/mobile-nav";
import { setCart } from "@/lib/store/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";

import CartItemsBadge from "./cartBadge";
import SearchBox from "./search-box";
import { Button } from "./ui/button";

export default function Navbar() {
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
      <header className="flex h-auto w-full flex-col">
        <CreditsAd />
        <Headroom>
          <nav className="container flex min-h-[130px] flex-col items-center justify-evenly border-b bg-white md:min-h-[80px] md:flex-row md:justify-between lg:min-h-[90px]">
            <div className="flex h-full w-full items-center justify-between">
              <div className="flex h-full w-max items-center gap-x-4">
                <Link href={"/"}>
                  <Image
                    src={"/assets/ikea-logo.svg"}
                    alt="logo"
                    width={90}
                    height={36}
                  />
                </Link>

                <div className="hidden md:block">
                  <SearchBox />
                </div>
              </div>

              <div className="flex h-full w-max items-center gap-x-1">
                {/* <Link href={"/sign-in"}>
                  <Button
                    variant={"ghost"}
                    className="rounded-full p-3 font-normal hover:bg-[#dfdfdf]"
                  >
                    <MdOutlinePersonOutline className="text-xl lg:mr-2" />{" "}
                    <p className="hidden lg:inline-block">Hej! Log in</p>
                  </Button>
                </Link> */}

                <div className="mr-2 flex items-center justify-center">
                  <SignedOut>
                    <SignInButton />
                  </SignedOut>
                  <SignedIn>
                    <UserButton />
                  </SignedIn>
                </div>

                <Link href={"/favourites"}>
                  <Button
                    variant={"ghost"}
                    className="rounded-full p-3 text-xl font-bold hover:bg-[#dfdfdf]"
                  >
                    <PiHeartBold />
                  </Button>
                </Link>

                <Link href={"/shoppingcart"}>
                  <Button
                    variant={"ghost"}
                    className="relative rounded-full p-3 px-2 text-2xl font-bold hover:bg-[#dfdfdf]"
                  >
                    <TbShoppingBag />
                    <CartItemsBadge />
                  </Button>
                </Link>
                <MobileNav />
              </div>
            </div>

            <div className="block w-full md:hidden">
              <SearchBox />
            </div>
          </nav>
        </Headroom>
      </header>
    </>
  );
}
