import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function Loader({ onFinish }) {
  const emojis = ["😂", "🤓", "🥭", "🚀"]

  // Automatically hide loader after 2.5s
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish()
    }, 2500)
    return () => clearTimeout(timer)
  }, [onFinish])

  return (
    <div className="loader-wrapper">
      {emojis.map((emoji, i) => (
        <motion.span
          key={i}
          initial={{ y: 0 }}
          animate={{ y: [-10, 0, -10] }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            repeatType: "reverse",
            delay: i * 0.2
          }}
          style={{ fontSize: "2.5rem", margin: "0 10px" }}
        >
          {emoji}
        </motion.span>
      ))}
      <p style={{ marginTop: "1rem" }}>Loading awesomeness... 😎</p>
    </div>
  )
}
