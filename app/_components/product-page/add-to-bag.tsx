'use client';

import Link from 'next/link';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { addToBag } from '@/lib/store/features/cart/cartSlice';
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks';

interface AddToCartProps {
  pName: string;
  img: string;
  price: number;
  id: string;
  pInfo: string;
}

export default function AddToBag({
  pName,
  img,
  price,
  pInfo,
  id,
}: AddToCartProps) {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.cart.items);

  const existingItem = state.find((item) => id === item.id);

  const handleAddToCart = () => {
    dispatch(addToBag({ id, img, price, pName, pInfo, quantity: 1 }));
    toast(`${pName} added to cart!`);
  };

  return (
    <>
      {existingItem ? (
        <Link href='/shoppingcart'>
          <Button
            variant='ghost'
            className='mt-5 w-full rounded-full bg-[#004F93] py-7 text-base text-white hover:bg-[#0f4778] hover:text-white'
          >
            Go to cart
          </Button>
        </Link>
      ) : (
        <Button
          variant='ghost'
          className='mt-5 w-full rounded-full bg-[#004F93] py-7 text-base text-white hover:bg-[#0f4778] hover:text-white'
          onClick={handleAddToCart}
        >
          Add to bag
        </Button>
      )}
    </>
  );
}
