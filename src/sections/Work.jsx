const items = [
  {
    icon: '▶',
    title: 'YouTube',
    desc: "Park walkthroughs, ride reviews, and evidence-based speculation. Logic does the heavy lifting — no movie-trailer narration needed.",
    label: 'Watch on YouTube',
    href: 'https://www.youtube.com/@thrillnerds',
  },
  {
    icon: '🎙',
    title: 'Podcast',
    desc: "Coaster Chronicles — monthly episodes on the Coaster Cuzzies channel with @realswizey. Conversations that go where a video can't.",
    label: 'Listen Now',
    href: 'https://open.spotify.com/show/7txZik9TwRL3SRJVKZjrnC',
  },
  {
    icon: '📸',
    title: 'Instagram',
    desc: "Ride photos and park visits. Texas parks are home base — everywhere else shows up when the road trip calls.",
    label: 'Follow @thrillnerds',
    href: 'https://www.instagram.com/thrillnerds/',
  },
  {
    icon: '🌐',
    title: 'ThrillNerds.com',
    desc: "The home base. News, coverage, and coaster content going back further than most people remember.",
    label: 'Visit Site',
    href: 'https://thrillnerds.com',
  },
  {
    icon: '✍️',
    title: 'Park & Web Writing',
    desc: "Writing and editorial work for amusement park–focused publications. Deep knowledge, plain language, no fluff.",
    label: 'Get in Touch',
    href: '#contact',
  },
  {
    icon: '🤝',
    title: 'Collaborations',
    desc: "Creator-to-creator work, park partnerships, joint projects. Better together than either of us would be alone.",
    label: "Let's Talk",
    href: '#contact',
  },
]

export default function Work() {
  return (
    <section id="work" className="bg-[#0C0C0E] px-10 py-24">
      <div className="max-w-[1100px] mx-auto">

        <p className="text-[0.68rem] font-bold tracking-[0.22em] uppercase text-muted mb-2">Platforms &amp; Projects</p>
        <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-[0.95] tracking-wide mb-4">
          Everything I <span className="grad-text">Create</span>
        </h2>
        <p className="text-[0.97rem] text-muted2 max-w-[500px] mb-12 leading-[1.75]">
          From long-form video to quick Instagram moments — here's where the work lives.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map(({ icon, title, desc, label, href }) => (
            <a
              key={title}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group relative bg-[#1A1A1F] border border-subtle rounded-xl p-7 no-underline text-inherit overflow-hidden transition-all hover:border-white/[0.18] hover:-translate-y-1"
            >
              {/* Gradient hover overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-[0.04] transition-opacity"
                style={{ background: 'var(--grad)' }}
              />

              <div className="relative z-10">
                <div className="w-10 h-10 grad-bg rounded-[9px] flex items-center justify-center text-base mb-4">
                  {icon}
                </div>
                <h3 className="text-[0.97rem] font-semibold mb-2">{title}</h3>
                <p className="text-[0.84rem] text-muted2 leading-[1.65] mb-4">{desc}</p>
                <span className="inline-flex items-center gap-1.5 text-[0.8rem] font-semibold text-muted group-hover:text-[#F0EBE8] transition-all group-hover:gap-2.5">
                  {label} <span>→</span>
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}
