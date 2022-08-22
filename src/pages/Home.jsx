import Background from "../components/Background";
import Frame from "../components/Frame";
import Button from "../components/Button";
import Logo from "../components/Logo";
import { useNavigate } from "react-router-dom";

function HomePage(){
    const navigate = useNavigate();

    return(
        <Background className="flex justify-center items-center">   
            <Frame className="flex h-[32rem] w-[54rem] p-8">

                <Frame className="text-center h-full w-full mr-8">
                    <h1 className="pt-8 pb-4 text-[50px] font-dmMono">Welcome</h1>
                    <h3 className="text-[40px] pb-4 font-dmMono">in</h3>
                    <Logo/>
                </Frame>
                
                <Frame className="text-center h-full w-full flex items-center flex-col">

                    <h1 className="pt-8 text-[50px] font-dmMono">You Can</h1>
                    <Button onClick={() => navigate("/login")} text="Login" className="mb-2"/>
                    <h2 className="text-[20px] font-dmMono">OR</h2>
                    <Button onClick={() => navigate("/signup")} text="Signup" className="mt-2 mb-6"/>
                    <div className="text-center">
                        <h2 className="text-[30px] font-medium">Disclaimer!</h2>
                        <p className="px-3 pb-1">Todoit is now in beta!<br/>To sign in you will need<br/>"Beta token" given by administrator.</p>
                    </div>
                    
                </Frame>

            </Frame>
        </Background>
    )
}

export default HomePage;
