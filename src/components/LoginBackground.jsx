import React from "react";

function LoginBg(props){
    return(
        <div className="flex justify-center items-center h-screen w-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"> {props.children} </div>
    )
}

export default LoginBg;
