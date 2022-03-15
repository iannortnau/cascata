import styles from '../../styles/modules/Title.module.css'
import Line from "./Line";
import Image from 'next/image'

export default function Title(props) {
    const title = props.title;
    const imageLink = props.imageLink;
    return (
        <Line
            justifyContent={"center"}
        >
            <div className={styles.img}>
                <Image
                    src={imageLink}
                    alt="Icon"
                    width={30}
                    height={30}
                />
            </div>
            <h1 className={styles.text}>
                {title}
            </h1>
        </Line>
    )
}
