import styles from '../../styles/modules/LoadSpin.module.css'
import Line from "./Line";
import Image from "next/image";
import * as imageLink from "../../public/icons/load.png"

export default function LoadSpin(props) {
    const text = props.text;

    return (
        <Line
            justifyContent={"center"}
            width={"100%"}
        >
            <Image
                className={"w3-spin"}
                src={imageLink}
                alt="Icon"
                width={50}
                height={50}
            />
        </Line>
    )
}
