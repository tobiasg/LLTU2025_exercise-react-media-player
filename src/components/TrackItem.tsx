import type { ReactElement } from "react";
import type { Track } from "../types/track";

interface TrackProps {
  track: Track;
}

export const TrackItem = ({ track }: TrackProps): ReactElement => {
  const { title, artist } = track;
  return (
    <>
      <section className="track">
        <figure className="track-album-cover"></figure>
        <div className="track-info">
          <p className="track-title">{title}</p>
          <p className="track-artist">{artist}</p>
        </div>
      </section>
    </>
  );
};
