import Image from "next/image";
import Link from "next/link";

import { getImageUrl } from "@/lib/image";
import { categories } from "@/lib/links";

export default function CategoriesCards({ tab }: { tab: number }) {
  return (
    <>
      <div
        className={`${tab === 1 ? "flex" : "hidden"} w-max items-center gap-x-12 border-b p-4`}
      >
        {categories.map(({ id, path, imageURL, category }) => {
          return (
            <Link href={path} key={id}>
              <div className="group flex flex-col items-center justify-between gap-y-3 p-2">
                <Image
                  src={getImageUrl(imageURL)}
                  alt={category}
                  width={80}
                  height={80}
                />

                <p className="text-sm text-gray-700 group-hover:underline">
                  {category}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
