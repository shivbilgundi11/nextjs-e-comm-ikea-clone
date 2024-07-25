"use client";

import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

interface LinkItem {
  id: string;
  footerLink: string;
}

interface LinksList {
  id: number;
  section: string;
  items: LinkItem[];
}

export default function FooterLinkCol({ linksList }: { linksList: LinksList }) {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <>
      <div className="h-full w-full">
        <div className="hidden w-full lg:block">
          <h5 className="mb-8 text-[15px] font-semibold">
            {linksList.section}
          </h5>

          <ul className="flex h-full flex-col gap-y-4">
            {linksList.items.map((link) => {
              return (
                <li
                  key={link.id}
                  className="cursor-pointer text-sm text-[#484848] hover:underline"
                >
                  {link.footerLink}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="border-y py-10 lg:hidden">
          <div
            className={`group ${showLinks ? "mb-8" : "mb-0"} flex h-full cursor-pointer items-center justify-between`}
            onClick={() => setShowLinks(!showLinks)}
          >
            <h5 className="text-[15px] font-semibold group-hover:underline">
              {linksList.section}
            </h5>

            <span
              className={`text-2xl font-bold transition-all duration-300 ease-in-out ${!showLinks ? "rotate-180" : "rotate-0"}`}
            >
              <IoIosArrowUp />
            </span>
          </div>
          <ul
            className={`h-full ${showLinks ? "flex" : "hidden"} flex-col gap-y-6`}
          >
            {linksList.items.map((link) => {
              return (
                <li
                  key={link.id}
                  className="cursor-pointer text-sm text-[#484848] hover:underline"
                >
                  {link.footerLink}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
