import { getAuth } from "@clerk/remix/ssr.server";
import { ActionArgs, json, LoaderArgs, redirect } from "@remix-run/node";
import { Form, useActionData, useLoaderData } from "@remix-run/react";
import { useEffect, useState } from "react";
import CategoryList from "~/components/category-list";
import DashHeader from "~/components/dash-header";
import { Modal } from "~/components/modal";
import { createCategory, getAllCategoriesByUser } from "~/db/category.server";

type IntentType = "create" | "edit";

export async function loader({ request }: LoaderArgs) {
    const { userId } = await getAuth(request);
    
    if(!userId) {
        return redirect("/sign-up");
    }

    const categories = await getAllCategoriesByUser({ userId, perPage: 200 });
    return json({ categories, date: +new Date() });
}

export async function action({ request }: ActionArgs) {
    const { userId } = await getAuth(request);

    if(!userId) {
        return redirect("/sign-up");
    }

    const formData = await request.formData();
    const intent = formData.get("intent") as IntentType; 
    
    if(intent === "create") {
        const name = formData.get("name") as string | null;
        if(!name){
            return json({ intent, errors: { name: "Name required "}})
        }
        const category = await createCategory({ userId, name });
        return json({ intent, category });
    }
    
    return json({ intent });
}

export default function DashboardCategoryRoute() {

    const { categories } = useLoaderData();
    const data = useActionData();
    const [showCreateModal, setShowCreateModal] = useState(false);

    const handleOpenShowCreateModal = () => setShowCreateModal(true);

    const handleCloseShowCreateModal = () => setShowCreateModal(false);
    
    useEffect(() => {
        if(data?.intent === "create" && data?.category) {
            
            handleCloseShowCreateModal();
        }
    }, [data]);

    return (
        <div>
            <DashHeader title="Categories" />
            <div className="mt-4">
                <button type="button" onClick={handleOpenShowCreateModal}>New Category</button>
            </div>
            <CategoryList categories={categories} />
            {
                showCreateModal ? (
                    <Modal onClose={handleCloseShowCreateModal}>
                        <Form method="post" className="md:w-96">
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
                                <input type="text" id="name" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5" required />
                            </div>
                            <div className="flex justify-end gap-2 mt-5">
                                <button type="button" onClick={handleCloseShowCreateModal} className="text-gray-900 border-2 border-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-3 py-1.5 text-center mr-2 mb-2 hover:opacity-80 disabled:opacity-50">Cancel</button>
                                <button type="submit" name="intent" value="create" className="text-white border-2 border-gray-800 bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 disabled:opacity-50">Acept</button>
                            </div>
                        </Form>
                    </Modal>
                ) : null
            }
        </div>
    );
}