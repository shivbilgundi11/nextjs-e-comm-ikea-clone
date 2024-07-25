"use client";

import Image from "next/image";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { inspirationImages } from "@/lib/image";

export default function InspirationGallery() {
  const [inspirationType, setInspirationType] = useState(
    inspirationImages[0].id,
  );
  return (
    <>
      <section className="container my-10 flex h-auto w-full flex-col gap-y-5 py-4 md:gap-y-8 md:py-10">
        <h3 className="text-2xl font-semibold">More ideas and inspiration</h3>
        <div className="flex flex-wrap items-center gap-4">
          {inspirationImages.map((ins) => {
            return (
              <Button
                key={ins.id}
                variant={"outline"}
                className={`rounded-full bg-gray-100 p-5 text-sm font-semibold ${inspirationType === ins.id ? "border-black" : "border-transparent"}`}
                onClick={() => setInspirationType(ins.id)}
              >
                {ins.name}
              </Button>
            );
          })}
        </div>

        <div className="h-full w-full columns-2 gap-3 align-middle md:gap-5 lg:columns-3">
          {inspirationImages[inspirationType].images.map((img) => {
            return (
              <div
                key={img.id}
                className="relative mb-3 h-[250px] align-middle sm:h-[390px] md:mb-5 md:h-[540px] lg:h-[600px] xl:h-[720px]"
              >
                <Image
                  blurDataURL={`/assets${img.img1}`}
                  src={`/assets${img.img1}`}
                  alt="inspiration"
                  fill
                  placeholder="blur"
                />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
