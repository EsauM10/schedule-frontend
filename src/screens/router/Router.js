import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import HomeScreen from "../home/HomeScreen";
import LoginScreen from "../login/LoginScreen";


export default function Router(){
    const {signed} = useContext(AuthContext);
    
    return (signed ? <HomeScreen/> : <LoginScreen />);
}