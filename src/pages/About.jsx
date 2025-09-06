import React from 'react'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div>
      <motion.section
        className="hero"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>About us</h1>

        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          TinkerHub in 2025 is open to all — not just programmers.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          We welcome and support designers, storytellers, researchers,
          entrepreneurs, artists, farmers, and engineers — anyone curious and
          committed to learning. We believe that real-world problems require
          collaborative, cross-disciplinary thinking, so our programs are
          intentionally designed to bring diverse minds together.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          Great mentorship doesn’t come from one-way lectures. We are building a
          mentor network of practitioners — people who code, design, make, and
          teach alongside learners. These are professionals and peers who are
          willing to listen, share real stories, and help debug both projects
          and thought processes.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          At TinkerHub, we celebrate the spirit of hands-on learning and
          cognitive flexibility. Bringing our coolest thoughts to life unlocks a
          better us, doesn't it? <br /><br />
          We have been using the term 'maker' for a long time at TinkerHub. By
          'maker', we refer to TinkerHub volunteers and members who possess a
          unique blend of creativity, problem-solving abilities, commitment to
          continuous learning and wants to be part of TinkerHub movement to make
          a change.
          <br /><br />
          🧑‍🔧 Makers are the innovators and creators who utilize their diverse
          skills and knowledge across various disciplines to build, create, and
          improve the world around them.
          <br /><br />
          Makers take an interdisciplinary approach, combining skills to achieve
          their goals. We believe anyone can be a maker – it's about the
          mindset, passion for learning, and drive to create & innovate. By
          nurturing these qualities, we aim to empower the next generation of
          makers to build a better future for themselves and the world around
          them.
          <br /><br />
          In TinkerHub context, we primarily focus on building with the help of
          technology and its adjacents. Given the same, we are not limited to
          coding.
        </motion.p>
      </motion.section>
    </div>

)
}