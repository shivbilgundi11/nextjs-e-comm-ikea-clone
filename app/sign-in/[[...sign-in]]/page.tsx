import { SignIn } from "@clerk/nextjs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign-In - IKEA",
};

export default function Page() {
  return (
    <>
      <section className="grid min-h-screen w-full grid-cols-1 items-center justify-center gap-6 border-2 xl:grid-cols-2">
        <div className="h-full w-full bg-[#0058A3]"></div>
        <SignIn />
      </section>
    </>
  );
}
