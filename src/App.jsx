
import { useState } from 'react';
import SongsLibrary from './SongsLibrary';
import './App.css';

function App() {
  const [page, setPage] = useState('home');

  // Show the Songs Library when selected
  if (page === 'songs') {
    return <SongsLibrary onBack={() => setPage('home')} />;
  }

  return (
    <div className="app" id="home">
      <header className="navbar">
        <a
          href="#home"
          className="brand"
          onClick={() => setPage('home')}
        >
          <span className="brand-icon">♫</span>
          <span className="brand-text">
            <strong>SONGS OF ZION</strong>
            <small>Keyboard Notes</small>
          </span>
        </a>

        <nav className="nav-links">
          <a
            className="active"
            href="#home"
            onClick={() => setPage('home')}
          >
            ♫ HOME
          </a>

          <a href="#about">♧ ABOUT US</a>

          <a
            href="#songs"
            onClick={(event) => {
              event.preventDefault();
              setPage('songs');
            }}
          >
            ♪ SONGS
          </a>

          <a
            href="#songs"
            onClick={(event) => {
              event.preventDefault();
              setPage('songs');
            }}
          >
            ▤ LEARN
          </a>
        </nav>

        <form
          className="header-search"
          onSubmit={(event) => {
            event.preventDefault();
            setPage('songs');
          }}
        >
          <input
            type="search"
            placeholder="Search"
            aria-label="Search songs"
          />
          <button type="submit" aria-label="Search">
            ⌕
          </button>
        </form>

        <a
          href="#account"
          className="profile-button"
          aria-label="Login or sign up"
          title="Login / Sign Up"
        >
          <span>●</span>
        </a>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1>
              <span>SONGS OF ZION</span>
              <strong>KEYBOARD NOTES</strong>
            </h1>

            <p className="verse">
              Sing for joy to God our strength
              <span>Psalms 81:1</span>
            </p>

            <div className="home-cards">
              <a
                href="#songs"
                className="home-card songs-card"
                onClick={(event) => {
                  event.preventDefault();
                  setPage('songs');
                }}
              >
                <span>SONGS</span>
                <b aria-hidden="true">♫</b>
              </a>

              <a
                href="#songs"
                className="home-card notes-card"
                onClick={(event) => {
                  event.preventDefault();
                  setPage('songs');
                }}
              >
                <span>
                  KEYBOARD
                  <br />
                  NOTES
                </span>
                <b aria-hidden="true">♫</b>
              </a>
            </div>
          </div>

          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=1600&q=90"
              alt="Piano keyboard"
            />
          </div>
        </section>
      </main>

      <footer className="footer" id="about">
        <div className="footer-main">
          <a href="#home" className="brand footer-brand">
            <span className="brand-icon">♫</span>

            <span className="brand-text">
              <strong>SONGS OF ZION</strong>
              <small>Keyboard Notes</small>

              <span className="footer-tagline">
                Worship · Learn · Play
              </span>
            </span>
          </a>

          <div className="footer-column">
            <h3>Quick Links</h3>
            <a href="#home">Home</a>
            <a href="#about">About Us</a>

            <a
              href="#songs"
              onClick={(event) => {
                event.preventDefault();
                setPage('songs');
              }}
            >
              Songs
            </a>

            <a
              href="#songs"
              onClick={(event) => {
                event.preventDefault();
                setPage('songs');
              }}
            >
              Learn
            </a>
          </div>

          <div className="footer-column">
            <h3>Get In Touch</h3>
            <p>✉ Email: Contact us</p>
            <p>⌖ India</p>
            <p>For suggestions and support</p>
          </div>

          <div className="footer-column">
            <h3>Follow Us</h3>

            <div className="social-links">
              <a href="#about" aria-label="YouTube">▶</a>
              <a href="#about" aria-label="Facebook">f</a>
              <a href="#about" aria-label="Instagram">◎</a>
              <a href="#about" aria-label="X">𝕏</a>
            </div>
          </div>
        </div>

        <div className="copyright" id="account">
          © {new Date().getFullYear()} Songs of Zion – Keyboard Notes.
          All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
