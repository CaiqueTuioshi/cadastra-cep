import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './home/HomePage';
import CepFormPage from './cadastro-cep/CepFormPage';
import CepListPage from './cadastro-cep/CepListPage';

function App() {
  return (
    <BrowserRouter>
      <Route path='/' component={HomePage} />
      <Route path='/ceps' component={CepListPage} exact />
      <Route path='/ceps/:id' component={CepFormPage} exact />
    </BrowserRouter>
  );
}

export default App;
