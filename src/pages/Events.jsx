import React from 'react'
import { motion } from 'framer-motion'


const events = [
{ id: 1, title: 'Freshers Meetup', date: '2025-09-10', venue: 'Auditorium' },
{ id: 2, title: 'Coding Marathon', date: '2025-09-17', venue: 'Lab 3' },
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
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ delay: i * 0.1 }}
>
<h3>{e.title}</h3>
<p>{e.date} • {e.venue}</p>
</motion.li>
))}
</ul>
</motion.section>
)
}