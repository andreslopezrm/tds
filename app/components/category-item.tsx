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
                <button onClick={() => onSelect(category)}>Edit</button>
                <button onClick={() => onDelete(entityId)}>Delete</button>
            </td>
        </tr>
    );
}