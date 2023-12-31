import Link from "next/link";
import Pagination from "./Pagination";
import Image from "next/image";

export default function ImageSearchResult({ results }) {
  return (
    <div className="pb-36 mt-8 space-x-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 space-x-4">
        {results.items.map((result) => (
          <div key={result.link} className="">
            <div className="group">
              <Link href={result.image.contextLink}>
                <Image className="w-full object-contain rounded-xl" src={result.link} alt={result.title} width={100} height={100}/>
              </Link>
              <Link href={result.image.contextLink}>
                <h2 className="group-hover:underline truncate text-xl text-blue-400">{result.title}</h2>
              </Link>
              <Link href={result.image.contextLink}>
                <p className="text-gray-400">{result.displayLink}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="ml-16">
        <Pagination />
      </div>
    </div>
  );
}
