import Image from 'next/image';
import Link from 'next/link';
import { MdOutlinePersonOutline } from 'react-icons/md';
import { PiHeartBold } from 'react-icons/pi';
import { TbShoppingBag } from 'react-icons/tb';

import CreditsAd from '@/app/_components/credits';

import SearchBox from './search-box';
import { Button } from './ui/button';

export default function Navbar() {
  return (
    <>
      <header className='flex h-auto w-full flex-col'>
        <CreditsAd />
        <nav className='container flex min-h-[130px] flex-col items-center justify-evenly border-b md:min-h-[80px] md:flex-row md:justify-between lg:min-h-[90px]'>
          <div className='flex h-full w-full items-center justify-between'>
            <div className='flex h-full w-max items-center gap-x-8'>
              <Link href={'/'}>
                <Image
                  src={'/assets/ikea-logo.svg'}
                  alt='logo'
                  width={90}
                  height={36}
                />
              </Link>

              <div className='hidden md:block'>
                <SearchBox />
              </div>
            </div>

            <div className='flex h-full w-max items-center gap-x-1'>
              <Link href={'/'}>
                <Button
                  variant={'ghost'}
                  className='rounded-full p-3 font-normal hover:bg-[#dfdfdf]'
                >
                  <MdOutlinePersonOutline className='mr-2 text-xl' /> Hej! Log
                  in
                </Button>
              </Link>

              <Link href={'/favourites'}>
                <Button
                  variant={'ghost'}
                  className='rounded-full p-3 text-xl font-bold hover:bg-[#dfdfdf]'
                >
                  <PiHeartBold />
                </Button>
              </Link>

              <Link href={'/shoppingcart'}>
                <Button
                  variant={'ghost'}
                  className='rounded-full p-3 text-xl font-bold hover:bg-[#dfdfdf]'
                >
                  <TbShoppingBag />
                </Button>
              </Link>
            </div>
          </div>

          <div className='block w-full md:hidden'>
            <SearchBox />
          </div>
        </nav>
      </header>
    </>
  );
}
