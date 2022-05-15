import React from "react";
import styles from './Price.module.scss'
import PageLink from "../PageLink/PageLink";

export default function Price () {
    return (
        <section className={styles.main}>
            <PageLink
                text={'Прайс'}
            />
            <h2 className={styles.title}>Прайс</h2>
        </section>
    )
}