import styles from '../styles/modules/MainCard.module.css'

export default function MainCard(props) {
    return (
        <di11v className={styles.mainCard}>
            {props.children}
        </di11v>
    )
}
