"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export default function Pagination() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");
  const startIndex = +searchParams.get("start") || 1;
  return (
    <div className="flex px-10 pb-4 justify-between sm:justify-start sm:space-x-44 sm:px-0">
      {startIndex >= 1 && (
        <Link
          href={`${pathname}?searchTerm=${searchTerm}&start=${
            startIndex - 1
          } `}
        >
          <div className="flex flex-col cursor-pointer items-center hover:underline">
            <BsChevronLeft className="h-6" />
            <p>Anterior</p>
          </div>
        </Link>
      )}
      {startIndex <= 90 && (
        <Link
          href={`${pathname}?searchTerm=${searchTerm}&start=${
            startIndex + 1
          } `}
        >
          <div className="flex flex-col cursor-pointer items-center hover:underline">
            <BsChevronRight className="h-6" />
            <p>Próximo</p>
          </div>
        </Link>
      )}
    </div>
  );
}
