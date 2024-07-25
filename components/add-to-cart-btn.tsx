'use client';

import { TbShoppingBagPlus } from 'react-icons/tb';
import { toast } from 'sonner';

import { addToCart } from '@/lib/store/features/cart/cartSlice';
import { useAppDispatch } from '@/lib/store/hooks';

import { Button } from './ui/button';

interface AddToCartProps {
  pName: string;
  img: string;
  price: number;
  id: string;
  pInfo: string;
}

export default function AddToCartBtn({
  pName,
  img,
  price,
  id,
  pInfo,
}: AddToCartProps) {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id, img, price, pName, pInfo, quantity: 1 }));
    toast(`${pName} added to cart!`);
  };

  return (
    <Button
      variant={'ghost'}
      className='rounded-full bg-[#004F93] p-2 text-2xl font-bold text-white hover:bg-[#004F93] hover:text-white'
      onClick={handleAddToCart}
    >
      <TbShoppingBagPlus />
    </Button>
  );
}
