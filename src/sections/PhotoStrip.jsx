import { useState } from 'react'
import Lightbox from '../components/Lightbox'

const photos = [
  { src: '/images/grid6.jpg',  caption: 'Silhouette · Golden Sunset' },
  { src: '/images/grid5.jpg',  caption: 'Silhouette · Blue Dusk' },
  { src: '/images/grid12.jpg', caption: 'Cedar Point Skyline at Sunset' },
  { src: '/images/grid3.jpg',  caption: 'Busch Gardens · Nessie' },
  { src: '/images/grid9.jpg',  caption: 'Universal · Water Reflection' },
  { src: '/images/grid7.jpg',  caption: 'Universal · Hulk Coaster Night' },
  { src: '/images/grid1.jpg',  caption: 'Wooden Coaster Structure' },
  { src: '/images/grid2.jpg',  caption: 'Wooden Coaster Curve' },
  { src: '/images/grid4.jpg',  caption: 'Fury 325 · Carowinds' },
  { src: '/images/grid8.jpg',  caption: 'Hogwarts Castle · Universal' },
  { src: '/images/grid10.jpg', caption: 'Velocicoaster · Universal' },
  { src: '/images/grid11.jpg', caption: 'Hogsmeade Village at Dusk' },
]

function PhotoTile({ photo, index, onOpen, className = '', captionSize = 'text-xs' }) {
  return (
    <div
      className={`relative overflow-hidden cursor-pointer ${className}`}
      onClick={() => onOpen(index)}
    >
      <img
        src={photo.src}
        alt={photo.caption}
        className="w-full h-full object-cover block transition-transform duration-500 hover:scale-105"
        loading="lazy"
      />
      <div className="photo-overlay">
        <span className={`${captionSize} font-bold tracking-[0.12em] uppercase text-white`}>
          View
        </span>
      </div>
    </div>
  )
}

export default function PhotoStrip() {
  const [lbIndex, setLbIndex] = useState(null)

  const open = (i) => setLbIndex(i)
  const close = () => setLbIndex(null)
  const prev = () => setLbIndex((i) => (i - 1 + photos.length) % photos.length)
  const next = () => setLbIndex((i) => (i + 1) % photos.length)

  return (
    <section id="photos" className="bg-[#0C0C0E]">

      {/* Strip */}
      <div className="grid grid-cols-[2fr_1fr_1fr] h-[480px] md:h-[520px]">

        {/* Main featured */}
        <PhotoTile
          photo={photos[0]}
          index={0}
          onOpen={open}
          captionSize="text-base"
        />

        {/* Divider */}
        <div className="w-px bg-[#0C0C0E]" />

        {/* Side col 1 */}
        <div className="grid grid-rows-2">
          <PhotoTile photo={photos[1]} index={1} onOpen={open} />
          <PhotoTile photo={photos[2]} index={2} onOpen={open} />
        </div>

        {/* Divider */}
        <div className="w-px bg-[#0C0C0E] hidden lg:block" />

        {/* Side col 2 — hidden on small screens */}
        <div className="hidden lg:grid grid-rows-3">
          <PhotoTile photo={photos[3]} index={3} onOpen={open} />
          <PhotoTile photo={photos[4]} index={4} onOpen={open} />
          <PhotoTile photo={photos[5]} index={5} onOpen={open} />
        </div>

      </div>

      {/* See more */}
      <div className="flex justify-center py-6 bg-[#0C0C0E]">
        <a
          href="https://www.instagram.com/thrillnerds/"
          target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-2.5 bg-transparent text-[#F0EBE8] font-medium text-sm border border-subtle2 rounded-md no-underline hover:bg-white/5 hover:border-white/30 transition-all"
        >
          See More on Instagram →
        </a>
      </div>

      {/* Lightbox */}
      <Lightbox
        photos={photos}
        index={lbIndex}
        onClose={close}
        onPrev={prev}
        onNext={next}
      />
    </section>
  )
}
