import { Link } from "@remix-run/react";

type Props = {
    total: number;
    current: number;
    path: string;
    offset: number;
    perPage: number;
}

export default function LoadMore({ total, current, path, offset, perPage }: Props) {

    console.log({ total, current, path, perPage, offset });

    if(current >= total) {
        return null;
    }

    const nextPath = `${path}?offset=${offset}&per_page=${perPage += perPage}`;
    return (
        <div className="mt-8">
            <Link to={nextPath} className="text-white border-2 border-gray-800 bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 disabled:opacity-50">Load more</Link>
        </div>
    );
}