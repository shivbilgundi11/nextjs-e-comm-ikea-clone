import Image from 'next/image';
import { useState } from 'react';

import Ratings from '@/components/ratings';
import { Button } from '@/components/ui/button';
import { getImageUrl } from '@/lib/image';
import { ProductDetailType } from '@/lib/types';
import { formatPrice } from '@/lib/utils';

interface ProDuctDetailProps {
  prodInfo: ProductDetailType | undefined;
}

const ProDuctDetail = ({ prodInfo }: ProDuctDetailProps) => {
  const [varietyType, setVarietyType] = useState(
    prodInfo?.varieties[0].variantType,
  );
  return (
    <>
      {prodInfo && (
        <main className='container grid h-auto w-full grid-cols-1 gap-5 py-6 md:py-10 lg:grid-cols-5 lg:py-12'>
          <div className='h-full w-full border lg:col-span-3'>
            <div></div>
          </div>
          <div className='flex h-full w-full flex-col gap-y-3 border md:gap-y-4 lg:col-span-2'>
            <div className='mt-1 flex flex-col gap-y-1'>
              <h3 className='font-bold'>{prodInfo?.prodName}</h3>
              <p className='text-gray-700 lg:w-[90%]'>{prodInfo?.prodInfo}</p>

              <p className='mt-2 text-sm font-bold'>
                Rs.
                <big className='text-3xl'>{formatPrice(prodInfo?.price)}</big>
              </p>
              <p className='text-xs font-medium text-gray-700'>
                Previous price Rs.{formatPrice(prodInfo?.prevPrice)}
              </p>
              <p className='mt-0 text-xs text-gray-700'>
                Prices incl. of all taxes
              </p>
            </div>

            <Ratings rating={prodInfo?.rating} ratings={prodInfo?.ratings} />

            {prodInfo.hasVariety && (
              <div className='group mt-2 flex flex-col gap-y-2'>
                <h4 className='text-sm font-bold group-hover:underline'>
                  {prodInfo?.varietyType}
                </h4>
                <p>{prodInfo?.varieties[0].variantType}</p>
                <div className='flex flex-wrap gap-4 py-4 md:gap-5 md:p-6'>
                  {prodInfo?.varieties.map((variety) => {
                    return (
                      <button
                        className={`relative h-12 w-12 rounded-md border-2 p-2 md:h-[66px] md:w-[66px] ${varietyType === variety?.variantType ? 'border-black' : 'border-transparent'}`}
                        key={variety?.id}
                        onClick={() => setVarietyType(variety?.variantType)}
                      >
                        <Image
                          src={getImageUrl(variety.images[0])}
                          alt={variety?.variantType}
                          fill
                          objectFit='contain'
                          objectPosition='center'
                        />
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            <Button
              variant={'ghost'}
              className='w-full rounded-full bg-[#004F93] py-7 text-base text-white hover:bg-[#0f4778] hover:text-white'
            >
              Add to bag
            </Button>
          </div>
        </main>
      )}
    </>
  );
};

export default ProDuctDetail;
