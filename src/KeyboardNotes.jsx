
import { useMemo, useState } from 'react';
import './KeyboardNotes.css';

const keyboardNotes = [
    { number: 1, title: 'నా ప్రియమైన యేసు  ప్రభు' },
    { number: 2, title: 'దూత గణములెల్ల ఆరాధించిరిగా' },
    { number: 3, title: 'నీ ప్రియ ప్రభుని సేవకై – అర్పించుకో నీవే' },
    { number: 4, title: 'సీయోను పాటలు సంతోషముగ' },
    { number: 5, title: 'పొందితిని నేను ప్రభువా నీ నుండి' },
    { number: 6, title: 'మేము భయపడము – ఇక మేము భయపడము' },
    { number: 7, title: 'స్వఛ్చంద సీయోను వాసి' },
    { number: 8, title: 'నమ్మకమైన నా ప్రభు' },
];

function KeyboardNotes({ onBack }) {
    const [search, setSearch] = useState('');
    const [sortBy, setSortBy] = useState('number');
    const [view, setView] = useState('grid');
    const [selectedNote, setSelectedNote] = useState(null);
    const [mediaType, setMediaType] = useState('image');

    const filteredNotes = useMemo(() => {
        const query = search.trim().toLowerCase();

        return keyboardNotes
            .filter(
                (note) =>
                    note.title.toLowerCase().includes(query) ||
                    String(note.number).includes(query)
            )
            .sort((a, b) =>
                sortBy === 'title'
                    ? a.title.localeCompare(b.title)
                    : a.number - b.number
            );
    }, [search, sortBy]);

    const openNotes = (note) => {
        setSelectedNote(note);
        setMediaType('image');
    };

    const closeNotes = () => {
        setSelectedNote(null);
        setMediaType('image');
    };

    const songNumber = selectedNote
        ? String(selectedNote.number).padStart(2, '0')
        : '';

    return (
        <main className="keyboard-library">
            <button className="back-button" onClick={onBack}>
                ← Back to Home
            </button>

            <div className="keyboard-heading">
                <p className="keyboard-subtitle">
                    WORSHIP · LEARN · PLAY
                </p>
                <h1>Keyboard Notes</h1>
                <p>
                    Find and learn keyboard notes for Songs of Zion.
                </p>
            </div>

            <div className="keyboard-toolbar">
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search by number or title..."
                />

                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                >
                    <option value="number">Sort by number</option>
                    <option value="title">Sort by title</option>
                </select>

                <div className="keyboard-view-buttons">
                    <button
                        className={view === 'grid' ? 'active' : ''}
                        onClick={() => setView('grid')}
                    >
                        Grid
                    </button>
                    <button
                        className={view === 'list' ? 'active' : ''}
                        onClick={() => setView('list')}
                    >
                        List
                    </button>
                </div>
            </div>

            <p className="keyboard-count">
                {filteredNotes.length} keyboard notes found
            </p>

            {filteredNotes.length > 0 ? (
                <div className={`keyboard-items ${view}`}>
                    {filteredNotes.map((note) => (
                        <article
                            className="keyboard-item"
                            key={note.number}
                        >
                            <div className="keyboard-number">
                                {String(note.number).padStart(3, '0')}
                            </div>

                            <div className="keyboard-details">
                                <h2>{note.title}</h2>
                                <p>Songs of Zion · Keyboard Notes</p>
                            </div>

                            <button
                                className="keyboard-view-notes-button"
                                onClick={() => openNotes(note)}
                            >
                                View Notes
                            </button>
                        </article>
                    ))}
                </div>
            ) : (
                <div className="keyboard-empty-state">
                    <h2>No keyboard notes found</h2>
                    <p>Try another number or title.</p>
                </div>
            )}

            <p className="keyboard-note">
                Select a song to view its keyboard notes.
            </p>

            {selectedNote && (
                <div
                    style={{
                        position: 'fixed',
                        inset: 0,
                        zIndex: 1000,
                        background: 'rgba(0, 0, 0, 0.85)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        padding: '20px',
                        overflowY: 'auto',
                    }}
                    onClick={closeNotes}
                >
                    <div
                        style={{
                            width: '100%',
                            maxWidth: '1000px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            gap: '12px',
                            marginBottom: '16px',
                            color: '#ffffff',
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 style={{ fontSize: '18px' }}>
                            {selectedNote.number}. {selectedNote.title}
                        </h2>

                        <button
                            type="button"
                            onClick={closeNotes}
                            style={{
                                padding: '10px 16px',
                                border: 'none',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                fontSize: '16px',
                            }}
                        >
                            ✕ Close
                        </button>
                    </div>

                    <div
                        style={{
                            display: 'flex',
                            gap: '10px',
                            marginBottom: '18px',
                            flexWrap: 'wrap',
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            type="button"
                            onClick={() => setMediaType('image')}
                            style={{
                                padding: '10px 18px',
                                border: 'none',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                fontWeight: 'bold',
                                background:
                                    mediaType === 'image'
                                        ? '#f0c75e'
                                        : '#ffffff',
                                color: '#222222',
                            }}
                        >
                            View Image
                        </button>

                        <button
                            type="button"
                            onClick={() => setMediaType('video')}
                            style={{
                                padding: '10px 18px',
                                border: 'none',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                fontWeight: 'bold',
                                background:
                                    mediaType === 'video'
                                        ? '#f0c75e'
                                        : '#ffffff',
                                color: '#222222',
                            }}
                        >
                            ▶ Play Video
                        </button>
                    </div>

                    {mediaType === 'image' ? (
                        <img
                            src={`/keyboard-notes/song-${songNumber}.png`}
                            alt={`Keyboard notes for ${selectedNote.title}`}
                            onClick={(e) => e.stopPropagation()}
                            style={{
                                display: 'block',
                                width: '100%',
                                maxWidth: '1000px',
                                height: 'auto',
                                objectFit: 'contain',
                                borderRadius: '8px',
                                background: '#ffffff',
                            }}
                        />
                    ) : (
                        <video
                            key={selectedNote.number}
                            controls
                            autoPlay
                            playsInline
                            onClick={(e) => e.stopPropagation()}
                            style={{
                                display: 'block',
                                width: '100%',
                                maxWidth: '1000px',
                                maxHeight: '70vh',
                                borderRadius: '8px',
                                background: '#000000',
                            }}
                        >
                            <source
                                src={`/videos/song-${songNumber}.mp4`}
                                type="video/mp4"
                            />
                            Your browser does not support video playback.
                        </video>
                    )}
                </div>
            )}
        </main>
    );
}

export default KeyboardNotes;
