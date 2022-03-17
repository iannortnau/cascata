import styles from '../styles/modules/NewTaskButton.module.css'
import Line from "./structural/Line";
import Title from "./structural/Title";
import * as icon from "../public/icons/plus.png";
import UserIdentifier from "./structural/UserIdentifier";

export default function NewTaskButton(props) {

    return (
        <div
            className={styles.newTaskButton}
            onClick={function () {

            }}
        >
            <Title
                title={"Nova Tarefa"}
                imageLink={icon}
            />
        </div>
    )
}
