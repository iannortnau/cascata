import {createContext, useEffect, useState} from "react";
import Head from "next/head";
import nookies from 'nookies'
import axios from "axios";

export const AuthContext = createContext({})

export function AuthProvider(props) {
    const [user,setUser] = useState({
        nome:null,
        isAdm:null
    })
    const [isAutenticate,setIsAutenticate] = useState(false)

    useEffect(async function () {
        const {"cascataToken": token} = nookies.get(undefined);

        if (token) {
            await getUserInfo();
        }
    }, []);

    async function getUserInfo(){

        setIsAutenticate(true);
    }

    async function signIn(email, password) {
        const response = await axios.post(process.env.NEXT_PUBLIC_API_URL+"/user/login",{email:email,password:password});
        console.log(response);
        if (response.status === 200){
            console.log(response);
            /*
            nookies.set(undefined, "cascataToken",token,{
                maxAge: 60 * 60 * 24, // o token vai durar uma hora
            });*/
        }

        setUser({nome: null,isAdm: null});// setar as infos do usuário

        //fazer alguma coisa se der certo como usar o Router.push() para ir para a página central
    }

    async function signOut(){
        nookies.destroy(undefined,"cascataToken");
    }

    return (
        <AuthContext.Provider value={{ isAutenticate, user, signIn, signOut}}>
            {props.children}
        </AuthContext.Provider>
    );
}