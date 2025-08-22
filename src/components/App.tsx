import { useState } from "react";
import { CurrentTrack } from "./CurrentTrack";
import { TrackItem } from "./TrackItem";
import { tracks } from "../data";
import type { Track } from "../types/track";
import { Header } from "./Header";

function App() {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);

  const handleTrackClick = (track: Track) => {
    setCurrentTrack(track);
  };

  const handleAddToPlaylist = () => {
    if (currentTrack) {
      console.log("add to playlist");
    }
  };

  const handleFavoriteToggle = () => {
    if (currentTrack) {
      console.log("toggle favorite");
    }
  };

  return (
    <>
      <Header />
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
              <CurrentTrack
                track={currentTrack}
                onAddToPlaylist={handleAddToPlaylist}
                onFavoriteToggle={handleFavoriteToggle}
              />
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
