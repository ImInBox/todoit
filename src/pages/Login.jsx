import React from "react";
import LoginBg from "../components/LoginBg";
import LoginFrame from "../components/LoginFrame";

function LoginPage(){
    return(
        <LoginBg>
            <LoginFrame>
                <h1 className="text-[50px]">Login</h1>
            </LoginFrame>
        </LoginBg>
    )
}
export default LoginPage;