'use client';

import Link from 'next/link';
import { useState } from 'react';
import { GrSearch } from 'react-icons/gr';
import { IoSearch } from 'react-icons/io5';

export default function SearchBox() {
  const [suggestions, setSuggestions] = useState(false);
  return (
    <>
      <div className='relative z-30 h-auto w-full p-2 md:w-[45vw] md:p-4 lg:w-[28vw]'>
        <input
          type='text'
          name='search-box'
          className='h-auto w-full rounded-full bg-gray-100 p-3 px-12 outline-blue-500 placeholder:text-base placeholder:text-gray-700 focus-within:bg-white hover:bg-[#dfdfdf]'
          placeholder='What are you looking for?'
          onFocus={() => setSuggestions(true)}
          onBlur={() => setSuggestions(false)}
        />

        <GrSearch className='absolute left-7 top-[38%] text-xl font-bold' />

        <div
          className={`${suggestions ? 'flex' : 'hidden'} absolute left-0 top-0 -z-[10] h-auto w-full flex-col items-center justify-center rounded-lg border bg-white p-3 shadow-2xl md:p-5`}
        >
          <ul className='ml-[15%] mt-16 flex h-full w-full flex-col gap-y-5'>
            <li className=''>
              <Link
                href={'/'}
                className='flex items-center gap-x-5 text-base font-medium hover:underline'
              >
                <IoSearch />
                bed frame
              </Link>
            </li>
            <li className=''>
              <Link
                href={'/'}
                className='flex items-center gap-x-5 text-base font-medium hover:underline'
              >
                <IoSearch />
                chair
              </Link>
            </li>
            <li className=''>
              <Link
                href={'/'}
                className='flex items-center gap-x-5 text-base font-medium hover:underline'
              >
                <IoSearch />
                glass container
              </Link>
            </li>
            <li className=''>
              <Link
                href={'/'}
                className='flex items-center gap-x-5 text-base font-medium hover:underline'
              >
                <IoSearch />
                plants
              </Link>
            </li>
            <li className=''>
              <Link
                href={'/'}
                className='flex items-center gap-x-5 text-base font-medium hover:underline'
              >
                <IoSearch />
                lights
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
