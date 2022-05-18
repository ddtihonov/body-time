import React from 'react';
import styles from './Training.module.scss';
import PageLink from '../PageLink/PageLink';
import WhatsApp from '../../image/WhatsApp.svg';
import TrainingList from '../TrainingList/TrainingList';
import { arrTheory, arrPractice } from '../../utils/data';
import circleGreen from '../../image/Training/Ellipse_green.svg'
import circlePink from '../../image/Training/Ellipse_pink.svg'

export default function Training () {
    return (
        <section className={styles.main}>
            <PageLink
                text={'Обучение'}
            />
            <h2 className={styles.title}>Курс «Аппаратные процедуры по коррекции фигуры» </h2>
            <div className={styles.box}>
                <p className={styles.text}>Если вы хотите изменить свою жизнь, получить новую <span className={styles.text_green}> современную специальность,</span> которая не только будет приносить <span className={styles.text_green}>хороший доход,</span> но и делать людей <span className={styles.text_green}>красивее и счастливее,</span> то Вам к нам!</p>
                <p className={styles.text}>Многие салоны красоты и косметологические центры <span className={styles.text_pink}>нуждаются в специалистах,</span> которые бы умели работать на современных устройствах по моделированию внешности.</p>
            </div>
            <div className={styles.image_box}>
                <h3 className={styles.image_title}>Напишите нам в ватсапп, и мы ответим на все ваши вопросы</h3>
                <div className={styles.image_tel}>
                    <p className={styles.phone_text}>8 (913) 944-93-63</p>
                    <img className={styles.phone_image} src={WhatsApp} alt = 'логотип вацап'/>
                </div>
            </div>
            <h2 className={styles.title}>Программа курса</h2>
            <div className={styles.box_list}>
                <TrainingList
                    title={'Теория (5 занятий)'}
                    list={arrTheory}
                    image={circleGreen}
                    color={'green'}
                />
                <TrainingList
                    title={'Практика (8 занятий)'}
                    list={arrPractice}
                    image={circlePink}
                    color={'pink'}
                />
            </div>
        </section>
    )
}