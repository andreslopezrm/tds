import { getAuth } from "@clerk/remix/ssr.server";
import { ActionArgs, json, LoaderArgs, redirect } from "@remix-run/node";
import { Link, useActionData, useLoaderData, useTransition } from "@remix-run/react";
import { useEffect, useState } from "react";
import ConfirmModalDelete from "~/components/confirm-modal-delete";
import DashHeader from "~/components/dash-header";
import LoadMore from "~/components/load-more";
import TipList from "~/components/tip-list";
import TipModalCreate from "~/components/tip-modal-create";
import { TipModalEdit } from "~/components/tip-modal-edit";
import Toast from "~/components/toast";
import { getAllCategoriesByUser } from "~/db/category.server";
import { countAllTipsByUser, createTip, deleteTip, getAllTipsByUser, getTipsWithCategory, Tip, updateTip } from "~/db/tip.server";
import { getQueryIntParameter } from "~/utils/params.server";

type IntentType = "create" | "edit" | "delete";

export async function loader({ request }: LoaderArgs) {
    const { userId } = await getAuth(request);
    
    if(!userId) {
        return redirect("/sign-up");
    }
    const offset = getQueryIntParameter(request, "offset", 0);
    const perPage = getQueryIntParameter(request, "per_page", 200); 

    const [total, plainTips, categories] = await Promise.all([ 
        countAllTipsByUser(userId), 
        getAllTipsByUser({ userId, offset, perPage }), 
        getAllCategoriesByUser(userId) 
    ]);

    const tips = getTipsWithCategory({ tips: plainTips, categories });
    return json({ total, tips, categories, offset, perPage });
}

export async function action({ request }: ActionArgs) {
    const { userId } = await getAuth(request);

    if(!userId) {
        return redirect("/sign-up");
    }

    const formData = await request.formData();
    const intent = formData.get("intent") as IntentType; 
    
    if(intent === "create") {
        const description = formData.get("description") as string;
        const categoryId = formData.get("categoryId") as string;

        const tip = await createTip({ userId, categoryId, description });
        return json({ intent, tip });
    } 
    else if(intent === "edit") {
        const entityId = formData.get("entityId") as string;
        const description = formData.get("description") as string;
        const categoryId = formData.get("categoryId") as string;
        
        const tip = await updateTip({ entityId, description, categoryId });
        return json({ intent, tip });
    } else if(intent === "delete") {
        const entityId = formData.get("entityId") as string;
        await deleteTip(entityId);
    }
    
    return json({ intent });
}

export default function DashboardTipsRoute(){

    const { total, tips, categories, offset, perPage } = useLoaderData();
    const data = useActionData();
    const { state } = useTransition();
    const isSubmiting = state === "submitting";

    const [showCreateModal, setShowCreateModal] = useState<boolean>(false);
    const [message, setMessage] = useState<string | null>();
    const [tipEdit, setTipEdit] = useState<Tip | null>(null);
    const [tipDeleteId, setTipDeleteId] = useState<string | null>(null);

    useEffect(() => {
        if(data?.intent === "create" && data?.tip) {
            setShowCreateModal(false);
            setMessage("Create success");
        } 
        else if(data?.intent === "edit" && data?.tip) {
            setTipEdit(null);
            setMessage("Update success");
        } else if(data?.intent === "delete") {
            setTipDeleteId(null);
            setMessage("Delete success");
        }
    }, [data]);
    
    return (
        <div>
            <DashHeader title="Tips" />
            <div className="mt-4">
                <button type="button" onClick={() => setShowCreateModal(true)} className="text-sm font-bold underline"> + New tip </button>
            </div>
            <TipList tips={tips} onSelect={setTipEdit} onDelete={setTipDeleteId} />
            <LoadMore total={total} current={tips.length} path="/dashboard/tips" offset={offset} perPage={perPage} />
            {
                showCreateModal ? (<TipModalCreate isSubmiting={isSubmiting} onClose={() => setShowCreateModal(false)} categories={categories} />) : null
            }
            {
                tipEdit ? (<TipModalEdit isSubmiting={isSubmiting} onClose={() => setTipEdit(null)} tip={tipEdit} categories={categories} />) : null
            }
            {
                tipDeleteId ? (<ConfirmModalDelete entityId={tipDeleteId} isSubmiting={isSubmiting} onClose={() => setTipDeleteId(null)} message="Are your sure delete this tip?" />) : null
            }
            {
                message ? <Toast message={message} onClose={() => setMessage(null)} /> : null
            }
        </div>
    )
}