"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.log("Error: ", error);
  }, [error]);
  return (
    <div className="flex flex-col justify-center items-center pt-10">
      <h1 className="text-3xl mb-4">Algo deu errado!</h1>
      <button className="rounded text-white bg-blue-500 px-2 py-3 " onClick={() => reset()}>Tente Novamente</button>
    </div>
  );
}
