import Link from "next/link";
import { TbGridDots } from "react-icons/tb";

function HomeHeader() {
  return (
    <header className="flex justify-end p-5">
      <div className="flex space-x-4 items-center">
        <Link
          href="https://mail.google.com"
          className="hover:underline text-sm"
        >
          Gmail
        </Link>{" "}
        <Link
          href="https://images.google.com"
          className="hover:underline text-sm"
        >
          Imagens
        </Link>
        <TbGridDots className="bg-transparent hover:bg-gray-900 rounded-full text-4xl p-2" />
        <button
          href="#_"
          className="px-5 py-2.5 relative rounded group text-white font-medium inline-block"
        >
          <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
          <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
          <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
          <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
          <span className="relative">Sing in</span>
        </button>
      </div>
    </header>
  );
}

export default HomeHeader;
