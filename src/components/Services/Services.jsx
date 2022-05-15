import React from "react";
import { Link } from 'react-router-dom';
import styles from './Services.module.scss';
import PageLink from "../PageLink/PageLink";
import image_1 from '../../image/Services/image_1.png';
import image_2 from '../../image/Services/image_2.png';
import image_3 from '../../image/Services/image_3.png';
import image_4 from '../../image/Services/image_4.png';
import image_5 from '../../image/Services/image_5.png';
import image_6 from '../../image/Services/image_6.png';
import image_7 from '../../image/Services/image_7.png';
import image_8 from '../../image/Services/image_8.png';
import image_9 from '../../image/Services/image_9.png';
import image_10 from '../../image/Services/image_10.png';


export default function Services () {
    return (
        <section className={styles.main}>
            <PageLink
                text={'Услуги'}
            />
            <h2 className={styles.title}>Наши услуги</h2>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <img className={styles.image} src={image_1} alt = 'услуга'/>
                    <div className={styles.box}>    
                        <h3 className={styles.subtitle}>RF-лифтинг лица (тела)</h3>
                        <p className={styles.text}>1 сеанс - 1000 руб.</p>
                        <p className={styles.text}>4 сеанса - 3600 руб.</p>
                        <p className={styles.text}>8 сеансов - 6400 руб.</p>
                    </div>
                    
                </li>
                <li className={styles.item}>
                    <img className={styles.image} src={image_2} alt = 'услуга'/>
                    <div className={styles.box}>    
                        <h3 className={styles.subtitle}>Ультразвуковая кавитация</h3>
                        <p className={styles.text}>1 сеанс - 900 руб.</p>
                        <p className={styles.text}>4 сеанса - 3200 руб.</p>
                        <p className={styles.text}>8 сеансов - 5600 руб.</p>
                    </div>
                </li>
                <li className={styles.item}>
                    <img className={styles.image} src={image_3} alt = 'услуга'/>
                    <div className={styles.box}>    
                        <h3 className={styles.subtitle}>Миостимуляция тела</h3>
                        <p className={styles.text}>1 сеанс - 400 руб.</p>
                        <p className={styles.text}>5 сеансов - 2000 руб.</p>
                        <p className={styles.text}>10 сеансов - 3000 руб.</p>
                    </div>
                </li>
                <li className={styles.item}>
                    <img className={styles.image} src={image_4} alt = 'услуга'/>
                    <div className={styles.box}>    
                        <h3 className={styles.subtitle}>Миостимуляция лица</h3>
                        <p className={styles.text}>10 сеансов - 5000 руб.</p>
                    </div>
                </li>
                <li className={styles.item}>
                    <img className={styles.image} src={image_5} alt = 'услуга'/>
                    <div className={styles.box}>    
                        <h3 className={styles.subtitle}>Прессотерапия</h3>
                        <p className={styles.text}>1 сеанс - 450 руб.</p>
                        <p className={styles.text}>5 сеансов - 2000 руб.</p>
                        <p className={styles.text}>10 сеансов - 3000 руб.</p>
                    </div>
                </li>
                <li className={styles.item}>
                    <img className={styles.image} src={image_6} alt = 'услуга'/>
                    <div className={styles.box}>    
                        <h3 className={styles.subtitle}>Вакуумно-баночный массаж</h3>
                        <p className={styles.text}>1 сеанс - 450 руб.</p>
                        <p className={styles.text}>5 сеансов - 2000 руб.</p>
                        <p className={styles.text}>10 сеансов - 3000 руб.</p>
                    </div>
                </li>
                <li className={styles.item}>
                    <img className={styles.image} src={image_7} alt = 'услуга'/>
                    <div className={styles.box}>    
                        <h3 className={styles.subtitle}>Вакуумно-роликовый массаж</h3>
                        <p className={styles.text}>1 сеанс - 600 руб.</p>
                        <p className={styles.text}>5 сеансов - 2750 руб.</p>
                        <p className={styles.text}>10 сеансов - 5000 руб.</p>
                    </div>
                </li>
                <li className={styles.item}>
                    <img className={styles.image} src={image_8} alt = 'услуга'/>
                    <div className={styles.box}>    
                        <h3 className={styles.subtitle}>Ламинирование ресниц</h3>
                        <p className={styles.text}>1500 руб.</p>
                    </div>
                </li>
                <li className={styles.item}>
                    <img className={styles.image} src={image_9} alt = 'услуга'/>
                    <div className={styles.box}>    
                        <h3 className={styles.subtitle}>Оформление и окрашивание бровей</h3>
                        <p className={styles.text}>700 руб.</p>
                    </div>
                </li>
                <li className={styles.item}>
                    <img className={styles.image} src={image_10} alt = 'услуга'/>
                    <div className={styles.box}>    
                        <h3 className={styles.subtitle}>Лазерная эпиляция</h3>
                        <Link className={styles.text} to='/price'>Прайс</Link>
                    </div>
                </li>
            </ul>
        </section>
    )
}