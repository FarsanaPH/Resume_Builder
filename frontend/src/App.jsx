import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './Pages/LandingPage'
import HistoryPage from './Pages/HistoryPage'
import ResumeGenerator from './Pages/ResumeGenerator'
import PageNotFound from './Pages/PageNotFound'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Form from './Pages/Form'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/resumeGenerator" element={<ResumeGenerator />} />
        <Route path="/form" element={<Form/>}/>
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
