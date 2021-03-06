import Page from "../components/Page";
import MainCard from "../components/MainCard";
import Header from "../components/Header";
import NewTaskButton from "../components/NewTaskButton";
import NewCategoryButton from "../components/NewCategoryButton";
import NewSearchButton from "../components/NewSearchButton";
import Panel from "../components/Panel";
import PanelTaskList from "../components/PanelTaskList";
import Task from "../components/Task";
import {useContext} from "react";
import {AuthContext} from "../contexts/AuthContext";
import Button from "../components/structural/Button";
import Column from "../components/structural/Column";
import { useRouter } from 'next/router'
import LoadSpin from "../components/structural/LoadSpin";

export default function Home() {
    const router = useRouter();
    const { isAutenticate, user, signIn, signOut, loading} = useContext(AuthContext);

    return (
        <>
            {isAutenticate && !loading &&
                <Page>
                    <MainCard>
                        <Header/>
                        <NewSearchButton/>
                        <NewTaskButton/>
                        <NewCategoryButton/>
                        <Panel
                            open={true}
                            title={"Painel - "}//add userName
                            backgroundColor={"rgba(49,8,68,0.91)"}
                        >
                            <PanelTaskList
                                open={true}
                                title={"Pendente"}//add userName
                                backgroundColor={"#a6a905"}
                            >
                                <Task/>
                            </PanelTaskList>
                            <PanelTaskList
                                open={false}
                                title={"Iniciado"}//add userName
                                backgroundColor={"#003a90"}
                            />
                            <PanelTaskList
                                open={false}
                                title={"Concluido"}//add userName
                                backgroundColor={"#008a69"}
                            />
                            <PanelTaskList
                                open={false}
                                title={"Cancelado"}//add userName
                                backgroundColor={"#ff2525"}
                            />

                        </Panel>
                    </MainCard>
                </Page>
            }
            {!isAutenticate && !loading &&
                <Page>
                    <MainCard>
                        <Column
                            height={"100%"}
                        >
                            <Button
                                text={"Criar Usu??rio"}
                                action={function () {
                                    router.push("/createUser");
                                }}
                            />
                            <Button
                                text={"Logar"}
                                action={function () {
                                    router.push("/login");
                                }}
                            />
                        </Column>
                    </MainCard>
                </Page>
            }
            {!isAutenticate && loading &&
                <Page>
                    <MainCard>
                        <Column
                            height={"100%"}
                        >
                            <LoadSpin/>
                        </Column>
                    </MainCard>
                </Page>
            }
        </>
    )
}
