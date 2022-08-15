type Props = {
    apiKey: string | null;
    visible: boolean;
    onToogleVisible: () => void;
}

export default function DeveloperList({ apiKey, visible, onToogleVisible }: Props) {
    return (
        <div className="overflow-x-auto relative mt-6">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" className="py-3 px-6">
                            Api Key
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b">
                        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                            <p>{ apiKey }</p>
                        </th>
                        <td className="py-4 px-6">
                            <div className="inline-flex gap-2 text-black">
                                <button onClick={onToogleVisible} className="underline hover:opacity-80">
                                    { visible ? "Hidden" : "View" }
                                </button>
                                <button onClick={() => {}} className="hover:opacity-80">Refresh</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}