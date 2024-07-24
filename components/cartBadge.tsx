'use client';

import { useAppSelector } from '@/lib/store/hooks';

export default function CartItemsBadge() {
  const state = useAppSelector((state) => state.cart.items);
  return (
    <>
      <p className='absolute right-0 top-0 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#0058ab] text-center align-middle text-[14px] text-white'>
        <small>{state.length}</small>
      </p>
    </>
  );
}
