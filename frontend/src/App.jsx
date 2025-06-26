import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import UserHome from './pages/user/UserHome'
import UserProfile from './pages/user/UserProfile'
import Password from './pages/user/Password'
import ChangeEmail from './pages/user/ChangeEmail'
import AccountInfo from './pages/user/AccountInfo'


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/userprofile' element={<UserProfile />}>
      <Route index element={<AccountInfo/>} />
      <Route path='account-info' element={<AccountInfo/>} />
      <Route path='change-email' element={<ChangeEmail/>} />
      <Route path='password' element={<Password/>} />
    </Route>
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
