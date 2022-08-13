import { getAuth } from "@clerk/remix/ssr.server";
import { LoaderArgs, redirect } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

export async function loader({ request }: LoaderArgs) {
  const { userId } = await getAuth(request);

  if(userId) {
    return redirect("/dashboard");
  }

  return null;
}

export default function IndexRoute() {
  
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
