import React from "react";
import styles from './SaleCard.module.scss';
import { v4 as uuidv4 } from 'uuid';


export default function SaleCard({title, text, price, image}) {

    return (
            <li className={styles.box}>
                <img className={styles.image} src={image} alt={title} />
                <div className={styles.box_info}>
                    <h3 className={styles.title}>{title}</h3>
                    {text.map(item =>{
                            const keyUid = uuidv4();
                        return(
                            <p className={styles.text} key={keyUid}>{item}</p>
                        )
                    })}
                    <p className={styles.prise}>{price}</p>
                </div>
            </li>
    )
    
}
