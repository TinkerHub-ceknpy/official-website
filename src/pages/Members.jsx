import React from 'react'
import { motion } from 'framer-motion'

// Core Team
const membersList = [
  { id: 1, name: "Abhijith.B", role: 'Campus Lead', photo: '/assets/core/abhijith.png' },
  { id: 2, name: 'Sumayya Sainu', role: 'WIT Lead', photo: '/assets/core/sumayya.png' },
  { id: 3, name: 'R.Sreehari', role: 'Learning Co-ordinator', photo: '/assets/core/sreehari.png' },
  { id: 4, name: 'Pranav', role: 'Outreach Lead', photo: '/assets/core/pranav.jpeg' },
]

// Volunteers
const volunteersList = [
  { id: 1, name: "Lekshmipriya.V.s", role: 'Design Lead', photo: '/assets/volunteers/leksmipriya.jpeg' },
  { id: 2, name: "Sourav.S", role: 'Web Lead', photo: '/assets/volunteers/sourav.png' },
  { id: 3, name: "Malavika.R", role: 'Event Lead', photo: '/assets/volunteers/malavika.jpeg' },
  { id: 3, name: "Anakha Reghunath", role: 'Content Lead', photo: '/assets/volunteers/anakha.jpeg' },
]

export default function Members() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Core Team */}
      <h2>Core Team</h2>
      <div className="members-grid">
        {membersList.map((m, i) => (
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

      {/* Volunteers */}
      <h2>Volunteers</h2>
      <div className="members-grid">
        {volunteersList.map((v, i) => (
          <motion.div
            key={v.id}
            className="member-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ scale: 1.05 }}
          >
            <img src={v.photo} alt={v.name} className="member-photo" />
            <h3>{v.name}</h3>
            <p className="muted">{v.role}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
