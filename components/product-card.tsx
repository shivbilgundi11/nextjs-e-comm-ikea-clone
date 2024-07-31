import Image from "next/image";
import Link from "next/link";
import { GoDotFill } from "react-icons/go";

import { getImageUrl } from "@/lib/image";
import { SingleProductType } from "@/lib/types";
import { formatPrice } from "@/lib/utils";

import AddToCartBtn from "./add-to-cart-btn";
import AddToWishlist from "./add-to-wishlist";
import Ratings from "./ratings";

interface ProductCardProps {
  cardData: SingleProductType | undefined;
}

const ProductCard = ({ cardData }: ProductCardProps) => {
  return (
    <>
      {cardData && (
        <div className="flex h-full w-full flex-col gap-y-3">
          <Link href={`/p/${cardData?.id}`}>
            <div className="group relative aspect-square h-full w-full">
              <Image
                src={getImageUrl(cardData?.img1)}
                alt={cardData?.prodName}
                fill
                objectFit="cover"
                objectPosition="center"
                className="group-hover:opacity-0"
              />
              <Image
                src={getImageUrl(cardData?.img2)}
                alt={cardData?.prodName}
                fill
                objectFit="cover"
                objectPosition="center"
                className="opacity-0 group-hover:opacity-100"
              />
            </div>
          </Link>
          <div className="mt-1 flex flex-col gap-y-1">
            <Link href={`/p/${cardData?.id}`}>
              <h3 className="text-sm font-bold lg:text-base">
                {cardData?.prodName}
              </h3>
            </Link>
            <p className="text-xs text-gray-700 md:text-sm">
              {cardData?.prodInfo}
            </p>

            <p className="mt-1 text-xs font-bold md:text-sm">
              Rs.
              <big className="text-xl md:text-3xl">
                {formatPrice(cardData?.price)}
              </big>
            </p>
            <p className="text-xs font-medium text-gray-700">
              Previous price Rs.{formatPrice(cardData?.prevPrice)}
            </p>
          </div>

          <Ratings rating={cardData?.rating} ratings={cardData?.ratings} />

          <div className="gx-2 mt-2 flex gap-x-2">
            <AddToCartBtn prodData={cardData} />
            <AddToWishlist prodData={cardData} id={cardData?.id} />
          </div>

          <div className="flex flex-col gap-y-1">
            <p className="inline-flex items-center gap-x-2 text-xs md:text-base">
              <GoDotFill color="green" /> In stock
            </p>
            <p className="inline-flex items-center gap-x-2 text-xs md:text-base">
              <GoDotFill color="green" /> Available for delivery
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
