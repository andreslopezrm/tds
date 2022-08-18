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
        </>
    );
}