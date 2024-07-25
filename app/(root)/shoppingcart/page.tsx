'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import CartItem from '@/components/cart-item';
import { EmptyBagItems } from '@/components/clear-cart';
import { Button } from '@/components/ui/button';
import { useAppSelector } from '@/lib/store/hooks';

export default function Cart() {
  const [isCartEmpty, setIsCartEmpty] = useState(true);

  const state = useAppSelector((state) => state.cart.items);

  useEffect(() => {
    if (state.length !== 0) {
      setIsCartEmpty(false);
    } else {
      setIsCartEmpty(true);
    }
  }, [state]);
  return (
    <>
      <main className='container grid h-auto w-full grid-cols-1 gap-y-10 py-12 md:py-20 lg:grid-cols-8 lg:gap-x-12'>
        <div className='h-full w-full lg:col-span-5'>
          {/* Cart-Status */}
          <div className='flex h-auto w-full items-center justify-between'>
            <h2 className='text-4xl font-bold text-[#111]'>
              {!isCartEmpty ? 'Shopping bag' : 'Your shopping bag is empty'}
            </h2>

            <EmptyBagItems />
          </div>

          {/* Cart Items Displayed Below */}
          {!isCartEmpty && (
            <div className='mt-4 flex h-auto w-full flex-col gap-y-3 lg:mt-6 lg:gap-y-5'>
              {state.map((item) => {
                return (
                  <CartItem
                    key={item?.id}
                    pName={item?.pName}
                    id={item?.id}
                    img={item?.img}
                    price={item?.price}
                    quantity={item?.quantity}
                    pInfo={item?.pInfo}
                  />
                );
              })}
            </div>
          )}

          {/* If Empty Display Below Content */}
          {isCartEmpty && (
            <>
              <p className='mt-4 text-sm text-gray-700 md:mt-6'>
                When you add products to your shopping bag, they will appear
                here.
              </p>
              <div className='mt-4 flex items-center gap-x-3 md:mt-6'>
                <Button className='rounded-full'>Login</Button>
                <Button className='rounded-full' variant={'outline'}>
                  View your wishlist
                </Button>
              </div>
            </>
          )}
        </div>
        <div className='flex h-auto w-full items-center justify-center lg:col-span-3'>
          {isCartEmpty && (
            <div className='relative aspect-square h-[260px] w-[260px] md:h-[350px] md:w-[350px] lg:h-[450px] lg:w-[450px]'>
              <Image
                src={'/assets/empty-bag.avif'}
                alt={'empty-bag-image'}
                fill
              />
            </div>
          )}
        </div>
      </main>
    </>
  );
}
