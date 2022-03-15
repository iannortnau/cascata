import styles from '../../styles/modules/Block.module.css'

export default function Block(props) {
    return (
        <div className={styles.block}>
            {props.children}
        </div>
    )
}
