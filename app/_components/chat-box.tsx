import { HiOutlineChatBubbleLeft } from 'react-icons/hi2';

export default function ChatBox() {
  return (
    <>
      <div className='fixed bottom-10 right-10 hidden cursor-not-allowed rounded-full bg-[#f9d716] p-4 shadow-xl lg:block'>
        <HiOutlineChatBubbleLeft className='text-2xl font-bold' />
      </div>
    </>
  );
}
