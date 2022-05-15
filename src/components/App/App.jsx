import React from 'react';
import app from './App.module.scss';
import Header from '../Header/Header';
import Main from '../Main/Main';
import InitialPage from '../InitialPage/InitialPage';


export default function App() {


  return (
    <div className={app.page}>
      <Header/>
      <Main>
      </Main>
    </div>
  );
};