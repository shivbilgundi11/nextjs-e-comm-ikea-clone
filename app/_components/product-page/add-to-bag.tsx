'use client';

import { Button } from '@/components/ui/button';
import { addToCart } from '@/lib/store/features/cart/cartSlice';
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks';

interface AddToCartProps {
  pName: string;
  img: string;
  price: number;
  id: string;
}

export default function AddToBag({ pName, img, price, id }: AddToCartProps) {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.cart.items);

  console.log(state);

  return (
    <Button
      variant='ghost'
      className='mt-5 w-full rounded-full bg-[#004F93] py-7 text-base text-white hover:bg-[#0f4778] hover:text-white'
      onClick={() =>
        dispatch(addToCart({ id, img, price, pName, quantity: 1 }))
      }
    >
      Add to bag
    </Button>
  );
}
