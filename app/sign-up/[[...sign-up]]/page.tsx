import { SignUp } from "@clerk/nextjs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign-Up - IKEA",
};

export default function Page() {
  return (
    <>
      <div className="flex h-full min-h-screen w-full items-center justify-center">
        <SignUp />
      </div>
    </>
  );
}
