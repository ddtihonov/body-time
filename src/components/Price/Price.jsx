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
            </div>    
            <Hint
                title ={'RF-лифтинг (лицо,тело)'}
                color={''}
                content ={[{service: '1 сеанс', price: '1000 руб.'}, {service: '4 сеансa', price: '3600 руб.'}, {service: '8 сеансов', price: '6400 руб.'}]}
            />
            <Hint
                title ={'Ультразвуковая кавитация'}
                color={'gray'}
                content ={[{service: '1 сеанс', price: '900 руб.'}, {service: '4 сеансa', price: '3200 руб.'}, {service: '8 сеансов', price: '5600 руб.'}]}
            />
            <Hint
                title ={'Прессотерапия'}
                color={''}
                content ={[{service: '1 сеанс', price: '450 руб.'}, {service: '5 сеансов', price: '2000 руб.'}, {service: '10 сеансов', price: '3000 руб.'}]}
            />
            <Hint
                title ={'Вакуумно-роликовый массаж'}
                color={'gray'}
                content ={[{service: '1 сеанс', price: '600 руб.'}, {service: '5 сеансов', price: '2750 руб.'}, {service: '10 сеансов', price: '5000 руб.'}]}
            />
            <Hint
                title ={'Вакуумно-баночный массаж'}
                color={''}
                content ={[{service: '1 сеанс', price: '450 руб.'}, {service: '5 сеансов', price: '2000 руб.'}, {service: '10 сеансов', price: '3000 руб.'}]}
            />
            <Hint
                title ={'Миостимуляция'}
                color={'gray'}
                content ={[{service: '1 сеанс', price: '450 руб.'}, {service: '5 сеансов', price: '2000 руб.'}, {service: '10 сеансов', price: '3000 руб.'}]}
            />
            <Hint
                color={''}
                title ={'Лазерная эпиляция'}
                content ={[{service: 'Верхняя губа', price: '300 руб.'}, {service: 'Подбородок', price: '300 руб.'}, {service: 'Межбровь', price: '300 руб.'}, {service: 'Щеки', price: '500 руб.'}, {service: 'Шея', price: '500 руб.'}, {service: 'Бакенбарды', price: '500 руб.'}, {service: 'Подмышечные впадины', price: '500 руб.'}, {service: 'Спина', price: '2000 руб.'}, {service: 'Поясница', price: '1000 руб.'}, {service: 'Живот', price: '1000 руб.'}]}
            />
            <p className={styles.text_bottom}>&#42; Процедуры носят косметический профилактический характер. Не являются медицинскими. Имеются противопоказания.</p>
            <p className={styles.text_bottom}>&#42; Длительность одного сеанса - 30 минут.</p>
        </section>
    )
}