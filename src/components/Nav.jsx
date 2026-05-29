import { useState, useEffect } from 'react'

const links = [
  { href: '#instagram', label: 'Photos' },
  { href: '#latest', label: 'Latest' },
  { href: '#podcast', label: 'Podcast' },
  { href: '#work', label: 'Work' },
  { href: '#contact', label: 'Collab' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-3.5 transition-all duration-300 ${
        scrolled ? 'bg-[rgba(12,12,14,0.95)]' : 'bg-[rgba(12,12,14,0.8)]'
      } backdrop-blur-xl border-b border-subtle`}
    >
      {/* Logo */}
      <a href="#home" className="flex items-center gap-2.5 no-underline">
        <img src="/images/logo03.png" alt="ThrillNerds" className="h-8 w-auto" />
        <span className="font-display text-2xl tracking-widest grad-text">ThrillNerds</span>
      </a>

      {/* Desktop links */}
      <ul className="hidden md:flex items-center gap-8 list-none">
        {links.map(({ href, label }) => (
          <li key={href}>
            <a
              href={href}
              className="text-sm font-medium tracking-wide text-muted hover:text-[#F0EBE8] transition-colors no-underline"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 bg-transparent border-none cursor-pointer p-1"
        onClick={() => setOpen(!open)}
        aria-label="Menu"
      >
        <span className={`block w-5 h-px bg-[var(--muted2)] transition-all ${open ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`block w-5 h-px bg-[var(--muted2)] transition-all ${open ? 'opacity-0' : ''}`} />
        <span className={`block w-5 h-px bg-[var(--muted2)] transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {/* Mobile menu */}
      {open && (
        <ul className="absolute top-full left-0 right-0 bg-[rgba(12,12,14,0.97)] backdrop-blur-xl border-b border-subtle flex flex-col gap-5 px-8 py-6 list-none md:hidden">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-muted2 hover:text-[#F0EBE8] transition-colors no-underline"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
