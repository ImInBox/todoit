import Background from "../components/Background";
import Sidebar from "../components/Sidebar";

function SettingsPage(){
    return(
        <Background className="flex justify-center items-center">   
            <Sidebar/>
            <div className="h-full w-full flex p-[83px]">
                <div className="h-full w-full flex bg-white rounded-lg">
                </div>
            </div>
        </Background>
    )
}

export default SettingsPage;
