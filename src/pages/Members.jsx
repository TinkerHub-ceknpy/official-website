import React from 'react'
import { motion } from 'framer-motion'
import PixelCard from '../components/PixelCard'
import '../components/PixelCard.css'

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
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -60 }}
      transition={{ duration: 0.5 }}
    >
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Core Team */}
        <h2>Core Team</h2>
        <div className="members-grid">
          {membersList.map((m) => (
            <PixelCard key={m.id} name={m.name} role={m.role} photo={m.photo} />
          ))}
        </div>

        {/* Volunteers */}
        <h2>Volunteers</h2>
        <div className="members-grid">
          {volunteersList.map((v) => (
            <PixelCard key={v.id} name={v.name} role={v.role} photo={v.photo} />
          ))}
        </div>
      </motion.section>
    </motion.div>
  )
}
