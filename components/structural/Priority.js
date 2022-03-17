import styles from '../../styles/modules/Priority.module.css'

export default function Priority(props) {
    const priorityValue = props.priorityValue;

    switch (priorityValue){
        case 1:
            return (
                <div className={styles.priority} style={{backgroundColor: '#20ceff'}}>
                    <h3 className={styles.text}>Muito Baixa</h3>
                </div>
            );
        case 2:
            return (
                <div className={styles.priority} style={{backgroundColor: '#028ab7'}}>
                    <h3 className={styles.text}>Baixa</h3>
                </div>
            );
        case 3:
            return (
                <div className={styles.priority} style={{backgroundColor: '#fdc638'}}>
                    <h3 className={styles.text}>Média</h3>
                </div>
            );
        case 4:
            return (
                <div className={styles.priority} style={{backgroundColor: '#ff6b00'}}>
                    <h3 className={styles.text}>Alta</h3>
                </div>
            );
        case 5:
            return (
                <div className={styles.priority} style={{backgroundColor: '#ff1010'}}>
                    <h3 className={styles.text}>Muito Alta</h3>
                </div>
            );
        default:
            return (
                <div className={styles.priority} style={{backgroundColor: '#ff0000'}}>
                    <h3 className={styles.text}>Erro</h3>
                </div>
            );
    }

}
