import Link from 'next/link';

/* eslint-disable @next/next/no-img-element */
export default function Hero() {
  return (
    <>
      <div className='container my-8 grid grid-cols-1 gap-3 overflow-hidden md:my-12 md:grid-cols-4 md:gap-5'>
        <div className='overflow-hidden md:col-span-2'>
          <Link href={'/cat/new-low-price'}>
            <img src='/assets/hero/nlp1.png' alt='hero-img' />
          </Link>
        </div>
        <div className='col-span-2 grid h-full w-full grid-cols-2 gap-3 md:gap-5'>
          <div className='flex h-full w-full flex-col gap-y-3 md:gap-y-5'>
            <Link href={'/p/nlp2'}>
              <img src='/assets/hero/nlp2.png' alt='hero-img' />
            </Link>
            <Link href={'/p/korken-glass-container'}>
              <img src='/assets/hero/nlp3.png' alt='hero-img' />
            </Link>
          </div>

          <div className='flex h-full w-full flex-col gap-y-3 md:gap-y-5'>
            <Link href={'/p/froejdefull-serving-bowl-white'}>
              <img src='/assets/hero/nlp4.avif' alt='hero-img' />
            </Link>
            <Link href={'/cat/new-low-price'}>
              <img src='/assets/hero/nlp5.png' alt='hero-img' />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
