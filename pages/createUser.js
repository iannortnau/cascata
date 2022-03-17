import Page from "../components/Page";
import MainCard from "../components/MainCard";
import {useContext, useState} from "react";
import {AuthContext} from "../contexts/AuthContext";
import MainTitle from "../components/structural/MainTitle";
import Column from "../components/structural/Column";
import Input from "../components/structural/Input";
import Button from "../components/structural/Button";
import md5 from "md5";
import axios from "axios";
import {router} from "next/client";

export default function CreateUser() {
    const { isAutenticate, user, signIn, signOut} = useContext(AuthContext);
    const [name,setName] = useState("");
    const [userName,setUserName] = useState("");
    const [password1,setPassword1] = useState("");
    const [password2,setPassword2] = useState("");
    const [profile,setProfile] = useState(false);
    const [email,setEmail] = useState("");
    const [message,setMessage] = useState("");

    async function sendData(){
        setMessage("Enviando");
        if(password1 === password2 && password1 !== ""){
            if(name !== "" && userName !== "" && email !== ""){
                const data = {
                    name:name,
                    user:userName,
                    password: md5(password1),
                    profile:profile?"ADM":"USER",
                    email:email
                }
                const response = await axios.post(process.env.NEXT_PUBLIC_API_URL + "/user", data);

                if(response.status === 200){
                    router.push("/login");
                }else{
                    setMessage("Erro")
                }
            }else{
                setMessage("Preencha todos os campos");
            }
        }else{
            setMessage("Senha inválida");
        }
    }

    return (
        <Page>
            <MainCard>
                <Column
                    justifyContent={"center"}
                    height={"100%"}
                >
                    <MainTitle
                        title={"CRIAR USUÁRIO"}
                    />
                    <Input
                        title={"NOME"}
                        onChange={setName}
                        type={"text"}
                    />
                    <Input
                        title={"USER NAME"}
                        onChange={setUserName}
                        type={"text"}
                    />
                    <Input
                        title={"EMAIL"}
                        onChange={setEmail}
                        type={"email"}
                    />
                    <Input
                        title={"SENHA"}
                        onChange={setPassword1}
                        type={"password"}
                    />
                    <Input
                        title={"CONFIRMAR SENHA"}
                        onChange={setPassword2}
                        type={"password"}
                    />
                    <div style={{margin:5}}/>
                    {message&&
                        <>
                            <Button
                                text={message}
                                action={function () {
                                    setMessage("");
                                }}
                            />
                            <div style={{margin:5}}/>
                        </>
                    }
                    <Button
                        text={profile?"ADM":"Usuário"}
                        action={function () {
                            setProfile(!profile);
                        }}
                    />
                    <div style={{margin:5}}/>
                    <Button
                        text={"Enviar"}
                        action={function () {
                            sendData();
                        }}
                    />
                </Column>
            </MainCard>
        </Page>
    )
}
