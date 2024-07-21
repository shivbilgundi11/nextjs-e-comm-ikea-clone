import { TbShoppingBagPlus } from 'react-icons/tb';

import { Button } from './ui/button';

export default function AddToCartBtn() {
  return (
    <>
      <Button
        variant={'ghost'}
        className='rounded-full bg-[#004F93] p-2 text-2xl font-bold text-white hover:bg-[#004F93] hover:text-white'
      >
        <TbShoppingBagPlus />
      </Button>
    </>
  );
}
