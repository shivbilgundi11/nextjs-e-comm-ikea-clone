import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

import BackToTop from '../_components/back-to-top';
import ChatBox from '../_components/chat-box';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <BackToTop />
      <ChatBox />
    </>
  );
}
