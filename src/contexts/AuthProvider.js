import React, { createContext, useCallback, useEffect, useState } from "react";
import { api, getErrors} from "../services/api";



export const AuthContext = createContext();

export default function AuthProvider({children}){
    const [signed, setSigned] = useState(false);
    const [errors, setErrors] = useState([]);
    
    const clearErrors = useCallback(() => {
        setErrors([]);
    }, [])
    
    async function signIn(data){
        api.defaults.headers["Authorization"] = "";
        api.post("auth/login/", data)
        .then(res => {
            setSigned(true);
            localStorage.setItem("@tasks:token", res.data.key);
            api.defaults.headers["Authorization"] = `Token ${res.data.key}`;
        })
        .catch(err => setErrors(() => getErrors(err.response.data)));
    }

    async function signUp(data){
        api.defaults.headers["Authorization"] = "";
        api.post("auth/signup/", data)
        .then(res => {
            setSigned(true);
            localStorage.setItem("@tasks:token", res.data.key);
            api.defaults.headers["Authorization"] = `Token ${res.data.key}`;
        })
        .catch(err => setErrors(() => getErrors(err.response.data)));
    }

    function signOut(){
        api.post("auth/logout/").then(() => {
            localStorage.clear();
            setSigned(false);
        });
    }

    useEffect(() => {
        const token = localStorage.getItem("@tasks:token");
        setSigned(() => token ? true:false);
        api.defaults.headers["Authorization"] = `Token ${token}`;
    }, []);


    return (
        <AuthContext.Provider value={{
            signed,
            errors,
            clearErrors,
            signIn,
            signUp,
            signOut
        }}>
            {children}
        </AuthContext.Provider>
    );
}