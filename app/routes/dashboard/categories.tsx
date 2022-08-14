import { getAuth } from "@clerk/remix/ssr.server";
import { ActionArgs, json, LoaderArgs, redirect } from "@remix-run/node";
import { Form, useActionData, useLoaderData } from "@remix-run/react";
import { useState } from "react";
import CategoryList from "~/components/category-list";
import DashHeader from "~/components/dash-header";
import { Modal } from "~/components/modal";
import { getAllCategoriesByUser } from "~/db/category.server";

export async function loader({ request }: LoaderArgs) {
    const { userId } = await getAuth(request);
    
    if(!userId) {
        return redirect("/sign-up");
    }

    const categories = await getAllCategoriesByUser({ userId });
    return json({ categories, date: +new Date() });
}

export async function action({ request }: ActionArgs) {
    const formData = await request.formData();
    const intent = formData.get("intent");
    //return redirect("/dashboard/tips");
    console.log('_________________paso por el action');
 
    return json({ status: 'ok', intent });
}

export default function DashboardCategoryRoute() {

    const { categories, date } = useLoaderData();
    const [showModal, setShowModal] = useState(false);


    const data = useActionData();
    console.log({ data });

    return (
        <div>
            <DashHeader title="Categories" />
            <div className="mt-4">
                <p>{date}</p>
                <button type="button" onClick={() => setShowModal(true)}>New Category</button>
            </div>
            <CategoryList categories={categories} />
            {
                showModal ? (
                    <Modal onClose={()=>{}}>
                        <Form method="post">
                            <button type="submit" name="intent" value="add">Ir a</button>
                        </Form>
                    </Modal>
                ) :  null
            }
        </div>
    );
}