import React from 'react'
import { motion } from 'framer-motion'

// Example images (place them in public/gallery/)
const images = [
  '/frnd.jpg',
  '/gallery/2.jpg',
  '/gallery/3.jpg',
  '/gallery/4.jpg',
  '/gallery/5.jpg',
]

export default function Gallery() {
  return (
    <motion.section
      className="gallery"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2>Gallery</h2>
      <div className="gallery-grid">
        {images.map((src, i) => (
          <motion.div
            key={i}
            className="gallery-item"
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            whileHover={{ scale: 1.05 }}
          >
            <img src={src} alt={`Gallery ${i + 1}`} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
