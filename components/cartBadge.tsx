"use client";

import { useAppSelector } from "@/lib/store/hooks";

export default function CartItemsBadge() {
  const state = useAppSelector((state) => state.cart.items);
  return (
    <>
      <p
        className={`${state.length === 0 ? "hidden" : "inline-flex"} absolute right-0 top-0 h-5 w-5 items-center justify-center rounded-full bg-[#0058ab] text-center align-middle text-[14px] text-white`}
      >
        <small>{state.length}</small>
      </p>
    </>
  );
}
