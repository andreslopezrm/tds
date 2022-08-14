import { Form } from "@remix-run/react";
import { Modal } from "./modal";

type Props = {
    entityId: string;
    isSubmiting: boolean;
    message: string;
    onClose: Function;
}


export default function ConfirmModalDelete({ entityId, isSubmiting, message, onClose}: Props) {
    return (
        <Modal onClose={onClose}>
            <Form method="post" className="md:w-96">
                <input type="hidden" name="entityId" value={entityId} />
                <p>{message}</p>
                <div className="flex justify-end gap-2 mt-5">
                    <button type="button" disabled={isSubmiting} onClick={() => onClose()} className="text-gray-900 border-2 border-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-3 py-1.5 text-center mr-2 mb-2 hover:opacity-80 disabled:opacity-50">Cancel</button>
                    <button type="submit" disabled={isSubmiting} name="intent" value="delete" className="text-white border-2 border-gray-800 bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 disabled:opacity-50">
                        Delete {isSubmiting ? "..." : ""}
                    </button>
                </div>
            </Form>
        </Modal>
    );
}