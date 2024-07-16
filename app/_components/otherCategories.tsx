import { MdHourglassEmpty } from 'react-icons/md';

export default function OtherCategories({ tab }: { tab: number }) {
  return (
    <>
      <div
        className={`${tab !== 1 && tab !== 2 ? 'flex' : 'hidden'} w-max items-center justify-center gap-7 border-b p-7`}
      >
        <span className='duration-[8s] animate-spin text-2xl'>
          <MdHourglassEmpty />
        </span>
        <p className='text-sm font-semibold'>
          This tab is for demonstration purposes only, more content may be added
          in the future!.
        </p>
      </div>
    </>
  );
}
