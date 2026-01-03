import { useEffect, useState } from "react"

export default function Contact() {
  const [profile, setProfile] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
fetch(`${import.meta.env.VITE_API_URL}/api/profile`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok")
        }
        return res.json()
      })
      .then((data) => setProfile(data))
      .catch(() => setError(true))
  }, [])

  if (error) {
    return (
      <section id="contact" className="bg-gray-900 py-20">
        <div className="max-w-5xl mx-auto px-6 text-red-400">
          Failed to load contact information.
        </div>
      </section>
    )
  }

if (!profile && !error) {
  return (
    <section id="contact" className="bg-gray-900 py-20">
      <div className="max-w-5xl mx-auto px-6 space-y-3">
        <div className="h-6 w-32 bg-gray-800 rounded animate-pulse" />
        <div className="h-4 w-64 bg-gray-800 rounded animate-pulse" />
        <div className="h-4 w-72 bg-gray-800 rounded animate-pulse" />
      </div>
    </section>
  )
}

  return (
    <section id="contact" className="bg-gray-900 py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h3 className="text-2xl font-semibold mb-6">
          Contact
        </h3>

        <p className="text-gray-400 mb-4">
          If you would like to discuss internships, projects, or collaboration,
          feel free to reach out.
        </p>

        <div className="space-y-2 text-gray-300">
          <p>
            Email:{" "}
            <a
              href={`mailto:${profile.email}`}
              className="text-blue-400 hover:underline"
            >
              {profile.email}
            </a>
          </p>

          <p>
            GitHub:{" "}
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:underline"
            >
              {profile.github.replace("https://", "")}
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
