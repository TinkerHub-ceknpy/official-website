import React, { useState } from 'react'
import { motion } from 'framer-motion'

// Add photo URLs (replace with your own images or /public folder paths)
const membersList = [
  { id: 1, name: "Sourav S", role: 'Web Lead', photo: '/public/sou.png' },
  { id: 2, name: 'Rahul Verma', role: 'Treasurer', photo: '/images/rahul.jpg' },
  { id: 3, name: 'Sneha Nair', role: 'Event Lead', photo: '/images/sneha.jpg' },
]

export default function Members() {
  const [q, setQ] = useState('')
  const filtered = membersList.filter((m) =>
    m.name.toLowerCase().includes(q.toLowerCase())
  )

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2>Members</h2>

      <input
        className="search"
        placeholder="Search members..."
        value={q}
        onChange={(e) => setQ(e.target.value)}
      />

      <div className="members-grid">
        {filtered.map((m, i) => (
          <motion.div
            key={m.id}
            className="member-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ scale: 1.05 }}
          >
            <img src={m.photo} alt={m.name} className="member-photo" />
            <h3>{m.name}</h3>
            <p className="muted">{m.role}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
