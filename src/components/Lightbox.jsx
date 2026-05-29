import { useEffect } from 'react'

export default function Lightbox({ photos, index, onClose, onPrev, onNext }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose, onPrev, onNext])

  if (index === null) return null

  const photo = photos[index]

  return (
    <div
      className="fixed inset-0 z-[999] bg-black/94 backdrop-blur-xl flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close */}
      <button
        className="absolute top-5 right-7 text-4xl text-muted bg-transparent border-none cursor-pointer leading-none hover:text-[#F0EBE8] transition-colors"
        onClick={onClose}
      >
        ×
      </button>

      {/* Prev */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 text-5xl text-muted bg-transparent border-none cursor-pointer px-4 py-4 hover:text-[#F0EBE8] transition-colors"
        onClick={(e) => { e.stopPropagation(); onPrev() }}
      >
        ‹
      </button>

      {/* Image */}
      <img
        src={photo.src}
        alt={photo.caption}
        className="max-w-[92vw] max-h-[88vh] rounded-lg object-contain"
        onClick={(e) => e.stopPropagation()}
      />

      {/* Next */}
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 text-5xl text-muted bg-transparent border-none cursor-pointer px-4 py-4 hover:text-[#F0EBE8] transition-colors"
        onClick={(e) => { e.stopPropagation(); onNext() }}
      >
        ›
      </button>

      {/* Caption */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-muted2 uppercase tracking-widest bg-black/50 px-4 py-1.5 rounded-full whitespace-nowrap">
        {photo.caption}
      </div>
    </div>
  )
}
