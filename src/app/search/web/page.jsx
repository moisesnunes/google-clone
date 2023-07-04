import Link from "next/link";
import SearchWebResults from "../../../components/SearchWebResults";

export default async function page({ searchParams }) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(`
  https://www.googleapis.com/customsearch/v1?key=
  ${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}
  `);
  if (!response.ok) {
    throw new Error("Algo deu errado");
  }
  const data = await response.json();
  const results = data.items;
  if (!results) {
    return (
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-3xl text-white mb-4">
          Sua pesquisa não encontrou nenhum documento correspondente
        </h1>
        <p className="text-lg text-white">
          Tente fazer a pesquisa novamente, ou volte para a{" "}
          <Link href="/" className="bg-blue-500 text-white rounded px-2 py-3">
            Home
          </Link>{" "}
        </p>
      </div>
    );
  }
  return <>{results && <SearchWebResults results={data} />}</>;
}
