import { BrowserRouter,Routes,Route} from "react-router-dom";

import React from 'react';
//import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

import ContactoPage from './pages/ContactoPage';
import CursosPage from './pages/CursosPage';
import IndexPage from './pages/IndexPage';
import NosotrosPage from './pages/NosotrosPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<IndexPage/>}/>
          <Route path="cursos" element={<CursosPage/>}/>
          <Route path="nosotros" element={<NosotrosPage/>}/>
          <Route path="contacto" element={<ContactoPage/>}/>
        </Routes>
      </BrowserRouter>
       
        <Footer/>
    </div>
  );
}

export default App;
