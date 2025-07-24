import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DiagonalBackground from './components/DiagonalBackground'
import Header from './components/Header'
import Footer from './components/Footer'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home'
import AgendaPage from './pages/Agenda'
import ExpositoresPage from './pages/Expositores'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='/agenda' element={<AgendaPage />} />
        <Route path='/expositores' element={<ExpositoresPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
