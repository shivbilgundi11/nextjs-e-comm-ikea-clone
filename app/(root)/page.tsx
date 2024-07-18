import Hero from '../_components/home-page/hero';
import NewAtIKEA from '../_components/home-page/new-at-ikea';

export default function Page() {
  return (
    <>
      <main className='h-auto w-full py-8'>
        <Hero />
        <NewAtIKEA />
      </main>
    </>
  );
}
