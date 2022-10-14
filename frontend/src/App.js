import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from './components/SignupForm';
import HomePage from './components/HomePage';
import BusinessListings from './components/BusinessListings';
import BusinessItemShow from './components/BusinessItemShow';

function App() {
  return (
      <Routes>
        <Route path="/login" element={<LoginFormPage />} />
        <Route path='/signup' element={<SignupFormPage />} />
        <Route path='/listings' element={<BusinessListings />}/>
        <Route path='/business' element={<BusinessItemShow />}/>
        <Route path='/' element={<HomePage />} />
      </Routes>
  );
}

export default App;
