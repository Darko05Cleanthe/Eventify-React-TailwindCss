import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/header-preview" element={<Header />} />
    <Route path="/footer-preview" element={<Footer />} />

    <Route path='/' element={<Navigate to='/login' replace />} />
    <Route path='/register' element={<Register />} />
    <Route path='/login' element={<Login />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
