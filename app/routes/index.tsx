import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { deleteScore, searchScore } from "~/utils/db.server";


export const loader: LoaderFunction = async () => {
  await deleteScore();
  const data = await searchScore();


  return { name: "4", data }
}

export default function Index() {
  const data = useLoaderData<typeof loader>();
  console.log(data);
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
     <h1>Datos</h1>
     <p>{data.name}</p>
     <h1 className="text-3xl font-bold underline text-red-700">
        Hello world!
      </h1>
    </div>
  );
}
