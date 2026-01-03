import { motion } from "framer-motion"

export default function ProjectCard({ title, description, stack }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="border border-gray-800 rounded-xl p-6 hover:border-gray-600"
    >
      <h4 className="text-lg font-semibold mb-2">
        {title}
      </h4>

      <p className="text-gray-400 text-sm leading-relaxed mb-4">
        {description}
      </p>

      <p className="text-xs text-gray-500">
        <span className="text-gray-300">Tech:</span> {stack}
      </p>
    </motion.div>
  )
}
