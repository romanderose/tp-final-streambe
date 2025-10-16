import './App.css'
import { Routes, Route } from 'react-router-dom'
import PrivateRoute from './routes/PrivateRoute'

import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Cart from './components/cart/Cart'
import ArticleForm from './components/form/articleForm'
import SearchEditArticle from './components/form/SearchEditArticle'

import Home from './pages/Home'
import Tienda from './pages/Tienda'
import Contacto from './pages/Contacto'
import Detalles from './pages/Detalles'
import Dashboard from './pages/Dashboard'
import NotFound from './pages/NotFound'

function App() {

  return (
    <>
      <Header/>
      <Nav/>    
    
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/tienda" element={<Tienda/>}/>
        <Route path="/detalles/:id" element={<Detalles/>}/>
        <Route path="/publicNewArticle" element={<ArticleForm/>}/>
        <Route path="/editArticle" element={<SearchEditArticle/>}/>
        <Route path="/contacto" element={<Contacto/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/dash' element={<PrivateRoute>
          <Dashboard/>
        </PrivateRoute>}/>
      </Routes>

      <Footer/>
    </>
  )
}

export default App
