import React from "react";

function LoginFrame(props){
    return(
        <div className="drop-shadow-2xl bg-white h-[24rem] w-[24rem] rounded-xl text-center"> {props.children} </div>
    )
}
export default LoginFrame;