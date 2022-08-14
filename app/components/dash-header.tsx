import { useState } from "react";
import { useClerk, } from "@clerk/remix";

type Props = {
    title: string
}

export default function DashHeader({ title } : Props) {
    const { signOut } = useClerk();
    const [isDisabled, setIsDisabled] = useState(false);

    const handleOnExitSession = async () => {
        setIsDisabled(true);
        await signOut();
        setIsDisabled(false);
        window.location.href = '/';
    }

    return (
        <section className="flex justify-between">
            <h1 className="text-2xl font-extrabold md:text-3xl">{title}</h1>
            <button disabled={isDisabled} type="button" onClick={handleOnExitSession} className="text-gray-900 hover:text-white border-2 border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 hidden md:block disabled:opacity-50">Logout</button>
        </section>
    );
}