import React, {useEffect, useState} from "react"
import styles from './EventSale.module.scss'
import SaleCard from '../SaleCard/SaleCard'
import {arrEventSale} from '../../utils/data'
import { v4 as uuidv4 } from 'uuid'


export default function EventSale() {

const [activeIndex, setActiveIndex] = useState(0)
const [paused, setPaused] = useState(false)

useEffect(() => {
        const interval = setInterval (() => {
            if (!paused){
            updateIndex(activeIndex + 1)
            }
        }, 3000) 
return () => {
    if (interval) {
        clearInterval(interval)
    }
}
})


const updateIndex = (newIndex) => {
    if (newIndex < 0) {
        newIndex = 4
    } else if (newIndex > 4) {
        newIndex = 0
    }

    setActiveIndex(newIndex)
}




    return (
        <section 
        className={styles.main}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        >
            <h2 className={styles.title}>Акции</h2>
            <div className={styles.slides_box}>
                <ul className={styles.slides} style ={{transform: `translateX(-${activeIndex * 100}%)`}}>
                {arrEventSale.map((item, index) => {
                    const keyUid = uuidv4();
                    return (
                        <SaleCard
                            title={item.title}
                            text={item.text}
                            price={item.price}
                            image={item.image}
                            key={keyUid}
                        />
                    )
                    })}
                </ul>
            </div>
            <div className={styles.box}>
                <button className={styles.button_left} type="button" onClick={() => updateIndex(activeIndex - 1)}/>
                <ul className={styles.list}>
                    {arrEventSale.map((item, index) => {
                        const keyUid = uuidv4();
                        return (
                            <li className={styles.item} key={keyUid}>
                                <button className={`${activeIndex === index ? styles.button_active : styles.button}`} type="button" onClick={() => updateIndex(index)}/>
                            </li>
                        )
                    })}
                </ul>
                <button className={styles.button_right} type="button" onClick={() => updateIndex(activeIndex + 1)}/>
            </div>
        </section>
    )
    
}