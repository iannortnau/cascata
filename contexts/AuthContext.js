import {createContext, useEffect, useState} from "react";
import nookies from 'nookies'
import axios from "axios";
import Router from "next/router";

export const AuthContext = createContext({});

export function AuthProvider(props) {
    const [user,setUser] = useState();
    const [isAutenticate,setIsAutenticate] = useState(false);
    const [loading,setLoading] = useState(true);

    useEffect(async function () {

        const {"cascataToken": token} = nookies.get(undefined);
        console.log(token);
        if (token) {
            await getUserInfo(token);
        }
        setLoading(false);
    }, []);

    async function getUserInfo(token){
        const response = await axios.get(process.env.NEXT_PUBLIC_API_URL+"/user/auth/"+token);

        if (response.status === 200){
            let auxIsAdm = null;
            if(response.data.perfil === "ADM"){
                auxIsAdm = true;
            }else{
                auxIsAdm = false;
            }
            setUser({
                name:response.data.nome_completo,
                isAdm:auxIsAdm,
                email: response.data.email
            });
            setIsAutenticate(true);
            Router.push("/");
        }else{
            return false;
        }
    }

    async function signIn(email, password) {
        const response = await axios.post(process.env.NEXT_PUBLIC_API_URL+"/user/login",{email:email,password:password});
        if (response.status === 200){
            nookies.set(undefined, "cascataToken",response.data.token,{
                maxAge: 60 * 60 * 24, // o token vai durar uma hora
            });
            let auxIsAdm = null;
            if(response.data.perfil === "ADM"){
                auxIsAdm = true;
            }else{
                auxIsAdm = false;
            }
            setUser({
                name:response.data.nome_completo,
                isAdm:auxIsAdm,
                email: response.data.email
            });
            setIsAutenticate(true);
            Router.push("/");
            //await router.push("/");
        }else {
            return false;
        }
    }

    async function signOut(){
        nookies.destroy(undefined,"cascataToken");
    }

    return (
        <AuthContext.Provider value={{ isAutenticate, user, signIn, signOut, loading}}>
            {props.children}
        </AuthContext.Provider>
    );
}