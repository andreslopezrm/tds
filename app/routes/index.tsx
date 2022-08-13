import { getAuth } from "@clerk/remix/ssr.server";
import { LoaderArgs } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getAllPeople } from "~/db/person.server";

export async function loader({ request }: LoaderArgs) {
  const { userId } = await getAuth(request);
  const people = await getAllPeople();
  console.log(people);
  return { people }
}

export default function IndexRoute() {
  const data = useLoaderData<typeof loader>();
  console.log(data);
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
     <h1>Datos</h1>

      <Link to="/sign-in">Sign In</Link>
      <br />
      <br />
      <Link to="/sign-up">Sign Up</Link>
    </div>
  );
}
