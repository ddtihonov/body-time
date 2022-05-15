import React from "react";
import styles from './Contacts.module.scss'
import PageLink from "../PageLink/PageLink";

export default function Contacts () {
    return (
        <section className={styles.main}>
            <PageLink
                text={'Контакты'}
            />
            <h2 className={styles.title}>Контакты</h2>
        </section>
    )
}