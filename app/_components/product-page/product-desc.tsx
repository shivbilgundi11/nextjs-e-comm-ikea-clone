import { Inter } from "next/font/google";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ProductDetailType } from "@/lib/types";

interface ProductDetailProps {
  prodInfo: ProductDetailType | undefined;
}

const inter = Inter({ subsets: ["latin"] });

export default function ProductDesc({ prodInfo }: ProductDetailProps) {
  return (
    <>
      <div className="my-6 flex h-full flex-col gap-y-4 border-t py-6 md:my-8 md:gap-y-6 md:py-8 lg:my-12 lg:w-[50%] lg:py-10">
        <p className="text-[20px] leading-[30px] text-[#484848]">
          {prodInfo?.useDesc}
        </p>

        <p className="text-[14px] text-[#484848]">
          Delivery and assembly prices not included.
        </p>

        <div className="flex w-max flex-col gap-y-1">
          <p className="text-sm text-[#484848]">Article number</p>
          <span className="bg-black p-1 text-center text-sm font-semibold text-white">
            {prodInfo?.articleNum}
          </span>
        </div>

        <div className="mt-6 h-full md:mt-8">
          <Accordion type="single" collapsible className="w-full border-y py-6">
            <AccordionItem value="item-1" className="border-none">
              <AccordionTrigger className="text-2xl font-bold">
                Product details
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex h-auto w-full flex-col gap-y-3 lg:gap-y-5">
                  <pre className={`text-sm text-[#484848] ${inter.className}`}>
                    {prodInfo?.prodDetails}
                  </pre>

                  {prodInfo?.designer && (
                    <div className="flex w-max flex-col gap-y-[2px]">
                      <p className="text-sm font-semibold text-[#484848]">
                        Designer
                      </p>
                      <p className="text-sm text-[#484848]">
                        {prodInfo?.designer}
                      </p>
                    </div>
                  )}

                  {prodInfo?.countryOfOrigin && (
                    <div className="flex w-max flex-col gap-y-[2px]">
                      <p className="text-sm font-semibold text-[#484848]">
                        Country of Origin
                      </p>
                      <p className="text-sm text-[#484848]">
                        {prodInfo?.countryOfOrigin}
                      </p>
                    </div>
                  )}

                  <div className="flex w-max flex-col gap-y-[2px]">
                    <p className="text-sm text-[#484848]">Article number</p>
                    <span className="bg-black p-1 text-center text-sm font-semibold text-white">
                      {prodInfo?.articleNum}
                    </span>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
}
