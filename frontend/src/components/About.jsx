import MotionSection from "./MotionSection"

export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-20">
      <MotionSection>
        <h3 className="text-2xl font-semibold mb-6">About Me</h3>

<p className="text-gray-400 leading-relaxed text-base">
  I am a Computer Science undergraduate at Amrita Vishwa Vidyapeetham with a
  strong interest in backend systems and applied AI.
  <br /><br />
  I approach software development from first principles — understanding the
  problem deeply, selecting appropriate data structures, and designing systems
  that remain maintainable as they scale.
  <br /><br />
  I value clean abstractions, version-controlled workflows, and code that is
  easy to reason about long after it is written.
</p>
      </MotionSection>
    </section>
  )
}
