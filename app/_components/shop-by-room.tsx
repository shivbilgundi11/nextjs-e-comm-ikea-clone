import Image from "next/image";
import Link from "next/link";

import { getImageUrl } from "@/lib/image";
import { shopByRoomList } from "@/lib/links";

type LinkObject = {
  id: number;
  imageURL: string;
  path: string;
  roomName: string;
};

export default function ShopByRoom({ tab }: { tab: number }) {
  return (
    <>
      <div
        className={`${tab === 2 ? "flex" : "hidden"} w-max items-center gap-x-2 border-b py-4`}
      >
        {shopByRoomList.map(({ id, imageURL, path, roomName }: LinkObject) => (
          <Link href={path} key={id}>
            <div className="group w-max p-1">
              <Image
                src={getImageUrl(imageURL)}
                alt={roomName}
                width={130}
                height={70}
              />

              <p className="mt-2 text-center text-sm text-gray-700 group-hover:underline">
                {roomName}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
