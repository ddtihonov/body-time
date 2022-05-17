import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';
import vk from '../../image/Footer/vk.svg'
import google from '../../image/Footer/google.svg'
import whatsapp from '../../image/Footer/whatsapp.svg'

export default function Footer () {

    return (
        <footer className={styles.footer}>
            <div className={styles.box}>
                <div className={styles.box_nav}>
                    <nav className={styles.navigation}>
                        <Link className={styles.link} to='/services'>Услуги</Link>
                        <Link className={styles.link} to='/actions'>Акции</Link>
                        <Link className={styles.link} to='/price'>Прайс</Link>
                        <Link className={styles.link} to='/contacts'>Контакты</Link>
                    </nav>
                    <div className={styles.box_social}>
                        <a className={styles.link_social} target='_blank' rel='noopener noreferrer' href='https://vk.com/club46037833'>
                            <img className={styles.social_icon}  src={vk} alt="в контакте"/>
                        </a>
                        <a className={styles.link_social} target='_blank' rel='noopener noreferrer' href='https://vk.com/club46037833'>
                            <img className={styles.social_icon}  src={google} alt='google'/>
                        </a>
                        <a className={styles.link_social} target='_blank' rel='noopener noreferrer' href='https://vk.com/club46037833'>
                            <img className={styles.social_icon}  src={whatsapp} alt='whatsapp'/>
                        </a>
                    </div>
                </div>
                <div className={styles.box_we}>
                    <h3 className={styles.subtitle}>О НАС</h3>
                    <p className={styles.text}>Аппаратная коррекция фигуры без диет, таблеток и сверхусилий. У нас вы найдете новейшие методики со 100% результатом. Используем современное оборудование.</p>
                    <p className={styles.text}>Мы находимся по адресу: г. Новосибирск, ул. Вокзальная магистраль, 16, оф. 205, 2 эт.</p>
                </div>
                <div className={styles.box_we}>
                    <h3 className={styles.subtitle}>ПОДПИСАТЬСЯ НА НОВОСТИ</h3>
                    <p className={styles.text}>Чтобы быть в курсе новых акций и новостей нашего салона подпишитесь на рассылку.</p>
                    <form>
                        <input></input>
                        <button>OK</button>
                    </form>
                </div>
            </div>
            <p className={styles.copyright}>&#169; 2017-2022 ООО BODY TIME. Все права защищены.</p>
        </footer>
    )
}