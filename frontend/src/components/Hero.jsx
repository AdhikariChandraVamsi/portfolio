import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="pt-32 pb-24 px-6">
      <motion.div
        className="max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
<h2 className="text-4xl md:text-5xl font-bold tracking-tight">
  Software Engineer in Training
</h2>

<p className="mt-6 text-gray-400 max-w-2xl mx-auto leading-relaxed text-lg">
  I design and build backend-focused software systems with strong foundations
  in data structures, APIs, and applied machine learning.
  <br /><br />
  My work emphasizes clarity, scalability, and engineering discipline over
  quick hacks.
</p>
      </motion.div>
    </section>
  )
}
