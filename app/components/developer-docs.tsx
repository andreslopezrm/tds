import { useEffect, useState } from "react";

type Props = {
    apiKeyShow: string | null;
    apiKeyHidden: string | null;
}

export default function DeveloperDocs({ apiKeyShow, apiKeyHidden }: Props) {

    const [baseUrl, setBaseUrl] = useState("");

    const endpointUrlShow = `${baseUrl}/api/tips?api_key=${apiKeyShow}`;
    const endpointUrlHidden = `${baseUrl}/api/tips?api_key=${apiKeyHidden}`;

    useEffect(() => {
        setBaseUrl(window.location.origin);
    }, []);

    return (
        <>
            <h2 className="font-bold mt-6 text-xl">Endpoint</h2>
            <div className="overflow-x-auto relative mt-6">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                Parameter
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Type
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Required
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b">
                            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                                <p>api_key</p>
                            </th>
                            <td className="py-4 px-6">
                                <p>string</p>
                            </td>
                            <td className="py-4 px-6">
                                <p>Yes</p>
                            </td>
                        </tr>
                        <tr className="bg-white border-b">
                            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                                <p>category_slug</p>
                            </th>
                            <td className="py-4 px-6">
                                <p>string</p>
                            </td>
                            <td className="py-4 px-6">
                                <p>No</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p className="font-semibold mt-8">Usage example</p>
            <div className="bg-gray-100 p-2 mt-2 rounded">
                <a className="font-mono text-sm underline" href={endpointUrlShow} target="_blank">{endpointUrlHidden}</a>
            </div>
        </>
    );
}