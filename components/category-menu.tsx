"use client";

import { useState } from "react";
import { CgBox } from "react-icons/cg";
import { GrHomeRounded } from "react-icons/gr";

import CategoryContainer from "@/app/_components/categ-cards";
import OtherCategories from "@/app/_components/otherCategories";
import ShopByRoom from "@/app/_components/shop-by-room";

import { Button } from "./ui/button";

type Tab = {
  index: number;
  label: string;
  icon?: JSX.Element;
};

const TABS: Tab[] = [
  {
    index: 1,
    label: "Shop products",
    icon: <CgBox className="mr-2 text-lg font-bold" />,
  },
  {
    index: 2,
    label: "Shop by rooms",
    icon: <GrHomeRounded className="mr-2 text-lg font-bold" />,
  },
  { index: 3, label: "New at IKEA" },
  { index: 4, label: "Customer services" },
  { index: 5, label: "Tips, ideas & trends" },
  { index: 6, label: "More" },
];

type TabButtonProps = {
  tab: Tab;
  isActive: boolean;
  onClick: () => void;
};

const TabButton: React.FC<TabButtonProps> = ({ tab, isActive, onClick }) => (
  <Button
    variant="ghost"
    className={`h-full rounded-none border-b-[3px] font-bold tracking-wide hover:bg-transparent ${isActive ? "border-b-blue-500 text-black" : "border-b-transparent text-gray-500"}`}
    onClick={onClick}
    aria-selected={isActive}
    role="tab"
  >
    {tab.icon}
    {tab.label}
  </Button>
);

export default function CategoryMenu() {
  const [tabIndex, setTabIndex] = useState(1);

  return (
    <section className="container hidden h-auto w-full lg:block">
      <div className="flex h-14 w-max items-center border-b lg:pl-0">
        {TABS.map((tab) => (
          <TabButton
            key={tab.index}
            tab={tab}
            isActive={tabIndex === tab.index}
            onClick={() => setTabIndex(tab.index)}
          />
        ))}
      </div>
      <CategoryContainer tab={tabIndex} />
      <ShopByRoom tab={tabIndex} />
      <OtherCategories tab={tabIndex} />
    </section>
  );
}
