"use client";

import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { PiHeartBold, PiHeartFill } from "react-icons/pi";
import { toast } from "sonner";

import { addToWishlist } from "@/lib/store/features/wishlist/wishlistSlice";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { ProductDetailType, SingleProductType } from "@/lib/types";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import { Button } from "./ui/button";

interface AddToWishlistProps {
  prodData: SingleProductType | ProductDetailType;
  id: string;
}

export default function AddToWishlist({ prodData, id }: AddToWishlistProps) {
  const { isSignedIn } = useUser();

  const dispatch = useAppDispatch();
  const wishlists = useAppSelector((state) => state.wishlist.wishlists);

  const alreadyWishlisted =
    wishlists && wishlists.find((item) => item.podData.id === id);

  const handleClick = () => {
    dispatch(addToWishlist({ itemInfo: prodData }));
    if (alreadyWishlisted) {
      toast(`${prodData.prodName} removed from wishlist`);
    } else {
      toast(`${prodData.prodName} added to wishlist`);
    }
  };

  if (!isSignedIn) {
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button
            variant={"ghost"}
            className="rounded-full p-3 text-xl font-bold hover:bg-[#dfdfdf]"
          >
            <PiHeartBold />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>You are not logged in!</AlertDialogTitle>
            <AlertDialogDescription>
              To add your favorite product to the wishlist, please login or sign
              up and try again.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <Link href={"/sign-in"}>
              <AlertDialogAction>Continue</AlertDialogAction>
            </Link>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  }

  return (
    <Button
      variant={"ghost"}
      className="rounded-full p-3 text-xl font-bold hover:bg-[#dfdfdf]"
      onClick={handleClick}
    >
      {!alreadyWishlisted ? <PiHeartBold /> : <PiHeartFill />}
    </Button>
  );
}
