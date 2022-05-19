import React from "react";
import styles from './EventSale.module.scss'
import SaleCard from '../SaleCard/SaleCard';
import {arrEventSale} from '../../utils/data'

export default function EventSale() {

    const arr = arrEventSale[4]

    return (
        <section className={styles.main}>
            <h2 className={styles.title}>Акции</h2>
            <SaleCard
                title={arr.title}
                text={arr.text}
                price={arr.price}
                image={arr.image.image_5}
            />
            <div className={styles.box}>
                <button className={styles.button_left}></button>
                <button className={styles.button_right}></button>
            </div>

        </section>
    )
    
}