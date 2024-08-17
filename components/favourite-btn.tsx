"use client";

import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { useEffect } from "react";
import { PiHeartBold } from "react-icons/pi";

import { setFavs } from "@/lib/store/features/wishlist/wishlistSlice";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";

import { Button } from "./ui/button";

export default function FavBtn() {
  const dispatch = useAppDispatch();
  const favourites = useAppSelector((state) => state?.wishlist?.wishlists);

  const userInfo = useUser();
  const fName = userInfo?.user?.firstName;
  const isLoggedIn = userInfo?.isSignedIn;

  // Load favorites from localStorage when the component mounts
  useEffect(() => {
    if (isLoggedIn && fName) {
      const savedFavourites = localStorage.getItem(fName);
      if (savedFavourites) {
        const parsedFavourites = JSON.parse(savedFavourites);
        dispatch(setFavs(parsedFavourites)); // Set the favorites in the Redux store
      }
    }
  }, [dispatch, isLoggedIn, fName]);

  // Save favorites whenever they change
  useEffect(() => {
    const saveFavouritesToLocalStorage = (favourites: string | any[]) => {
      if (typeof window !== "undefined" && isLoggedIn && fName) {
        if (favourites.length === 0) {
          localStorage.removeItem(fName); // Remove favorites from localStorage if empty
        } else {
          localStorage.setItem(fName, JSON.stringify(favourites));
        }
      }
    };

    saveFavouritesToLocalStorage(favourites);
  }, [favourites, isLoggedIn, fName]);

  return (
    <>
      <Link href={"/favourites"}>
        <Button
          variant={"ghost"}
          className="rounded-full p-3 text-xl font-bold hover:bg-[#dfdfdf]"
        >
          <PiHeartBold />
        </Button>
      </Link>
    </>
  );
}
