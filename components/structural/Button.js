import styles from '../../styles/modules/Button.module.css'

export default function Button(props) {
    const text = props.text;

    return (
        <div
            className={styles.Button}
            onClick={props.action}
        >
            <h1 className={styles.text}>
                {text}
            </h1>
        </div>
    )
}
