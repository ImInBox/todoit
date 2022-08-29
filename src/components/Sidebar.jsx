import { useState } from "react";
import { useNavigate} from "react-router-dom";
import { IconContext } from "react-icons";
import { auth } from "../firebase/firebase";
import { signOut } from "firebase/auth"
import { RiSettings3Fill, RiHome4Fill, RiLogoutBoxRLine } from "react-icons/ri";

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

    const handleLogout = () => {

        signOut(auth).then(() => {
            localStorage.setItem("user", null)
            navigate("/login")
          }).catch((error) => {
            
          });
        };

    return(
        <>
        <div className={`rounded-r duration-300 top-0 left-0 bg-white fixed ${isOpen ? "" : "-translate-x-[300px]"} h-full`}>
            <div className="flex h-full w-[300px] flex-col">
                <h1 className="ml-8 mb-2 font-kanit text-[60px]">TODO IT</h1>
                <ul>
                    {sidebarItems.map((item) => (
                        <li key={item.title} onClick={() => navigate(item.link)} className="rounded duration-100 hover:bg-black hover:text-white m-2 p-2 flex items-center cursor-pointer">
                            <IconContext.Provider value={{size: "25", className: "m-[5px] duration-100"}}>
                                {item.icon}
                            </IconContext.Provider>
                            <h2 className="duration-100 text-small font-dmMono">{item.title}</h2>
                        </li>
                    ))}
                </ul>
                <div className="w-full font-dmMono h-[85px] mt-auto bg-black rounded-t-xl flex flex-row-reverse">
                    <button onClick={handleLogout} className="hover:scale-105 duration-200 h-[45px] w-[45px] bg-white rounded flex items-center justify-center m-[20px]">
                        <RiLogoutBoxRLine size={30}/>
                    </button>
                    <div className="flex items-center text-white ">
                        <h3 className="text-[30px] mr-[25px]">Welcome</h3>
                    </div>
                </div>
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
