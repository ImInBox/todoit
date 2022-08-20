import Background from "../components/Background";
import Frame from "../components/Frame";

function HomePage(){
    return(
        <Background className="p-[15%]">   
            <Frame className="flex flex-wrap h-full w-full">
                <div className="h-full w-[50%]"/>
                <div className="h-full w-[50%] flex flex-col items-center"/>
            </Frame>
        </Background>
    )
}

export default HomePage;
