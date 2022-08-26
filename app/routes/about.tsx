import { Link } from "@remix-run/react";

export default function AboutRoute() {
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

            <div className="container m-0 mx-auto font-light mt-24">
                <div className="px-8">
                    <h1 className="mt-12 text-3xl mb-8 font-extrabold">About</h1>

                    <p>Tip Land is a platform as a service for product creators and that can easily integrate the functionality of the tip of the day.</p>

                    <p className="mt-4">Many products today include daily tips for their best use in their interface, such as code editors, management systems among many others, Tip Land provides you with a platform with which you can create those tips for your products, through a API Key assigned to your account you can access the endpoint.</p>

                    <h2 className="mt-5">Re2 Stack 📀 🟥</h2>
                    <p className="mt-2">
                        <a target="_blank" href="https://dev.to/andreslopezrm/introducing-re2-stack-50l">Article about Re2 Stack</a>
                    </p>
                    
                    <h2 className="mt-4 text-2xl mb-2 font-bold">Made for</h2>
                    This project is made specifically for the <a target="_blank" href="https://dev.to/devteam/announcing-the-redis-hackathon-on-dev-3248" className="underline">Dev.to Redis Hackathon</a>

                    <p className="mt-4 font-bold">
                        <a className="underline" href="https://dev.to/andreslopezrm/tip-land-the-saas-platform-for-the-tip-of-the-day-5g7n" target="_blank">Link article</a>
                    </p>

                    <h2 className="mt-4 text-2xl mb-2 font-bold">Tech Stack</h2>
                    <ol className="list-decimal ml-4">
                        <li> <a className="underline" target="_blank" href="https://redis.io/">Redis </a>— The main database</li>
                        <li> <a className="underline" target="_blank" href="https://redis.com/try-free/">Redis Cloud </a>— The platform for Redis</li>
                        <li> <a className="underline" target="_blank" href="https://github.com/redis/redis-om-node">Redis OM for Node </a>— The object mapping for Redis</li>
                        <li> <a className="underline" target="_blank" href="https://remix.run/">Remix </a>— The web framewok</li>
                        <li> <a className="underline" target="_blank" href="https://vercel.com/">Vercel </a>— For deploy</li>
                        <li> <a className="underline" target="_blank" href="https://clerk.dev/">Clerk </a>- For the Auth</li>
                        <li> <a className="underline" target="_blank" href="https://tailwindcss.com/">Tailwind </a>— The css framework</li>
                    </ol>
                </div>
            </div>
        </>
    );
}