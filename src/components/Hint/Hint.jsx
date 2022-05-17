import React, { useState } from 'react';
import styles from './Hint.module.scss'
import active from '../../image/Hint/active.svg'
import disactive from '../../image/Hint/disactive.svg'

export default function Hint ({ title, content, color }) {

    const [isActive, setIsActive] = useState(false);

    return (
        <div className={styles.hint}>
            <div className={styles.box}>
                <h3 className={styles.title}>{title}</h3>
                {!isActive ? 
                (<img src={active} alt='плюс'  onClick={() => setIsActive(!isActive)}/>) :
                (<img src={disactive} alt='минус' onClick={() => setIsActive(!isActive)}/>)
                }
            </div>
        {isActive && (<ul className={styles.list}>
                       

                    </ul>)}
        </div>
    )
}

//{content.map(item =>)}