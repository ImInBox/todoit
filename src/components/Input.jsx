import React from "react";

function Input(props){
    return(
        <input className="focus:scale-105 hover:scale-105 focus:outline-none duration-200 w-[18rem] h-10 mt-8 text-center rounded-md border-dashed border-black border-2" placeholder={props.placeholder} type={props.type}/>
    )
}

export default Input;
