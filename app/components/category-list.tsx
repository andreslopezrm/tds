import { Category } from "~/db/category.server"
import CategoryItem from "./category-item";

type Props = {
    categories: Category[];
    onSelect: (category: Category) => void;
    onDelete: (entityId: string) => void;
}

export default function CategoryList({ categories, onSelect, onDelete }: Props) {
   return (
        <div className="overflow-x-auto relative mt-6">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" className="py-3 px-6">
                            Name
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Slug
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        categories.length > 0 
                            ? categories.map(category => <CategoryItem category={category} key={category.entityId} onSelect={onSelect} onDelete={onDelete} />) 
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