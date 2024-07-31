import Image from "next/image";
import { RiDeleteBinLine } from "react-icons/ri";

import {
  decreaseProdQuantity,
  increaseProdQuantity,
  removeFromCart,
} from "@/lib/store/features/cart/cartSlice";
import { useAppDispatch } from "@/lib/store/hooks";
import { ProductDetailType, SingleProductType } from "@/lib/types";
import { formatPrice } from "@/lib/utils";

import AddToWishlist from "./add-to-wishlist";
import { Button } from "./ui/button";

interface CartItemProps {
  itemInfo: ProductDetailType | SingleProductType;
  qt: number;
}
export default function CartItem({ itemInfo, qt }: CartItemProps) {
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="flex h-auto w-full items-center gap-x-4 border-b py-3 md:py-5">
        <div className="relative h-[88px] w-[88px] md:h-[120px] md:w-[120px]">
          <Image
            src={`/assets${itemInfo?.img1}`}
            alt="product-image"
            layout="fill"
          />
        </div>
        <div className="flex h-auto w-full flex-col gap-y-1">
          <div className="flex h-auto w-full justify-between">
            <h2 className="text-sm font-bold text-[#111]">
              {itemInfo?.prodName}
            </h2>

            <p className="text-sm font-bold">
              <small className="text-xs font-bold">Rs.</small>
              {formatPrice(itemInfo.price * qt)}
            </p>
          </div>

          <p className="text-sm text-gray-700">{itemInfo?.prodInfo}</p>

          {qt > 1 ? (
            <p className="mt-2 text-xs font-medium text-gray-700">
              Rs.{formatPrice(itemInfo?.price)} / piece
            </p>
          ) : null}

          <div className="mt-4 flex items-center gap-x-3">
            <div className="flex w-max items-center gap-x-3 rounded-full border border-black p-1">
              <Button
                variant={"ghost"}
                className="h-[32px] w-[32px] rounded-full text-xl font-semibold hover:bg-gray-200"
                onClick={() => dispatch(decreaseProdQuantity(itemInfo?.id))}
              >
                -
              </Button>
              <p className="px-1 text-center text-base font-semibold">{qt}</p>
              <Button
                variant={"ghost"}
                className="h-[32px] w-[32px] rounded-full text-xl font-semibold hover:bg-gray-200"
                onClick={() => dispatch(increaseProdQuantity(itemInfo?.id))}
              >
                +
              </Button>
            </div>
            <AddToWishlist prodData={itemInfo} id={itemInfo?.id} />
            <Button
              variant={"ghost"}
              className="rounded-full p-3 text-xl font-bold hover:bg-[#dfdfdf]"
              onClick={() => dispatch(removeFromCart(itemInfo?.id))}
            >
              <RiDeleteBinLine />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
