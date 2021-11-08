import "./Header.css";
import React, { useContext } from "react";
import {BiLogOut} from "react-icons/bi";
import { AuthContext } from "../../contexts/AuthProvider";
import MonthSelector from "./MonthSelector";

export default function Header(){
    const {signOut} = useContext(AuthContext);

    return (
        <div className="header-container">
            <MonthSelector />
            <BiLogOut size={40} color="#FFF" className="pointer" onClick={signOut}/>
        </div>
    );
}