import React from "react";
import styles from './Actions.module.scss';
import PageLink from "../PageLink/PageLink";

export default function Actions () {
    return (
        <section className={styles.main}>
            <PageLink
                text={'Акции'}
            />
            <h2 className={styles.title}>Акции</h2>
        </section>
    )
}