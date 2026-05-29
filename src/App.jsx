import Nav from './components/Nav'
import Hero from './sections/Hero'
import Instagram from './sections/Instagram'
import Feeds from './sections/Feeds'
import Podcast from './sections/Podcast'
import Work from './sections/Work'
import Contact from './sections/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0C0C0E]">
      <Nav />
      <main>
        <Hero />
        <div className="grad-line" />
        <Instagram />
        <div className="grad-line" />
        <Feeds />
        <div className="grad-line" />
        <Podcast />
        <div className="grad-line" />
        <Work />
        <div className="grad-line" />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
