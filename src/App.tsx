import React from 'react';
import { Register } from './pages/register/register';
import { Login } from './pages/login/login';
import { Acasa } from './pages/acasa/acasa';
import { ProfileMain } from './pages/profileMain/profileMain';
import { FilmeMain } from './pages/filmeMain/filmeMain';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<Acasa />}/>
        <Route path = "/register" element = {<Register />}/>
        <Route path = "/login" element = {<Login />}/>
        <Route path = "/filme" element = {<FilmeMain />}/>
        <Route path = "/profile" element = {<ProfileMain />}/>
      </Routes>
    </Router>
  );
}
