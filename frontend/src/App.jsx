import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import UserHome from './pages/user/UserHome'


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/userhome' element={<UserHome />} />
    <Route path="/" element={<Home />} />
    <Route path='/register' element={<Register />} />
    <Route path='/login' element={<Login />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
