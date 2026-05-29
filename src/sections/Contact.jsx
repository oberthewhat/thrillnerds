import { useState } from 'react'

const contactLinks = [
  { icon: '✉', label: 'john@thrillnerds.com', href: 'mailto:john@thrillnerds.com' },
  { icon: '🌐', label: 'thrillnerds.com', href: 'https://thrillnerds.com' },
  { icon: '▶', label: 'youtube.com/@thrillnerds', href: 'https://www.youtube.com/@thrillnerds' },
  { icon: '📸', label: '@thrillnerds', href: 'https://www.instagram.com/thrillnerds/' },
  { icon: '🎙', label: 'Coaster Chronicles Podcast', href: 'https://open.spotify.com/show/7txZik9TwRL3SRJVKZjrnC' },
]

const projectTypes = [
  'Creator Collaboration',
  'Park / Brand Partnership',
  'Podcast Guest',
  'Website / Writing Work',
  'Event / Meetup',
  'Something Else',
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(new FormData(form)).toString(),
    })
      .then(() => setSubmitted(true))
      .catch(() => alert('Something went wrong — email john@thrillnerds.com directly.'))
  }

  const inputClass = "w-full bg-[#222228] border border-subtle2 rounded-lg px-4 py-3 text-[#F0EBE8] font-sans text-[0.9rem] outline-none focus:border-[rgba(212,48,107,0.55)] transition-colors appearance-none"
  const labelClass = "text-[0.71rem] font-bold tracking-[0.1em] uppercase text-muted mb-1.5 block"

  return (
    <section id="contact" className="bg-[#131316] px-10 py-24">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.1fr] gap-20 items-start">

          {/* Left */}
          <div>
            <p className="text-[0.68rem] font-bold tracking-[0.22em] uppercase text-muted mb-2">Get in Touch</p>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-[0.95] tracking-wide mb-6">
              Let's Work <span className="grad-text">Together</span>
            </h2>
            <p className="text-[0.95rem] text-muted2 leading-[1.8] mb-8">
              Whether you're a park, a creator, a brand in the thrill space, or just someone with an idea —
              reach out. No corporate pitches. Just real conversations about real projects.
            </p>
            <div className="flex flex-col gap-3">
              {contactLinks.map(({ icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-3.5 text-[0.88rem] text-muted2 no-underline hover:text-[#F0EBE8] transition-colors"
                >
                  <div className="w-[34px] h-[34px] bg-[#222228] border border-subtle rounded-lg flex items-center justify-center flex-shrink-0 text-[0.9rem]">
                    {icon}
                  </div>
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div>
            {submitted ? (
              <div className="bg-[#1A1A1F] border border-subtle rounded-2xl p-10 text-center">
                <p className="text-3xl mb-4">🎢</p>
                <h3 className="font-serif-display text-xl mb-2">Message sent!</h3>
                <p className="text-[0.9rem] text-muted2">I'll get back to you soon.</p>
              </div>
            ) : (
              /* data-netlify="true" enables Netlify Forms — free, no backend needed */
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                onSubmit={handleSubmit}
                className="flex flex-col gap-4"
              >
                <input type="hidden" name="form-name" value="contact" />

                <div>
                  <label className={labelClass}>Your Name</label>
                  <input type="text" name="name" required placeholder="First and last" className={inputClass} />
                </div>

                <div>
                  <label className={labelClass}>Email</label>
                  <input type="email" name="email" required placeholder="you@example.com" className={inputClass} />
                </div>

                <div>
                  <label className={labelClass}>What kind of project?</label>
                  <select name="type" required className={inputClass} defaultValue="">
                    <option value="" disabled>Pick a type</option>
                    {projectTypes.map(t => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className={labelClass}>Tell me about it</label>
                  <textarea
                    name="message"
                    required
                    placeholder="What are you thinking? More specific is better."
                    className={`${inputClass} min-h-[120px] resize-y`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 grad-bg text-white font-semibold text-sm rounded-md hover:opacity-85 transition-opacity cursor-pointer border-none"
                >
                  Send It →
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
