import { Form } from "@remix-run/react";
import { Category } from "~/db/category.server";
import { Modal } from "./modal";

type Props = {
    category: Category;
    isSubmiting: boolean;
    onClose: Function;
}

export default function CategoryModalEdit({ category, isSubmiting, onClose }: Props) {
    const { entityId, name } = category;
    return (
        <Modal onClose={onClose}>
            <Form method="post" className="md:w-96">
                <input type="hidden" name="entityId" value={entityId} />
                <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
                    <input type="text" id="name" defaultValue={name} name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5" required />
                </div>
                <div className="flex justify-end gap-2 mt-5">
                    <button type="button" disabled={isSubmiting} onClick={() => onClose()} className="text-gray-900 border-2 border-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-3 py-1.5 text-center mr-2 mb-2 hover:opacity-80 disabled:opacity-50">Cancel</button>
                    <button type="submit" disabled={isSubmiting} name="intent" value="edit" className="text-white border-2 border-gray-800 bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 disabled:opacity-50">
                        Save {isSubmiting ? "..." : ""}
                    </button>
                </div>
            </Form>
        </Modal>
    );
}