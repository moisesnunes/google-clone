import Link from "next/link";
import { TbGridDots } from "react-icons/tb";

function Header() {
  return (
    <header className="flex justify-end p-5">
      <div className="flex space-x-4 items-center">
        <Link href="https://mail.google.com" className="hover:underline text-sm">
          Gmail
        </Link>
        {" "}
        <Link href="https://images.google.com" className="hover:underline text-sm">
          Imagens
        </Link>
        <TbGridDots className="bg-transparent hover:bg-gray-900 rounded-full text-4xl p-2" />
        <button className="bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-200">Sign in</button>
      </div>
    </header>
  );
}

export default Header;
