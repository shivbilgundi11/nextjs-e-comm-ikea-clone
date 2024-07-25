import Image from "next/image";
import { PiHeartBold } from "react-icons/pi";
import { RiDeleteBinLine } from "react-icons/ri";

import {
  decreaseProdQuantity,
  increaseProdQuantity,
  removeFromCart,
} from "@/lib/store/features/cart/cartSlice";
import { useAppDispatch } from "@/lib/store/hooks";
import { formatPrice } from "@/lib/utils";

import { Button } from "./ui/button";

interface CartItemProps {
  pName: string;
  img: string;
  price: number;
  quantity: number;
  id: string;
  pInfo: string;
}
export default function CartItem({
  pName,
  img,
  quantity,
  price,
  id,
  pInfo,
}: CartItemProps) {
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="flex h-auto w-full items-center gap-x-4 border-b py-3 md:py-5">
        <div className="relative h-[88px] w-[88px] md:h-[120px] md:w-[120px]">
          <Image src={`/assets${img}`} alt="product-image" layout="fill" />
        </div>
        <div className="flex h-auto w-full flex-col gap-y-1">
          <div className="flex h-auto w-full justify-between">
            <h2 className="text-sm font-bold text-[#111]">{pName}</h2>

            <p className="text-sm font-bold">
              <small className="text-xs font-bold">Rs.</small>
              {formatPrice(price * quantity)}
            </p>
          </div>

          <p className="text-sm text-gray-700">{pInfo}</p>

          {quantity > 1 ? (
            <p className="mt-2 text-xs font-medium text-gray-700">
              Rs.{formatPrice(price)} / piece
            </p>
          ) : null}

          <div className="mt-4 flex items-center gap-x-3">
            <div className="flex w-max items-center gap-x-3 rounded-full border border-black p-1">
              <Button
                variant={"ghost"}
                className="h-[32px] w-[32px] rounded-full text-xl font-semibold hover:bg-gray-200"
                onClick={() => dispatch(decreaseProdQuantity(id))}
              >
                -
              </Button>
              <p className="px-1 text-center text-base font-semibold">
                {quantity}
              </p>
              <Button
                variant={"ghost"}
                className="h-[32px] w-[32px] rounded-full text-xl font-semibold hover:bg-gray-200"
                onClick={() => dispatch(increaseProdQuantity(id))}
              >
                +
              </Button>
            </div>
            <Button
              variant={"ghost"}
              className="rounded-full p-3 text-xl font-bold hover:bg-[#dfdfdf]"
            >
              <PiHeartBold />
            </Button>
            <Button
              variant={"ghost"}
              className="rounded-full p-3 text-xl font-bold hover:bg-[#dfdfdf]"
              onClick={() => dispatch(removeFromCart(id))}
            >
              <RiDeleteBinLine />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
