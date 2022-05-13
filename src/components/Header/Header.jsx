import React from 'react';
import header from './header.module.scss';
import logo from '../../image/logo.svg'
import WhatsApp from '../../image/WhatsApp.svg'
import tel from '../../image/tel.svg'
import location from '../../image/location.svg'

export default function Header() {
    return (
      <header className={header.header}>
        <div className={header.box}>
          <div className={header.menu__icon}>
              <span></span>
          </div>
          <img className={header.logo} src={logo} alt = 'логотип'/>
          <nav className={header.nav}>
            <a className={header.link} href='#'>Услуги</a>
            <a className={header.link} href='#'>Акции</a>
            <a className={header.link} href='#'>Прайс</a>
            <a className={header.link} href='#'>Контакты</a>
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
          <a className={header.link_price} href='#'>Прайс</a>
        </div>
    
      </header>
    );
  };