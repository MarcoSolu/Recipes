import React from 'react';
import './App.css';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Details from './pages/Details';
 
import { AppContextProvider } from './context'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <AppContextProvider>
      <Router>
      <Navbar />
      
        <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/details/:id' element={<Details />} />
        </Routes>
        
      </Router>
    </AppContextProvider>
      
  );
}

export default App;
