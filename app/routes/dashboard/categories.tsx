import { getAuth } from "@clerk/remix/ssr.server";
import { ActionArgs, json, LoaderArgs, redirect } from "@remix-run/node";
import { useActionData, useLoaderData, useTransition } from "@remix-run/react";
import { useEffect, useState } from "react";
import CategoryList from "~/components/category-list";
import CategoryModalCreate from "~/components/category-modal-create";
import CategoryModalEdit from "~/components/category-modal-edit";
import ConfirmModalDelete from "~/components/confirm-modal-delete";
import DashHeader from "~/components/dash-header";
import Toast from "~/components/toast";
import { Category, createCategory, deleteCategory, getAllCategoriesByUser, updateCategory } from "~/db/category.server";

type IntentType = "create" | "edit" | "delete";

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
        const name = formData.get("name") as string;
        const category = await createCategory({ userId, name });
        return json({ intent, category });
    } else if(intent === "edit") {
        const name = formData.get("name") as string;
        const entityId = formData.get("entityId") as string;
        const category = await updateCategory({ entityId, userId, name });
        return json({ intent, category });
    } else if(intent === "delete") {
        const entityId = formData.get("entityId") as string;
        await deleteCategory(entityId);
    }
    
    return json({ intent });
}

export default function DashboardCategoryRoute() {

    const { categories } = useLoaderData();
    const data = useActionData();
    const { state } = useTransition();
    const isSubmiting = state === "submitting";
    
    const [showCreateModal, setShowCreateModal] = useState<boolean>(false);
    const [message, setMessage] = useState<string | null>();
    const [categoryEdit, setCategoryEdit] = useState<Category | null>(null);
    const [categoryDelelteId, setCategoryDeleteId] = useState<string | null>(null);
    
    console.log(data);

    useEffect(() => {
        if(data?.intent === "create" && data?.category) {
            setShowCreateModal(false);
            setMessage("Create success");
        } else if(data?.intent === "edit" && data?.category) {
            setCategoryEdit(null);
            setMessage("Update success");
        } else if(data?.intent === "delete") {
            setCategoryDeleteId(null);
            setMessage("Delete success");
        }
    }, [data]);

    return (
        <div>
            <DashHeader title="Categories" />
            <div className="mt-4">
                <button type="button" onClick={() => setShowCreateModal(true)} className="text-sm font-bold underline"> + New category </button>
            </div>
            <CategoryList categories={categories} onSelect={setCategoryEdit} onDelete={setCategoryDeleteId} />
            {
                showCreateModal ? (<CategoryModalCreate isSubmiting={isSubmiting} onClose={() => setShowCreateModal(false)} />) : null
            }
            {
                categoryEdit ? (<CategoryModalEdit isSubmiting={isSubmiting} onClose={() => setCategoryEdit(null)} category={categoryEdit} />) : null
            }
            {
                categoryDelelteId ? (<ConfirmModalDelete entityId={categoryDelelteId} isSubmiting={isSubmiting} onClose={() => setCategoryDeleteId(null)} message="Are your sure delete this category?" />) : null
            }
            {
                message ? <Toast message={message} onClose={() => setMessage(null)} /> : null
            }
        </div>
    );
}