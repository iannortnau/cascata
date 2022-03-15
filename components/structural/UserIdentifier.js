import styles from '../../styles/modules/UserIdentifier.module.css'
import Line from "./Line";
import Image from 'next/image'

export default function UserIdentifier(props) {
    const userName = props.userName;
    const isAdm = props.isAdm;
    return (
        <div className={styles.userIdentifier}>
            <Line
                justifyContent={"space-between"}
            >
                <h1 className={styles.userName}>
                    {userName}
                </h1>
                {isAdm&&
                    <div className={styles.adm}>
                        <h2 className={styles.admText}>
                            ADM
                        </h2>
                    </div>
                }
            </Line>
        </div>
    )
}
