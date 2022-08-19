import { SignIn } from "@clerk/remix";
import { Link } from "@remix-run/react";

export default function SignInRoute() {
  return (
    <main className="auth flex justify-center p-2 md:p-8">
       <div className="mt-4">
            <div className="flex items-center justify-center mb-5 md:gap-2">
                <Link to="/">
                  <img src="/images/forest.png" alt="logo" width="35" />
                </Link>
                <h1 className="uppercase font-extrabold text-2xl md:block">
                  <Link to="/">Tip Land</Link>
                </h1>
            </div>
          <SignIn routing={"path"} path={"/sign-in"} />
       </div>
    </main>
  );
}

