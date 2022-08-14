type Props = {
    children?: JSX.Element;
    onClose: Function;
}

export function Modal({ children, onClose }: Props) {
    return (
        <div id="modal" aria-hidden="true" className=" bg-white bg-opacity-80 flex justify-center items-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 bottom-0 left-0 z-10 w-full md:inset-0 h-modal md:h-full">
            <div className="max-w-2xl m-8 relative inline-flex items-center justify-center p-1 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-black focus:ring-4 focus:outline-none focus:ring-purple-200">
                <div className="relative p-8 transition-all ease-in duration-75 bg-white rounded-md">
                    <div className="mb-4 flex justify-between">
                        <h3 className="font-bold text-xl">Tip Land</h3>
                        <button type="button" onClick={() => onClose()}>
                            <img src="/images/close.png" width="20" />
                        </button>
                    </div>
                    <div>
                        { children }
                    </div>
                </div>
            </div>
        </div>
    );
}