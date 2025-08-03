import Header from './components/Header'
import Footer from './components/Footer'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home'
import AgendaPage from './pages/Agenda'
import ExpositoresPage from './pages/Expositores'
import AcercaDePage from './pages/AcercaDe'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/acerca-de-nosotros' element={<AcercaDePage />} />
        <Route path='/agenda' element={<AgendaPage />} />
        <Route path='/expositores' element={<ExpositoresPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
