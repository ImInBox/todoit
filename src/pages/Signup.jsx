import React from "react";
import { Link } from "react-router-dom";
import LoginBg from "../components/LoginBg";
import LoginFrame from "../components/LoginFrame";
import Input from "../components/Input";
import Button from "../components/Button";

function SignUpPage(){
    return(
        <LoginBg>
            <LoginFrame>
                <h1 className="text-[50px] pt-8">Sign up</h1>
                <Input placeholder="E-mail" type="email"/>
                <Input placeholder="Password" type="password"/>
                <Button text="Confirm"/>
                <p className="pt-3">Or you can <Link className="text-blue-600 underline" to="/login">login</Link></p>
            </LoginFrame>
        </LoginBg>
    )
}
export default SignUpPage;