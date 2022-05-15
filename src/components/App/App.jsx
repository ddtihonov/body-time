import React from 'react';
import { Route, Routes } from 'react-router-dom';
import app from './App.module.scss';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Services from '../Services/Services';
import Actions from '../Actions/Actions';
import Price from '../Price/Price';
import Contacts from '../Contacts/Contacts';


export default function App() {


  return (
    <div className={app.page}>
      <Header/>
      <Routes> 
        <Route exact path='/'  element={<Main/>}/>
        <Route exact path='/services'  element={<Services/>}/>
        <Route exact path='/actions'  element={<Actions/>}/>
        <Route exact path='/price'  element={<Price/>}/>
        <Route exact path='/contacts'  element={<Contacts/>}/>
      </Routes>
    </div>
  );
};