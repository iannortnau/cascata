import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/modules/Page.module.css'

export default function Page(props) {
    return (
        <div className={styles.page}>
            {props.children}
        </div>
    )
}
