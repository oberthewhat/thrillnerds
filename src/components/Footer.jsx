const links = [
  { href: 'https://www.youtube.com/@thrillnerds', label: 'YouTube' },
  { href: 'https://www.instagram.com/thrillnerds/', label: 'Instagram' },
  { href: 'https://open.spotify.com/show/7txZik9TwRL3SRJVKZjrnC', label: 'Podcast' },
  { href: 'mailto:john@thrillnerds.com', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0C0C0E] border-t border-subtle px-10 py-8 flex items-center justify-between flex-wrap gap-4">
      <div className="flex items-center gap-3">
        <img src="/images/logo03.png" alt="ThrillNerds" className="h-6 w-auto" />
        <span className="text-xs text-muted">ThrillNerds · Re.Est. 2021 · Austin, Texas</span>
      </div>
      <div className="flex gap-6">
        {links.map(({ href, label }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="text-xs text-muted hover:text-[#F0EBE8] transition-colors no-underline"
          >
            {label}
          </a>
        ))}
      </div>
    </footer>
  )
}
