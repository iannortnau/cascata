import styles from '../styles/modules/Header.module.css'
import Title from "./structural/Title";
import * as icon from "../public/icons/waterfall.png";
import Line from "./structural/Line";
import UserIdentifier from "./structural/UserIdentifier";

export default function Header() {
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
                    userName={"Iann"}
                    isAdm={true}
                />
            </Line>
        </div>
    )
}
