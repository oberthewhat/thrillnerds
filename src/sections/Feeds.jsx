const YOUTUBE_VIDEO_ID = 'zzcKG34coQs'

export default function Feeds() {
  return (
    <section id="latest" className="bg-[#131316] px-10 py-24">
      <div className="max-w-[1100px] mx-auto">

        <div className="flex justify-between items-end flex-wrap gap-4 mb-10">
          <div>
            <p className="text-[0.68rem] font-bold tracking-[0.22em] uppercase text-muted mb-2">Always Fresh</p>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-[0.95] tracking-wide">
              Latest from <span className="grad-text">ThrillNerds</span>
            </h2>
          </div>
          <a
            href="https://www.youtube.com/@thrillnerds"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-transparent text-[#F0EBE8] font-medium text-sm border border-subtle2 rounded-md no-underline hover:bg-white/5 hover:border-white/30 transition-all flex-shrink-0"
          >
            All Videos →
          </a>
        </div>

        {/* Full-width featured video */}
        <div className="bg-[#1A1A1F] border border-subtle rounded-2xl overflow-hidden">
          <div className="px-5 py-4 border-b border-subtle flex items-center gap-3">
            <div className="w-9 h-9 rounded-[9px] grad-bg flex items-center justify-center text-base flex-shrink-0">▶</div>
            <div>
              <h3 className="text-[0.95rem] font-semibold leading-tight">Latest Video</h3>
              <p className="text-[0.76rem] text-muted mt-px">YouTube · @thrillnerds</p>
            </div>
          </div>
          <div className="p-5">
            {/* Wide aspect ratio to really show it off */}
            <div className="w-full aspect-video bg-[#222228] rounded-xl overflow-hidden mb-5">
              <iframe
                src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?rel=0&modestbranding=1`}
                className="w-full h-full border-none block"
                allowFullScreen
                title="Latest ThrillNerds video"
                loading="lazy"
              />
            </div>
            <a
              href="https://www.youtube.com/@thrillnerds"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 grad-bg text-white font-semibold text-sm rounded-md no-underline hover:opacity-85 transition-opacity"
            >
              Subscribe →
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
