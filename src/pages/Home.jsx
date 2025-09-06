import React from 'react'
import { motion } from 'framer-motion'
import posts from '../data/posts'
import PostCard from '../components/PostCard'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <motion.section
        className="hero"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
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

      {/* Announcements Section */}
      <section>
        <h2>Announcements</h2>
        <div className="grid">
          {posts.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <PostCard post={p} />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
