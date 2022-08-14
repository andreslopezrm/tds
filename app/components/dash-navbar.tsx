import { Link, useLocation } from "@remix-run/react";
import { menuItems } from "~/utils/menu";

export default function DashNavbar() {
    const { pathname } = useLocation();

    return (
        <nav className="bg-gray-100 p-3 shadow md:w-56 md:px-6 md:py-3">
            <div className="flex items-center md:gap-2">
                <img src="/images/forest.png" alt="logo" width="30" />
                <h1 className="hidden uppercase font-extrabold md:block">Tip Land</h1>
            </div>
            <hr className="mt-3" />
            <div className="hidden mt-3 font-bold px-2 md:block">Menu</div>
            <ul className="mt-3 w-full">
                {menuItems.map(({ id, title, path, completePath }) => {
                    const isSelected = pathname == completePath;
                    const imageType = isSelected ? "fill" : "out";
                    return (
                        <li key={id} className="mt-2 px-2 py-1 rounded hover:bg-gray-200">
                            <Link to={path} className="flex items-center w-6 md:w-auto md:gap-2">
                                <img src={`/images/${id}-${imageType}.png`} alt={title} className="w-6 h-6 md:w-4 md:h-4" />
                                <span className={`hidden text-sm ${ isSelected ? "font-semibold" : "font-light" } md:block`}>{title}</span>
                            </Link>
                        </li>
                    );
                })}
                <li>
                   <button type="button" className="mt-6 px-2 py-1">
                        <img src="/images/logout.png" alt="Logout" className="w-6 h-6 md:hidden md:w-4 md:h-4" />
                   </button>
                </li>
            </ul>
        </nav>
    );
}