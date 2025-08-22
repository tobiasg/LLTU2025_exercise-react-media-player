import type { ReactElement } from "react";
import type { Track } from "../types/track";
import { CurrentTrackInfo } from "./CurrentTrackInfo";
import { ProgressBar } from "./ProgressBar";
import { Controls } from "./Controls";

interface CurrentTrackProps {
  track: Track;
  onAddToPlaylist?: () => void;
  onFavoriteToggle?: () => void;
}

export const CurrentTrack = ({
  track,
  onAddToPlaylist,
  onFavoriteToggle,
}: CurrentTrackProps): ReactElement => {
  return (
    <>
      <div className="current-track">
        <figure className="track-album-cover">
          <img src={track.cover} alt="" />
        </figure>
        <CurrentTrackInfo
          track={track}
          onAddToPlaylist={onAddToPlaylist}
          onFavoriteToggle={onFavoriteToggle}
        />
        <ProgressBar track={track} />
        <Controls track={track} />
      </div>
    </>
  );
};
