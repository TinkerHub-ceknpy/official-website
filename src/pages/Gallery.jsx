import React from "react"
import { motion } from 'framer-motion'
import CircularGallery from "../components/CircularGallery"
import './Gallery.css'

const galleryImages = [
  {
    src: "/public/assets/volunteers/anakha.jpeg",
    alt: "Volunteer 1"
  },
  {
    src: "/public/assets/volunteers/leksmipriya.jpeg",
    alt: "Volunteer 2"
  },
  {
    src: "/public/assets/volunteers/malavika.jpeg",
    alt: "Volunteer 3"
  },
  {
    src: "/public/assets/volunteers/sourav.png",
    alt: "Volunteer 4"
  },
  {
    src: "/public/events/frnd.jpg",
    alt: "Event 1"
  },
  {
    src: "/public/events/openmic.png",
    alt: "Event 2"
  },
  {
    src: "/public/events/vanakkam.png",
    alt: "Event 3"
  }
];

export default function Gallery() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -60 }}
      transition={{ duration: 0.5 }}
    >
      <div className="gallery-page">
        <h1>Our Gallery</h1>
        <p className="gallery-description">
          Take a visual journey through our memorable moments and activities
        </p>
        <CircularGallery images={galleryImages} />
      </div>
    </motion.div>
  )
}
