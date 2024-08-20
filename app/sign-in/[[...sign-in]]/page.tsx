import { SignIn } from "@clerk/nextjs";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { IoArrowBackSharp } from "react-icons/io5";

import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Sign-In - IKEA",
};

export default function Page() {
  return (
    <>
      <section className="grid min-h-screen w-full grid-cols-1 gap-6 border-2 xl:grid-cols-2">
        <div className="flex h-full w-full flex-col items-start justify-between bg-[#0058A3] p-8 md:p-10 lg:p-14">
          {/* header */}
          <div className="flex items-center justify-start gap-x-2">
            <Link href={"/"}>
              <Button
                variant={"ghost"}
                className="bg-transparent text-2xl text-white hover:bg-transparent hover:text-white"
              >
                <IoArrowBackSharp />
              </Button>
            </Link>

            <Link href={"/"} className="">
              <Image
                src={"/assets/logo.svg"}
                alt="logo"
                width={90}
                height={36}
              />
            </Link>
          </div>

          {/* Between Part */}
          <div className="">
            <h2 className="mb-2 text-2xl font-bold text-white lg:text-3xl xl:text-4xl">
              <span className="text-[#FBD914]">Login</span> to your IKEA <br />
              account.
            </h2>

            <p className="text-sm text-white lg:w-[58%]">
              Choose between one of the sign-in methods or sign-in with email-id
              followed by OTP verificaion.
            </p>
          </div>

          <div className="flex w-full items-center justify-center xl:hidden">
            <SignIn />
          </div>

          {/* Footer */}
          <div>
            <p className="text-xs text-white">
              IKEA.in <span className="underline">Cookie Policy</span> and{" "}
              <span className="underline">Privacy Policy</span>.
            </p>
            <p className="text-xs text-white">
              © Inter IKEA Systems B.V. 1999-2024
            </p>
          </div>
        </div>
        <div className="hidden h-full w-full items-center justify-center xl:flex">
          <SignIn />
        </div>
      </section>
    </>
  );
}
