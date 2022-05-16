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
            <ul className={styles.list}>
                <li className={styles.item}>
                    <h3 className={styles.subtitle}>Режим работы</h3>
                    <p className={styles.text}>пн-пт: 9.00-21.00</p>
                    <p className={styles.text}>сб: 10.00-20.00</p>
                    <p className={styles.text}>вс: выходной</p>
                </li>
                <li className={styles.item}>
                    <h3 className={styles.subtitle}>Связаться</h3>
                    <p className={styles.text}>8 (913) 798-93-63</p>
                    <p className={styles.text}>Sonik.nsk@yandex.ru</p>
                </li>
                <li className={styles.item}>
                    <h3 className={styles.subtitle}>Наш адрес</h3>
                    <p className={styles.text}>г. Новосибирск, ул.Вокзальная</p>
                    <p className={styles.text}>магистраль,16, оф. 205, 2 эт.</p>
                </li>
            </ul>
        </section>
    )
}