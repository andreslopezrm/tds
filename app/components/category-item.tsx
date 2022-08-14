import { Category } from "~/db/category.server"

type Props = {
    category: Category;
    onSelect: (category: Category) => void;
    onDelete: (entityId: string) => void;
}

export default function CategoryItem({ category, onSelect, onDelete }: Props) {
    const { entityId, name, slug } = category;
    return (
        <tr className="bg-white border-b">
            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                { name }
            </th>
            <td className="py-4 px-6">
                { slug }
            </td>
            <td className="py-4 px-6">
                <div className="inline-flex gap-2 text-black">
                    <button onClick={() => onSelect(category)} className="underline hover:opacity-80">Edit</button>
                    <button onClick={() => onDelete(entityId)} className="hover:opacity-80">Delete</button>
                </div>
            </td>
        </tr>
    );
}