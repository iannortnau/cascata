import styles from '../styles/modules/Header.module.css'
import Title from "./structural/Title";
import * as icon from "../public/icons/waterfall.png";
import Line from "./structural/Line";
import UserIdentifier from "./structural/UserIdentifier";
import {AuthContext} from "../contexts/AuthContext";
import {useContext} from "react";

export default function Header() {
    const { isAutenticate, user, signIn, signOut} = useContext(AuthContext);
    const name = user.name;
    const isAdm = user.isAdm;

    return (
        <div className={styles.header}>
            <Line
                justifyContent="space-between"
            >
                <Title
                    imageLink={icon}
                    title={"Cascata"}
                />
                <UserIdentifier
                    userName={name}
                    isAdm={isAdm}
                />
            </Line>
        </div>
    )
}
