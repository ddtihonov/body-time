import React from "react";
import { YMaps, Map, Placemark } from 'react-yandex-maps';
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
            <YMaps>
                <Map  width='100%' height='400px' defaultState={{ center: [55.031365, 82.914195], zoom: 17}}>
                    <Placemark geometry={[55.031365, 82.914195]}
                    options={{
                        iconLayout: 'default#image',
                        iconImageSize: [80, 40],
                        iconImageHref: 'https://ddtihonov.github.io/body-time/static/media/logo.e0b24f8d451135970676221b20d8b794.svg',
                    }}
                    />
                </Map>
            </YMaps>
        </section>
    )
}