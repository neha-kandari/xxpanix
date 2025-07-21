import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import PerformanceInit from './components/PerformanceInit'
import ScrollToTop from './components/ScrollToTop'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Signup from './pages/Signup'

function App() {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <div className="antialiased bg-black min-h-screen">
      <PerformanceInit />
      <ScrollToTop />
      {!isAuthPage && <Header />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>
      {!isAuthPage && <Footer />}
    </div>
  )
}

export default App 