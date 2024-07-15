import CreditsAd from '@/app/_components/credits';

export default function Navbar() {
  return (
    <>
      <header className='flex h-auto w-full flex-col'>
        <CreditsAd />
        <nav className='container min-h-[130px] md:min-h-[80px] lg:min-h-[90px]'>
          <h1>Navbar</h1>
        </nav>
      </header>
    </>
  );
}
