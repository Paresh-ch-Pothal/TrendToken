import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './Page/Welcome'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './Page/Home'
import ProductPage from './Page/ProductPage'
import About from './Page/About'
import PrivacyPolicy from './Page/PrivacyPolicy'
import CreatePage from './Page/CreatePage'
import Footer from './Page/Footer'
import NewsTicker from './Page/NewsTicker'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
      <Navbar />
      <NewsTicker/>
      
      <Routes>
        {/* Show Welcome only on Home */}
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/productPage/:id" element={<ProductPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/createproduct" element={<CreatePage />} />
        
        {/* Add more routes here */}
        {/* Example: <Route path="/about" element={<About />} /> */}
      </Routes>
      <Footer/>
    </Router>


    </>
  )
}

export default App
