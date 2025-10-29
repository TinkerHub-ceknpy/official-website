import React from "react"
import './ProfileCard.css'

export default function ProfileCard({ name, role, photo }) {
  return (
    <div className="profile-card">
      <div className="profile-card__avatar">
        <img src={photo} alt={name} />
      </div>
      <div className="profile-card__info">
        <h3 className="profile-card__name">{name}</h3>
        <p className="profile-card__role">{role}</p>
      </div>
    </div>
  )
}
