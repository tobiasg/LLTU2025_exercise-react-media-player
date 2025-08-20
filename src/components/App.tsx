import { CurrentTrack } from "./CurrentTrack";
import { TrackItem } from "./TrackItem";
import { tracks } from "../data";

function App() {
  return (
    <>
      <header></header>
      <main>
        <div className="container">
          <div className="track-list">
            {tracks.map((track) => (
              <TrackItem key={track.id} track={track} />
            ))}
          </div>
          <div className="current-track">
            <CurrentTrack track={tracks[0]} />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
