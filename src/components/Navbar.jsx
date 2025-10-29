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
        <nav className="tin-nav">
          <NavLink to="/" end className="tin-nav__card">Home</NavLink>
          <NavLink to="/about" className="tin-nav__card">About</NavLink>
          <NavLink to="/events" className="tin-nav__card">Events</NavLink>
          <NavLink to="/gallery" className="tin-nav__card">Gallery</NavLink>
          <NavLink to="/members" className="tin-nav__card">Members</NavLink>
          <NavLink to="/contact" className="tin-nav__card">Contact</NavLink>
        </nav>
      </div>
    </motion.header>
  )
}
