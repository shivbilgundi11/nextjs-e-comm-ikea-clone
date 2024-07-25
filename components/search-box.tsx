"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { GrSearch } from "react-icons/gr";
import { IoSearch } from "react-icons/io5";

export default function SearchBox() {
  const [suggestions, setSuggestions] = useState(false);

  const [query, setQuery] = useState("");
  const router = useRouter();

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuggestions(false);
    if (query.trim()) {
      router.push(`/search/?q=${query}`);
    }
    inputRef.current?.blur();

    setTimeout(() => {
      setQuery("");
    }, 300);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit(e as unknown as React.FormEvent);
    }
  };

  return (
    <>
      <div className="relative z-30 h-auto w-full p-2 md:w-[55vw] md:p-4 lg:w-[36vw]">
        <input
          type="text"
          name="search-box"
          className="h-auto w-full rounded-full bg-gray-100 p-3 px-14 outline-blue-500 placeholder:text-base placeholder:text-gray-700 focus-within:bg-white hover:bg-[#dfdfdf] focus:bg-white"
          placeholder="What are you looking for?"
          onFocus={() => setSuggestions(true)}
          ref={inputRef}
          onChange={(e) => setQuery(e.target.value)}
          onBlur={() =>
            setTimeout(() => {
              setSuggestions(false);
            }, 300)
          }
          value={query}
          onKeyDown={handleKeyDown}
          autoComplete="false"
        />

        <GrSearch className="absolute left-9 top-[38%] text-xl font-bold" />

        <div
          className={`${suggestions ? "flex" : "hidden"} absolute left-0 top-0 -z-[10] h-auto w-full flex-col items-center justify-center rounded-lg border bg-white p-3 shadow-2xl md:p-5`}
        >
          <ul className="ml-[15%] mt-16 flex h-full w-full flex-col gap-y-5">
            <li className="" onClick={() => setQuery("bedframe")}>
              <Link
                href={"/search?q=bedframe"}
                className="flex items-center gap-x-5 text-base font-medium hover:underline"
              >
                <IoSearch />
                bed frame
              </Link>
            </li>
            <li className="" onClick={() => setQuery("chair")}>
              <Link
                href={"/search?q=chair"}
                className="flex items-center gap-x-5 text-base font-medium hover:underline"
              >
                <IoSearch />
                chair
              </Link>
            </li>
            <li className="" onClick={() => setQuery("glass-jar")}>
              <Link
                href={"/search?q=glass-jar"}
                className="flex items-center gap-x-5 text-base font-medium hover:underline"
              >
                <IoSearch />
                glass jar
              </Link>
            </li>
            <li className="" onClick={() => setQuery("plants")}>
              <Link
                href={"/search?q=plants"}
                className="flex items-center gap-x-5 text-base font-medium hover:underline"
              >
                <IoSearch />
                plants
              </Link>
            </li>
            <li className="" onClick={() => setQuery("lights")}>
              <Link
                href={"/search?q=lights"}
                className="flex items-center gap-x-5 text-base font-medium hover:underline"
              >
                <IoSearch />
                lights
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
