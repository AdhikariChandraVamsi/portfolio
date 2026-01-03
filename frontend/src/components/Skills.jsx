import MotionSection from "./MotionSection"

export default function Skills() {
  return (
    <section id="skills" className="bg-gray-900 py-20">
      <div className="max-w-5xl mx-auto px-6">
        <MotionSection>
          <h3 className="text-2xl font-semibold mb-8">Technical Skills</h3>

          <div className="grid md:grid-cols-2 gap-6 text-gray-400">
            <ul className="space-y-2">
              <li><span className="text-gray-200">Languages:</span> Java, Python, C, JavaScript</li>
              <li><span className="text-gray-200">Core CS:</span> Data Structures, Algorithms, OOP</li>
              <li><span className="text-gray-200">Backend:</span> REST APIs, FastAPI, Flask</li>
            </ul>

            <ul className="space-y-2">
              <li><span className="text-gray-200">Databases:</span> MySQL, PostgreSQL, SQLite</li>
              <li><span className="text-gray-200">ML & AI:</span> Machine Learning, NLP</li>
              <li><span className="text-gray-200">Tools:</span> Git, GitHub, Postman, Bash</li>
            </ul>
          </div>
        </MotionSection>
      </div>
    </section>
  )
}
