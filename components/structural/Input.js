import styles from '../../styles/modules/Input.module.css'
import Line from "./Line";
import Image from 'next/image'
import Column from "./Column";
import {useEffect, useState} from "react";

export default function Input(props) {
    const [value,setValue] = useState("");
    const title = props.title;

    useEffect(function () {
        props.onChange(value);
    },[value]);
    return (
        <Column
            justifyContent={"center"}
        >
            <h1 className={styles.text}>
                {title}
            </h1>
            <input
                type={props.type}
                value={value}
                onChange={function (aux) {
                        setValue(aux.target.value);
                    }}
                className={styles.input}
            />
        </Column>
    )
}
