import Page from "../components/Page";
import MainCard from "../components/MainCard";
import {useContext, useState} from "react";
import {AuthContext} from "../contexts/AuthContext";
import MainTitle from "../components/structural/MainTitle";
import Column from "../components/structural/Column";
import Input from "../components/structural/Input";
import Button from "../components/structural/Button";
import md5 from "md5";

export default function Login() {
    const {signIn} = useContext(AuthContext);
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [message,setMessage] = useState("");

    async function sendData() {
        const  response = signIn(email,md5(password));
        if(response === false){
            setMessage("Erro");
        }
    }

    return (
        <Page>
            <MainCard>
                <Column
                    height={"100%"}
                >
                    <MainTitle
                        title={"LOGIN"}
                    />
                    <Input
                        title={"EMAIL"}
                        onChange={setEmail}
                        type={"email"}
                    />
                    <Input
                        title={"SENHA"}
                        onChange={setPassword}
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
