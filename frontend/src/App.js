import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from './components/SignupForm';
import HomePage from './components/HomePage';
import BusinessListings from './components/BusinessListings';
import BusinessItemShow from './components/BusinessItemShow';
import NewReview from './components/NewReview/NewReview';
import EditReview from './components/EditReview/EditReview';
import ProfilePage from './components/ProfilePage';

function App() {
  return (
      <Routes>
        <Route path="/login" element={<LoginFormPage />} />
        <Route path='/signup' element={<SignupFormPage />} />
        <Route path='/profile/:id' element={<ProfilePage />}/>
        <Route path='/listings/:type' element={<BusinessListings />}/>
        <Route path='/business/:id' element={<BusinessItemShow />}/>
        <Route path='/business/:id/new' element={<NewReview />}/>
        <Route path='/business/:id/review/edit/:id' element={<EditReview />} />
        <Route path='/' element={<HomePage />} />
      </Routes>
  );
}

export default App;
