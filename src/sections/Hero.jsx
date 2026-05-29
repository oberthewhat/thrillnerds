export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-10 pt-28 pb-20 overflow-hidden"
    >
      {/* Background photo */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.jpg"
          alt="Cedar Point skyline at sunset"
          className="w-full h-full object-cover object-[center_60%] opacity-30"
          loading="eager"
        />
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-br from-[rgba(12,12,14,0.88)] via-[rgba(12,12,14,0.62)] to-[rgba(12,12,14,0.78)]" />
      <div className="absolute inset-0 z-[1]"
        style={{
          background: `radial-gradient(ellipse 50% 60% at 20% 70%, rgba(139,63,212,0.2) 0%, transparent 60%),
                       radial-gradient(ellipse 40% 40% at 80% 30%, rgba(212,48,107,0.15) 0%, transparent 60%)`
        }}
      />

      {/* Content */}
      <div className="relative z-[2] max-w-[1100px] mx-auto w-full grid grid-cols-1 md:grid-cols-[1.15fr_1fr] gap-16 items-center">

        {/* Text */}
        <div>
          <span className="inline-block text-[0.71rem] font-bold tracking-[0.18em] uppercase text-muted2 mb-6 px-3.5 py-1 border border-subtle2 rounded-full">
            Roller Coasters · Rides · Community
          </span>
          <h1 className="font-display text-[clamp(4rem,8.5vw,7rem)] leading-[0.92] tracking-wide mb-6">
            Where Thrill<br />
            <span className="grad-text">Meets Story</span>
          </h1>
          <p className="text-[1.05rem] text-muted2 max-w-[460px] mb-10 leading-[1.75]">
            Content creator, podcast host, and coaster enthusiast based in Austin, Texas.
            Covering parks, people, and the real joy behind every ride — since 2003.
          </p>
          <div className="flex gap-3.5 flex-wrap">
            <a
              href="#instagram"
              className="inline-flex items-center gap-2 px-7 py-3 grad-bg text-white font-semibold text-sm tracking-wide rounded-md no-underline hover:opacity-85 transition-all hover:-translate-y-0.5"
            >
              See Latest Content →
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3 bg-transparent text-[#F0EBE8] font-medium text-sm tracking-wide border border-subtle2 rounded-md no-underline hover:bg-white/5 hover:border-white/30 transition-all"
            >
              Let's Collaborate
            </a>
          </div>
        </div>

        {/* Logo */}
        <div className="flex flex-col items-center gap-6 order-first md:order-last">
          <img
            src="/images/logo02.png"
            alt="ThrillNerds"
            className="w-full max-w-[360px] logo-pulse"
          />
          <span className="text-[0.71rem] font-bold tracking-[0.2em] uppercase text-muted">
            Re.Est. 2021 · Austin, Texas
          </span>
        </div>

      </div>
    </section>
  )
}
