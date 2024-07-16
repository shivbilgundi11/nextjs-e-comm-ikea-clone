import CategoriesCards from './category-carousel';

export default function CategoryContainer({ tab }: { tab: number }) {
  return (
    <>
      <div className='container flex h-full w-full items-center lg:pl-0'>
        <CategoriesCards tab={tab} />
      </div>
    </>
  );
}
