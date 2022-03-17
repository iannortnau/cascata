import styles from '../styles/modules/NewCategoryButton.module.css'
import Title from "./structural/Title";
import * as icon from "../public/icons/plus.png";
import {useState} from "react";
import Line from "./structural/Line";
import Column from "./structural/Column";

export default function NewCategoryButton() {
    const [close,setClose] = useState(true);


    if(close){
        return (
            <div
                className={styles.newCategoryButton}
                onClick={function () {
                    setClose(!close);
                }}
            >
                <Title
                    title={"Nova Categoria"}
                    imageLink={icon}
                />
            </div>
        );
    }else{
        return (
            <div
                className={styles.newCategoryButton}
            >
                <Line
                    width={"100%"}
                    justifyContent={"flex-start"}
                    onClick={function () {
                        setClose(!close);
                    }}
                >
                    <Title
                        title={"Categoria"}
                        imageLink={icon}
                    />
                </Line>
                <Column>
                </Column>
            </div>
        );
    }
}
