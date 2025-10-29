import React from "react"
import './PixelCard.css'

export default function PixelCard({ name, role, photo }) {
  return (
    <div className="pixel-card">
      <div className="pixel-card__avatar">
        <img src={photo} alt={name} />
      </div>
      <div className="pixel-card__info">
        <h3 className="pixel-card__name">{name}</h3>
        <p className="pixel-card__role">{role}</p>
      </div>
    </div>
  )
}
