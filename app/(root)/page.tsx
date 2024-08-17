import { Metadata } from "next";
import Hero from "../_components/home-page/hero";
import InspirationGallery from "../_components/home-page/inspiration-gallery";
import NewAtIKEA from "../_components/home-page/new-at-ikea";

export const metadata: Metadata = {
  title: "IKEA - Affordable home furniture, designs & ideas - IKEA",
  description:
    "Furniture, home accessories, design ideas and inspiration for big dreams and small budgets. A better everyday life begins at home!",
};

export default function Page() {
  return (
    <>
      <main className="h-auto w-full py-8">
        <Hero />
        <NewAtIKEA />
        <InspirationGallery />
      </main>
    </>
  );
}
