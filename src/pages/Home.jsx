import React from 'react'
import { motion } from 'framer-motion'
import posts from '../data/posts'
import PostCard from '../components/PostCard'
import PixelBlastBackground from '../components/PixelBlastBackground'
import ContainerScrollAnimation from '../components/ContainerScrollAnimation'


export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -60 }}
      transition={{ duration: 0.5 }}
    >
      <PixelBlastBackground />
      {/* Hero Section */}
      <motion.section
        className="hero"
        initial={false}
        animate={false}
      >
        <div className="hero-content">
          <h1>
            Welcome to <span className="highlight">TinkerHub</span>
          </h1>
          <p>Innovating, Learning, and Building Together 🚀</p>
          <div className="hero-buttons">
            <a href="/events" className="btn primary">Explore Events</a>
            <a href="/members" className="btn secondary">Meet the Team</a>
          </div>
        </div>
      </motion.section>

      <ContainerScrollAnimation>
        <h3>Scroll Animation Demo</h3>
        <p>This section animates as you scroll, just like Aceternity's container scroll effect.</p>
      </ContainerScrollAnimation>

      {/* Announcements Section */}
      <section>
        <h2>Announcements</h2>
      </section>
    </motion.div>
  )
}
