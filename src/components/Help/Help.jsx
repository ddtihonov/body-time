import React from "react";
import styles from './Help.module.scss'

export default function Help() {

    return (
        <section className={styles.main}>
            <h2 className={styles.title}>Студия Body Time поможет вам:</h2>
            <div className={styles.box}>
                <div className={styles.box_image_big}>
                    <p className={styles.text_big}>Безболезненно устранить локальные жировые отложения</p>
                </div>
                <div className={styles.box_big}>
                    <div className={styles.box_image}>
                        <p className={styles.text_big}>Избавиться от лишнего веса</p>
                    </div>
                    <div className={styles.box_small}>
                        <p className={`${styles.text_small} ${styles.text_gray}`}>Улучшить лимфоток, микроциркуляцию и снабжение тканей кислородом</p>
                        <p className={styles.text_small}>Улучшить состояние и упругость кожи</p>
                    </div>
                </div>
            </div>
        </section>
    )

}