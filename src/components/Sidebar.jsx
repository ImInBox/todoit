import { useState } from "react";
import { useNavigate} from "react-router-dom";
import { IconContext } from "react-icons";
import { RiSettings3Fill, RiHome4Fill } from "react-icons/ri";

function Sidebar(){
    const [isOpen, setIsOpen] = useState(JSON.parse(localStorage.getItem("sidebarOpen", "true")) === true);
    const navigate = useNavigate()

    isOpen ? localStorage.setItem("sidebarOpen", "true") : localStorage.setItem("sidebarOpen", "false")

    const sidebarItems = [
        {
            title: "Home",
            icon: <RiHome4Fill/>,
            link: "/",
        },
        {
            title: "Settings",
            icon: <RiSettings3Fill/>,
            link: "/settings",
        },
    ];

    return(
        <>
        <div className={`rounded-r duration-300 top-0 left-0 bg-white fixed ${isOpen ? "" : "-translate-x-[300px]"} h-full`}>
            <div className="flex h-full w-[300px] flex-col">
                <h1 className="ml-8 mb-2 font-kanit text-[60px]">TODO IT</h1>
                <ul>
                    {sidebarItems.map((item, index) => (
                        <li key={index} onClick={() => navigate(item.link)} className="rounded duration-100 hover:bg-black hover:text-white m-2 p-2 flex items-center cursor-pointer">
                            <IconContext.Provider value={{size: "25", className: "m-[5px] duration-100"}}>
                                {item.icon}
                            </IconContext.Provider>
                            <h2 className="duration-100 text-small font-dmMono">{item.title}</h2>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        <button  onClick={() => setIsOpen(!isOpen)} className={`${isOpen ? "translate-x-[300px]" : ""} group px-2 py-3 rounded duration-300 hover:text-white hover:bg-black m-4 top-0 left-0 bg-white fixed`}>
            <div className={`${isOpen ? "-rotate-45 translate-y-[11px]" : ""} rounded-full duration-300 group-hover:bg-white bg-black h-[5px] w-[35px]`}></div>
            <div className={`${isOpen ? "opacity-0" : ""} rounded-full duration-300 group-hover:bg-white bg-black my-[6px] h-[5px] w-[35px]`}></div>
            <div className={`${isOpen ? "rotate-45 -translate-y-[11px]" : ""} rounded-full duration-300 group-hover:bg-white bg-black h-[5px] w-[35px]`}></div>
        </button>
        </>
    )
}

export default Sidebar;
