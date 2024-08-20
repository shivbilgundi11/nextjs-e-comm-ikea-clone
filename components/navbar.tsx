"use client";

import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import Image from "next/image";
import Link from "next/link";
import Headroom from "react-headroom";
import { AiOutlineUser } from "react-icons/ai";

import CreditsAd from "@/app/_components/credits";
import { MobileNav } from "@/app/_components/mobile-nav";

import CartBtn from "./cart-btn";
import FavBtn from "./favourite-btn";
import SearchBox from "./search-box";
import { Button } from "./ui/button";

export default function Navbar() {
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
                <div className="mr-2 flex items-center justify-center">
                  <SignedOut>
                    <Link href={"/sign-in"}>
                      <Button
                        variant={"ghost"}
                        className="rounded-full px-3 hover:bg-gray-200"
                      >
                        <span className="text-xl font-bold">
                          <AiOutlineUser />
                        </span>

                        <span className="ml-1 hidden md:inline-block">
                          Login
                        </span>
                      </Button>
                    </Link>
                  </SignedOut>
                  <SignedIn>
                    <UserButton />
                  </SignedIn>
                </div>

                <FavBtn />

                <CartBtn />

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
