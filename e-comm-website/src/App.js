import React from 'react';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import TopHeader from './components/TopHeader';

function App() {
  return (
    <div>
    <TopHeader/>
     <Header/>
     <BrowserRouter>
       <Routes>
         <Route path='/' element={<Home/>} />
       </Routes>
      </BrowserRouter>
     <Footer/>
    </div>
    );
}

export default App;
