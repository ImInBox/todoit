import React from "react";

function LoginFrame(props){
    return(
        <div className="border-dashed border-2 border-black flex items-center flex-col drop-shadow-2xl bg-white h-[24rem] w-[24rem] rounded-xl text-center"> {props.children} </div>
    )
}
export default LoginFrame;