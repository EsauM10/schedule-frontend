import "./FormLogin.css";
import React, {useState, useContext, useEffect} from "react";
import {AuthContext} from "../../contexts/AuthProvider";

export default function FormSignUp() {
    const {errors, clearErrors, signUp} = useContext(AuthContext);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    const handleEmail = e => setEmail(e.target.value);
    const handlePassword = e => setPassword(e.target.value);
    const handleUsername = e => setUsername(e.target.value);
    const handleConfirm = e => setConfirm(e.target.value);

    const handleSignUp = () => {
        signUp({
            "username": username, 
            "email": email, 
            "password1": password,
            "password2": confirm
        });
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
                <input type="text" placeholder="Username"  value={username} onChange={handleUsername}/>
                <input type="email" placeholder="Email" value={email} onChange={handleEmail}/>
                <input type="password" placeholder="Password" value={password} onChange={handlePassword}/>
                <input type="password" placeholder="Confirm Password" value={confirm} onChange={handleConfirm}/>
            </div>

            <button onClick={handleSignUp}>SIGN UP</button>
        </div>
    );
}