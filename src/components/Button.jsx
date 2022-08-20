import { useNavigate } from "react-router-dom";

function Button(props){
    const navigate = useNavigate();

    return(
        <button onClick={() => navigate(props.navigate)} className={`${props.className} text-white bg-black hover:scale-105 focus:scale-105 focus:outline-none duration-200 w-[18rem] h-10 mt-8 text-center rounded-md`}>{props.text}</button>
    )
}

export default Button;
