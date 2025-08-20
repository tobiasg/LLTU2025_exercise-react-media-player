import { useState } from "react";
import { CurrentTrack } from "./CurrentTrack";
import { TrackItem } from "./TrackItem";
import { tracks } from "../data";
import type { Track } from "../types/track";

function App() {
  const [currentTrack, setCurrentTrack] = useState(tracks[0]);

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
                isSelected={currentTrack.id === track.id}
              />
            ))}
          </div>
          <div className="current-track">
            <CurrentTrack track={currentTrack} />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
