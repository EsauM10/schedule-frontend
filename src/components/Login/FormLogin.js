import "./FormLogin.css";
import React, {useContext, useState, useEffect} from "react";
import { AuthContext } from "../../contexts/AuthProvider";


export default function FormLogin(){
    const {errors, clearErrors, signIn} = useContext(AuthContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsername = e => setUsername(e.target.value);
    const handlePassword = e => setPassword(e.target.value);
    const handleLogin = () => {
        signIn({"username": username, "password": password})
    }

    useEffect(() => {
        clearErrors();
    }, [clearErrors]);

    return (
        <div className="form-login">
             <div className="errors">
                 {errors && errors.map(item => <span key={item}>* {item}</span>)}
            </div>

            <div className="inputs">
                
                <input type="text" placeholder="Username" value={username} onChange={handleUsername} />
                <input type="password" placeholder="Password" value={password} onChange={handlePassword}/>
            </div>
            
            <button onClick={handleLogin}>LOGIN</button>
        </div>
    );
}