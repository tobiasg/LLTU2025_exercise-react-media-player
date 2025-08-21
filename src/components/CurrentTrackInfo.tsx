import type { ReactElement } from "react";
import type { Track } from "../types/track";

interface CurrentTrackInfoProps {
  track: Track;
  onAddToPlaylist?: () => void;
  onFavoriteToggle?: () => void;
}

export const CurrentTrackInfo = ({
  track,
  onAddToPlaylist,
  onFavoriteToggle,
}: CurrentTrackInfoProps): ReactElement => {
  const { title, artist } = track;

  const handleAddToPlaylist = () => onAddToPlaylist?.();
  const handleFavoriteToggle = () => onFavoriteToggle?.();

  return (
    <>
      <div className="current-track-info">
        <span
          className="material-symbols-outlined add-to-playlist"
          onClick={handleAddToPlaylist}
        >
          add_circle
        </span>
        <div>
          <p className="track-title">{title}</p>
          <p className="track-artist">{artist}</p>
        </div>
        <span
          className="material-symbols-outlined favorite"
          onClick={handleFavoriteToggle}
        >
          favorite
        </span>
      </div>
    </>
  );
};
