import { Link } from "react-router-dom";
import Input from "../components/Input";
import LoginBg from "../components/LoginBackground";
import LoginFrame from "../components/LoginFrame";
import Button from "../components/Button";

function LoginPage(){
    return(
        <LoginBg>
            <LoginFrame>
                <h1 className="text-[50px] pt-8">Login</h1>
                <Input placeholder="E-mail" type="email"/>
                <Input placeholder="Password" type="password"/>
                <Button text="Confirm"/>
                <p className="pt-3">Or you can <Link className="text-blue-600 underline" to="/signup">signup</Link></p>
            </LoginFrame>
        </LoginBg>
    )
}

export default LoginPage;
