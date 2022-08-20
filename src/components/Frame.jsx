function Frame(props){
    return(
        <div className={`${props.className} border-dashed border-2 border-black drop-shadow-2xl bg-white rounded-xl`}> {props.children} </div>
    )
}

export default Frame;
