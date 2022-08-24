import Background from "../components/Background";
import Sidebar from "../components/Sidebar";

function HomePage(){
    return(
        <Background className="flex justify-center items-center">   
            <Sidebar/>
        </Background>
    )
}

export default HomePage;
