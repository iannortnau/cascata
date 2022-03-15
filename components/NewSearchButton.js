import styles from '../styles/modules/NewSearchButton.module.css'
import Title from "./structural/Title";
import * as icon from "../public/icons/pesquisar.png";

export default function NewSearchButton() {
    return (
        <div
            className={styles.newSearchButton}
            onClick={function () {

            }}
        >
            <Title
                title={"Nova Busca"}
                imageLink={icon}
            />
        </div>
    );
}

