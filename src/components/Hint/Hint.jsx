import React, { useState } from 'react';
import styles from './Hint.module.scss'
import active from '../../image/Hint/active.svg'
import disactive from '../../image/Hint/disactive.svg'
import PropTypes from "prop-types";

export default function Hint ({ title, content, color }) {

    const [isActive, setIsActive] = useState(false);

    const style = color === 'gray' ? `${styles.box} ${styles.box_gray}` : styles.box;

    return (
        <div className={styles.hint}>
            <div className={style}>
                <h3 className={styles.title}>{title}</h3>
                {!isActive ? 
                (<img src={active} alt='плюс'  onClick={() => setIsActive(!isActive)}/>) :
                (<img src={disactive} alt='минус' onClick={() => setIsActive(!isActive)}/>)
                }
            </div>
            {isActive && (<ul className={styles.list}>
                    {content.map((item, index) => {
                        return (
                            <li className={styles.item} key={index}>
                                <p className={styles.text}>{item.service}</p>
                                <p className={styles.text}>{item.price}</p>
                            </li>
                        )
                    })}
            </ul>)}
        </div>
    )
}

Hint.propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    content: PropTypes.array.isRequired,
};