import styles from '../styles/modules/NewCategoryButton.module.css'
import Title from "./structural/Title";
import * as icon from "../public/icons/plus.png";

export default function NewCategoryButton() {
    return (
        <div
            className={styles.newCategoryButton}
            onClick={function () {

            }}
        >
            <Title
                title={"Nova Categoria"}
                imageLink={icon}
            />
        </div>
    );
}
