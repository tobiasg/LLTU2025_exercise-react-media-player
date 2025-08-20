import type { ReactElement } from "react";
import type { Track } from "../types/track";

interface TrackProps {
  track: Track;
  onClick: (track: Track) => void;
  isSelected: boolean;
}

export const TrackItem = ({
  track,
  onClick,
  isSelected,
}: TrackProps): ReactElement => {
  const { title, artist } = track;
  return (
    <>
      <section
        className={`track ${isSelected ? "selected" : ""}`}
        onClick={() => onClick(track)}
      >
        <figure className="track-album-cover"></figure>
        <div className="track-info">
          <p className="track-title">{title}</p>
          <p className="track-artist">{artist}</p>
        </div>
      </section>
    </>
  );
};
