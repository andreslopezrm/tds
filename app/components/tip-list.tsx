import { Tip } from "~/db/tip.server";
import TipItem from "./tip-item";

type Props = {
    tips: Tip[];
    onSelect: (tip: Tip) => void;
    onDelete: (entityId: string) => void;
}

export default function TipList({ tips, onSelect, onDelete }: Props) {
    return (
        <div className="overflow-x-auto relative mt-6">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" className="py-3 px-6">
                            Description
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Category
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    { tips.length > 0 
                        ? tips.map(tip => <TipItem tip={tip} key={tip.entityId} onSelect={onSelect} onDelete={onDelete} />) 
                        : (
                            <tr>
                                <td colSpan={3}>
                                    <p className="mt-3 text-center">Empty</p>
                                </td>
                            </tr>
                          )
                    }
                </tbody>
            </table>
        </div>
    );
}