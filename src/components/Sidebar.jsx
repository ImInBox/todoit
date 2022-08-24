import { useState } from "react";
import { CgMenu } from "react-icons/cg"

function Sidebar(){
    const [isOpen, setIsOpen] = useState(false)

    return(
        <>
        <div className={`duration-300 top-0 right-0 bg-white fixed ${isOpen ? "w-[300px]" : "w-[56px]"} h-full p-2`}>
            <i><button onClick={() => setIsOpen(!isOpen)}><CgMenu size={40}/> </button><h2 className={`text-2xl ${isOpen ? "" : "hidden"}`}>sidebar</h2></i>
        </div>
        </>
    )
}

export default Sidebar;
