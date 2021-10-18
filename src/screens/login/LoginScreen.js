import "./LoginScreen.css";
import React, { useState } from "react";
import FormLogin from "../../components/Login/FormLogin";
import FormSignUp from "../../components/Login/FormSignUp";


function Button({title, active=false, onClick}){
    const getStyle = () => {
        return (active) ? "header-button active" : "header-button"
    }

    return (
        <div className={getStyle()} onClick={onClick}>
            <h2>{title}</h2>
        </div>
    );
}


export default function LoginScreen(){
    const [active, setActive] = useState(true);
    
    const toggle = () =>{ 
        setActive(!active);
    }

    return (
        <div className="login-container">
            <div className="login-header">
                <Button title="Login" active={active} onClick={toggle}/>
                <Button title="Sign Up" active={!active} onClick={toggle}/>
            </div>

            <div className="login-content">
                {active ? <FormLogin /> : <FormSignUp />}
            </div>
        </div>
    );
}