
import './SongDetails.css';

function SongDetails({ song, onBack }) {
    if (!song) {
        return (
            <main className="song-details-page">
                <button className="details-back-button" onClick={onBack}>
                    ← Back to Songs
                </button>

                <div className="details-empty">
                    <h1>Song not found</h1>
                    <p>Please select a song from the Songs Library.</p>
                </div>
            </main>
        );
    }

    return (
        <main className="song-details-page">
            <button className="details-back-button" onClick={onBack}>
                ← Back to Songs
            </button>

            <header className="details-heading">
                <p className="details-subtitle">
                    WORSHIP · LEARN · PLAY
                </p>

                <p className="details-song-number">
                    SONG NO. {String(song.number).padStart(3, '0')}
                </p>

                <h1>{song.title}</h1>
                <p>Song Lyrics</p>
            </header>

            <section className="song-content-layout">
                <section className="lyrics-card">
                    <h2>Lyrics</h2>

                    <div className="lyrics-content">
                        {song.lyrics ? (
                            <p>{song.lyrics}</p>
                        ) : (
                            <p className="lyrics-placeholder">
                                The official lyrics for this song
                                will be added later.
                            </p>
                        )}
                    </div>
                </section>

                <aside className="audio-card">
                    <h2>Song Audio</h2>
                    <p>Listen and practise this song.</p>

                    {song.audio ? (
                        <audio
                            className="song-audio-player"
                            controls
                            preload="metadata"
                            src={song.audio}
                        >
                            Your browser does not support audio playback.
                        </audio>
                    ) : (
                        <p>Audio is not available for this song.</p>
                    )}
                </aside>
            </section>
        </main>
    );
}

export default SongDetails;
