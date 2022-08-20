function Background(props){
    return(
        <div className={`${props.className} h-screen w-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500`}> {props.children} </div>
    )
}

export default Background;
