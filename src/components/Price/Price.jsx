import React from "react";
import styles from './Price.module.scss'
import PageLink from "../PageLink/PageLink";
import Hint from "../Hint/Hint";

export default function Price () {
    return (
        <section className={styles.main}>
            <PageLink
                text={'Прайс'}
            />
            <h2 className={styles.title}>Прайс</h2>
            <div className={styles.box}>
                <div className={styles.header}>
                    <p className={styles.text}>Наименование</p>
                    <p className={styles.text}>Цена</p>
                </div>
                <Hint
                    title ={'RF-лифтинг (лицо,тело)'}
                    color={''}
                    content ={''}
                />
                <Hint
                    title ={'Ультразвуковая кавитация'}
                    color={'gray'}
                    content ={''}
                />
            </div>
            
        </section>
    )
}