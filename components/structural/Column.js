import styles from '../../styles/modules/Column.module.css'

export default function Column(props) {
    const justifyContent = props.justifyContent
    const height = props.height
    return (
        <div className={styles.column} style={{justifyContent:justifyContent||"center",height:height}}>
            {props.children}
        </div>
    )
}
