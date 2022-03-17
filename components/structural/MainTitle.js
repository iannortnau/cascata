import styles from '../../styles/modules/MainTitle.module.css'
import Line from "./Line";
import Image from 'next/image'

export default function MainTitle(props) {
    const title = props.title;
    const imageLink = props.imageLink;
    return (
        <Line
            justifyContent={"center"}
        >
            <h1 className={styles.text}>
                {title}
            </h1>
        </Line>
    )
}
