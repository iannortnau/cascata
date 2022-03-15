import styles from '../../styles/modules/Line.module.css'

export default function Line(props) {
    return (
        <div className={styles.line} style={{width:props.width,justifyContent:props.justifyContent||"space-around"}}>
            {props.children}
        </div>
    )
}
