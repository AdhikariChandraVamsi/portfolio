import ProjectCard from "./ProjectCard"

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-5xl mx-auto px-6 py-20"
    >
      <h3 className="text-2xl font-semibold mb-10">
        Projects
      </h3>

      <div className="grid md:grid-cols-2 gap-8">
        <ProjectCard
          title="Campus Knowledge Engine"
description="Designed a retrieval-augmented system to answer campus-specific academic queries by indexing internal documents and enabling semantic search over them. Focused on modular backend design and explainable data flow."
          stack="Python, FastAPI, RAG, Vector Search"
        />

        <ProjectCard
          title="GenAI-Based News Narrative Framing Analysis"
description="Built an experimental NLP pipeline to analyze narrative framing across news sources without relying on labeled bias datasets, using latent representation learning for interpretability."
          stack="Python, NLP, Variational Autoencoders"
        />

        <ProjectCard
          title="E-commerce Search & Recommendation Engine"
description="Implemented a prefix-based search engine using Trie data structures and a ranking mechanism inspired by collaborative filtering with time-decay scoring."
          stack="Python, Data Structures, Algorithms"
        />

        <ProjectCard
          title="Library Management System"
description="Developed a Java-based CLI application applying object-oriented principles, in-memory data management, and robust exception handling."
          stack="Java, OOP, Collections"
        />
      </div>
    </section>
  )
}
