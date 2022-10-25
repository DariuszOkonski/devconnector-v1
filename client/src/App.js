import { Fragment } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Landing from './components/Landing'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
        <section className="container">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </section>
      </Fragment>
    </BrowserRouter>
  )
}

export default App
