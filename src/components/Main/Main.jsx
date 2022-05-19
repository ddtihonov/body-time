import React from 'react';
import main from './main.module.scss'
import InitialPage from '../InitialPage/InitialPage';
import Privilegio from '../Privilegio/Privilegio';
import Help from '../Help/Help';
import EventSale from '../EventSale/EventSale';
import PropTypes from "prop-types";

export default function Main({isOpen}) {

    return (
    <section className={main.main}>
        <InitialPage
            isOpen={isOpen}
        />
        <Privilegio/>
        <Help/>
        <EventSale/>
    </section>
    
);
}

Main.propTypes = {
    isOpen: PropTypes.func.isRequired,
};