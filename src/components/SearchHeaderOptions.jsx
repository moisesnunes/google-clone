"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { AiOutlineSearch, AiOutlineCamera } from "react-icons/ai";

function SearchHeaderOptions() {
  const pathName = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");
  function selectTab(tab) {
    router.push(
      `/search/${tab === "Images" ? "image" : "web"}?searchTerm=${searchTerm}`
    );
  }
  return (
    <div className="flex py-2 space-x-2 select-none w-full justify-center lg:justify-start lg:pl-32">
      <div
        onClick={() => selectTab("Todos")}
        className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer p-3 px-2 ${
          pathName === "/search/web" && "!text-white shadow-xl bg-[#303134] !border-blue-500 rounded-full"
        } `}
      >
        <AiOutlineSearch className="text-md" />
        <p>Todos</p>
      </div>
      <div
        onClick={() => selectTab("Images")}
        className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer p-3 px-2 ${
          pathName === "/search/image" && "!text-white shadow-xl bg-[#303134] !border-blue-500 rounded-full"
        } `}
      >
        <AiOutlineCamera className="text-md" />
        <p>Images</p>
      </div>
    </div>
  );
}

export default SearchHeaderOptions;
