import { getAuth } from "@clerk/remix/ssr.server";
import { LoaderArgs, redirect } from "@remix-run/node";
import { Link } from "@remix-run/react";

export async function loader({ request }: LoaderArgs) {
  const { userId } = await getAuth(request);

  if(userId) {
    return redirect("/dashboard");
  }
  
  return null;
}

export default function IndexRoute() {
  
  return (
    <>
      <nav className="bg-white h-16 fixed top-0 left-0 right-0 flex justify-between items-center border-b border-slate-200 border-solid z-10">
            <div className="flex items-center gap-2 ml-4">
                <Link to="/">
                    <img src="/images/forest.png" alt="logo" className="w-10 h-10" />
                </Link>
                
                <Link to="/">
                    <span className="font-bold">TipLand</span>
                </Link>
            </div>
            <div className="mr-4 flex gap-6 text-sm items-center">
                <Link to="sign-in" className="text-slate-600">Sign In</Link>
                <Link className="bg-black text-white rounded px-4 py-2 border border-solid border-black hover:bg-white hover:text-black" to="sign-up">Sign Up</Link>
            </div>
        </nav>
        <section className="container m-0 mx-auto p-8 md:p-8">
          <div className="mt-14 md:mt-24">
            <h1 className="text-6xl text-zinc-900 font-extrabold md:text-8xl"><span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-teal-500">Tip Land</span> the SaaS platform for the Tip of the day</h1>
            <p className="mt-8 text-2xl text-gray-700 font-extralight md:text-3xl md:w-9/12 md:mt-12">The easy integration platform to offer users the advice that will help them to better use your product.</p>
            <div className="mt-12">
              <div className="mt-8 flex gap-4">
                <Link to="/sign-up" className="text-white bg-gradient-to-r from-black to-neutral-900 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2 md:px-12 md:py-5">Get starter</Link>
                <Link to="/about" className="text-black hover:text-zinc-800 border border-black hover:bg-zinc-50 focus:ring-4 focus:outline-none focus:ring-zinc-700 font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2 md:px-12 md:py-5">About</Link>
              </div>
            </div>

            <div>
              <h3>Start creating tips</h3>
              <h5>Categories</h5>
              <p>The tips of the day are segmented by categories which can be used by product, type of customers or applications</p>

              <h5>Ramdom</h5>
              <p>Each tip requested via rest api is by default random</p>

              <h5>Social</h5>
              <p>Sign in easily via Google, Github or email</p>


              <h3>Developer Focused</h3>
              <h5>API KEY</h5>
              <p>Get your api key to query through the Rest API</p>

              <h5>Statistics</h5>
              <p>Check the total number of requests in the last days</p>

              <h6>Privacy</h6>
              <p>You can change the assigned API Key in the developer section</p>

            </div>
          </div>
        </section>
    </>
  );
}

/*
    <div>
     <h1>Datos</h1>

      <Link to="/sign-in">Sign In</Link>
      <Link to="/sign-up">Sign Up</Link> 
*/
