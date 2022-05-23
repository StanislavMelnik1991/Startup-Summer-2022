import React from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { PageWrapper } from './components/pageWrapper/PageWrapper';




export const App = () => {
  return (
   <div className="App">
      <Header />
      <PageWrapper />
    </div>
  );
}


