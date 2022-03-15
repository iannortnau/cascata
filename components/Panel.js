import styles from '../styles/modules/Panel.module.css'
import {useEffect, useRef, useState} from "react";
import * as icon from "../public/icons/pesquisar.png";
import Title from "./structural/Title";
import * as iconOpen from "../public/icons/arrowOpen.png";
import * as iconClose from "../public/icons/arrowClose.png";
import Block from "./structural/Block";

export default
function Panel(props) {
    const [open,setOpen] = useState(props.open||false);
    const backgroundColor = props.backgroundColor;
    const title = props.title;
    const filter = {type:props.filterType,value:props.filterValue};
    const panelRef = useRef(null);

    /*
    titulo
    children
    state open/close
    color
    filter {type,value}
     */
    if(!open){
        return (
            <div
                className={styles.panelClose}
                style={{backgroundColor:props.backgroundColor}}
            >
                <div
                    onClick={function () {
                        setOpen(!open);
                    }}
                >
                    <Title
                        title={title}
                        imageLink={iconClose}
                        onClick={function () {
                            setOpen(!open);
                        }}
                    />
                </div>
            </div>
        );
    }else {
        return (
            <div
                ref={panelRef}
                className={styles.panelOpen}
                style={{backgroundColor:props.backgroundColor}}
            >
                <div
                    onClick={function () {
                        setOpen(!open);
                    }}
                >
                    <Title
                        title={title}
                        imageLink={iconOpen}
                        onClick={function () {
                            setOpen(!open);
                        }}
                    />
                </div>
                <Block>
                    {props.children}
                </Block>
            </div>
        );
    }
}
