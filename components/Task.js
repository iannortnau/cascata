import styles from '../styles/modules/Task.module.css'
import Line from "./structural/Line";
import Priority from "./structural/Priority";
import {useState} from "react";
import Image from "next/image";
import * as iconOpen from "../public/icons/arrowOpen.png";
import * as iconClose from "../public/icons/arrowClose.png";

export default function Task(props) {
    const taskId = props.id;
    const [open,setOpen] = useState(props.open||false);
    const [taskName,setTaskName] = useState();
    const [taskDescription,setTaskDescription] = useState();
/*
nome
situacão
categoria
prioridade
data limite

continuar a implementacao ele vai receber o id vai ter q buscar as infos das tasks por conta
*/
    if(!open){
        return (
            <div className={styles.task}
                 onClick={function () {
                     setOpen(!open);
                 }}
            >
                <Line
                    justifyContent={"space-between"}
                >
                    <Line
                        justifyContent={"space-between"}
                        width={"100%"}
                    >
                        <Line>
                            <Image
                                src={iconClose}
                                alt="Icon"
                                width={30}
                                height={30}
                            />
                            <h1 className={styles.taskName}>
                                {taskName}
                            </h1>
                        </Line>
                        <Priority
                            priorityValue={2}
                        />
                    </Line>
                </Line>
            </div>
        );
    }else{
        return (
            <div className={styles.task}>
                <Line
                    justifyContent={"space-between"}
                >
                    <Line
                        justifyContent={"space-between"}
                        width={"100%"}
                    >
                        <Line>
                            <div
                                onClick={function () {
                                    setOpen(!open);
                                }}
                            >
                                <Image
                                    src={iconOpen}
                                    alt="Icon"
                                    width={30}
                                    height={30}
                                />
                            </div>
                            <input
                                type={"text"}
                                className={styles.taskName}
                                value={taskName}
                                onChange={function (aux) {
                                    setTaskName(aux.target.value);
                                }}
                            />
                        </Line>
                        <Priority
                            priorityValue={2}
                        />
                    </Line>
                </Line>
                <Line
                    justifyContent={"center"}
                    width={"100%"}
                >
                    <textarea
                        value={taskDescription}
                        className={styles.taskDescription}
                        placeholder={"Descrição"}
                        onChange={function (aux) {
                            setTaskDescription(aux.target.value);
                        }}
                    />

                </Line>

            </div>
        );
    }
}
