'use client';

import { useEffect, useState } from 'react';
import { IoIosArrowUp } from 'react-icons/io';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 450) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div
      className={`${isVisible ? 'block opacity-100' : 'hidden opacity-0'} fixed bottom-4 left-4 z-50 cursor-pointer shadow-2xl transition-all duration-500 ease-in-out md:bottom-10 md:left-10`}
      onClick={scrollToTop}
    >
      <div className='group flex h-[42px] items-center rounded-full bg-black p-2 text-white'>
        <IoIosArrowUp className='text-2xl' />
        <p className='max-w-0 origin-left scale-x-0 transform overflow-hidden text-sm opacity-0 transition-all duration-300 group-hover:ml-2 group-hover:max-w-xs group-hover:scale-x-100 group-hover:pr-2 group-hover:opacity-100'>
          Back to top
        </p>
      </div>
    </div>
  );
}
