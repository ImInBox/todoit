import Background from "../components/Background";
import Frame from "../components/Frame";
import Button from "../components/Button";

function HomePage(){
    return(
        <Background className="flex justify-center items-center">   
            <Frame className="flex h-[32rem] w-[54rem] p-8">

                <Frame className="text-center h-full w-full mr-8">
                    <h1 className="pt-8 text-[50px]">Welcome</h1>
                </Frame>
                
                <Frame className="text-center h-full w-full flex items-center flex-col">

                    <h1 className="pt-8 text-[50px]">You Can</h1>
                    <Button navigate="/login" text="Login" className="mb-2"/>
                    <h2 className="text-[20px]">OR</h2>
                    <Button navigate="/signup" text="Signup" className="mt-2 mb-8"/>
                    <Frame className="text-center">
                        <h2 className="text-[30px] font-medium">Disclaimer!</h2>
                        <p className="px-3 pb-1">todoit is now in beta!<br/>To sign in you will need <br/>"Beta token" given by administrator</p>
                    </Frame>
                    
                </Frame>

            </Frame>
        </Background>
    )
}

export default HomePage;
