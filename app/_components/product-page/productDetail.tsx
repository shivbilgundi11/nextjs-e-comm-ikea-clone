import Image from 'next/image';
import { useEffect, useState } from 'react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { getImageUrl } from '@/lib/image';
import { ProductDetailType } from '@/lib/types';

import ProductDesc from './product-desc';
import ProductInfo from './product-info';

interface ProductDetailProps {
  prodInfo: ProductDetailType | undefined;
}

const ProductDetail = ({ prodInfo }: ProductDetailProps) => {
  const [varietyType, setVarietyType] = useState<string | null>(null);
  const [prodImages, setProdImages] = useState<string[] | undefined>([]);

  useEffect(() => {
    if (prodInfo) {
      const initialVarietyType = prodInfo.hasVariety
        ? prodInfo.varieties[0].variantType
        : null;
      setVarietyType(initialVarietyType);
      const initialProdImages = prodInfo.hasVariety
        ? prodInfo.varieties[0].images
        : prodInfo.images;
      setProdImages(initialProdImages);
    }
  }, [prodInfo]);

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
        <main className='container h-auto min-h-screen w-full py-6 md:py-10 lg:py-12'>
          <div className='container grid h-full w-full grid-cols-1 gap-5 lg:grid-cols-5'>
            {/* Product-Images */}
            <div className='flex h-full w-full flex-col gap-3 md:flex-row lg:col-span-3'>
              <div className='order-2 flex h-full flex-row gap-3 overflow-x-scroll md:order-1 md:max-h-[600px] md:flex-col md:overflow-y-scroll'>
                {prodImages?.map((img, i) => (
                  <div
                    className='relative h-[60px] w-[60px] flex-shrink-0 rounded-md border-2 p-2 md:h-[100px] md:w-[100px]'
                    key={i}
                  >
                    <Image
                      src={getImageUrl(img)}
                      alt={'prod-image'}
                      layout='fill'
                      objectFit='cover'
                      objectPosition='center'
                    />
                  </div>
                ))}
              </div>

              <div className='order-1 mx-auto h-full w-[80%] md:order-2 md:w-[70%]'>
                <Carousel className='h-full w-full'>
                  <CarouselContent className='h-full w-full'>
                    {prodImages?.map((img, i) => {
                      return (
                        <CarouselItem
                          key={i}
                          className='relative flex h-full w-full items-center justify-center'
                        >
                          <div className='relative h-[300px] w-[300px] sm:h-[350px] sm:w-[350px] md:h-[500px] md:w-[500px]'>
                            <Image
                              src={getImageUrl(img)}
                              alt={'prod-image'}
                              layout='fill'
                              objectFit='contain'
                              objectPosition='center'
                            />
                          </div>
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
            <ProductInfo
              prodInfo={prodInfo}
              varietyType={varietyType}
              handleClick={handleClick}
            />
          </div>

          <ProductDesc prodInfo={prodInfo} />
        </main>
      )}
    </>
  );
};

export default ProductDetail;
