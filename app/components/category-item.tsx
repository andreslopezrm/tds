import { Category } from "~/db/category.server"

type Props = {
    category: Category
}

export default function CategoryItem({ category }: Props) {
    const { name, slug } = category;
    return (
        <tr className="bg-white border-b">
            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                { name }
            </th>
            <td className="py-4 px-6">
                { slug }
            </td>
            <td className="py-4 px-6">
                -
            </td>
        </tr>
    );
}