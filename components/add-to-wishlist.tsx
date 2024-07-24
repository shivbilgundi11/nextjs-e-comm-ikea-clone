import { PiHeartBold } from 'react-icons/pi';

import { Button } from './ui/button';

export default function AddToWishlist() {
  return (
    <>
      <Button
        variant={'ghost'}
        className='rounded-full p-3 text-xl font-bold hover:bg-[#dfdfdf]'
      >
        <PiHeartBold />
      </Button>
    </>
  );
}
