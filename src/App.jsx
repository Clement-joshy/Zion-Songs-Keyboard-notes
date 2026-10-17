
import './App.css'

const songs = [
  {
    title: 'In Christ Alone',
    category: 'Hymns',
    level: 'Easy',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=700&q=80',
  },
  {
    title: 'Great Is Thy Faithfulness',
    category: 'Hymns',
    level: 'Medium',
    image:
      'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=700&q=80',
  },
  {
    title: 'How Great Thou Art',
    category: 'Hymns',
    level: 'Easy',
    image:
      'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=700&q=80',
  },
  {
    title: 'Holy, Holy, Holy',
    category: 'Hymns',
    level: 'Medium',
    image:
      'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=700&q=80',
  },
]

const features = [
  {
    icon: '♫',
    title: 'Song Library',
    description: 'Browse all songs',
  },
  {
    icon: '▥',
    title: 'Keyboard Notes',
    description: 'Learn step by step',
  },
  {
    icon: '♡',
    title: 'Favorites',
    description: 'Your saved songs',
  },
  {
    icon: '♙',
    title: 'My Account',
    description: 'Manage your profile',
  },
]

function App() {
  return (
    <div className="app">
      <header className="navbar">
        <a href="#home" className="brand">
          <span className="brand-icon">♫</span>
          <span>
            <strong>Songs of Zion</strong>
            <small>Keyboard Notes</small>
          </span>
        </a>

        <nav className="nav-links">
          <a className="active" href="#home">Home</a>
          <a href="#songs">♫ Songs</a>
          <a href="#learn">▤ Learn</a>
          <a href="#account">♙ Login</a>
        </nav>

        <a className="signup-button" href="#account">Sign Up</a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <span className="eyebrow">SING · PLAY · WORSHIP</span>
            <h1>
              Songs of Zion
              <span>Keyboard Notes</span>
            </h1>
            <p>
              Your favourite songs, with easy-to-follow keyboard
              notes. Learn, play and worship with confidence.
            </p>

            <div className="hero-actions">
              <a className="primary-button" href="#songs">
                ♫ &nbsp; Explore Songs
              </a>
              <a className="secondary-button" href="#learn">
                ▤ &nbsp; Learn the Notes
              </a>
            </div>

            <div className="hero-stats">
              <div><strong>Learn</strong><span>At your pace</span></div>
              <div><strong>Play</strong><span>With confidence</span></div>
              <div><strong>Worship</strong><span>With joy</span></div>
            </div>
          </div>

          <div className="hero-visual">
            <img
              src="https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=1200&q=85"
              alt="Piano keyboard ready to play"
            />
            <div className="image-message">
              <span>♪</span>
              <p>Music brings us<br />closer to God.</p>
              <small>Play with your heart ♡</small>
            </div>
            <div className="floating-note">♫</div>
          </div>
        </section>

        <section className="explore-section" id="learn">
          <div className="explore-search">
            <span className="eyebrow">YOUR MUSIC JOURNEY</span>
            <h2>Explore the Library</h2>
            <p>Find your favourite song and start playing.</p>
            <a className="search-box" href="#songs">
              <span>⌕</span>
              Search songs by title, artist or keyword...
            </a>
          </div>

          <div className="feature-grid">
            {features.map((feature) => (
              <a
                href={feature.title === 'Keyboard Notes' ? '#songs' : '#account'}
                className="feature-card"
                key={feature.title}
              >
                <span className="feature-icon">{feature.icon}</span>
                <strong>{feature.title}</strong>
                <small>{feature.description}</small>
                <span className="feature-arrow">→</span>
              </a>
            ))}
          </div>
        </section>

        <section className="songs-section" id="songs">
          <div className="section-heading">
            <div>
              <span className="eyebrow">YOUR NEXT FAVOURITE</span>
              <h2>Featured Songs</h2>
              <p>Beautiful songs to learn and play.</p>
            </div>
            <a href="#songs" className="view-all">Explore Library →</a>
          </div>

          <div className="song-grid">
            {songs.map((song) => (
              <article className="song-card" key={song.title}>
                <img src={song.image} alt="" />
                <div className="song-info">
                  <span className="song-category">{song.category}</span>
                  <h3>{song.title}</h3>
                  <div className="song-bottom">
                    <span className="level">{song.level}</span>
                    <a
                      href="#learn"
                      className="play-button"
                      aria-label={`Learn ${song.title}`}
                    >
                      ▶
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="benefits">
          <div><span>✦</span><p><strong>Easy to Follow</strong><small>Clear notes for every level.</small></p></div>
          <div><span>▣</span><p><strong>Mobile Friendly</strong><small>Learn on any device.</small></p></div>
          <div><span>✓</span><p><strong>Build Your Skills</strong><small>Improve step by step.</small></p></div>
          <div><span>♡</span><p><strong>Worship with Joy</strong><small>Play songs you love.</small></p></div>
        </section>
      </main>

      <footer className="footer" id="account">
        <a href="#home" className="brand footer-brand">
          <span className="brand-icon">♫</span>
          <span>
            <strong>Songs of Zion</strong>
            <small>Keyboard Notes</small>
          </span>
        </a>
        <div className="footer-verse">
          <p>“Make a joyful noise unto the Lord...”</p>
          <small>Psalm 100:1</small>
        </div>
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#songs">Songs</a>
          <a href="#learn">Learn</a>
          <a href="#account">Login</a>
        </div>
        <div className="copyright">
          © {new Date().getFullYear()} Songs of Zion – Keyboard Notes.
          All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default App
