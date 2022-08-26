import { useState } from "react";

function Sidebar(){
    const [isOpen, setIsOpen] = useState(false)

    return(
        <>
        <div className={`rounded-r duration-300 top-0 left-0 bg-white fixed ${isOpen ? "" : "-translate-x-[300px]"} h-full`}>
            <div className="flex h-full w-[300px]">
                <h2 className="ml-8 font-kanit text-[60px]">TODO IT</h2>
            </div>
        </div>
        <button  onClick={() => setIsOpen(!isOpen)} className={`${isOpen ? "translate-x-[300px]" : ""} group px-2 py-3 rounded duration-300 hover:text-white hover:bg-gray-800 m-4 top-0 left-0 bg-white fixed`}>
            <div className={`${isOpen ? "-rotate-45 translate-y-[11px]" : ""} rounded-full duration-300 group-hover:bg-white bg-black h-[5px] w-[35px]`}></div>
            <div className={`${isOpen ? "opacity-0" : ""} rounded-full duration-300 group-hover:bg-white bg-black my-[6px] h-[5px] w-[35px]`}></div>
            <div className={`${isOpen ? "rotate-45 -translate-y-[11px]" : ""} rounded-full duration-300 group-hover:bg-white bg-black h-[5px] w-[35px]`}></div>
        </button>
        </>
    )
}

export default Sidebar;
