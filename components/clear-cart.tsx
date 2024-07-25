"use client";

import * as React from "react";
import { MdMoreHoriz } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { clearCart } from "@/lib/store/features/cart/cartSlice";
import { useAppDispatch } from "@/lib/store/hooks";

export function EmptyBagItems() {
  const dispatch = useAppDispatch();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={"ghost"}
          className="rounded-full p-2 px-[10px] text-xl font-bold hover:bg-[#dfdfdf]"
        >
          <MdMoreHoriz />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => dispatch(clearCart())}>
          <RiDeleteBinLine className="mr-1 text-xl" /> Empty Bag
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
