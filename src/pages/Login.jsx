import { useContext, useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "../context/AuthContext";
import { auth } from "../firebase/firebase";
import Input from "../components/Input";
import Background from "../components/Background";
import Frame from "../components/Frame";
import Button from "../components/Button";

function LoginPage(){
    const [error, setError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate()

    const {dispatch} = useContext(AuthContext)

    const handleLogin = (e) => {
        e.preventDefault()

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              // Signed in 
              const user = userCredential.user;
              dispatch({type:"LOGIN", payload:user})
              navigate("/")
            })
            .catch((error) => {
              setError(true)
            });
        };

    return(
        <Background className="flex justify-center items-center">
            <Frame className="h-[24rem] w-[24rem] text-center">
                <h1 className="text-[50px] pt-8 font-dmMono">Login</h1>
                <form onSubmit={handleLogin}>
                    <Input placeholder="E-mail" type="email" onChange={e=>setEmail(e.target.value)}/>
                    <Input placeholder="Password" type="password" onChange={e=>setPassword(e.target.value)}/>
                    <Button type="submit" text="Confirm"/>
                </form>
                <p className="pt-3">Or you can <Link className="text-blue-600 underline" to="/signup">signup</Link></p>
            </Frame>
        </Background>
    )
}

export default LoginPage;
