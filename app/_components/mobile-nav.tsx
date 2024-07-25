"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GrMenu } from "react-icons/gr";
import { MdArrowForwardIos } from "react-icons/md";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { getImageUrl } from "@/lib/image";
import { categories, shopByRoomList } from "@/lib/links";

export function MobileNav() {
  const [showCategory, setShowCategory] = useState("");

  const handleClick = (cate: string) => {
    if (showCategory === cate) {
      setShowCategory("");
    } else {
      setShowCategory(cate);
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild className="lg:hidden">
        <Button
          variant={"ghost"}
          className="rounded-full p-3 text-xl font-bold hover:bg-[#dfdfdf]"
        >
          <GrMenu />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"} className="overflow-y-scroll">
        <SheetHeader>
          <SheetTitle>Categories</SheetTitle>
          <SheetDescription>
            Choose the category according to your product hunt.
          </SheetDescription>
        </SheetHeader>
        <div className="my-10 h-auto w-full">
          <div
            className="group mb-4 flex cursor-pointer items-center justify-between text-2xl font-bold"
            onClick={() => handleClick("products")}
          >
            <h4 className="group-hover:underline">Shop products</h4>

            <MdArrowForwardIos
              className={`transition-all duration-300 ease-in-out ${showCategory === "products" ? "rotate-90" : "rotate-0"}`}
            />
          </div>
          <div
            className={`${showCategory === "products" ? "flex" : "hidden"} w-full flex-col gap-y-6 border-b p-3`}
          >
            {categories.map(({ id, path, imageURL, category }) => {
              return (
                <Link href={path} key={id}>
                  <SheetClose asChild>
                    <div className="group flex items-center gap-x-3 p-2">
                      <Image
                        src={getImageUrl(imageURL)}
                        alt={category}
                        width={80}
                        height={80}
                      />

                      <p className="text-sm text-gray-700 group-hover:underline">
                        {category}
                      </p>
                    </div>
                  </SheetClose>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="my-10 h-auto w-full">
          <div
            className="group mb-4 flex cursor-pointer items-center justify-between text-2xl font-bold"
            onClick={() => handleClick("rooms")}
          >
            <h4 className="group-hover:underline">Shop by rooms</h4>

            <MdArrowForwardIos
              className={`transition-all duration-300 ease-in-out ${showCategory === "rooms" ? "rotate-90" : "rotate-0"}`}
            />
          </div>
          <div
            className={`${showCategory === "rooms" ? "flex" : "hidden"} w-full flex-col gap-y-6 border-b p-3`}
          >
            {shopByRoomList.map(({ id, path, imageURL, roomName }) => {
              return (
                <Link href={path} key={id}>
                  <SheetClose asChild>
                    <div className="group flex items-center gap-x-3 p-2">
                      <Image
                        src={getImageUrl(imageURL)}
                        alt={roomName}
                        width={80}
                        height={80}
                      />

                      <p className="text-sm text-gray-700 group-hover:underline">
                        {roomName}
                      </p>
                    </div>
                  </SheetClose>
                </Link>
              );
            })}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
