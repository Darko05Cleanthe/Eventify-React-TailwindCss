import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import HeaderUser from './components/HeaderUser'


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/headerUser' element={<HeaderUser />} />
    <Route path="/" element={<Home />} />
    <Route path='/register' element={<Register />} />
    <Route path='/login' element={<Login />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
