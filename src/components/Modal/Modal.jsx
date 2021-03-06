import React, { useEffect} from 'react';
import { createPortal } from "react-dom";
import modal from './Modal.module.scss'
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import PropTypes from "prop-types";

export default function Modal({children, onClose, title}) {

    useEffect(() => {
        const handleEscClose = (evt) =>{
            if (evt.key ==='Escape')  onClose();
        }
        document.addEventListener('keydown', handleEscClose);
        return () => document.removeEventListener('keydown', handleEscClose);
    }, [onClose]);

    return createPortal (
        <>
        <ModalOverlay onClick={onClose}/>
            <div className={modal.box} >
                {title && (<h2 className={modal.title}>{title}</h2>)}
                <button className={modal.close_icon} type="button" aria-label="закрыть" onClick={onClose}></button>
                {children}
            </div>
        </>,
        document.querySelector("#modals")
    );
};

Modal.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
    title: PropTypes.string,
};