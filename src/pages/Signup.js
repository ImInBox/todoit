import React from "react";
import LoginBg from "../components/LoginBg";
import LoginFrame from "../components/LoginFrame";

function SignUpPage(){
    return(
        <LoginBg>
            <LoginFrame>
                <h1 className="text-[50px]">Sign up</h1>
            </LoginFrame>
        </LoginBg>
    )
}
export default SignUpPage;