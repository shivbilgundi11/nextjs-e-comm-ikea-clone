import { SignIn } from "@clerk/nextjs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign-In - IKEA",
};

export default function Page() {
  return (
    <>
      <div className="flex h-full min-h-screen w-full items-center justify-center">
        <SignIn />
      </div>
    </>
  );
}
