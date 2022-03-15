import styles from '../styles/modules/MainCard.module.css'

export default function MainCard(props) {
    return (
        <div className={styles.mainCard}>
            {props.children}
        </div>
    )
}
