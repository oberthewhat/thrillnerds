import { useState, useEffect } from 'react'

export default function Blog() {
  const [posts, setPosts] = useState([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    fetch('/blog/posts.json')
      .then(r => (r.ok ? r.json() : []))
      .then(data => {
        setPosts(Array.isArray(data) ? data.slice(0, 3) : [])
        setLoaded(true)
      })
      .catch(() => setLoaded(true))
  }, [])

  // Don't render the section at all if there are no posts yet.
  if (loaded && posts.length === 0) return null

  function formatDate(d) {
    const date = new Date(d)
    if (isNaN(date)) return ''
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  }

  return (
    <section id="blog" className="bg-[#0C0C0E] px-10 py-24">
      <div className="max-w-[1100px] mx-auto">

        <div className="flex justify-between items-end flex-wrap gap-4 mb-10">
          <div>
            <p className="text-[0.68rem] font-bold tracking-[0.22em] uppercase text-muted mb-2">Read More</p>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-[0.95] tracking-wide">
              From the <span className="grad-text">Blog</span>
            </h2>
          </div>
          <a
            href="/blog/"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-transparent text-[#F0EBE8] font-medium text-sm border border-subtle2 rounded-md no-underline hover:bg-white/5 hover:border-white/30 transition-all flex-shrink-0"
          >
            All Posts →
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map(post => (
            <a
              key={post.slug}
              href={post.url}
              className="group bg-[#1A1A1F] border border-subtle rounded-2xl overflow-hidden no-underline hover:border-subtle2 transition-colors flex flex-col"
            >
              <div className="aspect-video bg-[#222228] overflow-hidden">
                {post.image && (
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    onError={(e) => {
                      if (post.imageFallback && e.currentTarget.src !== post.imageFallback) {
                        e.currentTarget.src = post.imageFallback
                      }
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-serif-display text-lg leading-tight mb-2 text-[#F0EBE8]">{post.title}</h3>
                <p className="text-[0.85rem] text-muted2 leading-relaxed mb-4 flex-1">{post.description}</p>
                <span className="text-[0.72rem] text-muted">{formatDate(post.date)}</span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}
