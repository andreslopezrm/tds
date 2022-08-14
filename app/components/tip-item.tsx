import { Tip } from "~/db/tip.server";

type Props = {
    tip: Tip;
    onSelect: (tip: Tip) => void;
    onDelete: (entityId: string) => void;
}

export default function TipItem({ tip, onSelect, onDelete }: Props) {
    const { entityId, description, category } = tip;
    return (
        <tr className="bg-white border-b">
            <th scope="row" className="py-4 px-6 font-medium text-gray-900">
                <p>{ description }</p>
            </th>
            <td className="py-4 px-6">
                { category?.name }
            </td>
            <td className="py-4 px-6">
                <div className="inline-flex gap-2 text-black">
                    <button onClick={() => onSelect(tip)} className="underline hover:opacity-80">Edit</button>
                    <button onClick={() => onDelete(entityId)} className="hover:opacity-80">Delete</button>
                </div>
            </td>
        </tr>
    );
}