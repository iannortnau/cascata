import styles from '../../styles/modules/PrioritySelector.module.css'

export default function PrioritySelector(props) {
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
