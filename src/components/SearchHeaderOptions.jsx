"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { AiOutlineSearch, AiOutlineCamera } from "react-icons/ai";
import { PiPlayBold } from "react-icons/pi";
import { BiMap, BiNews } from "react-icons/bi";
import { BsGear } from "react-icons/bs";

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
    <div className="flex py-2 space-x-2 select-none w-full justify-center lg:justify-start lg:pl-48">
      <div
        onClick={() => selectTab("Todos")}
        className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer p-3 px-2 ${
          pathName === "/search/web" &&
          "!text-white shadow-xl bg-[#303134] !border-blue-500 rounded-full"
        } `}
      >
        <AiOutlineSearch className="text-md" />
        <p>Todos</p>
      </div>
      <div
        onClick={() => selectTab("Images")}
        className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer p-3 px-2 hover:text-blue-400 ${
          pathName === "/search/image" &&
          "!text-white shadow-xl bg-[#303134] !border-blue-500 rounded-full"
        } `}
      >
        <AiOutlineCamera className="text-md" />
        <p>Images</p>
      </div>
      <div className="flex items-center space-x-1 border-b-4 border-transparent cursor-pointer p-3 px-2 hover:text-gray-500 transition-200">
        <PiPlayBold className="text-md" />
        <p>Vídeos</p>
      </div>
      <div className="flex items-center space-x-1 border-b-4 border-transparent hover:text-gray-500 transition-200 cursor-pointer p-3 px-2">
        <BiNews className="text-md" />
        <p>Notícias</p>
      </div>
      <div className="flex items-center space-x-1 border-b-4 border-transparent hover:text-gray-500 transition-200 cursor-pointer p-3 px-2">
        <BiMap className="text-md" />
        <p>Mapa</p>
      </div>
      <div className="flex items-center space-x-1 border-b-4 border-transparent hover:text-gray-500 transition-200 cursor-pointer p-3 px-2">
        <BsGear className="text-md" />
        <p>Configurações</p>
      </div>
    </div>
  );
}

export default SearchHeaderOptions;
