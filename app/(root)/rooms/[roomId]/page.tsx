export default function Room({ params }: { params: { roomId: string } }) {
  return (
    <>
      <main className='flex min-h-screen w-full flex-col items-center justify-center gap-5'>
        <h1>Shop by {params.roomId}</h1>
      </main>
    </>
  );
}
