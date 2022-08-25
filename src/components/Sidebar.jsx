import { useState } from "react";
import { CgMenu, CgClose} from "react-icons/cg"

function Sidebar(){
    const [isOpen, setIsOpen] = useState(false)

    return(
        <>
        <div className={`rounded-r duration-300 top-0 left-0 bg-white fixed ${isOpen ? "" : "-translate-x-[300px]"} h-full`}>
            <div className="flex h-full w-[300px]">
                <h2 className="ml-8 font-kanit text-[60px]">TODO IT</h2>
            </div>
        </div>
        <button className={`rounded duration-300 hover:text-white hover:bg-gray-800 m-4 top-0 left-0 bg-white fixed ${isOpen ? "translate-x-[300px]" : ""} p-2`} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <CgClose size={40}/> : <CgMenu size={40}/>}
        </button>
        </>
    )
}

export default Sidebar;
