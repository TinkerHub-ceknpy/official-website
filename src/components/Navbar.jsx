import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <motion.header
      className="navbar"
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 80 }}
    >
      <div className="nav-inner container">
       <Link to="/" className="logo">
  <img src="/tink.svg" alt="College Community Logo" className="logo-img" />
</Link>

        <button className="nav-toggle" onClick={() => setOpen(!open)}>☰</button>
        <nav className={`nav ${open ? 'open' : ''}`}>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/events">Events</NavLink>
          <NavLink to="/gallery" onClick={() => setOpen(false)}>Gallery</NavLink>
          <NavLink to="/members">Members</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          
        </nav>
      </div>
    </motion.header>
  )
}
