'use client';

import { useState } from 'react';
import { RxCross2 } from 'react-icons/rx';

import { Button } from '@/components/ui/button';

export default function CreditsAd() {
  const [showCredit, setShowCredit] = useState(true);
  return (
    <>
      <div
        className={`${showCredit ? 'flex' : 'hidden'} relative h-auto w-full items-center justify-center bg-black p-2 text-white md:p-3`}
      >
        <p className='text-xs tracking-wide md:text-sm'>
          All products and images sourced from{' '}
          <a
            href='https://www.ikea.com/in/en/'
            target='_blank'
            className='underline'
          >
            IKEA
          </a>
          , used for learning purposes only.
        </p>

        <Button
          className='absolute right-3 h-max border border-transparent bg-black p-[6px] text-lg hover:border-slate-400 hover:bg-black hover:text-white'
          variant={'ghost'}
          onClick={() => setShowCredit(!showCredit)}
        >
          <RxCross2 />
        </Button>
      </div>
    </>
  );
}
