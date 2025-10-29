import React, { useState, useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import { Routes, Route, useLocation } from "react-router-dom"
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
import DotGrid from "./components/DotGrid"

export default function App() {
  const [loading, setLoading] = useState(true)
  const location = useLocation()

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
      <DotGrid />
      <Navbar />
      <main className="container">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/members" element={<Members />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}

