import './App.css'
import zelleScreenshot from './assets/Screenshot 2026-02-15 at 8.37.21 PM.png'
import carouselOne from './assets/Screenshot 2026-02-16 at 3.44.53 PM.png'
import carouselTwo from './assets/Screenshot 2026-02-16 at 3.45.11 PM.png'
import carouselThree from './assets/Screenshot 2026-02-16 at 3.45.30 PM.png'
import { Link } from 'react-router-dom'

const links = [
  {
    name: 'PayPal',
    handle: 'Pending',
    href: 'https://www.paypal.me/johndoe',
    note: 'Fast, secure card or bank transfer.',
  },
  {
    name: 'Zelle',
    handle: '+1 (464) 218-7071',
    href: 'https://www.zellepay.com/',
    note: 'Use phone number in your banking app.',
  },
  {
    name: 'Cash App',
    handle: 'Pending',
    href: 'https://cash.app/$JohnDoe',
    note: 'Instant transfers with Cash App.',
  },
  {
    name: 'Venmo',
    handle: 'Pending',
    href: 'https://venmo.com/u/johndoe',
    note: 'Quick mobile donations.',
  },
]

function App() {
  return (
    <div className="page">
      <header className="hero">
        <div className="hero-tag">Community Support Fund</div>
        <h1>Help Marwan Elhit cover urgent medical expenses.</h1>
        <Link className="story-link" to="/story">
          His Story
        </Link>
        <p className="hero-body">
          Marwan is facing heart failure after 20 years with a donor heart, and
          his family is seeking help to cover mounting medical bills. Donations
          will also support potential transfer costs if he can be moved to a
          different hospital for life-saving treatment. Sana Elhit, his wife,
          is managing all payments. If you are able, thank you for showing up.
        </p>
      </header>

      <section className="carousel" aria-label="Photo carousel">
        <div className="carousel-track">
          <img className="carousel-slide" src={carouselOne} alt="Marwan update 1" />
          <img className="carousel-slide" src={carouselTwo} alt="Marwan update 2" />
          <img className="carousel-slide" src={carouselThree} alt="Marwan update 3" />
        </div>
      </section>

      <section id="methods" className="methods">
        <div className="section-head">
          <h2>Send your donation</h2>
          <p>
            Pick the platform you already use. Every method goes directly to
            Sana Elhit, Marwan's wife.
          </p>
        </div>

        <div className="method-grid">
          {links.map((link) =>
            link.name === 'Zelle' ? (
              <div key={link.name} className="method-card">
                <div>
                  <img
                    src={zelleScreenshot}
                    alt="Zelle screenshot"
                    className="method-image"
                  />
                  <h3>{link.name}</h3>
                  <p className="handle">{link.handle}</p>
                  <p className="note">{link.note}</p>
                </div>
                <span className="pill">Details</span>
              </div>
            ) : (
              <div key={link.name} className="method-card">
                <div>
                  <h3>{link.name}</h3>
                  <p className="handle">{link.handle}</p>
                  <p className="note">{link.note}</p>
                </div>
                <span className="pill">Unavailable</span>
              </div>
            )
          )}
        </div>
      </section>

      <section id="updates" className="updates">
        <div className="update-card">
          <h2>Latest update</h2>
          <p>
            Marwan has been accepted for a second heart transplant at Vanderbilt
            University Medical Center in Nashville. To move forward, the
            hospital requires $45,000 in support with $25,000–$30,000 needed up
            front, plus an additional $30,000 for an urgent air ambulance
            transfer from Chicago. These funds cover medications not paid by
            insurance and the required living expenses near the hospital during
            transplant and recovery. Time is critical, and every contribution
            helps keep his care moving forward.
          </p>
        </div>
        <div className="trust">
          <h3>Share safely</h3>
          <p>
            Please share this page with trusted friends. Avoid public comments
            that include personal details.
          </p>
        </div>
      </section>

      <footer className="footer">
        <p className="small">Built with gratitude for our community.</p>
      </footer>
    </div>
  )
}

export default App
