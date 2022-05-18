import React from 'react';
import { Link } from 'react-router-dom';
import header from './header.module.scss';
import logo from '../../image/logo.svg';
import WhatsApp from '../../image/WhatsApp.svg';
import tel from '../../image/tel.svg';
import location from '../../image/location.svg';

export default function Header() {
    return (
      <header className={header.header}>
        <div className={header.box}>
          <div className={header.menu__icon}>
              <span></span>
          </div>
          <Link  to="/">
            <img className={header.logo} src={logo} alt = 'логотип'/>
          </Link>
          <nav className={header.nav}>
            <Link className={header.link} to='/services'>Услуги</Link>
            <Link className={header.link} to='/training'>Обучение</Link>
            <Link className={header.link} to='/price'>Прайс</Link>
            <Link className={header.link} to='/contacts'>Контакты</Link>
          </nav>
          <div className={header.phone_box}>
            <img className={header.image} src={tel} alt = 'трубка телефона'/>
            <img className={header.image} src={WhatsApp} alt = 'логотип вацап'/>
            <p className={header.phone_text}>8 (913) 944-93-63</p>
          </div>
          <div className={header.location_box}>
            <img className={header.image} src={location} alt = 'логотип локация'/>
            <p className={header.location_text}>г. Новосибирск, ул. Вокзальная магистраль,16, оф. 205, 2 эт.</p>
          </div>
          <Link className={header.link_price} to='price'>Прайс</Link>
        </div>
    
      </header>
    );
  };