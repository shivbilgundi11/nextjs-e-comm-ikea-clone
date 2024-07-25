import Image from "next/image";

import AddToWishlist from "@/components/add-to-wishlist";
import Ratings from "@/components/ratings";
import { getImageUrl } from "@/lib/image";
import { ProductDetailType } from "@/lib/types";
import { formatPrice } from "@/lib/utils";

import AddToBag from "./add-to-bag";

interface ProductDetailProps {
  prodInfo: ProductDetailType | undefined;
  varietyType: string | null;
  // eslint-disable-next-line no-unused-vars
  handleClick: (type: string) => void;
}

export default function ProductInfo({
  prodInfo,
  varietyType,
  handleClick,
}: ProductDetailProps) {
  return (
    <>
      {prodInfo && (
        <div className="flex h-full w-full flex-col gap-y-3 md:gap-y-4 lg:col-span-2">
          <div className="mt-1 flex flex-col gap-y-1">
            <div className="flex items-center justify-between gap-x-2">
              <h3 className="font-bold">{prodInfo?.prodName}</h3>
              <AddToWishlist />
            </div>
            <p className="text-gray-700 lg:w-[90%]">{prodInfo?.prodInfo}</p>

            <p className="mt-2 text-sm font-bold">
              Rs.
              <big className="text-3xl">{formatPrice(prodInfo?.price)}</big>
            </p>
            <p className="text-xs font-medium text-gray-700">
              Previous price Rs.{formatPrice(prodInfo?.prevPrice)}
            </p>
            <p className="mt-0 text-xs text-gray-700">
              Prices incl. of all taxes
            </p>
          </div>

          <Ratings rating={prodInfo?.rating} ratings={prodInfo?.ratings} />

          {prodInfo?.hasVariety && (
            <div className="group mt-2 flex flex-col gap-y-2">
              <h4 className="text-sm font-bold group-hover:underline">
                {prodInfo?.varietyType}
              </h4>
              <div className="flex h-auto flex-wrap gap-4 py-4 md:gap-5 md:p-6">
                {prodInfo?.varieties.map((variety) => (
                  <button
                    className={`relative h-auto w-max rounded-md border-2 p-2 ${
                      varietyType === variety.variantType
                        ? "border-black"
                        : "border-transparent"
                    }`}
                    key={variety.id}
                    onClick={() => handleClick(variety.variantType)}
                  >
                    <div className="relative h-[50px] w-[50px] md:h-[70px] md:w-[70px]">
                      <Image
                        src={getImageUrl(variety.images[0])}
                        alt={variety.variantType}
                        layout="fill"
                        objectFit="contain"
                        objectPosition="center"
                      />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          <AddToBag
            pName={prodInfo?.prodName}
            price={prodInfo?.price}
            img={prodInfo?.img1}
            id={prodInfo?.id}
          />
        </div>
      )}
    </>
  );
}
