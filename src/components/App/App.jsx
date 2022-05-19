import React, {useCallback, useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import app from './App.module.scss';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Services from '../Services/Services';
import Training from '../Training/Training';
import Price from '../Price/Price';
import Contacts from '../Contacts/Contacts';
import Footer from '../Footer/Footer';
import Modal from '../Modal/Modal';
import ModalForm from '../ModalForm/ModalForm';
import MenuMobile from '../MenuMobile/MenuMobile';


export default function App() {

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isMenuMobile, setIsMenuMobile] = useState(false);

  const handleClose = useCallback(() => {
    setIsPopupOpen(false)
  }, []);

  const handleOpen = useCallback(() => {
    setIsPopupOpen(true)
  }, []);
  
  const handleCloseMenuMobile = useCallback(() => {
    setIsMenuMobile(false)
  }, []);

  const handleOpenMenuMobile = useCallback(() => {
    setIsMenuMobile(true)
    console.log('fff')
  }, []); 

  return (
    <div className={app.page}>
      <Header
        isOpen={handleOpenMenuMobile}
      />
      <Routes> 
        <Route exact path='/'  element={
        <Main
          isOpen={handleOpen}
        />}/>
        <Route exact path='/services'  element={<Services/>}/>
        <Route exact path='/training'  element={<Training
          isOpen={handleOpen}
        />}/>
        <Route exact path='/price'  element={<Price/>}/>
        <Route exact path='/contacts'  element={<Contacts/>}/>
      </Routes>
      <Footer/>
      {isPopupOpen && <Modal
        onClose={handleClose}
        title={'Обратный звонок'}
      >
        <ModalForm
          onClose={handleClose}
        />
      </Modal>}
      {isMenuMobile && <MenuMobile
        onClose={handleCloseMenuMobile}
      />}
    </div>
  );
};