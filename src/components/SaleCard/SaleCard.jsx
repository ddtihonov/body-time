import React from "react";
import styles from './SaleCard.module.scss'


export default function SaleCard({title, text, price, image}) {

    return (
            <div className={styles.box}>
                <img className={styles.image} src={image} alt={title} />
                <div className={styles.box_info}>
                    <h3 className={styles.title}>{title}</h3>
                    {text.map((item, index) =>{
                        return(
                            <p className={styles.text} key={index}>{item}</p>
                        )
                    })}
                    <p className={styles.prise}>{price}</p>
                </div>
            </div>
    )
    
}
