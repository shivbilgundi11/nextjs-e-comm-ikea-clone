import Image from 'next/image';
import { useState } from 'react';

import AddToWishlist from '@/components/add-to-wishlist';
import Ratings from '@/components/ratings';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { getImageUrl } from '@/lib/image';
import { ProductDetailType } from '@/lib/types';
import { formatPrice } from '@/lib/utils';

interface ProductDetailProps {
  prodInfo: ProductDetailType | undefined;
}

const ProductDetail = ({ prodInfo }: ProductDetailProps) => {
  const [varietyType, setVarietyType] = useState(
    !prodInfo?.hasVariety ? null : prodInfo?.varieties[0].variantType,
  );
  const [prodImages, setProdImages] = useState(
    prodInfo?.hasVariety ? prodInfo?.varieties[0].images : prodInfo?.images,
  );

  const handleClick = (type: string) => {
    setVarietyType(type);
    const selectedVariety = prodInfo?.varieties.find(
      (variety) => variety.variantType === type,
    );
    if (selectedVariety) {
      setProdImages(selectedVariety.images);
    } else {
      setProdImages(prodInfo?.images);
    }
  };

  return (
    <>
      {prodInfo && (
        <main className='container grid h-auto w-full grid-cols-1 gap-5 py-6 md:py-10 lg:grid-cols-5 lg:py-12'>
          {/* Product-Images */}
          <div className='flex h-full w-full flex-col gap-3 md:flex-row lg:col-span-3'>
            <div className='order-2 flex max-h-[550px] flex-row gap-3 overflow-x-auto overflow-y-auto md:order-1 md:flex-col'>
              {prodImages?.map((img, i) => (
                <button className='relative rounded-md border-2 p-2' key={i}>
                  <Image
                    src={getImageUrl(img)}
                    alt={'prod-image'}
                    width={80}
                    height={80}
                  />
                </button>
              ))}
            </div>
            <div className='order-1 mx-auto h-full w-[60%] md:order-2'>
              <Carousel className='h-full w-full'>
                <CarouselContent className='h-full w-full'>
                  {prodImages?.map((img, i) => {
                    return (
                      <CarouselItem
                        key={i}
                        className='relative flex h-full w-full items-center justify-center'
                      >
                        <Image
                          src={getImageUrl(img)}
                          alt={'prod-image'}
                          width={400}
                          height={400}
                        />
                      </CarouselItem>
                    );
                  })}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>

          {/* Product-Info */}
          <div className='flex h-full w-full flex-col gap-y-3 md:gap-y-4 lg:col-span-2'>
            <div className='mt-1 flex flex-col gap-y-1'>
              <div className='flex items-center justify-between gap-x-2'>
                <h3 className='font-bold'>{prodInfo?.prodName}</h3>
                <AddToWishlist />
              </div>
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

            {prodInfo?.hasVariety && (
              <div className='group mt-2 flex flex-col gap-y-2'>
                <h4 className='text-sm font-bold group-hover:underline'>
                  {prodInfo?.varietyType}
                </h4>
                <div className='flex flex-wrap gap-4 py-4 md:gap-5 md:p-6'>
                  {prodInfo?.varieties.map((variety) => (
                    <button
                      className={`relative h-12 w-12 rounded-md border-2 p-2 md:h-[66px] md:w-[66px] ${
                        varietyType === variety.variantType
                          ? 'border-black'
                          : 'border-transparent'
                      }`}
                      key={variety.id}
                      onClick={() => handleClick(variety.variantType)}
                    >
                      <Image
                        src={getImageUrl(variety.images[0])}
                        alt={variety.variantType}
                        fill
                        objectFit='contain'
                        objectPosition='center'
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}

            <Button
              variant='ghost'
              className='mt-5 w-full rounded-full bg-[#004F93] py-7 text-base text-white hover:bg-[#0f4778] hover:text-white'
            >
              Add to bag
            </Button>
          </div>
        </main>
      )}
    </>
  );
};

export default ProductDetail;
