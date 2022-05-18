import React from "react";
import styles from './TrainingList.module.scss'
import PropTypes from "prop-types";

export default function TrainingList ({title, color, list, image}) {

    const style = color === 'green' ? styles.main : `${styles.main} ${styles.main_gray}`;

    return (
        <section className={style}>
            <h3 className={styles.title}>{title}</h3>
            <ul className={styles.list}>
                {list.map((item, index) => {
                    return (
                        <li className={styles.item} key={index}>
                            <img className={styles.image} src={image} alt='круг'/>
                            <p className={styles.text}>{item}</p>
                        </li>
                    )
                } )}
            </ul>
        </section>
    )
}

TrainingList.propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    list: PropTypes.array.isRequired,
};