import { Form } from "@remix-run/react";
import { Category } from "~/db/category.server";
import { Tip } from "~/db/tip.server";
import { Modal } from "./modal";

type Props = {
    tip: Tip;
    isSubmiting: boolean;
    categories: Category[];
    onClose: Function;
}

export function TipModalEdit({ tip, isSubmiting, categories, onClose }: Props) {
    const { categoryId, description } = tip;
    console.log(categoryId);
    return (
        <Modal onClose={onClose}>
                <Form method="post" className="md:w-96">
                    <div>
                        <label htmlFor="categoryId" className="block mb-2 text-sm font-medium text-gray-900">Category</label>
                        <select defaultValue={categoryId} id="categoryId" name="categoryId" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required>
                            <option value="">Choose a category</option>
                            {categories.map(({ entityId, name }) => (<option key={entityId} value={entityId}>{name}</option>))}
                        </select>
                    </div>
                    <div className="mt-3">
                        <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900">Name</label>
                        <textarea id="description" rows={5} name="description" maxLength={245} defaultValue={description} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5" required />
                    </div>
                    <div className="flex justify-end gap-2 mt-5">
                        <button type="button" disabled={isSubmiting} onClick={() => onClose()} className="text-gray-900 border-2 border-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-3 py-1.5 text-center mr-2 mb-2 hover:opacity-80 disabled:opacity-50">Cancel</button>
                        <button type="submit" disabled={isSubmiting} name="intent" value="create" className="text-white border-2 border-gray-800 bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 disabled:opacity-50">
                            Save {isSubmiting ? "..." : ""}
                        </button>
                    </div>
                </Form>
        </Modal>
    );
}