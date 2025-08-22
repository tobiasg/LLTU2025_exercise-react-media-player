import { useState } from "react";
import { CurrentTrack } from "./CurrentTrack";
import { TrackItem } from "./TrackItem";
import type { Track } from "../types/track";
import { Header } from "./Header";
import { playlist } from "../data";

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
      <main>
        <Header playlist={playlist} />
        <div className="container">
          <section className="tracks">
            {playlist.tracks.map((track) => (
              <TrackItem
                key={track.id}
                track={track}
                onClick={handleTrackClick}
                isSelected={currentTrack?.id === track.id}
              />
            ))}
          </section>
          <section className={`player ${!currentTrack ? "empty" : ""}`}>
            {currentTrack ? (
              <CurrentTrack
                track={currentTrack}
                onAddToPlaylist={handleAddToPlaylist}
                onFavoriteToggle={handleFavoriteToggle}
              />
            ) : (
              <p>No track selected</p>
            )}
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
