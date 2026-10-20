
import { useMemo, useState } from 'react';
import './KeyboardNotes.css';

const keyboardNotes = [
    { number: 1, title: 'Keyboard Notes 1' },
    { number: 2, title: 'Keyboard Notes 2' },
    { number: 3, title: 'Keyboard Notes 3' },
    { number: 4, title: 'Keyboard Notes 4' },
    { number: 5, title: 'Keyboard Notes 5' },
    { number: 6, title: 'Keyboard Notes 6' },
    { number: 7, title: 'Keyboard Notes 7' },
    { number: 8, title: 'Keyboard Notes 8' },
];

function KeyboardNotes({ onBack }) {
    const [search, setSearch] = useState('');
    const [sortBy, setSortBy] = useState('number');
    const [view, setView] = useState('grid');

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

    return (
        <main className="keyboard-library">
            <button className="back-button" onClick={onBack}>
                ← Back to Home
            </button>

            <div className="keyboard-heading">
                <p className="keyboard-subtitle">WORSHIP · LEARN · PLAY</p>
                <h1>Keyboard Notes</h1>
                <p>Find and learn keyboard notes for Songs of Zion.</p>
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
                        <article className="keyboard-item" key={note.number}>
                            <div className="keyboard-number">
                                {String(note.number).padStart(3, '0')}
                            </div>

                            <div className="keyboard-details">
                                <h2>{note.title}</h2>
                                <p>Songs of Zion · Keyboard Notes</p>
                            </div>

                            <button
                                className="keyboard-view-notes-button"
                                onClick={() =>
                                    alert('Keyboard notes will be added later.')
                                }
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
                Sample entries are shown for testing. Keyboard notes will be added later.
            </p>
        </main>
    );
}

export default KeyboardNotes;
