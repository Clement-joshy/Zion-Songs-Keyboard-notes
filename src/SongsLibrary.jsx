
import { useMemo, useState } from 'react';
import './SongsLibrary.css';

const songs = [
    { number: 1, title: 'Song Title 1' },
    { number: 2, title: 'Song Title 2' },
    { number: 3, title: 'Song Title 3' },
    { number: 4, title: 'Song Title 4' },
    { number: 5, title: 'Song Title 5' },
    { number: 6, title: 'Song Title 6' },
    { number: 7, title: 'Song Title 7' },
    { number: 8, title: 'Song Title 8' },
];

function SongsLibrary({ onBack }) {
    const [search, setSearch] = useState('');
    const [sortBy, setSortBy] = useState('number');
    const [view, setView] = useState('grid');

    const filteredSongs = useMemo(() => {
        const query = search.trim().toLowerCase();

        return songs
            .filter((song) =>
                song.title.toLowerCase().includes(query) ||
                String(song.number).includes(query)
            )
            .sort((a, b) => {
                if (sortBy === 'title') {
                    return a.title.localeCompare(b.title);
                }

                return a.number - b.number;
            });
    }, [search, sortBy]);

    return (
        <main className="songs-library">
            <button className="back-button" onClick={onBack}>
                ← Back to Home
            </button>

            <div className="library-heading">
                <p className="library-subtitle">WORSHIP · LEARN · PLAY</p>
                <h1>Songs Library</h1>
                <p>Find your favourite Songs of Zion keyboard notes.</p>
            </div>

            <div className="library-toolbar">
                <input
                    type="search"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder="Search by song number or title..."
                    aria-label="Search by song number or title"
                />

                <select
                    value={sortBy}
                    onChange={(event) => setSortBy(event.target.value)}
                    aria-label="Sort songs"
                >
                    <option value="number">Sort by song number</option>
                    <option value="title">Sort by title</option>
                </select>

                <div className="view-buttons">
                    <button
                        className={view === 'grid' ? 'selected' : ''}
                        onClick={() => setView('grid')}
                        aria-pressed={view === 'grid'}
                    >
                        Grid
                    </button>

                    <button
                        className={view === 'list' ? 'selected' : ''}
                        onClick={() => setView('list')}
                        aria-pressed={view === 'list'}
                    >
                        List
                    </button>
                </div>
            </div>

            <p className="song-count">
                {filteredSongs.length} songs found
            </p>

            {filteredSongs.length > 0 ? (
                <div className={`song-items ${view}`}>
                    {filteredSongs.map((song) => (
                        <article className="song-item" key={song.number}>
                            <div className="song-number">
                                {String(song.number).padStart(3, '0')}
                            </div>

                            <div className="song-details">
                                <h2>{song.title}</h2>
                                <p>Song of Zion · Keyboard Notes</p>
                            </div>

                            <button
                                className="view-notes-button"
                                onClick={() =>
                                    alert('Keyboard notes for this song will be added later.')
                                }
                            >
                                View Notes
                            </button>
                        </article>
                    ))}
                </div>
            ) : (
                <div className="empty-state">
                    <h2>No songs found</h2>
                    <p>Try another song number or title.</p>
                </div>
            )}

            <p className="library-note">
                Sample entries are shown for testing. The official song catalogue
                and keyboard notes will be added later.
            </p>
        </main>
    );
}

export default SongsLibrary;
