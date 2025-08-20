import { useState } from "react";
import { CurrentTrack } from "./CurrentTrack";
import { TrackItem } from "./TrackItem";
import { tracks } from "../data";
import type { Track } from "../types/track";

function App() {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);

  const handleTrackClick = (track: Track) => {
    setCurrentTrack(track);
  };

  return (
    <>
      <header></header>
      <main>
        <div className="container">
          <div className="track-list">
            {tracks.map((track) => (
              <TrackItem
                key={track.id}
                track={track}
                onClick={handleTrackClick}
                isSelected={currentTrack?.id === track.id}
              />
            ))}
          </div>
          <div className="current-track">
            {currentTrack ? (
              <CurrentTrack track={currentTrack} />
            ) : (
              <p className="empty">No track selected</p>
            )}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
