import React from 'react';
import app from './App.module.scss';
import Header from '../Header/Header';


export default function App() {


  return (
    <div className={app.page}>
      <Header/>
    </div>
  );
};