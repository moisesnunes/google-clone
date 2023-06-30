import Image from "next/image";
import Link from "next/link";
import React from "react";
import SearchBox from "./SearchBox";
import { RiSettings3Fill } from "react-icons/ri";
import { TbGridDots } from "react-icons/tb";
import SearchHeaderOptions from "./SearchHeaderOptions";

function SearchHeader() {
  return (
    <header className="sticky top-0 bg-[#171717]">
      <div className="flex w-full p-6 items-center justify-between">
        <Link href="/">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/google.svg"
            alt="Next.js Logo"
            width={65}
            height={30}
            priority
          />
        </Link>
        <div className="flex-1">
          <SearchBox />
        </div>
        <div className="hidden md:inline-flex space-x-2">
          <RiSettings3Fill className="bg-trasnparent hover:bg-gray-600 p-2 text-4xl rounded-full cursor-pointer" />
          <TbGridDots className="bg-trasnparent hover:bg-gray-600 p-2 text-4xl rounded-full cursor-pointer" />
        </div>
        <button
          href="#_"
          className="px-5 py-2.5 relative rounded group text-white font-medium inline-block ml-3"
        >
          <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
          <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
          <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
          <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
          <span className="relative">Sing in</span>
        </button>
      </div>
      <SearchHeaderOptions />
    </header>
  );
}

export default SearchHeader;
