import React from "react";
import { Link } from 'react-router-dom';
import styles from './MenuMobile.module.scss'
import WhatsApp from '../../image/WhatsApp.svg';
import tel from '../../image/tel.svg';
import logo from '../../image/logo.svg';
import PropTypes from 'prop-types';

export default function MenuMobile ({onClose}) {

    return (
        <section className={styles.main}>
            <button className={styles.button} type='button' onClick={onClose}/>
            <img className={styles.logo} src={logo} alt = 'логотип'/>
            <nav className={styles.nav}>
                <Link className={styles.link} to='/services'>Услуги</Link>
                <Link className={styles.link} to='/training'>Обучение</Link>
                <Link className={styles.link} to='/price'>Прайс</Link>
                <Link className={styles.link} to='/contacts'>Контакты</Link>
            </nav>
            <div className={styles.phone_box}>
                <img className={styles.image} src={tel} alt = 'трубка телефона'/>
                <img className={styles.image} src={WhatsApp} alt = 'логотип вацап'/>
                <p className={styles.phone_text}>8 (913) 944-93-63</p>
            </div>
        </section>
    )
}

MenuMobile.propTypes = {
    onClose: PropTypes.func.isRequired,
};