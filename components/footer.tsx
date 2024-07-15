import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SlGlobe } from 'react-icons/sl';

import FooterLinkCol from '@/app/_components/footer-links-col';
import { footerLinks } from '@/lib/links';

import { Button } from './ui/button';

export default function Footer() {
  return (
    <>
      <footer className='h-auto w-full bg-[#f5f5f5] py-5 pb-0'>
        <div className='container grid h-full grid-cols-1 py-16 pb-6 lg:grid-cols-6'>
          {/* ----Col-1---- */}
          <div className='mb-6 flex flex-col gap-y-6 sm:max-w-[60%] md:gap-y-10 lg:col-span-2 lg:mb-0 lg:max-w-[70%]'>
            <div className='flex flex-col gap-y-3'>
              <h3 className='font-bold'>Join IKEA Family</h3>
              <p className='text-[14px] leading-[24px]'>
                Enjoy member-only discounts & offers, early access to IKEA sale,
                delicious food offers and much more. Join for free.​
              </p>
              <Button className='w-max rounded-full text-[12px] tracking-wide'>
                Join the club
              </Button>
            </div>

            <div className='flex flex-col gap-y-3'>
              <h3 className='font-bold'>IKEA Business Network</h3>
              <p className='text-[14px] leading-[24px]'>
                Join the membership program for business customers with exciting
                benefits and features. Join us for free and enjoy member
                discounts, quick-fix tips, online tutorials and a lot more.
              </p>
              <Button className='w-max rounded-full text-[12px] tracking-wide'>
                Join now
              </Button>
            </div>
          </div>

          {/* ----Col-2---- */}
          {footerLinks.map((links) => {
            return <FooterLinkCol linksList={links} key={links.id} />;
          })}
        </div>

        <div className='container flex flex-wrap items-center justify-between gap-y-6 py-2 pb-6 md:py-6'>
          <div className='flex items-center gap-x-4'>
            <a
              href='#'
              className='rounded-full border border-gray-400 p-[6px] text-lg text-gray-700 hover:border-black hover:text-black'
            >
              <FaFacebook />
            </a>
            <a
              href='#'
              className='rounded-full border border-gray-400 p-[6px] text-lg text-gray-700 hover:border-black hover:text-black'
            >
              <FaInstagram />
            </a>
            <a
              href='#'
              className='rounded-full border border-gray-400 p-[6px] text-lg text-gray-700 hover:border-black hover:text-black'
            >
              <FaXTwitter />
            </a>
            <a
              href='#'
              className='rounded-full border border-gray-400 p-[6px] text-lg text-gray-700 hover:border-black hover:text-black'
            >
              <FaYoutube />
            </a>
          </div>

          <Button
            variant={'outline'}
            className='rounded-full border-2 border-gray-600 bg-transparent p-5 text-sm font-semibold hover:border-black'
          >
            <SlGlobe className='mr-3 text-xl' /> Change country
          </Button>
        </div>

        <div className='container flex h-full flex-wrap items-center justify-between gap-y-6 border-t py-5 md:py-10'>
          <p className='text-xs text-gray-500'>
            © Inter IKEA Systems B.V. 2000-2024
          </p>

          <div className='flex items-center gap-x-4'>
            <p className='text-xs text-gray-500 hover:underline'>
              Privacy policy
            </p>
            <p className='text-xs text-gray-500 hover:underline'>
              Cookie policy
            </p>
            <p className='text-xs text-gray-500 hover:underline'>
              Cookie settings
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
