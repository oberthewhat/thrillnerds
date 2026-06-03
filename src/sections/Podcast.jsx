const SPOTIFY_SHOW_ID = '7txZik9TwRL3SRJVKZjrnC'

// UPDATE: once you upload the Coaster Chronicles logo, add it to /public/images/
// and set this to '/images/coaster-chronicles-logo.png'
const CC_LOGO = '/images/coaster-chronicles-logo.png'

const platforms = [
  { label: '🎵 Spotify', href: `https://open.spotify.com/show/${SPOTIFY_SHOW_ID}` },
  { label: '🎙 Apple Podcasts', href: 'https://podcasts.apple.com/us/podcast/coaster-cuzzies/id1501366983' },
]

export default function Podcast() {
  return (
    <section id="podcast" className="bg-[#0C0C0E] px-10 py-24">
      <div className="max-w-[1100px] mx-auto">

        <p className="text-[0.68rem] font-bold tracking-[0.22em] uppercase text-muted mb-2">Audio</p>
        <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-[0.95] tracking-wide mb-12">
          The <span className="grad-text">Podcast</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-14 items-center">

          {/* Left — logo/art + info */}
          <div>
            {/* Logo if uploaded, else gradient art card */}
            {CC_LOGO ? (
              <div className="rounded-2xl overflow-hidden mb-7 aspect-square">
                <img src={CC_LOGO} alt="Coaster Chronicles" className="w-full h-full object-cover" />
              </div>
            ) : (
              <div className="relative grad-bg rounded-2xl aspect-video flex items-center justify-center overflow-hidden mb-7">
                <p className="font-display text-[2.2rem] text-white/88 tracking-[0.06em] text-center leading-tight z-10 relative">
                  COASTER<br />CHRONICLES
                </p>
                <svg
                  className="absolute bottom-0 left-0 right-0 h-14 opacity-10"
                  viewBox="0 0 400 60"
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 30 Q20 8 40 30 Q60 52 80 30 Q100 8 120 30 Q140 52 160 26 Q180 0 200 30 Q220 60 240 30 Q260 0 280 34 Q300 60 320 30 Q340 8 360 30 Q380 52 400 30 L400 60 L0 60 Z" fill="white" />
                </svg>
                <img src="/images/logo03.png" alt="ThrillNerds" className="absolute bottom-3.5 right-3.5 w-10 opacity-80" />
              </div>
            )}

            <h3 className="font-serif-display text-[1.6rem] mb-2">Coaster Chronicles</h3>
            <div className="flex items-center gap-2 flex-wrap text-[0.82rem] text-muted mb-4">
              <span>with</span>
              <strong className="text-muted2">John (ThrillNerds) &amp; Stephen (IG - @realswizey)</strong>
              <span>· on the Coaster Cuzzies channel</span>
            </div>
            <p className="text-[0.93rem] text-muted2 leading-[1.8] mb-3">
              Me and Swizey sit down once a month, bring on a guest, and just talk coasters.
              We try to find a good story in every episode and go wherever the conversation takes us.
            </p>
            <p className="text-[0.93rem] text-muted2 leading-[1.8] mb-6">
              Have a coaster story you want to share on the show?{' '}
              <a
                href="mailto:john@thrillnerds.com?subject=Coaster Chronicles Story"
                className="text-[#F0EBE8] underline underline-offset-2 hover:text-white transition-colors"
              >
                Send it our way
              </a>{' '}
              and we'll see if it's a fit.
            </p>
            <div className="flex flex-wrap gap-2">
              {platforms.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[0.78rem] font-semibold text-muted2 px-3.5 py-1.5 border border-subtle2 rounded-full no-underline hover:text-[#F0EBE8] hover:border-white/30 transition-all"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Right — Spotify embed only */}
          <div>
            <iframe
              style={{ borderRadius: '12px', display: 'block' }}
              src={`https://open.spotify.com/embed/show/${SPOTIFY_SHOW_ID}?utm_source=generator&theme=0`}
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Coaster Chronicles on Spotify"
            />
            <a
              href={`https://open.spotify.com/show/${SPOTIFY_SHOW_ID}`}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 mt-5 px-6 py-3 grad-bg text-white font-semibold text-sm rounded-md no-underline hover:opacity-85 transition-opacity w-full"
            >
              Listen on Spotify →
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}