import React from 'react';
import styles from './Privilegio.module.scss';
import image_1 from '../../image/Privilegio/light-bulb.svg';
import image_2 from '../../image/Privilegio/hand.svg';
import image_3 from '../../image/Privilegio/arrow.svg';
import image_4 from '../../image/Privilegio/atom.svg';
import image_5 from '../../image/Privilegio/setting.svg';

export default function Privilegio () {

    return (
    <section className={styles.box}>
        <h2 className={styles.title}>О нас</h2>
        <ul className={styles.list}>
            <li className={styles.item}>
                <img className={styles.image} src={image_1} alt='логотип'/>
                <p className={styles.text}>Квалифицированный персонал</p>
            </li>
            <li className={styles.item}>
            <img className={styles.image} src={image_2} alt='логотип'/>
                <p className={styles.text}>Индивидуальный подход к каждому клиенту</p>
            </li>
            <li className={styles.item}>
                <img className={styles.image} src={image_3} alt='логотип'/>
                <p className={styles.text}>100% гарантия результата</p>
            </li>
            <li className={styles.item}>
            <img className={styles.image} src={image_4} alt='логотип'/>
                <p className={styles.text}>Новейшие методики похудения</p>
            </li>
            <li className={styles.item}>
            <img className={styles.image} src={image_5} alt='логотип'/>
                <p className={styles.text}>Современное оборудование</p>
            </li>
        </ul>
    </section>
)
}