"use client";

import { useSearchParams, useRouter } from "next/navigation";

import { RxCross2 } from "react-icons/rx";
import { BsFillMicFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFileImageFill } from "react-icons/bs";
import { useState } from "react";

function SearchBox() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const searchTerm = searchParams.get("searchTerm") || "";
  const [term, setTerm] = useState(searchTerm || "");

  function handleSubmit(e) {
    e.preventDefault();
    if (!term.trim()) return;
    router.push(`/search/web?searchTerm=${term}`);
  }

  return (
    <form
      className="flex bg-[#303134] shadow-xl hover:shadow-[#1e1d1d] transition-200 rounded-full px-6 py-3 ml-10 mr-5 flex-grow items-center space-x-4 max-w-3xl"
      onSubmit={handleSubmit}
      placeholder="Digite aqui..."
    >
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        value={term}
        className="w-full focus:outline-none bg-[#303134]"
      />
      <RxCross2
        className="text-2xl text-white cursor-pointer sm:mr-2"
        onClick={() => setTerm("")}
      />
      <div className="text-gray-300 hidden sm:inline-flex">|</div>
      <BsFillMicFill className="hidden sm:inline-flex text-2xl fill-blue-500 cursor-pointer" />
      <BsFileImageFill className="hidden sm:inline-flex text-2xl cursor-pointer" />
      <AiOutlineSearch
        className="text-white text-3xl hidden sm:inline-flex cursor-pointer"
        onClick={handleSubmit}
      />
    </form>
  );
}

export default SearchBox;
