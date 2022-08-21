import { Link } from "react-router-dom";
import Background from "../components/Background";
import Frame from "../components/Frame";
import Input from "../components/Input";
import Button from "../components/Button";

function SignUpPage(){
    return(
        <Background className="flex justify-center items-center">
            <Frame className="h-[24rem] w-[24rem] text-center">
                <h1 className="text-[50px] pt-8 font-dmMono">Sign up</h1>
                <Input placeholder="E-mail" type="email"/>
                <Input placeholder="Password" type="password"/>
                <Button text="Confirm"/>
                <p className="pt-3">Or you can <Link className="text-blue-600 underline" to="/login">login</Link></p>
            </Frame>
        </Background>
    )
}

export default SignUpPage;
