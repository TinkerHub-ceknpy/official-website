import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Loader from "../components/Loader"


export default function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -60 }}
      transition={{ duration: 0.5 }}
    >
      <div className="notfound">
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          😹 404 Error!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Looks like this page ran away chasing a mouse 🐭
        </motion.p>

        <motion.div
          className="cat"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
        >
          🐱
        </motion.div>

        <Link to="/" className="btn">
          Go Home 🏠
        </Link>
      </div>
    </motion.div>
  );
}
