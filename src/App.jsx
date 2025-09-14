import React, { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Events from "./pages/Events"
import Members from "./pages/Members"
import Contact from "./pages/Contact"
import Gallery from "./pages/Gallery"
import NotFound from "./pages/NotFound"
import Loader from "./components/Loader"   

export default function App() {
  const [loading, setLoading] = useState(true)

  // Loader timeout (simulate funny preloader)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500) // 2.5s
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Loader />   
  }

  return (
    <div className="app">
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/members" element={<Members />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
          
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

