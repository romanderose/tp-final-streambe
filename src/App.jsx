import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer'

import Home from './pages/Home'
import Tienda from './pages/Tienda'
import Contacto from './pages/Contacto'
import Detalles from './pages/Detalles'

function App() {

  return (
    <>
      <Header/>
      <Nav/>    
    
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/tienda" element={<Tienda/>}/>
        <Route path="/detalles/:id" element={<Detalles/>}/>
        <Route path="/contacto" element={<Contacto/>}/>
      </Routes>

      <Footer/>
    </>
  )
}

export default App
