import Link from 'next/link';

export default function ErrorBox() {
  return (
    <>
      <div className='flex min-h-[400px] w-full flex-col items-center justify-center gap-y-2 lg:min-h-screen'>
        <h2 className='mb-2 text-2xl font-bold'>Something went wrong!</h2>
        <p className='text-sm font-normal tracking-wider text-gray-700'>
          Lets bounce you back to somewhere more inspiring.
        </p>
        <p className='inline-flex items-center text-sm font-normal tracking-wider text-gray-700'>
          Search to find what youre looking for, or{' '}
          <Link href={`/`} className='ml-1 underline'>
            hop on over to the homepage.
          </Link>
        </p>
      </div>
    </>
  );
}
