import React, { useState, useEffect } from 'react';
import styles from './ModalForm.module.scss'
import { FormValidation } from '../../hooks/FormValidation';
import PropTypes from "prop-types";

export default function ModalForm({onClose}) {

    const [buttonDisabled, setButtonDisabled] = useState(true)
    const handleForm = FormValidation()

    useEffect(() => {
        handleForm.isValid ? setButtonDisabled(false) : setButtonDisabled(true)
    }, [handleForm.isValid])

    function handleSubmit(evt) {
        evt.preventDefault();
        console.log(handleForm.values);
        handleForm.resetForm()
        onClose()
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <input className={`${styles.input} ${handleForm.errors.name && styles.wrong}`}
            type='text' 
            name='name'
            value={handleForm.values.this}
            onChange={handleForm.handleChange} 
            minLength='2' 
            maxLength='30'
            pattern='^[A-Za-zА-Яа-яЁё\s\-]{2,30}$'
            placeholder='Ваше имя'
            required/>
            <span className={styles.input_error}>{handleForm.errors.name}</span>
            <input className={`${styles.input} ${handleForm.errors.phone && styles.wrong}`}
            type='tel' 
            name="phone" 
            value={handleForm.values.this}
            onChange={handleForm.handleChange} 
            maxLength='30'
            pattern="\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}"
            placeholder="+7 (___) ___-__-__"
            required/>
            <span className={styles.input_error}>{handleForm.errors.phone}</span>
        <button className={`${styles.button} ${buttonDisabled && styles.button_disabled}`} type='submit'>Заказать звонок</button>
    </form>
)
}

ModalForm.propTypes = {
    onClose: PropTypes.func.isRequired,
};