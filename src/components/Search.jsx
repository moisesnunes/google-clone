"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";

function HomeSearch() {
  const router = useRouter();
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!input.trim()) return;
    router.push(`/search/web?searchTerm=${input}`);
  }
  async function randomSearch() {
    setLoading(true);
    const response = await fetch("https://random-word-api.herokuapp.com/word")
      .then((res) => res.json())
      .then((data) => data[0]);
    if (!response) return;
    router.push(`/search/web?searchTerm=${response}`);
    setLoading(false);
  }
  return (
    <>
      <form
        onSubmit={handleSubmit}
        action=""
        className="flex w-full mt-8 mx-auto max-w-[90%] px-5 py-3 rounded-full bg-[#171717] 
        hover:ring-1 hover:ring-gray-400 transition-shadow focus:outline-none lg:max-w-2xl sm:max-w-sm"
      >
        <AiOutlineSearch className="text-xl text-white mr-3" />
        <input
          type="text"
          className="flex-grow focus:outline-none bg-[#171717]"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <BsFillMicFill className="text-lg text-white ml-3" />
      </form>
      <div className="flex flex-col space-y-2 sm:space-y-0 sm:space-x-4 sm:flex-row mt-5">
        <button className="btn" onClick={handleSubmit}>
          Pesquisa Google
        </button>
        <button
          className="btn flex items-center justify-center disabled:opacity-70"
          onClick={randomSearch}
          disabled={loading}
        >
          {loading ? (
            <img src="/loading.svg" alt="loading" className="h-8 text-center" />
          ) : (
            "Estou com sorte"
          )}
        </button>
      </div>
    </>
  );
}

export default HomeSearch;
