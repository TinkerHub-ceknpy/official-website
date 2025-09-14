import React from 'react'
import { motion } from 'framer-motion'

// Events list with posters
const events = [
  { 
    id: 1, 
    title: 'VANAKKAM CHELLOM', 
    date: '2025-26', 
    venue: 'ONLINE',
    poster: '/events/vanakkam.png'
  },
  { 
    id: 2, 
    title: 'O-PENN MIC', 
    date: '2025-26', 
    venue: 'FOSS LAB',
    poster: '/events/openmic.png'
  },
]

export default function Events() {
  return (
    <motion.section
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2>Upcoming Events</h2>
      <ul className="events-list">
        {events.map((e, i) => (
          <motion.li
            key={e.id}
            className="event-item"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.2, type: "spring", stiffness: 120 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.img 
              src={e.poster} 
              alt={e.title} 
              className="event-poster"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2 + 0.1, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.08 }}
            />
            <h3>{e.title}</h3>
            <p>{e.date} • {e.venue}</p>
          </motion.li>
        ))}
      </ul>
    </motion.section>
  )
}
