import { Tip } from "~/db/tip.server"

type Props = {
    tips: Tip[];
}

export function DashTips({ tips }: Props) {
    return (
        <section>
            <h2 className="font-bold mt-6 text-xl">Last tips</h2>
            <div className="overflow-x-auto relative mt-6">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                Description
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tips.length > 0 ? tips.map(({ entityId, description }) => (
                                <tr className="bg-white border-b" key={entityId}>
                                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                                        {description}
                                    </th>
                                </tr>
                            )) : (
                                <tr className="text-center text-gray-800 mt-3">
                                    <td>
                                        <p className="mt-3">Empty</p>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </section>
    );
}