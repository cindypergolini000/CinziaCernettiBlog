import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { AdminPage } from './features/AdminPage';
import { HomePage } from './features/HomePage';
import {CertificationsPage } from './features/CertificationsPage';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
 import {  DividerStack } from './features/core/Navbar';
debugger;
const App: React.FC = () => {
  return (
    <BrowserRouter>
    <div>
      <DividerStack />

      <Routes>
        <Route path="/home" element={ <HomePage />} />
        <Route path="/settings" element={ <CertificationsPage />} />
        <Route path="/admin" element={ <AdminPage /> } />
        {/* <Route path="*" element={
          <Navigate to="/home" />
        } /> */}
      </Routes>
    </div>
  </BrowserRouter>
  );
};

export default App;

// function App() {
//   return (
//     <div className="App">
//      
//     </div>
//   );
// }

// export default App;
