const BEHOLD_FEED_ID = 'OMneYRrHoVD9n8H3yuDG'

export default function Instagram() {
  return (
    <section id="instagram" className="bg-[#131316] px-10 py-24">
      <div className="max-w-[1100px] mx-auto">

        <div className="flex justify-between items-end flex-wrap gap-4 mb-10">
          <div>
            <p className="text-[0.68rem] font-bold tracking-[0.22em] uppercase text-muted mb-2">Instagram</p>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-[0.95] tracking-wide">
              What I've <span className="grad-text">Been Up To</span>
            </h2>
          </div>
          <a
            href="https://www.instagram.com/thrillnerds/"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-transparent text-[#F0EBE8] font-medium text-sm border border-subtle2 rounded-md no-underline hover:bg-white/5 hover:border-white/30 transition-all flex-shrink-0"
          >
            Follow @thrillnerds →
          </a>
        </div>

        {/* eslint-disable-next-line react/no-unknown-property */}
        <behold-widget feed-id={BEHOLD_FEED_ID} />

      </div>
    </section>
  )
}