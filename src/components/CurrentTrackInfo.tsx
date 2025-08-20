import type { ReactElement } from "react";
import type { Track } from "../types/track";

interface CurrentTrackInfoProps {
  track: Track;
}

export const CurrentTrackInfo = ({
  track,
}: CurrentTrackInfoProps): ReactElement => {
  const { title, artist } = track;
  return (
    <>
      <p className="track-title">{title}</p>
      <p className="track-artist">{artist}</p>
    </>
  );
};
