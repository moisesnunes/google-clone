import Link from "next/link";
import HTMLReactParser from "html-react-parser";

export default function SearchWebResults({ results }) {
  return (
    <div className="w-full mx-auto px-3 pb-24 sm:pl-[5%] md:pl-[14%] lg:pl-48">
      <p className="text-sm text-gray-500 mb-5 mt-3 ">
        Aproximadamente {results.searchInformation?.formattedTotalResults}{" "}
        resultados ({results.searchInformation?.formattedSearchTime} segundos)
      </p>
      {results.items?.map((result) => (
        <div className="mb-8 max-w-xl" key={result.link}>
          <div className="group flex flex-col">
            <Link className="text-sm truncate" href={result.link}>
              {result.formattedUrl}
            </Link>
            <Link
              className="group-hover:underline decoration-blue-500 font-medium text-blue-400 text-xl"
              href={result.link}
            >
              {result.title}
            </Link>
          </div>
          <p className="text-sm truncate text-gray-400">
            {HTMLReactParser(result.htmlSnippet)}
          </p>
        </div>
      ))}
    </div>
  );
}
