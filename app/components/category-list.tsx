import { Category } from "~/db/category.server"
import CategoryItem from "./category-item";

type Props = {
    categories: Category[]
}

export default function CategoryList({ categories }: Props) {
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
                    {categories.map(category => <CategoryItem category={category} key={category.entityId} />)}
                </tbody>
            </table>
        </div>
   );
}