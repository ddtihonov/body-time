import React from 'react';
import styles from './InitialPage.module.scss'
import tick from '../../image/InitialPage/tick.svg'

export default function InitialPage () {
    return (
    <section className={styles.container}>
        <div className={styles.box}>
            <h1 className={styles.title}>Аппаратная коррекция фигуры</h1>
            <div className={styles.line}></div>
            <h3 className={styles.subtitle}>Студия Body Time</h3>
            <button className={styles.button}>Обратный звонок</button>
            <img className={styles.image} src={tick} alt = 'стрелка'/>
        </div>
    </section>
    )
}