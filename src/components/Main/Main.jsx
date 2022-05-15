import React from 'react';
import main from './main.module.scss'
import InitialPage from '../InitialPage/InitialPage';
import Privilegio from '../Privilegio/Privilegio';
import Help from '../Help/Help';

export default function Main() {

    return (
    <section className={main.main}>
        <InitialPage/>
        <Privilegio/>
        <Help/>
    </section>
    
);
}