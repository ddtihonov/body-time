import React from "react";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './PageLink.module.scss'

export default function PageLink ({text}) {
    return (
        <section className={styles.main}>
            <Link className={styles.link} to="/">Главная</Link>
                <p className={styles.line}>/</p>
                <p className={styles.text}>{text}</p>
        </section>
    )
}

PageLink.propTypes = {
    text: PropTypes.string.isRequired,
};